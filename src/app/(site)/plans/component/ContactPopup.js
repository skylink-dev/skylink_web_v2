import { apiService } from "@/backend/apiservice";
import { useEffect, useState } from "react";
import {
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
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

  useEffect(() => {
    console.log(activeCycle);
    console.log(activeMbps);
    console.log(discount);
    console.log(activePrice);
  }, [selectedPlan]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "+91 ",
    subject: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (isMobile) {
        document.body.style.position = "fixed";
        document.body.style.width = "100%";
        document.body.style.top = "0";
      }
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    }

    setFormData({
      name: "",
      phone: "+91 ",
      subject: `${activeMbps} - ${activeCycle} ( ₹ ${activePrice}/- +GST applicable)`,
    });
    setErrors({ name: "", phone: "" });

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [activeMbps, activePrice, activeCycle, isOpen, isMobile]);

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
      return "Phone number must start with 6, 7, 8, or 9";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!value.startsWith("+91 ")) {
        setFormData({ ...formData, phone: "+91 " });
        return;
      }
      const phoneNumber = value.slice(4);
      if (phoneNumber && !/^\d*$/.test(phoneNumber)) return;
      if (phoneNumber.length > 10) return;
    }

    if (name === "name" && value.length > 50) return;

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

    setIsSubmitting(true);
    try {
      await apiService.submitContactForm(formData);
      console.log("Form submitted:", formData);
      alert("Thank you! We will contact you soon.");
    } catch (err) {
      console.log(err);
      alert("Unexpected Error Occurred");
    }
    setErrors({ name: "", phone: "" });
    setIsSubmitting(false);
    setIsOpen(false);
  };

  const socialLinks = [
    {
      icon: FaFacebookF,
      url: "https://www.facebook.com/skylinkfibernetindia",
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/skylinkfibernet",
      label: "Instagram",
    },
    {
      icon: FaYoutube,
      url: "https://www.youtube.com/channel/UCwXOws8BUyPAxFO0Ni-ALaQ",
      label: "YouTube",
    },
    {
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/company/skylink-fibernet",
      label: "LinkedIn",
    },
    {
      icon: FaTwitter,
      url: "https://twitter.com/skylinkfiber",
      label: "Twitter",
    },
  ];

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative flex w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-scaleIn sm:max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close"
          className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-white/90 rounded-full p-2 shadow hover:scale-110 transition-transform"
        >
          <FaTimes
            size={isMobile ? 16 : 22}
            className="text-gray-600 hover:text-gray-800"
          />
        </button>

        {/* Content */}
        <div className="flex flex-col sm:flex-row w-full">
          {/* Form Section */}
          <div className="flex-1 p-6 sm:p-10 overflow-y-auto">
            <div className="mb-6 text-center sm:text-left">
              <p className="text-blue-600 font-semibold">Hello There!</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
                Stay Updated! Share Your{" "}
                <span className="text-blue-600">Details</span>{" "}
                {!isMobile && (
                  <span className="text-blue-600">to Connect.</span>
                )}
              </h2>
            </div>

            <form
              className="bg-gray-50 rounded-xl p-5 space-y-4"
              onSubmit={handleSubmit}
            >
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name (e.g., John Doe)"
                  className={`w-full border-2 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
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
                  className={`w-full border-2 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Subject */}
              {/* <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  disabled
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 bg-gray-100 text-gray-600 cursor-not-allowed"
                />
              </div> */}

              {/* Submit */}
              <button
                type="submit"
                disabled={
                  isSubmitting ||
                  !formData.name ||
                  !formData.phone ||
                  !formData.subject ||
                  formData.phone === "+91 "
                }
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow-md transition-transform disabled:bg-gray-400"
              >
                {isSubmitting ? "⏳ Submitting..." : "Submit"}
              </button>
            </form>
            {isMobile ? (
              <></>
            ) : (
              <>
                <div className="flex items-center justify-center w-full py-6 sm:py-10 bg-gray-50 rounded-xl">
                  <div className="flex flex-wrap justify-center gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-bl from-red-600 via-red-500 to-red-600 text-white shadow-md hover:bg-red-700 transition-transform duration-300 hover:scale-110"
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Image Section */}
          {!isMobile && (
            <div className="flex justify-center items-start px-6 py-8">
              <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-4 pb-3 border-b border-gray-200">
                  Plan Summary
                </h3>

                <div className="grid grid-cols-1 gap-3 text-base sm:text-lg">
                  {/* Plan Name */}
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Plan Name</span>
                    <span className="font-semibold text-gray-900">
                      {activeMbps}
                    </span>
                  </div>

                  {/* Billing Cycle */}
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Billing Cycle</span>
                    <span className="font-semibold text-gray-900">
                      {activeCycle}{" "}
                      <span className="font-normal text-gray-700">
                        (
                        {activeCycle === "Yearly"
                          ? "12 months"
                          : activeCycle === "Half-Yearly"
                          ? "6 months"
                          : activeCycle === "Quaterly"
                          ? "3 months"
                          : "1 month"}
                        )
                      </span>
                    </span>
                  </div>

                  {/* Base Price */}
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Base Price</span>
                    <span className="font-semibold text-gray-900">
                      ₹{activePrice.toFixed(2)}
                    </span>
                  </div>

                  {/* Discount */}
                  {discount !== 0 && (
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2 text-green-600">
                      <span>Discount ({discount}%)</span>
                      <span>
                        - ₹{((activePrice * discount) / 100).toFixed(2)}
                      </span>
                    </div>
                  )}

                  {/* GST */}
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-600">GST (18%)</span>
                    <span className="font-semibold text-gray-900">
                      ₹
                      {(
                        (activePrice -
                          (activePrice * (discount !== 0 ? discount : 1)) /
                            100) *
                        0.18
                      ).toFixed(2)}
                    </span>
                  </div>

                  {/* Installation Charges */}
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span
                      className={`${
                        installationCharges === 0
                          ? "text-green-600"
                          : "text-gray-600"
                      }`}
                    >
                      Installation Charges
                    </span>
                    <span
                      className={`${
                        installationCharges === 0
                          ? "text-green-600"
                          : "font-semibold text-gray-900"
                      }`}
                    >
                      {installationCharges === 0
                        ? "Free"
                        : `₹${installationCharges.toFixed(2)}`}
                    </span>
                  </div>

                  {/* Total Payable */}
                  <div className="flex justify-between items-center border-t border-gray-300 pt-3 text-lg font-bold">
                    <span className="text-gray-800">Total Payable</span>
                    <span className="text-red-600">
                      ₹
                      {(
                        activePrice +
                        installationCharges +
                        (activePrice -
                          (activePrice * (discount !== 0 ? discount : 1)) /
                            100) *
                          0.18
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-500 mt-3 text-center sm:text-left">
                  * All prices are inclusive of applicable taxes. Installation
                  charges may vary.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
