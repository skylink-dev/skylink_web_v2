"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";

export default function SupportVideos() {
  const [activeCategory, setActiveCategory] = useState("Internet");
  const [activeSub, setActiveSub] = useState("Activate IPTV");
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showVolumeControls, setShowVolumeControls] = useState(false);

  const videoRef = useRef(null);
  const progressBarRef = useRef(null);

  const data = {
    Internet: { video: "/assets/video/internet.mp4", subTabs: [] },
    TV: {
      videos: {
        "Activate IPTV": "/assets/video/tv.mp4",
        "Setup IPTV": "/assets/video/tv1.mp4",
      },
      subTabs: ["Activate IPTV", "Setup IPTV"],
    },
    OTT: { video: "/assets/video/ott.mp4", subTabs: [] },
  };

  const activeData = data[activeCategory];
  const currentVideo =
    activeCategory === "TV"
      ? activeData.videos[activeSub || "Activate IPTV"]
      : activeData.video;

  // autoplay
  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.volume = volume;
      v.muted = false;
      v.play().catch(() => {
        v.muted = true;
        v.play();
        setIsMuted(true);
      });
      setIsPlaying(true);
    }
  }, [activeCategory, activeSub]);

  // track progress
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const updateProgress = () =>
      setProgress((v.currentTime / v.duration) * 100 || 0);
    v.addEventListener("timeupdate", updateProgress);
    return () => v.removeEventListener("timeupdate", updateProgress);
  }, [currentVideo]);

  const handlePlayPause = () => {
    const v = videoRef.current;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const handleMuteToggle = () => {
    const v = videoRef.current;
    v.muted = !v.muted;
    setIsMuted(v.muted);
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
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    }
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
          <video
            ref={videoRef}
            src={currentVideo}
            className="w-full h-auto object-cover rounded-2xl"
            autoPlay
            loop
          />

          {/* Seek Bar */}
          <motion.div
            ref={progressBarRef}
            onClick={handleSeek}
            initial={{ bottom: "0px", left: "0%", right: "0%" }}
            animate={{
              bottom: isHovered ? "70px" : "0px",
              left: isHovered ? "1.25rem" : "0%",
              right: isHovered ? "1.25rem" : "0%", // matches px-5 (20px)
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
              {/* Play */}
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

  {/* Style */}
  <style jsx global>{`
    .volume-slider::-webkit-slider-thumb {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #ef4444 !important;
      border: none !important;
      cursor: pointer;
      appearance: none;
      margin-top: -4.5px; /* Adjusted for perfect center */
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
