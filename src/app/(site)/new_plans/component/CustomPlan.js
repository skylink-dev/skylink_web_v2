"use client";
import BilledCycle from "@/components/plans/BilledCycle";
import Channel from "@/components/plans/Channel";
import CustomPlans from "@/components/plans/CustomPlans";
import CustomPlansMobile from "@/components/plans/CustomPlansMobile";
import Ott from "@/components/plans/Ott";
import PlanHighlights from "@/components/plans/PlanHighlights";
import Speed from "@/components/plans/Speed";
import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactPopup from "../../plans/component/ContactPopup";

export default function CustomPlan({ plans, isMobile, activeTab }) {
  const dispatch = useDispatch();
  const basePlans = plans || [];
  // change the plan form old to new true==new false=old
  const testMode = false;

  const [activePrice, setActivePrice] = useState();
  const [activeCycle, setActiveCycle] = useState();
  const [isContactOpen, setIsContactOpen] = useState();

  const speeds = useMemo(
    () => [...new Set(basePlans.map((p) => p.internetSpeed))],
    [basePlans]
  );
  const validities = useMemo(() => basePlans[0]?.validity || [], [basePlans]);

  const [selectedSpeed, setSelectedSpeed] = useState(speeds[0]);
  const [selectedCycle, setSelectedCycle] = useState(validities[0]);
  const [selectedChannel, setSelectedChannel] = useState("550+ Channels");
  const [selectedOtt, setSelectedOtt] = useState("21+ OTTs");

  const activePlan = basePlans.find(
    (p) =>
      p.internetSpeed === selectedSpeed && p.validity.includes(selectedCycle)
  );

  // 💰 Labels
  const labelMap = {
    "1 Month": "Monthly",
    "3 Month": "Quarterly",
    "6 Month": "Half Yearly",
    "12 Month": "Annual",
  };

  const getDiscountMessage = () => {
    if (selectedCycle === "6 Month")
      return "Our Half-Yearly plan offers a 7.5% discount.";
    if (selectedCycle === "12 Month")
      return "Our Annual plan offers a 15% discount.";
    return "Installation charges ₹1000 applicable.";
  };

  const channelOptions = ["350+ Channels", "550+ Channels", "750+ Channels"];
  const ottOptions = ["21+ OTTs", "22+ OTTs", "29+ OTTs", "30+ OTTs"];

  const ButtonGrid = ({ options, selected, setSelected, color }) => {
    const colorMap = {
      blue: {
        base: "border-blue-300 text-blue-700 hover:bg-blue-100",
        active: "bg-blue-600 text-white border-blue-600 shadow-md",
      },
      red: {
        base: "border-red-300 text-red-700 hover:bg-red-100",
        active: "bg-red-600 text-white border-red-600 shadow-md",
      },
      yellow: {
        base: "border-yellow-300 text-yellow-700 hover:bg-yellow-100",
        active: "bg-yellow-500 text-white border-yellow-500 shadow-md",
      },
      green: {
        base: "border-green-300 text-green-700 hover:bg-green-100",
        active: "bg-green-600 text-white border-green-600 shadow-md",
      },
    };

    // ✅ Convert number of options to Tailwind grid classes
    const getGridCols = (count) => {
      switch (count) {
        case 1:
          return "grid-cols-1";
        case 2:
          return "grid-cols-2";
        case 3:
          return "grid-cols-3";
        case 4:
          return "grid-cols-4";
        case 5:
          return "grid-cols-5";
        case 6:
          return "grid-cols-6";
        default:
          return "grid-cols-2 sm:grid-cols-3"; // fallback
      }
    };

    return (
      <div className={`grid ${getGridCols(options.length)} gap-3 w-full`}>
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => setSelected(opt)}
            className={`w-full py-3 rounded-md font-medium border transition-all duration-200 transform hover:scale-[1.02] ${
              selected === opt
                ? colorMap[color].active
                : `${colorMap[color].base} bg-white`
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    );
  };

  return (
    <>
      <ContactPopup
        isMobile={isMobile}
        activeMbps={activeTab}
        activePrice={activePrice}
        activeCycle={
          activeCycle == 1
            ? "Monthly"
            : activeCycle == 3
            ? "Quaterly"
            : activeCycle == 6
            ? "Half Yearly"
            : "Yearly"
        }
        isOpen={isContactOpen}
        setIsOpen={setIsContactOpen}
      />
      {testMode ? (
        <>
          <div className="w-full bg-gray-50 rounded-2xl p-6 shadow-md">
            <div></div>
            <div className="flex flex-col  gap-8">
              <div className="flex-1 space-y-6">
                {/* Bandwidth */}
                <div className="bg-blue-50 border border-blue-300 p-5 rounded-xl shadow-sm">
                  <h3 className="text-blue-800 font-semibold text-lg mb-4">
                    Choose Your Bandwidth
                  </h3>
                  <ButtonGrid
                    options={speeds}
                    selected={selectedSpeed}
                    setSelected={setSelectedSpeed}
                    color="blue"
                  />
                </div>

                {/* Billing Cycle */}
                <div className="bg-red-50 border border-red-300 p-5 rounded-xl shadow-sm">
                  <h3 className="text-red-700 font-semibold text-lg mb-4">
                    Choose Your Billing Cycle
                  </h3>
                  <ButtonGrid
                    options={validities.map((v) => labelMap[v] || v)}
                    selected={labelMap[selectedCycle]}
                    setSelected={(label) =>
                      setSelectedCycle(
                        Object.keys(labelMap).find(
                          (k) => labelMap[k] === label
                        ) || label
                      )
                    }
                    color="red"
                  />
                </div>

                {/* TV Channels */}
                <div className="bg-yellow-50 border border-yellow-300 p-5 rounded-xl shadow-sm">
                  <h3 className="text-yellow-700 font-semibold text-lg mb-4">
                    Choose Your TV Channels
                  </h3>
                  <ButtonGrid
                    options={channelOptions}
                    selected={selectedChannel}
                    setSelected={setSelectedChannel}
                    color="yellow"
                  />
                </div>

                {/* OTT Options */}
                <div className="bg-green-50 border border-green-300 p-5 rounded-xl shadow-sm">
                  <h3 className="text-green-700 font-semibold text-lg mb-4">
                    Choose Your OTT Apps
                  </h3>
                  <ButtonGrid
                    options={ottOptions}
                    selected={selectedOtt}
                    setSelected={setSelectedOtt}
                    color="green"
                  />
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="w-full lg:w-[35%] flex flex-col gap-6">
                {/* Plan Summary */}
                <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-gray-800 font-semibold text-lg mb-4">
                      Plan Highlights
                    </h3>
                    {activePlan ? (
                      <>
                        <div className="space-y-3 text-sm text-gray-700">
                          <p>
                            <strong>Speed:</strong> {activePlan.internetSpeed}
                          </p>
                          <p>
                            <strong>Data:</strong> {activePlan.dataLimit}
                          </p>
                          <p>
                            <strong>Channels:</strong> {selectedChannel}
                          </p>
                          <p>
                            <strong>OTT Apps:</strong> {selectedOtt}
                          </p>
                          <p>
                            <strong>Validity:</strong> {labelMap[selectedCycle]}
                          </p>
                        </div>
                      </>
                    ) : (
                      <p className="text-gray-500 text-sm">
                        Select your plan details to see highlights.
                      </p>
                    )}
                  </div>

                  {activePlan && (
                    <div className="mt-6 border-t border-gray-200 pt-4">
                      <p className="text-xl font-bold text-gray-900">
                        ₹{activePlan.price}{" "}
                        <span className="text-sm text-gray-600">+ GST</span>
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {getDiscountMessage()}
                      </p>
                      <button className="mt-4 w-full py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-md font-semibold hover:shadow-lg hover:scale-[1.03] transition-all duration-200">
                        Subscribe Now
                      </button>
                    </div>
                  )}
                </div>

                {/* Contact Info */}
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl text-center">
                  <h5 className="text-gray-800 font-semibold mb-2">
                    Get in touch with our experts
                  </h5>
                  <h3 className="text-blue-700 font-bold text-xl mb-1">
                    <a
                      href="tel:9944199445"
                      className="underline hover:text-blue-900"
                    >
                      +91 99441 99445
                    </a>
                  </h3>
                  <p className="text-gray-600 text-sm">
                    24/7 Customer Care Service Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className={`pricing-plan-package-wrap custom-plan ${
              isMobile
                ? activeTab === "Customize Plan"
                  ? "tab-active"
                  : "tab-nonactive"
                : `tab-active default-tab${
                    activeTab === "Customize Plan" ? " colorful" : " gray"
                  }`
            }`}
          >
            <h2
              onClick={() => setActiveTag("Customize Plan")}
              style={{ cursor: "pointer" }}
            >
              Your Plan
            </h2>
            <div className="tab-wrap" style={{ display: "flex" }}>
              <div className="table-wrap">
                <table>
                  <tbody>
                    <tr className="speed-tabs-wrapper">
                      <td colSpan="2">
                        <Speed />
                        <BilledCycle />
                        <Channel />
                        <Ott />
                      </td>
                    </tr>
                    <PlanHighlights />
                  </tbody>
                </table>
              </div>
              <div className="custom-plans">
                <CustomPlans />
              </div>
              <div className="phone-number">
                <h5>Get in touch with our experts</h5>
                <h3>
                  {" "}
                  <a
                    href="tel:9944199445"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    +91 99441 99445
                  </a>
                </h3>
                <h6>24/7 Customer Care Service Available</h6>
              </div>
            </div>
            <CustomPlansMobile />
          </div>
        </>
      )}
    </>
  );
}
