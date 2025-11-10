import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const blogData = [
  {
    imgSrc: "/assets/blogs-01.png",
    title: "Skylink Fiber Broadband",
    subtitle: "Speed that connects all of India",
    description: `
<h2>Speed That Connects All of India</h2>

<p>
  From Chennai’s buzzing IT corridors to the fast-paced streets of Delhi, <strong>Skylink Fiber Broadband</strong> delivers lightning-fast internet with speeds up to <strong>1 Gbps</strong>. Whether you're streaming in 4K, attending important Zoom calls, or dominating online games—our network provides a seamless, lag-free experience.
</p>

<h2>Powering India’s Digital Lifestyle</h2>

<p>
  Designed to meet the growing demands of digital homes, Skylink Fiber brings fiber-optic connectivity to households across India. With scalable speed plans, zero data caps, and ultra-low latency, we empower you to do more—faster and smarter.
</p>

<h2>Smart Cities, Smarter Connections</h2>

<p>
  Our robust infrastructure spans metros, tier-2 cities, and emerging smart towns. With strategic deployment of fiber and local hubs, Skylink ensures that even the remotest homes get the same reliable performance as those in major urban centers.
</p>

<h2>Streaming, Gaming & Work-From-Home—Redefined</h2>

<p>
  Say goodbye to buffering, lag spikes, and interrupted meetings. Stream Ultra HD movies, video call in crystal-clear quality, download large files instantly, or connect multiple devices—Skylink Fiber is built for multitasking across all platforms.
</p>

<h2>High-Speed, Low Latency, No Compromise</h2>

<p>
  Engineered for performance, our fiber network delivers consistent speeds, minimal ping, and superior uptime. Whether you're a content creator, remote worker, student, or gamer—Skylink adapts to your high-speed lifestyle.
</p>

<h2>Reliable Connectivity, Wherever You Are</h2>

<p>
  From bustling cities to quiet towns, Skylink ensures that every household stays connected with fast, stable, and future-ready internet. We're not just a provider—we're a part of India's digital revolution.
</p>`,
    normaltext: "",
    legalText: "Speed varies by location and network conditions.",
    link: "/speed-that-connects-all-of-india",
  },
  {
    imgSrc: "/assets/blogs-02.png",
    title: "Skylink OTT Universe",
    subtitle: "All your favorite shows, South to North",
    description: `<h2>One Subscription. Infinite Entertainment.</h2>

<p>
  Say goodbye to juggling multiple streaming services. With <strong>Skylink OTT Universe</strong>, you get unified access to India’s most popular OTT platforms—all under one roof. Stream everything from local blockbusters to global originals with a single, seamless subscription.
</p>

<h2>South India’s Favorites, Now at Your Fingertips</h2>

<p>
  Watch legendary serials, reality shows, and movies from <strong>Sun TV</strong>, <strong>Vijay TV</strong>, <strong>Zee Tamil</strong>, and more. Whether it's emotional family dramas or iconic Tamil and Telugu hits, Skylink brings your cultural favorites right to your screen—anytime, anywhere.
</p>

<h2>North Indian Blockbusters Without Boundaries</h2>

<p>
  Experience chart-topping shows and latest Hindi series from <strong>Zee5</strong>, <strong>Sony LIV</strong>, <strong>Colors</strong>, and <strong>ALT Balaji</strong>. From gripping thrillers to heartfelt romances, dive into content that speaks your language and suits your mood.
</p>

<h2>Entertainment on Every Screen</h2>

<p>
  Whether you’re binge-watching on a smart TV, catching up on episodes on your tablet, or streaming live on your phone—Skylink ensures a smooth, buffer-free viewing experience. Our platform is optimized for all devices and internet speeds.
</p>

<h2>Multi-Genre, Multi-Language, Multi-Device</h2>

<p>
  Discover content in <strong>Tamil, Telugu, Malayalam, Kannada, Hindi, Punjabi, Bengali</strong> and more. Explore a variety of genres like drama, comedy, crime, lifestyle, devotional, and kids programming—all organized and curated for your preferences.
</p>

<h2>Parental Control & Personalized Profiles</h2>

<p>
  With smart profiles and content control features, Skylink lets families create a safe and personalized OTT space. Easily switch between adult and kids' profiles with age-appropriate recommendations.
</p>`,
    normaltext: "",
    legalText: "Content and app availability may vary by region.",
    link: "/all-your-favorite-shows-south-to-north",
  },
  {
    imgSrc: "/assets/blogs-03.png",
    title: "Skylink IPTV",
    subtitle: "900+ Live Channels in HD, from Punjab to Tamil Nadu",
    description: `
<h2>Live TV, Reimagined for India</h2>
<p>
  With <strong>Skylink IPTV</strong>, access over <strong>900+ HD live channels</strong> across languages—Tamil, Telugu, Hindi, Punjabi, Bengali, and more. Enjoy a premium cable-like experience directly on your devices without a traditional set-top box.
</p>

<h2>HD Quality Without Compromise</h2>
<p>
  Whether it's watching live cricket or catching your favorite serials, enjoy crystal-clear visuals and immersive audio that elevate every moment of your TV time.
</p>

<h2>Pause, Rewind & Catch-Up TV</h2>
<p>
  Go beyond live viewing with smart features like pause, rewind, and 7-day catch-up. Never miss a scene, even if life interrupts your showtime.
</p>

<h2>Watch Anywhere, Anytime</h2>
<p>
  Enjoy seamless streaming on Smart TVs, smartphones, tablets, or Fire TV. One account covers all your devices at home.
</p>

<h2>No Setup Box, No Hassle</h2>
<p>
  Skylink IPTV works without physical setup boxes, making it sleek, modern, and clutter-free—ideal for today’s digital homes.
</p>

<p><em>*Channel lineup varies by area. Compatible device and internet needed.</em></p>
`,
    normaltext: "",
    legalText:
      "Channel lineup varies by area. Compatible device and internet needed.",
    link: "/live-channels-in-hd-from-punjab-to-tamil-nadu",
  },
  {
    imgSrc: "/assets/blogs-04.png",
    title: "HD TV, No Setup Boxes",
    subtitle: "Streamlined TV for every region",
    description: `
<h2>TV, Reinvented for Simplicity</h2>
<p>
  Say goodbye to old-fashioned set-top boxes. With Skylink, enjoy over <strong>300+ HD channels</strong> directly on your Smart TV or Fire TV—no extra hardware required.
</p>

<h2>Plug & Play Simplicity</h2>
<p>
  Get started instantly without any complicated installation. Just log in and stream—your TV experience is ready in minutes.
</p>

<h2>South & North Indian Favorites</h2>
<p>
  From Sun TV and Vijay TV to Sony, Colors, and Zee—Skylink offers the best of regional and national channels in one place.
</p>

<h2>Crystal Clear HD Streaming</h2>
<p>
  Enjoy rich colors, sharp clarity, and smooth playback on every screen. Whether you're watching news or a blockbuster, the experience feels premium.
</p>

<h2>Free Installation for New Customers</h2>
<p>
  First-time users get complimentary setup assistance to ensure your connection is perfect from day one.
</p>

<p><em>*Free installation applies to new customers. Smart TV or compatible device required.</em></p>
`,
    normaltext: "",
    legalText:
      "Free installation applies to new customers. Smart TV or compatible device required.",
    link: "/streamlined-tv-for-every-region",
  },
  {
    imgSrc: "/assets/blogs-06.png",
    title: "Entertainment Bundles Tailored for India",
    subtitle: "IPTV, OTT & Broadband in one plan",
    description: `
<h2>The Power of 3 in One</h2>
<p>
  Introducing India’s most integrated home plan—<strong>Skylink Bundles</strong> combine high-speed broadband, IPTV, and OTT apps into a single powerful subscription.
</p>

<h2>Designed for Indian Homes</h2>
<p>
  Whether you’re in Coimbatore or Chandigarh, our plans are built to match your viewing, browsing, and family needs with language and regional flexibility.
</p>

<h2>Premium OTT Access</h2>
<p>
  Stream content from leading platforms like Zee5, SonyLIV, and SunNXT. One bundle unlocks entertainment for every age and taste.
</p>

<h2>Blazing Fast Internet</h2>
<p>
  Stay connected with fiber speeds up to 1 Gbps, perfect for 4K streaming, gaming, and work-from-home setups.
</p>

<h2>Smart Pricing, Smarter Value</h2>
<p>
  Save more by combining services. Get the best of TV, internet, and OTT without managing multiple bills.
</p>

<p><em>*Bundle content and availability vary by state.</em></p>
`,
    normaltext: "",
    legalText: "Bundle content and availability vary by state.",
    link: "/iptv-ott-broadband-in-one-plan",
  },
  {
    imgSrc: "/assets/blogs-07.png",
    title: "Next-Gen Wi-Fi Everywhere",
    subtitle: "Strong signals from North to South",
    description: `
<h2>Signal That Travels Far</h2>
<p>
  Our new-age <strong>Wi-Fi 6 routers</strong> ensure strong, reliable coverage in every corner of your home—from large Delhi villas to compact Chennai apartments.
</p>

<h2>Faster Than Ever</h2>
<p>
  Enjoy dramatically faster speeds, better stability, and seamless streaming even with multiple devices connected.
</p>

<h2>Perfect for Work & Play</h2>
<p>
  Skylink Wi-Fi supports everything—remote work, online classes, 4K streaming, smart homes, and gaming with minimal latency.
</p>

<h2>Plug, Connect, Enjoy</h2>
<p>
  Easy setup ensures you're online in no time, without technical headaches. Just plug it in and get going.
</p>

<h2>Smart Mesh Ready</h2>
<p>
  Expand coverage with optional mesh units for complete wall-to-wall connectivity, no matter the layout.
</p>

<p><em>*Router availability depends on plan.</em></p>
`,
    normaltext: "",
    legalText: "Router availability depends on plan.",
    link: "/strong-signals-from-north-to-south",
  },
  {
    imgSrc: "/assets/blogs-08.png",
    title: "Flexible Plans That Grow With You",
    subtitle: "Upgrade anytime, hassle-free",
    description: `
<h2>Change as Life Changes</h2>
<p>
  Whether you need more speed, more channels, or more OTT apps—<strong>Skylink Flexible Plans</strong> evolve with you. Upgrade anytime, without penalties or paperwork.
</p>

<h2>No Hidden Charges</h2>
<p>
  Transparent pricing and no lock-ins mean you control your plan. Switch up or down based on your monthly needs.
</p>

<h2>Ideal for Families & Freelancers</h2>
<p>
  From home offices to movie marathons, Skylink adapts to dynamic lifestyles across Tamil Nadu, Punjab, and beyond.
</p>

<h2>Smart Recommendations</h2>
<p>
  Our system can suggest better plans as your usage changes—keeping you always optimized for performance and value.
</p>

<h2>Simple Upgrades in Seconds</h2>
<p>
  Upgrade from your app or portal in just a few clicks. No calls. No waiting. No technician visits needed.
</p>

<p><em>*Upgrade eligibility varies by plan.</em></p>
`,
    normaltext: "",
    legalText: "Upgrade eligibility varies by plan.",
    link: "/upgrade-anytime-hassle-free",
  },
  {
    imgSrc: "/assets/blogs-05.png",
    title: "Parental Controls for Safe Surfing",
    subtitle: "Protect your family across India",
    description: `
<h2>Safety First, Always</h2>
<p>
  Skylink's intuitive parental controls help you monitor your family’s online activity with ease. From Hyderabad to Jaipur, take full control over screen time, web content, and app access.
</p>

<h2>Smart Filters for All Ages</h2>
<p>
  Customize restrictions based on age, subjects, or categories. Keep kids safe from adult content while promoting educational resources.
</p>

<h2>Time-Based Access Schedules</h2>
<p>
  Define online hours and set bedtime cutoffs—so children stay balanced between study, play, and rest.
</p>

<h2>Remote Management Made Easy</h2>
<p>
  Manage all settings from your phone or laptop. Adjust access on the go, even if you're miles away.
</p>

<h2>Better Digital Habits</h2>
<p>
  Encourage healthy online behavior with insightful usage reports and gentle screen time nudges.
</p>

<p><em>*Supported on select routers.</em></p>
`,
    normaltext: "",
    legalText: "Supported on select routers.",
    link: "/protect-your-family-across-india",
  },
  {
    imgSrc: "/assets/blogs-11.png",
    title: "Smart IoT for Every Indian Home",
    subtitle: "Connected living from coast to capital",
    description: `
<h2>Smarter Living Starts Here</h2>
<p>
  Automate your home with Skylink-compatible IoT devices. From Kerala’s calm backwaters to the buzz of Delhi, experience connected comfort and control.
</p>

<h2>Voice and App Control</h2>
<p>
  Manage lights, fans, appliances, and security with your voice or smartphone—convenient, hands-free living.
</p>

<h2>Energy Efficient Automation</h2>
<p>
  Save power with scheduled operations, auto shutoff, and real-time consumption tracking.
</p>

<h2>Easy Setup and Integration</h2>
<p>
  Our IoT solutions work seamlessly with popular platforms like Google Home and Alexa.
</p>

<h2>Peace of Mind, Nationwide</h2>
<p>
  Whether you live in a city apartment or a countryside villa, Skylink IoT is built for reliable performance across all regions.
</p>

<p><em>*Device compatibility may vary.</em></p>
`,
    normaltext: "",
    legalText: "Device compatibility may vary.",
    link: "/connected-living-from-coast-to-capital",
  },
  {
    imgSrc: "/assets/blogs-10.png",
    title: "Cloud Backup Made Simple",
    subtitle: "Secure your data, no matter where you are",
    description: `
<h2>Never Lose a File Again</h2>
<p>
  Skylink's encrypted cloud backup keeps your memories and files safe. Automatically sync photos, videos, and documents across all devices.
</p>

<h2>Seamless Auto-Sync</h2>
<p>
  Set it and forget it—Skylink continuously updates your cloud storage without interrupting your workflow.
</p>

<h2>Bank-Grade Security</h2>
<p>
  All data is encrypted end-to-end, ensuring your content is safe from unauthorized access or leaks.
</p>

<h2>Access Anywhere, Anytime</h2>
<p>
  Whether you’re in Chennai or Chandigarh, retrieve and manage files from any device, instantly.
</p>

<h2>Flexible Plans</h2>
<p>
  Choose the right plan for your storage needs—from basic to premium tiers tailored to home and business users.
</p>

<p><em>*Storage limits and pricing vary by plan.</em></p>
`,
    normaltext: "",
    legalText: "Storage limits and pricing vary by plan.",
    link: "/",
  },
  {
    imgSrc: "/assets/fibernet-image.jpg",
    title: "Explainer",
    subtitle: "What’s fiber internet?",
    description: `
<h2>What is Fiber Internet?</h2>
<p>
  Fiber internet is a high-speed broadband connection that uses fiber-optic cables capable of delivering data at nearly the speed of light. It’s significantly faster and more reliable than traditional copper or DSL connections.
</p>

<h2>Why Fiber Matters</h2>
<p>
  With the rise of streaming, remote work, video conferencing, and online gaming, a strong internet connection is no longer optional—it’s essential. Fiber meets that need.
</p>

<h2>Speed and Stability</h2>
<p>
  Enjoy blazing fast uploads and downloads with ultra-low latency. Whether you're in a video meeting or binge-watching a 4K series, fiber internet ensures smooth, uninterrupted connectivity.
</p>

<h2>Future-Proof Technology</h2>
<p>
  Fiber networks are designed for scalability. As your bandwidth needs grow, fiber can easily keep up without requiring significant infrastructure upgrades.
</p>

<h2>Better for Smart Homes</h2>
<p>
  Connect all your smart devices—TVs, cameras, speakers, lights—without worrying about lag or bandwidth drops.
</p>
`,
    normaltext: "",
    legalText: "",
    link: "/whats-fiber-internet",
  },
  {
    imgSrc: "/assets/skyplaynextup.jpg",
    title: "Learn more",
    subtitle: "Skylink Next Up AnytimeSM",
    description: `
<h2>Next Up: Fiber Simplicity</h2>
<p>
  Whether you're switching ISPs or moving into a new home, <strong>Skylink Next Up AnytimeSM</strong> makes getting fiber internet installed a breeze.
</p>

<h2>Zero Waiting, Maximum Convenience</h2>
<p>
  Schedule your installation anytime. We work around your schedule to bring the internet experience you deserve.
</p>

<h2>Designed for Every Home</h2>
<p>
  Our plans and hardware are tailored for apartments, villas, and even multi-floor homes. No mess, no stress.
</p>

<h2>Track Installation Progress</h2>
<p>
  Stay informed through real-time updates from the Skylink app—from technician dispatch to setup completion.
</p>

<h2>Be Connected Instantly</h2>
<p>
  Once installed, your home is ready for streaming, gaming, video calls, and smart living—all powered by fiber.
</p>
`,
    normaltext: "",
    legalText: "",
    link: "/skyplay-next-up-anytimesm",
  },
  {
    imgSrc: "/assets/customer-and-industry reviews.jpg",
    title: "Learn more",
    subtitle: "Customer and industry reviews",
    description: `
<h2>Voices That Matter</h2>
<p>
  Read real stories from Skylink users who’ve experienced a digital transformation with our fiber, IPTV, and OTT services.
</p>

<h2>From Every Corner of India</h2>
<p>
  Our network touches lives across Chennai, Delhi, Coimbatore, Jaipur, and beyond. Hear from families, freelancers, gamers, and businesses alike.
</p>

<h2>Critically Acclaimed</h2>
<p>
  Trusted by industry leaders and recognized in tech publications, Skylink is setting new standards in connectivity.
</p>

<h2>Built on Feedback</h2>
<p>
  We constantly refine our service using direct customer input, ensuring you're always at the center of innovation.
</p>

<h2>Transparency That Builds Trust</h2>
<p>
  We openly share user testimonials, review ratings, and response times—so you know exactly what to expect.
</p>
`,
    normaltext: "",
    legalText: "",
    link: "/customer-and-industry-reviews",
  },
  {
    imgSrc: "/assets/helpful-and-support.jpg",
    title: "24/7 Expert Support",
    subtitle: "Helpful resources",
    description: `
<h2>Always-On Support</h2>
<p>
  Access expert guidance whenever you need it. From installation to advanced troubleshooting, our support is available 24/7.
</p>

<h2>Self-Help Resources</h2>
<p>
  Explore step-by-step tutorials, FAQs, and video guides to solve common queries on your own terms.
</p>

<h2>Connect Instantly</h2>
<p>
  Use live chat, email, or phone—reach us in the way that works best for you. Our agents are trained and ready.
</p>

<h2>Knowledge Base, Always Updated</h2>
<p>
  Our help center grows as you grow. We constantly update content based on real customer issues.
</p>

<h2>Local Language Support</h2>
<p>
  Get assistance in your regional language—because great support should feel personal.
</p>
`,
    normaltext: "",
    legalText: "",
    link: "/helpful-resources",
  },
  {
    imgSrc: "/newassets/tv/iptv-skylink.jpg",
    title: "Explainer",
    subtitle: "What is IPTV?",
    description: `
<h2>IPTV in a Nutshell</h2>
<p>
  <strong>Internet Protocol Television (IPTV)</strong> delivers television content over the internet. No satellite dishes or cable lines—just a broadband connection and a compatible device.
</p>

<h2>Live + On-Demand</h2>
<p>
  IPTV combines live TV, catch-up services, and streaming into a single platform. Watch what you want, when you want.
</p>

<h2>More Channels, Less Hardware</h2>
<p>
  From regional to global, access hundreds of channels without bulky setup boxes or coaxial wires.
</p>

<h2>Smart Device Friendly</h2>
<p>
  Stream on Smart TVs, smartphones, tablets, or PCs. IPTV is designed for the screens you already own.
</p>

<h2>The Future of Entertainment</h2>
<p>
  IPTV is flexible, scalable, and ready for 4K and beyond—making it the next big step in digital TV evolution.
</p>
`,
    normaltext: "",
    legalText: "",
    link: "/what-is-iptv",
  },
  {
    imgSrc: "/assets/what-is-iptv-in-skyplay.jpg",
    title: "Get started",
    subtitle: "Simple IPTV Setup",
    description: `<h2>Easy IPTV Installation</h2>
<p>
  Setting up Skylink IPTV is a breeze. Whether you're a first-time user or a seasoned streamer, our guided setup process ensures you're ready in minutes. No need for complex configurations—just follow a few simple steps and enjoy TV like never before.
</p>

<h2>Works on All Major Devices</h2>
<p>
  Stream live channels and on-demand content on Smart TVs, Android phones, tablets, laptops, and more. The Skylink IPTV app is optimized for performance across all devices, making your viewing experience smooth and hassle-free.
</p>

<h2>No Setup Box Required</h2>
<p>
  Skylink IPTV eliminates the need for bulky setup boxes. Everything works via the internet, giving you a sleek and modern entertainment setup. It’s perfect for households that want less clutter and more functionality.
</p>

<h2>Switch Devices Anytime</h2>
<p>
  With one Skylink account, you can switch between devices effortlessly. Start watching a movie on your TV and finish it on your mobile. Your preferences and watch history follow you everywhere.
</p>

<h2>Step-by-Step App Guide</h2>
<p>
  Not tech-savvy? No worries. Our app includes a built-in step-by-step guide to help you get started. You'll be watching your favorite shows before you even finish your coffee.
</p>

<h2>Seamless Streaming Experience</h2>
<p>
  Once setup is complete, the experience is lightning fast and incredibly intuitive. With minimal buffering, intuitive navigation, and a user-friendly interface, IPTV setup is just the beginning of your upgraded viewing experience.
</p>
`,
    normaltext: "",
    legalText: "simple-iptv-setup",
    link: "/",
  },
  {
    imgSrc: "/assets/skyplay-IPTV-customer-review-and-rating.jpg",
    title: "What others say",
    subtitle: "Customer reviews & ratings",
    description: `<h2>Rated by Real Users</h2>
<p>
  Skylink IPTV users across India have shared their genuine feedback on our services. With high satisfaction scores and consistent praise, our IPTV and broadband solutions are rated among the best in the country.
</p>

<h2>Across All Regions</h2>
<p>
  From Chennai and Coimbatore to Delhi and Jaipur, customers love our performance and reliability. Whether it's a metro city or a rural area, the quality remains consistent and dependable.
</p>

<h2>Backed by Industry Experts</h2>
<p>
  Our technology and user experience have been reviewed and applauded by major industry publications and broadband reviewers. Experts agree—Skylink is paving the future of IPTV in India.
</p>

<h2>Verified Testimonials</h2>
<p>
  Browse through video and text testimonials from real customers. They share insights about speed, reliability, support, and the overall convenience of using Skylink services for their everyday entertainment.
</p>

<h2>Numbers That Build Trust</h2>
<p>
  With a 4.8+ star average rating across Google, Play Store, and partner platforms, Skylink's reputation is built on consistently delivering what we promise. Transparency is our strength.
</p>

<h2>Why It Matters</h2>
<p>
  In an era of digital overload, honest customer feedback helps new users make informed decisions. We proudly highlight both praise and constructive suggestions to keep growing with you.
</p>`,
    normaltext: "",
    legalText: "",
    link: "/customer-reviews-ratings",
  },
  {
    imgSrc: "/assets/helpful-and-support.jpg",
    title: "",
    subtitle: "Help & Support",
    description: `
<h2>Need Help? We’ve Got You</h2>
<p>
  Our support system is designed with you in mind. Whether you’re setting up IPTV, facing login issues, or need advanced troubleshooting, we provide fast, effective solutions that get you back on track.
</p>

<h2>All-in-One Help Center</h2>
<p>
  The Skylink Help Center offers categorized FAQs, tutorial videos, quick tips, and comprehensive walkthroughs—updated regularly for accuracy and ease of use.
</p>

<h2>Live Support, Always Ready</h2>
<p>
  Our customer service team is available 24/7 via live chat, phone calls, and email. Trained agents provide expert assistance in real-time, no matter where you are.
</p>

<h2>Track Support Requests</h2>
<p>
  Easily monitor the progress of your support tickets or requests from the Skylink dashboard. Get notified when issues are resolved or if more info is needed.
</p>

<h2>Multi-Language Support</h2>
<p>
  We speak your language—literally. Access help in your preferred regional language for more personalized and clear communication.
</p>

<h2>Learn as You Go</h2>
<p>
  Our support system empowers you. Gain knowledge while solving issues so you’re more confident using Skylink services in the future.
</p>
`,
    normaltext: "",
    legalText: "",
    link: "/help-support",
  },
  {
    imgSrc: "/assets/skyplay-ott-blog-1.jpg",
    title: "Skylink OTT Hub",
    subtitle: "All-in-One Streaming Platform",
    description: `
<h2>Your Entertainment Hub</h2>
<p>
  Enjoy seamless access to Zee5, Disney+, Prime Video, aha, and more—all with a single Skylink subscription. Everything you love is now bundled into one powerful OTT solution.
</p>

<h2>No App Switching</h2>
<p>
  Say goodbye to jumping between apps. Our unified platform delivers content from multiple providers without requiring individual logins or installations.
</p>

<h2>Easy to Navigate</h2>
<p>
  Discover content by genre, mood, language, or trending titles. Our smart interface is designed for simplicity, helping you find the perfect show or movie in seconds.
</p>

<h2>Stream from One Place</h2>
<p>
  Access your entire OTT world under one roof—no matter where you are or what device you're using. It's entertainment made effortless.
</p>

<h2>Customizable Dashboard</h2>
<p>
  Create watchlists, favorite channels, and personalized shortcuts. Your dashboard adapts to your preferences over time.
</p>

<h2>One Bill, One Login</h2>
<p>
  Manage all subscriptions with a single payment and a single login. No more chasing multiple bills or renewal reminders.
</p>
`,
    normaltext: "",
    legalText: "",
    link: "/all-in-one-streaming-platform",
  },
  {
    imgSrc: "/assets/skyplay-ott-blog-2.jpg",
    title: "Premium Streaming Experience",
    subtitle: "HD, 4K, and Buffer-Free Playback",
    description: `
<h2>Streaming Without Limits</h2>
<p>
  With Skylink, enjoy uninterrupted viewing with HD and 4K streaming on all your devices. Our infrastructure is designed to eliminate buffering, even during peak hours.
</p>

<h2>Adaptive Streaming Technology</h2>
<p>
  Our smart playback adjusts video quality in real time based on your internet speed, ensuring the best possible experience under any conditions.
</p>

<h2>Zero Lag, Zero Delay</h2>
<p>
  From sports to blockbusters, you get low-latency streaming across mobile, desktop, and smart TVs. Enjoy every detail, instantly.
</p>

<h2>Multi-Device Compatibility</h2>
<p>
  Stream on up to 5 devices simultaneously. Perfect for families or roommates who want to watch different shows at the same time.
</p>

<h2>Optimized for Smart TVs</h2>
<p>
  Get native performance on Android TVs, Firesticks, and smart platforms. No need for screen mirroring or casting apps.
</p>

<h2>Beyond Just Video</h2>
<p>
  Experience Dolby-quality sound, fast app transitions, and user-first controls that enhance your binge-watching marathons.
</p>
`,
    normaltext: "",
    legalText: "",
    link: "/hd-and-buffer-free-playback",
  },
  {
    imgSrc: "/assets/skyplay-ott-blog-3.jpg",
    title: "Curated Content Packs",
    subtitle: "Tailored for Every Taste",
    description: `
<h2>Entertainment That Speaks to You</h2>
<p>
  Whether you're into Tamil dramas, Bollywood thrillers, Korean series, or global sports—Skylink has a content pack made for you. No filler, just favorites.
</p>

<h2>Tailored by Genre</h2>
<p>
  Choose packs based on genres like Action, Romance, Comedy, or Devotional. We’ve sorted the content so you spend less time searching and more time watching.
</p>

<h2>Language-Specific Bundles</h2>
<p>
  Explore regional packs in Tamil, Telugu, Hindi, Malayalam, Kannada, and more. Skylink OTT celebrates India’s linguistic diversity.
</p>

<h2>Kids and Family Packs</h2>
<p>
  Enjoy content the whole family can trust—from cartoons to animated movies to edutainment channels—all in one secure environment.
</p>

<h2>Affordable Choices</h2>
<p>
  Buy only what you watch. Our curated packs keep your budget and viewing habits in mind, so you never overpay for content you don’t need.
</p>

<h2>Easy to Upgrade or Switch</h2>
<p>
  Want to try something new? Switch between content packs anytime with a single click inside your Skylink dashboard.
</p>
`,
    normaltext: "",
    legalText: "",
    link: "/tailored-for-every-taste",
  },
  {
    imgSrc: "/assets/skyplay-ott-blog-04.jpg",
    title: "One Login, All Access",
    subtitle: "Unified Control for Multiple Platforms",
    description: `
<h2>One Login, All OTT Access</h2>
<p>
  With Skylink, you no longer need to remember multiple usernames and passwords. Access your favorite OTT platforms like Disney+, Zee5, aha, Prime Video, and more using a single login.
</p>

<h2>Simplified Dashboard</h2>
<p>
  All your subscriptions are accessible through one centralized dashboard. Manage renewals, preferences, and devices effortlessly from a single place.
</p>

<h2>No More Password Juggling</h2>
<p>
  Skylink eliminates the stress of remembering or resetting credentials. One secure login is all it takes to enjoy unlimited entertainment.
</p>

<h2>Secure and Private</h2>
<p>
  Your data is encrypted, and access is protected using two-factor authentication. Your viewing and personal preferences stay private.
</p>

<h2>Unified Billing</h2>
<p>
  Say goodbye to separate monthly invoices. With Skylink, you get a unified bill for all OTT platforms, making budgeting and tracking easy.
</p>

<h2>Family Profiles Under One Login</h2>
<p>
  Create individual user profiles within a single account. Everyone in your household gets their personalized experience without interfering with each other’s preferences.
</p>
`,
    normaltext: "",
    legalText: "",
    link: "/unified-control-for-multiple-platforms",
  },
  {
    imgSrc: "/assets/skyplay-ott-blog-05.jpg",
    title: "Smart Recommendations",
    subtitle: "Powered by AI & Viewing Habits",
    description: `
<h2>Entertainment That Understands You</h2>
<p>
  Skylink’s AI learns your habits, preferences, and viewing patterns to serve up personalized suggestions. Whether you’re a late-night binge-watcher or a weekend movie buff, we’ve got your vibe.
</p>

<h2>AI That Evolves With You</h2>
<p>
  The more you watch, the smarter the engine becomes. It constantly evolves to understand your changing interests across genres, languages, and moods.
</p>

<h2>Cross-Platform Suggestions</h2>
<p>
  Our algorithm curates picks from multiple OTT platforms, recommending the best from Zee5, aha, Disney+, and more—all in one feed.
</p>

<h2>Skip the Scroll</h2>
<p>
  Instead of endlessly scrolling, you get content lined up based on your history, likes, and trending picks relevant to you.
</p>

<h2>Smart Search Filters</h2>
<p>
  Filter recommendations by time availability (“Under 30 mins”), genre, actors, or even emotion—so you get exactly what fits your moment.
</p>

<h2>Better with Every Click</h2>
<p>
  Each interaction helps improve your future suggestions. Whether you skip a show or rate it five stars, our system takes note to fine-tune your next picks.
</p>
`,
    normaltext: "",
    legalText: "",
    link: "/powered-by-ai-viewing-habits",
  },
  {
    imgSrc: "/assets/skyplay-ott-blog-06.jpg",
    title: "Watch Anywhere, Anytime",
    subtitle: "Multi-Device OTT Streaming",
    description: `
<h2>Stream Without Limits</h2>
<p>
  Whether you’re on a commute, at home, or traveling, Skylink OTT lets you take entertainment with you. Our platform supports streaming across phones, tablets, laptops, and smart TVs.
</p>

<h2>One Account, Multiple Devices</h2>
<p>
  Use up to 5 devices simultaneously with a single subscription. Perfect for families or shared households with diverse viewing preferences.
</p>

<h2>Auto-Sync Playback</h2>
<p>
  Start watching a movie on your TV, continue on your phone, and finish on your laptop—without losing your place.
</p>

<h2>Offline Viewing Supported</h2>
<p>
  Download episodes and movies in advance to watch without internet. Ideal for flights, remote locations, or data-conscious users.
</p>

<h2>Device-Optimized Streaming</h2>
<p>
  The platform intelligently adjusts resolution, bandwidth usage, and playback settings for each device type to give you the best experience.
</p>

<h2>Seamless Cross-Platform Experience</h2>
<p>
  Whether Android or iOS, Windows or macOS, Firestick or Chromecast—Skylink delivers a consistent and smooth streaming experience on every platform.
</p>
`,
    normaltext: "",
    legalText: "",
    link: "/multi-device-ott-streaming",
  },
  {
    imgSrc: "/newassets/tv/iptv-skylink.jpg",
    title: "Boost Your Business",
    subtitle: "End-to-End Marketing Support",
    description: `
<h2>Accelerate Growth With Skylink</h2>
<p>
  Skylink helps internet resellers, partners, and ISPs thrive with comprehensive marketing support—from branding materials to local ad campaigns.
</p>

<h2>Pre-Built Creative Assets</h2>
<p>
  Get access to ready-to-use banners, posters, brochures, and social creatives tailored to promote your broadband and IPTV services effectively.
</p>

<h2>Localized Campaigns</h2>
<p>
  We help you run regionally-relevant promotions in your preferred language, increasing engagement and conversions in your local market.
</p>

<h2>Performance-Backed Marketing</h2>
<p>
  Our strategies are not just creative—they're data-driven. We analyze what works and scale campaigns based on real results.
</p>

<h2>Launch-Ready Kits</h2>
<p>
  Partners get complete onboarding kits with customizable templates, promo videos, and guidelines—making your go-to-market time faster.
</p>

<h2>Expert Consultation</h2>
<p>
  Our digital and branding experts assist you in choosing the right campaigns and messaging, ensuring your promotions align with customer demand.
</p>
`,
    link: "/end-to-end-marketing-support",
  },
  {
    imgSrc: "/newassets/tv/iptv-skylink.jpg",
    title: "Amplify Online Reach",
    subtitle: "Full-Service Digital Marketing",
    description: `
<h2>360° Digital Visibility</h2>
<p>
  Skylink's digital marketing services span SEO, paid ads, content marketing, and web optimization—ensuring your brand stands out online. We bring visibility across platforms like Google, Meta, and more.
</p>

<h2>SEO That Delivers Results</h2>
<p>
  Our SEO team optimizes your business for local and national search, helping you rank higher on Google for relevant broadband, IPTV, and OTT keywords. Visibility means more leads.
</p>

<h2>Performance-Based Campaigns</h2>
<p>
  We track every click, impression, and conversion. Your campaigns are optimized in real-time to maximize ROI—ensuring your budget is always used wisely.
</p>

<h2>Landing Pages & Funnels</h2>
<p>
  We craft high-converting landing pages and marketing funnels tailored to your services and audience, giving prospects a smooth journey from awareness to conversion.
</p>

<h2>Platform Agnostic Strategy</h2>
<p>
  Be seen where your customers are—whether it's Google Ads, Facebook, Instagram, YouTube, or regional ad networks. We tailor each campaign to its platform.
</p>

<h2>Analytics & Reporting</h2>
<p>
  You get access to detailed campaign dashboards and monthly performance summaries, so you're always in the loop on what’s working and what needs tuning.
</p>
`,
    link: "/full-service-digital-marketing",
  },
  {
    imgSrc: "/assets/social-media-pomotions.jpg",
    title: "Stay Social",
    subtitle: "Social Media Promotions",
    description: `
<h2>Local Engagement, National Impact</h2>
<p>
  Skylink helps you engage directly with your community through hyper-targeted social media promotions. Reach the right audience at the right time with the right message.
</p>

<h2>Platform-Specific Content</h2>
<p>
  From Instagram reels to Facebook carousels, we design creative campaigns tailored to the strengths of each platform—maximizing reach and engagement.
</p>

<h2>Boosted Campaigns</h2>
<p>
  With geo-fenced ads and interest-based targeting, our social promotions help drive high-quality traffic and generate relevant leads in your target regions.
</p>

<h2>Authentic Brand Voice</h2>
<p>
  We help your brand communicate in a tone that resonates with your audience—fun, friendly, local, and informative. It's about building trust, not just selling.
</p>

<h2>Lead Capture Integrations</h2>
<p>
  Our campaigns include built-in lead forms, chat automation, and click-to-call buttons so customers can take immediate action while their interest is high.
</p>

<h2>Real-Time Feedback Loop</h2>
<p>
  We monitor how your posts perform, tweak creatives, test new formats, and share weekly insights so you always stay ahead of the curve.
</p>
`,
    link: "/social-media-promotions",
  },
  {
    imgSrc: "/newassets/tv/iptv-skylink.jpg",
    title: "Expand on Ground",
    subtitle: "Dedicated Sales Teams",
    description: `
<h2>Door-to-Door, Done Right</h2>
<p>
  Skylink’s trained sales teams hit the ground running with structured campaigns to boost on-ground conversions. They are well-versed in product demos, local selling techniques, and customer rapport building.
</p>

<h2>Hyperlocal Targeting</h2>
<p>
  Our teams are deployed in zones based on demand, customer density, and strategic priorities—ensuring your business gets the most traction from face-to-face sales.
</p>

<h2>Conversion-Focused Approach</h2>
<p>
  Sales reps are equipped with tablets, demo kits, and real-time CRM access to close leads efficiently and update statuses on the fly.
</p>

<h2>Live Reports & Analytics</h2>
<p>
  Track the performance of sales teams in real-time—from number of visits to closures—with transparent dashboards and performance reports.
</p>

<h2>Trained for Local Languages</h2>
<p>
  Language should never be a barrier. Our sales reps communicate in the regional language of your customers, building stronger trust and faster rapport.
</p>

<h2>Scalable Manpower</h2>
<p>
  Need a push during peak seasons or new territory launch? Scale up your sales force instantly with additional ground teams trained and ready to deploy.
</p>
`,
    link: "/dedicated sales teams",
  },
  {
    imgSrc: "/newassets/tv/iptv-skylink.jpg",
    title: "Start Strong",
    subtitle: "Partner Onboarding & Training",
    description: `
<h2>Solid Foundation for Every Partner</h2>
<p>
  Our onboarding and training program equips you with the knowledge, tools, and confidence to launch and grow your Skylink partnership from day one.
</p>

<h2>Step-by-Step Onboarding Kit</h2>
<p>
  Receive a complete startup kit—including setup guides, product brochures, pricing sheets, and marketing materials—all designed for your region and customer base.
</p>

<h2>Sales & Tech Training</h2>
<p>
  Learn how to pitch plans, explain IPTV and OTT bundles, handle objections, and even resolve common tech issues through interactive training sessions.
</p>

<h2>Hands-On Demos</h2>
<p>
  Practical demonstrations help you understand how to operate the dashboard, track leads, monitor performance, and generate reports.
</p>

<h2>Continuous Coaching</h2>
<p>
  Stay updated with regular refresher webinars, sales tips, product updates, and one-on-one mentorship sessions to keep your skills sharp.
</p>

<h2>Certification & Recognition</h2>
<p>
  Complete training earns you an official Skylink Partner Certificate, boosting your credibility with customers and opening doors to bonus programs.
</p>
`,
    link: "/partner-onboarding-training",
  },
  {
    imgSrc: "/newassets/tv/iptv-skylink.jpg",
    title: "Earn More",
    subtitle: "60% Revenue Share Model",
    description: `
<h2>Keep the Majority</h2>
<p>
  With Skylink's industry-leading 60% revenue share model, our partners keep more of what they earn. This transparent and generous structure is designed to ensure your long-term success, not just short-term gains.
</p>

<h2>No Hidden Deductions</h2>
<p>
  Unlike many programs that eat away at your earnings with fine print, Skylink offers full clarity. What you earn is what you take home—simple and fair.
</p>

<h2>Designed for Growth</h2>
<p>
  The more you sell, the more you earn. Our tiered incentives reward high-performers with additional perks, bonuses, and exclusive upgrades.
</p>

<h2>Low Operational Load</h2>
<p>
  From product fulfillment to technical support, Skylink handles the backend. You focus on selling—we handle everything else.
</p>

<h2>Real-Time Commission Tracking</h2>
<p>
  Monitor your commissions and payout history from your personalized partner dashboard. Transparency and accountability are built in.
</p>

<h2>Get Paid Monthly</h2>
<p>
  Payouts are credited directly to your account every month without delays. No more chasing payments—your earnings arrive on time, every time.
</p>
`,
    link: "/revenue-share-model",
  },
  {
    imgSrc: "/newassets/tv/iptv-skylink.jpg",
    title: "Support You Can Count On",
    subtitle: "24/7 Technical Support",
    description: `
<h2>Always-On Assistance</h2>
<p>
  Skylink provides round-the-clock technical support to partners and customers alike. Whether it’s a late-night setup issue or a sudden outage, help is just a call or chat away.
</p>

<h2>Multichannel Access</h2>
<p>
  Connect with our support experts through live chat, email, or phone. Choose your preferred channel and get timely help without waiting hours for a callback.
</p>

<h2>Trained Experts, Not Bots</h2>
<p>
  Our support team is made up of real, certified professionals who know the products inside-out. You'll speak with humans who care—not just AI scripts.
</p>

<h2>Field Tech Support</h2>
<p>
  Need on-ground help? We dispatch local technicians for complex issues, ensuring your customer experience remains smooth and uninterrupted.
</p>

<h2>Track Support Tickets</h2>
<p>
  View and manage open tickets, response timelines, and resolution history from your dashboard—perfect for managing multiple installations.
</p>

<h2>Language-Friendly Service</h2>
<p>
  We offer regional language support, so you and your customers feel comfortable and understood during every interaction.
</p>
`,
    link: "/technical-support",
  },
  {
    imgSrc: "/newassets/tv/iptv-skylink.jpg",
    title: "Grow Together",
    subtitle: "Co-Branded Campaigns",
    description: `
<h2>Build a Trusted Image</h2>
<p>
  With Skylink's co-branded campaigns, your business appears side-by-side with one of India’s fastest-growing broadband and entertainment brands—boosting credibility from day one.
</p>

<h2>Shared Visibility</h2>
<p>
  Your name is featured in digital and print materials, online ads, and even field promotions—helping you get noticed by more customers without starting from scratch.
</p>

<h2>Localized Co-Marketing</h2>
<p>
  We craft custom campaigns based on your target region—using language, offers, and messaging that resonate with your local audience.
</p>

<h2>Professional Designs, Ready to Go</h2>
<p>
  No designer? No problem. We give you plug-and-play creatives, posters, banners, and digital ads that you can deploy immediately.
</p>

<h2>Amplify Your Reach</h2>
<p>
  Combine forces with Skylink to access broader networks and cross-promotional opportunities, such as influencer partnerships and email blasts.
</p>

<h2>Flexible Campaign Models</h2>
<p>
  Choose from digital-only, field-based, or hybrid campaigns to suit your market and budget. Our team helps you select the best format.
</p>
`,
    link: "/co-branded-campaigns",
  },
  {
    imgSrc: "/newassets/tv/iptv-skylink.jpg",
    title: "Sell With Confidence",
    subtitle: "Custom Plans for Your Market",
    description: `
<h2>Tailored to Local Needs</h2>
<p>
  Skylink allows partners to offer region-specific broadband, IPTV, and OTT bundles, giving you an edge over standard one-size-fits-all providers. Address exactly what your audience wants.
</p>

<h2>Flexible Plan Building</h2>
<p>
  Mix and match internet speeds, OTT apps, and TV channels to create personalized plans that increase conversion rates and customer satisfaction.
</p>

<h2>Market-Driven Pricing</h2>
<p>
  Adjust pricing dynamically based on customer income range, area demand, and competition. Maximize value without compromising margins.
</p>

<h2>Upsell Premium Add-Ons</h2>
<p>
  Want to push higher-tier plans? Add routers, smart TV support, or parental control services to sweeten your offerings.
</p>

<h2>Support for Multiple Languages</h2>
<p>
  Deliver sales pitches, brochures, and customer onboarding in your regional language—making it easier to connect and close.
</p>

<h2>Test and Iterate</h2>
<p>
  Monitor plan performance through your dashboard and make quick adjustments as needed. We help you stay agile in a changing market.
</p>
`,
    link: "/custom-plans-for-your-market",
  },
  {
    imgSrc: "/newassets/tv/iptv-skylink.jpg",
    title: "Track Everything",
    subtitle: "Partner Performance Dashboard",
    description: `
<h2>Full Visibility, Total Control</h2>
<p>
  The Skylink Partner Performance Dashboard gives you a bird’s-eye view of your operations. From lead generation to final payout, every stage of the partner journey is tracked in one place.
</p>

<h2>Real-Time Insights</h2>
<p>
  Access up-to-the-minute data on sales, commissions, customer activations, and plan upgrades. Make timely decisions backed by real metrics.
</p>

<h2>Custom Filters & Reports</h2>
<p>
  Filter by region, team member, product, or time period. Download detailed reports to share with your team or optimize performance strategies.
</p>

<h2>Monitor Growth & ROI</h2>
<p>
  Track how your business evolves over weeks and months. See which products perform best and which markets are thriving.
</p>

<h2>Seamless Payout Monitoring</h2>
<p>
  Know exactly when commissions are due, how much is pending, and what’s been paid—with complete transparency and audit trails.
</p>

<h2>Multi-User Access</h2>
<p>
  Assign roles and access levels to team members. Everyone sees only what they need, keeping your data safe yet collaborative.
</p>
`,
    link: "/partner-performance-dashboard",
  },
  {
    imgSrc: "/newassets/tv/iptv-skylink.jpg",
    title: "Fast & Fair",
    subtitle: "Monthly Payouts",
    description: `
<h2>On-Time Payments, Always</h2>
<p>
  At Skylink, your hard work never goes unnoticed—or unpaid. We process monthly payouts like clockwork, so you can count on timely income without the stress of delays.
</p>

<h2>No Complex Processes</h2>
<p>
  Say goodbye to lengthy invoice approvals or unclear timelines. Your earnings are calculated automatically and disbursed without manual follow-ups.
</p>

<h2>Clear Payment Summary</h2>
<p>
  Get a complete breakdown of commissions earned, deductions (if any), and bonus earnings—all viewable in your partner dashboard.
</p>

<h2>Bank-Ready Transfers</h2>
<p>
  Payouts are directly deposited into your registered account with industry-grade security. No wallet transfers or intermediary steps.
</p>

<h2>Dispute-Free Model</h2>
<p>
  Every calculation is traceable and backed by logs, ensuring full transparency and trust between you and Skylink.
</p>

<h2>Reliable, Month After Month</h2>
<p>
  Our partners plan their finances around Skylink's predictable, consistent payout cycles. We’ve earned that trust—and we intend to keep it.
</p>
`,
    link: "/monthly-payouts",
  },
  {
    imgSrc: "/newassets/tv/iptv-skylink.jpg",
    title: "Join the Movement",
    subtitle: "Growing Partner Ecosystem",
    description: `
<h2>Be Part of Something Big</h2>
<p>
  Skylink isn’t just a service provider—it’s a nationwide network of ISPs, dealers, resellers, and entrepreneurs collaborating to redefine digital entertainment in India.
</p>

<h2>Scale With Community Support</h2>
<p>
  You’re not alone. Gain insights, mentorship, and camaraderie from fellow partners who’ve walked the path you're on today.
</p>

<h2>Exclusive Access to Tools & Training</h2>
<p>
  Enjoy early access to new tools, dashboards, regional marketing materials, and beta features before public release.
</p>

<h2>Collaborate and Co-Innovate</h2>
<p>
  Participate in pilot programs, new product feedback loops, and regional marketing trials. Your voice helps shape Skylink's future.
</p>

<h2>Expand Through Strategic Partnerships</h2>
<p>
  Connect with hardware vendors, content distributors, and other Skylink partners for bundle deals and localized business expansion.
</p>

<h2>Celebrate Shared Success</h2>
<p>
  From regional meetups to recognition awards and incentive trips, our partner ecosystem isn’t just about business—it’s about community and celebration.
</p>
`,
    link: "/growing-partner-ecosystem",
  },
];
const posts = blogData.map((blog) => ({
  image: blog.imgSrc,
  slug: blog.link.replace(/^\//, ""),
  title: blog.subtitle,
  content: `${blog.description}\n\n${blog.normaltext || ""}`.trim(),
}));

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return { title: post.title };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <section className="relative h-64 md:h-96 w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">{post.title}</h1>
          <p className="text-sm md:text-lg opacity-90">
            Latest insights from Skylink
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 py-12 bg-white shadow-lg rounded-lg -mt-16 relative z-10">
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-lg leading-relaxed whitespace-pre-line">
            {post.content}
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/blogs"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
          >
            ← Back to Blogs
          </Link>
        </div>
      </article>

      {/* Footer spacing */}
      <div className="h-12" />
    </div>
  );
}
