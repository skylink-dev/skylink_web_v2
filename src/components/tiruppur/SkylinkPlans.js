"use client";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function SkylinkPlans() {
  const router = useRouter();
  const planState = useSelector(state => state.plans) || {};
  const { planOptions = {}, activeZoneIndex = 0, activeBundle = '' } = planState;
  
  const zoneName = planOptions.zones?.[activeZoneIndex] || '';
  const bundlePlans = (planOptions.actualPrizeByZone?.[zoneName]?.[activeBundle]) || {};

  // OTT platform logo mapping
  const ottLogoMap = {
    'hotstar': 'jiohotstar',
    'jiohotstar': 'jiohotstar',
    'prime': 'prime',
    'amazonprime': 'prime',
    'aha': 'aha-logo',
    'zee5': 'zee',
    'zee': 'zee',
    'sunnxt': 'sunnxt',
    'sunnext': 'sunnxt',
    'fancode': 'fancode',
    'shemaroo': 'shemaroo',
    // Add more mappings as needed
  };

  // Normalize OTT name to logo file name, skip generic/numeric values
  const normalizeOTTLogo = (name) => {
    if (!name) return null;
    const lower = name.toLowerCase();
    // Skip generic/numeric OTT values
    if (/^\d+\+?\s*otts?$/i.test(lower) || /ott/i.test(lower) && !ottLogoMap[lower.replace(/\s|\./g, '')]) {
      return null;
    }
    const key = name.replace(/\s|\./g, '').toLowerCase();
    const mapped = ottLogoMap[key] || key;
    return `/assets/${mapped}.png`;
  };

  // Function to extract OTT platforms from plan data
  const getOTTPlatformsForPlan = (monthlyPlan) => {
    // If icons array is provided in plan data
    if (Array.isArray(monthlyPlan.icons) && monthlyPlan.icons.length > 0) {
      return monthlyPlan.icons.slice(0, 4).map(iconPath => ({
        name: getPlatformNameFromPath(iconPath),
        image: iconPath
      }));
    }
    // If otts is an array of platform names
    if (Array.isArray(monthlyPlan.otts)) {
      return monthlyPlan.otts.slice(0, 4).map(ott => ({
        name: ott,
        image: normalizeOTTLogo(ott)
      }));
    }
    // If otts is a string with comma-separated values
    if (typeof monthlyPlan.otts === 'string') {
      return monthlyPlan.otts.split(',').slice(0, 4).map(ott => {
        const platformName = ott.trim();
        return {
          name: platformName,
          image: normalizeOTTLogo(platformName)
        };
      });
    }
    // If no specific OTTs defined, return default based on plan type/price
    return getDefaultOTTPlatforms(monthlyPlan);
  };

  // Function to extract platform name from icon path
  const getPlatformNameFromPath = (iconPath) => {
    const fileName = iconPath.split('/').pop(); // Get filename from path
    return fileName.replace('-logo.png', '').replace('.png', '').toUpperCase();
  };

  // Function to determine default OTT platforms based on plan features
  const getDefaultOTTPlatforms = (monthlyPlan) => {
    const speed = monthlyPlan.speed || '';
    const basePrice = monthlyPlan.basePrice || 0;
    
    // Determine OTT platforms based on speed and price combination
    if (speed.includes('100') || basePrice == 699) {
      return [
        { name: 'Prime', image: '/assets/aha-logo.png' },
        { name: 'Jio-Hotstar', image: '/assets/fancode.png' },
        { name: 'Sunnext', image: '/assets/shemaroo.png' },
      ];
    } else if (speed.includes('100') || basePrice == 899) {
      return [ 
        { name: 'Prime', image: '/assets/jiohotstar.png' },
        { name: 'Jio-Hotstar', image: '/assets/sunnxt.png' },
        { name: 'Sunnext', image: '/assets/zee.png' },
        { name: 'Aha', image: '/assets/aha-logo.png' },
      ];
    } else if (speed.includes('50') || basePrice == 899) {
      return [ 
        { name: 'Prime', image: '/assets/prime.png' },
        { name: 'Jiohotstar', image: '/assets/jiohotstar.png' },
        { name: 'Sunnext', image: '/assets/sunnxt.png' },
        { name: 'Zee5', image: '/assets/zee.png' },
        { name: 'Aha', image: '/assets/aha-logo.png' },
      ];
    } else if (speed.includes('50') || basePrice == 699) {
      return [ 
        { name: 'Prime', image: '/assets/jiohotstar.png' },
        { name: 'Jio-Hotstar', image: '/assets/sunnxt.png' },
        { name: 'Sunnext', image: '/assets/zee.png' },
        { name: 'Aha', image: '/assets/aha-logo.png' },
      ];
    } else if (speed.includes('50') || basePrice <= 499) {
      return [
        { name: 'Prime', image: '/assets/aha-logo.png' },
        { name: 'Jio-Hotstar', image: '/assets/fancode.png' },
        { name: 'Sunnext', image: '/assets/shemaroo.png' }
      ];
    } else if (basePrice >= 999) {
      return [
        { name: 'Prime', image: '/assets/prime.png' },
        { name: 'Jio-Hotstar', image: '/assets/jiohotstar.png' },
        { name: 'Sunnext', image: '/assets/sunnxt.png' },
        { name: 'Zee5', image: '/assets/zee.png' },
        { name: 'Aha', image: '/assets/aha-logo.png' }
      ];
    } else {
      // Entry-level plans
      return [
        { name: 'Prime', image: '/assets/aha-logo.png' },
        { name: 'Jio-Hotstar', image: '/assets/fancode.png' },
        { name: 'Sunnext', image: '/assets/shemaroo.png' },
      ];
    }
  };

  // Function to generate unique key for plans with same price
  const generatePlanKey = (mbpsCategory, planKey, monthlyPlan) => {
    const speed = monthlyPlan.speed || 'N/A';
    const planName = monthlyPlan.planName || 'Basic Plan';
    // Include speed and plan name in key to make it unique
    return `${mbpsCategory}-${planKey}-${speed.replace(/\s+/g, '-')}-${planName.replace(/\s+/g, '-')}`;
  };

  // Function to determine if plan is popular
  const getPlanTag = (monthlyPlan) => {
    if (monthlyPlan.hot === "yes" || (Array.isArray(monthlyPlan.categories) && monthlyPlan.categories.includes("Popular"))) {
      return "Popular";
    }
    return "";
  };

  // Get all plans from all Mbps categories
  const plans = Object.entries(bundlePlans).flatMap(([mbpsCategory, plansData]) => {
    return Object.entries(plansData).map(([planKey, planData]) => {
      const monthlyPlan = planData.Monthly || planData;
      if (!monthlyPlan) return null;

      const ottPlatforms = getOTTPlatformsForPlan(monthlyPlan);
      const tag = getPlanTag(monthlyPlan);
      
      return {
        key: generatePlanKey(mbpsCategory, planKey, monthlyPlan),
        speed: monthlyPlan.speed || 'N/A',
        price: monthlyPlan.price ? `₹${monthlyPlan.price}` : 'N/A',
        originalPrice: monthlyPlan.price || 0,
        data: monthlyPlan.dataLimit || 'N/A',
        ott: monthlyPlan.otts || 'No OTT Apps',
        tv: monthlyPlan.channels || 'No TV Channels',
        tag: tag,
        simultaneousUsers: monthlyPlan.simultaneousUsers || 1,
        planName: monthlyPlan.planName || 'Basic Plan',
        mbpsCategory: mbpsCategory,
        basePrice: monthlyPlan.basePrice || 0,
        ottPlatforms: ottPlatforms,
        customIcons: monthlyPlan.icons || null
      };
    }).filter(Boolean);
  });

  // Sort plans by speed in ascending order (lowest speed first)
  plans.sort((a, b) => {
    const speedA = parseInt(a.speed) || 0;
    const speedB = parseInt(b.speed) || 0;
    return speedA - speedB;
  });

  // Group plans by price for better visualization
  const groupedPlans = plans.reduce((groups, plan) => {
    const price = plan.originalPrice;
    if (!groups[price]) {
      groups[price] = [];
    }
    groups[price].push(plan);
    return groups;
  }, {});

  return (
    <section
      style={{
        width: "100%",
        background: "linear-gradient(to bottom, #ffffff 0%, #f9fafb 100%)",
        padding: "5rem 0",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background elements */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(220, 38, 38, 0.03) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(220, 38, 38, 0.02) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
              lineHeight: "1.2",
            }}
          >
            Seamless Browsing with{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #dc2626 0%, #ef4444 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
              }}
            >
              Ultra-Fast Internet Plans
            </span>
          </h2>
          <p
            style={{
              color: "#6b7280",
              fontSize: "1.125rem",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
              fontWeight: 400,
            }}
          >
            Choose your ideal Skylink plan and enjoy uninterrupted high-speed
            connectivity across all your devices.
          </p>
        </div>

        {/* Plans Grid (flex layout so last row items can be centered) */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {plans.map((plan, index) => (
            <div
              key={plan.key}
              style={{
                flex: "0 1 340px",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "2rem",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05), 0 10px 40px rgba(0, 0, 0, 0.04)",
                border: "1px solid #f3f4f6",
                position: "relative",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                overflow: "hidden",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 4px 6px rgba(0, 0, 0, 0.05), 0 20px 60px rgba(220, 38, 38, 0.12)";
                e.currentTarget.style.borderColor = "#fee2e2";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 1px 3px rgba(0, 0, 0, 0.05), 0 10px 40px rgba(0, 0, 0, 0.04)";
                e.currentTarget.style.borderColor = "#f3f4f6";
              }}
            >
              {/* Decorative corner accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "100px",
                  height: "100px",
                  background: "radial-gradient(circle at top right, rgba(220, 38, 38, 0.05) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              {plan.tag && (
                <div
                  style={{
                    position: "absolute",
                    top: "1.25rem",
                    right: "1.25rem",
                    backgroundColor: "#dc2626",
                    color: "#ffffff",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    padding: "4px 12px",
                    borderRadius: "50px",
                    boxShadow: "0 4px 12px rgba(220, 38, 38, 0.3)",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  {plan.tag}
                </div>
              )}

              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", marginBottom: "0.5rem" }}>
                  <h3
                    style={{
                      fontSize: "2.25rem",
                      fontWeight: 700,
                      color: "#111827",
                      margin: 0,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {plan.price}
                  </h3>
                  <span
                    style={{
                      fontSize: "1rem",
                      color: "#9ca3af",
                      marginLeft: "4px",
                      fontWeight: 500,
                    }}
                  >
                    /month
                  </span>
                </div>

                <div
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    background: "linear-gradient(135deg, #dc2626 0%, #ef4444 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    display: "inline-block",
                    marginBottom: "0.25rem",
                  }}
                >
                  {plan.speed}
                </div>
                
                <div
                  style={{
                    fontSize: "1rem",
                    color: "#9ca3af",
                    fontWeight: 500,
                  }}
                >
                  {plan.planName}
                </div>
              </div>

              {/* Features List */}
              <div style={{ marginBottom: "1.5rem" }}>
                {[
                  { 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: "18px", height: "18px" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
                    </svg>,
                    text: plan.data 
                  },
                  { 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: "18px", height: "18px" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                    </svg>,
                    text: plan.ott 
                  },
                  { 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: "18px", height: "18px" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
                    </svg>,
                    text: plan.tv 
                  },
                  { 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: "18px", height: "18px" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>,
                    text: `${plan.simultaneousUsers} Users` 
                  }
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "0.75rem",
                      padding: "0.75rem",
                      backgroundColor: "#f9fafb",
                      borderRadius: "10px",
                      transition: "all 0.2s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "#fef2f2";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "#f9fafb";
                    }}
                  >
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#ffffff",
                        borderRadius: "8px",
                        fontSize: "0.875rem",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      {feature.icon}
                    </div>
                    <span
                      style={{
                        fontSize: "0.95rem",
                        color: "#374151",
                        fontWeight: 500,
                        flex: 1,
                      }}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Select Plan Button */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  onClick={() => router.push('/plans')}
                  style={{
                    width: "100%",
                    background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
                    border: "none",
                    borderRadius: "10px",
                    padding: "12px 20px",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#ffffff",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: "0 4px 16px rgba(220, 38, 38, 0.3)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(220, 38, 38, 0.4)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 16px rgba(220, 38, 38, 0.3)";
                  }}
                >
                  Select Plan →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            textAlign: "center",
            padding: "2rem",
            background: "linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)",
            borderRadius: "14px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.03)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
            {[
              { 
                icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: "20px", height: "20px" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>,
                text: "Free Installation" 
              },
              { 
                icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: "20px", height: "20px" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>,
                text: "Free Router" 
              },
              { 
                icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: "20px", height: "20px" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg>,
                text: "24/7 Support" 
              }
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ fontSize: "1rem" }}>{item.icon}</span>
                <span
                  style={{
                    color: "#64748b",
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
          <p
            style={{
              color: "#94a3b8",
              fontSize: "0.875rem",
              margin: "1rem 0 0 0",
              fontWeight: 500,
            }}
          >
            GST extra as applicable
          </p>
        </div>
      </div>
    </section>
  );
}