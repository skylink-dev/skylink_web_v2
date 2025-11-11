"use client";

import { apiService } from "@/backend/apiservice";
import { useEffect, useState } from "react";
import {
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactPopup({
  selectedPlan,
  isOpen,
  setIsOpen,
  isMobile,
}) {
  const activeCycle = selectedPlan?.activeCycle;
  const activeMbps = selectedPlan?.internetSpeed;
  const discount = selectedPlan?.discount[selectedPlan?.discountIndex];
  const activePrice = selectedPlan?.price;
  const installationCharges = Number(
    selectedPlan?.installationCharges[selectedPlan?.discountIndex]
  );

  const [formData, setFormData] = useState({
    name: "",
    phone: "+91 ",
    subject: "",
    latitude: "",
    longitude: "",
    location: "",
  });

  const [errors, setErrors] = useState({ name: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMapPicker, setShowMapPicker] = useState(false);
  const [locationLoading, setLocationLoading] = useState(false);

  // Manage body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Prefill subject
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      subject: `${activeMbps} - ${activeCycle} ( ₹ ${activePrice}/- +GST applicable)`,
    }));
  }, [activeMbps, activeCycle, activePrice]);

  // 📍 Try to fetch user location (auto)
  const fetchLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported by your browser.");
      setShowMapPicker(true);
      return;
    }

    setLocationLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        setFormData((prev) => ({
          ...prev,
          latitude,
          longitude,
        }));

        try {
          const locationData = await apiService.getLocation(
            latitude,
            longitude
          );
          setFormData((prev) => ({
            ...prev,
            location: `${locationData.city}, ${locationData.state}`,
          }));
        } catch {
          console.warn("Unable to resolve city/state.");
        } finally {
          setLocationLoading(false);
        }
      },
      (error) => {
        console.error("GPS failed:", error.message);
        setLocationLoading(false);
        setShowMapPicker(true);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  // Trigger location fetch automatically for mobile users
  useEffect(() => {
    if (isOpen && isMobile) fetchLocation();
  }, [isOpen, isMobile]);

  // Validation
  const validateName = (name) => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    if (!/^[a-zA-Z\s]+$/.test(name))
      return "Name should only contain letters and spaces";
    return "";
  };

  const validatePhone = (phone) => {
    const phoneNumber = phone.replace(/^\+91\s*/, "").replace(/\s/g, "");
    if (!phoneNumber) return "Phone number is required";
    if (!/^\d+$/.test(phoneNumber))
      return "Phone number should only contain digits";
    if (phoneNumber.length !== 10) return "Phone number must be 10 digits";
    if (!/^[6-9]/.test(phoneNumber))
      return "Phone number must start with 6,7,8,9";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      if (!value.startsWith("+91 ")) return;
      const num = value.slice(4);
      if (num && !/^\d*$/.test(num)) return;
      if (num.length > 10) return;
    }
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nameError = validateName(formData.name);
    const phoneError = validatePhone(formData.phone);
    if (nameError || phoneError) {
      setErrors({ name: nameError, phone: phoneError });
      return;
    }

    if (!formData.latitude || !formData.longitude) {
      alert("Please select your location before submitting.");
      return;
    }

    setIsSubmitting(true);
    try {
      await apiService.submitContactForm(formData);
      alert("Thank you! We will contact you soon.");
      setIsOpen(false);
    } catch (err) {
      console.error(err);
      alert("Unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: FaFacebookF, url: "https://facebook.com/skylinkfibernetindia" },
    { icon: FaInstagram, url: "https://instagram.com/skylinkfibernet" },
    {
      icon: FaYoutube,
      url: "https://youtube.com/channel/UCwXOws8BUyPAxFO0Ni-ALaQ",
    },
    {
      icon: FaLinkedinIn,
      url: "https://linkedin.com/company/skylink-fibernet",
    },
    { icon: FaTwitter, url: "https://twitter.com/skylinkfiber" },
  ];

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-5 overflow-y-auto"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl sm:max-h-[90vh] flex flex-col sm:flex-row overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close"
          className="absolute top-3 right-3 bg-white/90 rounded-full p-2 shadow hover:scale-110 transition-transform"
        >
          <FaTimes size={20} className="text-gray-700" />
        </button>

        <div className="flex flex-col w-full p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center sm:text-left">
            Share Your <span className="text-blue-600">Details</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className={`w-full border-2 rounded-lg px-4 py-3 focus:ring-2 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
                className={`w-full border-2 rounded-lg px-4 py-3 focus:ring-2 ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Location field */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={fetchLocation}
                className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700"
              >
                <FaMapMarkerAlt />
                {locationLoading ? "Getting location..." : "Use My Location"}
              </button>
              {showMapPicker && (
                <button
                  type="button"
                  onClick={() =>
                    alert(
                      "📍 Here you can integrate a map picker (Leaflet/Google Map)."
                    )
                  }
                  className="text-blue-600 underline text-sm"
                >
                  Pick on Map
                </button>
              )}
            </div>

            {formData.location && (
              <p className="text-gray-700 text-sm mt-2">
                📍 {formData.location}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>

          {/* Social links */}
          <div className="flex justify-center gap-4 mt-6">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gradient-to-br from-red-500 to-red-700 text-white hover:scale-110 transition-transform"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
