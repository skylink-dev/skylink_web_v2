"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";

export default function SupportVideos() {
    // For debugging video issues
    const logVideoInfo = (video) => {
        if (!video) return;
        console.log('Video info:', {
            readyState: video.readyState,
            networkState: video.networkState,
            error: video.error,
            src: video.src,
            currentSrc: video.currentSrc,
            paused: video.paused,
        });
    };
  const [activeCategory, setActiveCategory] = useState("Internet");
  const [activeSub, setActiveSub] = useState("Activate IPTV");
  const [isPlaying, setIsPlaying] = useState(false); // start paused
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0);
  const [previousVolume, setPreviousVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showVolumeControls, setShowVolumeControls] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

  const videoRef = useRef(null);
  const progressBarRef = useRef(null);

  const data = {
    Internet: { video: "/newassets/support/videos/internet.mp4", subTabs: [] },
    TV: {
      videos: {
        "Activate IPTV": "/newassets/support/videos/tv.mp4",
        "Setup IPTV": "/newassets/support/videos/tv1.mp4",
      },
      subTabs: ["Activate IPTV", "Setup IPTV"],
    },
    OTT: { video: "/newassets/support/videos/ott.mp4", subTabs: [] },
  };

    // Define these variables first, before using them in useEffect
    const activeData = data[activeCategory];
    const currentVideo =
        activeCategory === "TV"
            ? activeData.videos[activeSub || "Activate IPTV"]
            : activeData.video;

    // Ensure video files exist by checking if any requests 404
    useEffect(() => {
        const checkVideoExists = async (url) => {
            try {
                const response = await fetch(url, {method: 'HEAD'});
                if (!response.ok) {
                    console.error(`Video file not found: ${url}`);
                }
            } catch (error) {
                console.error(`Error checking video: ${url}`, error);
            }
        };

        // Check the current video
        if (currentVideo) {
            checkVideoExists(currentVideo);
        }
    }, [currentVideo]);

  // reset on category/sub change
  useEffect(() => {
    const v = videoRef.current;
    if (v) {
        // Reset video state but keep the video visible
        v.pause();
        v.currentTime = 0;
        setIsPlaying(false);
        v.volume = volume;
        v.muted = true;
        setIsMuted(true);

        // Set the loading state to true initially so video is visible
        // even during loading, and update it when the video is ready
        setIsLoaded(true);

        // Force the video to load
        v.load();

        // Update loading state based on readyState
        const checkLoadState = () => {
            if (v.readyState >= 3) {
                setIsLoaded(true);
            }
        };
        v.addEventListener('loadeddata', checkLoadState);
        v.addEventListener('canplay', checkLoadState);

        return () => {
            v.removeEventListener('loadeddata', checkLoadState);
            v.removeEventListener('canplay', checkLoadState);
        };
    }
  }, [activeCategory, activeSub, volume]);

  // Initial loading check
    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;

        // Log video information for debugging
        logVideoInfo(v);

        // Always show the video, even during loading
        setIsLoaded(true);

        // Manually trigger a load
        v.load();

        // Add listener for when video is ready to play
        const handleReady = () => {
            setIsLoaded(true);
            logVideoInfo(v);
        };

        v.addEventListener('canplay', handleReady);
        return () => v.removeEventListener('canplay', handleReady);
    }, []);

    // Pause video when tab is inactive

    useEffect(() => {
    const handleVisibilityChange = () => {
      const v = videoRef.current;
      if (document.hidden && v && !v.paused) {
        v.pause();
        setIsPlaying(false);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // track progress
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

      // Update progress while playing
      const updateProgress = () =>
          setProgress((v.currentTime / v.duration) * 100 || 0);

      // Handle error while keeping video visible
      const handleError = (e) => {
          console.error('Video error:', e);
          // Don't hide the video even on error
      };

      v.addEventListener("timeupdate", updateProgress);
      v.addEventListener("error", handleError);

      return () => {
          v.removeEventListener("timeupdate", updateProgress);
          v.removeEventListener("error", handleError);
      };
  }, [currentVideo]);

  const handlePlayPause = () => {
    const v = videoRef.current;
    if (!v) return;

    if (v.paused) {
        // Try to play the video
        const attemptPlay = () => {
            v.play()
                .then(() => {
                    setIsPlaying(true);
                    console.log('Video playing successfully');
                })
                .catch(err => {
                    console.error('Error playing video:', err);
                    // Still show the video even if there's an error playing
                    setIsLoaded(true);
                });
        };

        // If video is not ready, set up event listener
        if (v.readyState < 3) {
            v.addEventListener('canplay', function playWhenReady() {
                attemptPlay();
                v.removeEventListener('canplay', playWhenReady);
            }, {once: true});
        } else {
            // Video is ready to play
            attemptPlay();
        }
    } else {
        // Pause the video
        v.pause();
        setIsPlaying(false);
    }
  };

  const handleMuteToggle = () => {
    const v = videoRef.current;
    if (v.muted) {
      v.muted = false;
      const restoreVol = previousVolume > 0 ? previousVolume : 0.5;
      v.volume = restoreVol;
      setVolume(restoreVol);
      setIsMuted(false);
    } else {
      setPreviousVolume(volume);
      v.muted = true;
      setVolume(0);
      setIsMuted(true);
    }
  };

  const handleFullscreen = () => {
    const v = videoRef.current;
    if (v.requestFullscreen) v.requestFullscreen();
  };

  const handleSeek = (e) => {
    const v = videoRef.current;
    const bar = progressBarRef.current;
    if (!v || !bar) return;

    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(clickX / rect.width, 1));
    const newTime = percent * v.duration;

    v.currentTime = newTime;
    setProgress(percent * 100);
  };

  return (
    <section className="bg-[#fff3f4] py-16 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <p className="text-red-600 font-semibold tracking-widest mb-2 uppercase">
          Our Support
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          We Offer Premium <span className="text-red-600">Support</span> For
          Your Connection
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 flex-wrap mb-6">
          {Object.keys(data).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setActiveSub(cat === "TV" ? "Activate IPTV" : "");
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg border text-lg font-medium transition-all ${
                activeCategory === cat
                  ? "bg-red-600 text-white border-red-600 shadow-lg scale-105"
                  : "bg-white border-gray-300 text-gray-700 hover:border-red-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sub Tabs */}
        {activeData.subTabs.length > 0 && (
          <div className="flex justify-center gap-4 flex-wrap mb-8">
            {activeData.subTabs.map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSub(sub)}
                className={`px-6 py-2 rounded-md border text-base transition-all ${
                  activeSub === sub
                    ? "bg-red-600 text-white border-red-600 shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:border-red-500"
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        {/* Video Player */}
        <motion.div
          key={activeCategory + activeSub}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-black"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setShowVolumeControls(false);
          }}
        >
          <div className="relative w-full">
              <video
                  ref={videoRef}
                  src={currentVideo}
                  className="w-full h-auto object-cover rounded-2xl"
                  loop
                  playsInline
                  preload="auto"
              />

              {/* Loading Indicator - Only show when actually loading, not when paused */}
              {!isLoaded && videoRef.current?.networkState === 2 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-2xl">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
                  </div>
              )}
          </div>

          {/* Fallback for browsers having issues */}
            {!currentVideo && (
                <div className="absolute inset-0 bg-black rounded-2xl flex items-center justify-center text-white">
                    <p>Video could not be loaded</p>
                </div>
            )}

            {/* Center Play Button Overlay - More transparent, always show when paused */}
            {!isPlaying && (
                <div
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-300">
                    <button
                        onClick={handlePlayPause}
                        className="w-20 h-20 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-500 transition-all shadow-lg"
              >
                <Play size={36} className="text-white ml-1" />
              </button>
            </div>
          )}

          {/* Seek Bar */}
          <motion.div
            ref={progressBarRef}
            onClick={handleSeek}
            initial={{ bottom: "0px", left: "0%", right: "0%" }}
            animate={{
              bottom: isHovered ? "70px" : "0px",
              left: isHovered ? "1.25rem" : "0%",
              right: isHovered ? "1.25rem" : "0%",
            }}
            transition={{ duration: 0.3 }}
            className="absolute h-2 bg-gray-800/50 cursor-pointer group rounded-full overflow-hidden"
          >
            <div
              className="h-2 bg-red-500 transition-all duration-200 group-hover:bg-red-400"
              style={{ width: `${progress}%` }}
            ></div>
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-4 left-0 right-0 flex justify-between items-center px-5"
          >
            {/* Left Controls */}
            <div className="flex items-center gap-3">
              {/* Play/Pause */}
              <div className="bg-black/50 backdrop-blur-md w-9 h-9 flex items-center justify-center rounded-full border border-white/10">
                <button
                  onClick={handlePlayPause}
                  className="text-white hover:text-red-400 transition-all"
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                </button>
              </div>

              {/* Volume */}
              <motion.div
                onMouseEnter={() => setShowVolumeControls(true)}
                onMouseLeave={() => setShowVolumeControls(false)}
                animate={{
                  width: showVolumeControls ? 130 : 36,
                  paddingLeft: showVolumeControls ? 6 : 0,
                  paddingRight: showVolumeControls ? 6 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="bg-black/50 backdrop-blur-md h-9 flex items-center justify-between rounded-full border border-white/10 overflow-hidden"
              >
                {/* Volume Icon */}
                <button
                  onClick={handleMuteToggle}
                  className="text-white hover:text-red-400 transition-all flex items-center justify-center w-9 h-9 rounded-full"
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>

                {/* Volume Slider */}
                {showVolumeControls && (
                  <motion.input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={volume}
                    onChange={(e) => {
                      const newVol = parseFloat(e.target.value);
                      setVolume(newVol);
                      videoRef.current.volume = newVol;
                      if (newVol > 0) {
                        videoRef.current.muted = false;
                        setIsMuted(false);
                      }
                    }}
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 80, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="appearance-none h-1.5 rounded-full cursor-pointer volume-slider mx-auto"
                    style={{
                      background: `linear-gradient(to right, #ef4444 ${volume * 100}%, #4b5563 ${volume * 100}%)`,
                    }}
                  />
                )}

                {/* Slider Styles */}
                <style jsx global>{`
                  .volume-slider::-webkit-slider-thumb {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: #ef4444 !important;
                    border: none !important;
                    cursor: pointer;
                    appearance: none;
                    margin-top: -4.7px;
                    position: relative;
                  }

                  .volume-slider::-moz-range-thumb,
                  .volume-slider::-ms-thumb {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: #ef4444 !important;
                    border: none !important;
                    cursor: pointer;
                    position: relative;
                  }

                  .volume-slider::-webkit-slider-runnable-track {
                    height: 4px;
                    border-radius: 4px;
                    background: transparent !important;
                  }
                `}</style>
              </motion.div>
            </div>

            {/* Fullscreen */}
            <div className="bg-black/50 backdrop-blur-md w-9 h-9 flex items-center justify-center rounded-full border border-white/10">
              <button
                onClick={handleFullscreen}
                className="text-white hover:text-red-400 transition-all"
              >
                <Maximize2 size={18} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
