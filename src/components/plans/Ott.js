import React from "react";
import { usePlans } from "../../../src/app/(site)/plans/context/PlansContext";

export default function Ott() {
  const {
    planOptions: { ottOptions, pricing },
    activeTab,
    activeSpeed,
    activeNestedTab,
    activeOtts,
    setActiveOtts,
    setActiveTag,
    setActiveTab,
  } = usePlans();

  const isDisabled = (option) => {
    const activePricing = pricing[activeSpeed]?.[activeNestedTab]?.ott;
    const activeIndex = ottOptions.indexOf(activePricing);
    const optionIndex = ottOptions.indexOf(option);
    return optionIndex !== -1 && optionIndex < activeIndex;
  };
  const getLabel = (option) => {
    const activePricing = pricing[activeSpeed]?.[activeNestedTab]?.ott;
    if (isDisabled(option)) return "";
    return activePricing === option ? " (Free)" : " (Add-on)";
  };
  return (
    activeOtts && (
      <>
        <div className="greenWrap">
          <h3 className="greenFont">Choose Your OTT&apos;s</h3>
          <div className="wrapforplans green">
            <div>
              <div className="plans-tabs">
                {ottOptions.map((option) => (
                  <div
                    key={option}
                    className={`plan-tab ${
                      activeOtts === option ? "plan-active" : ""
                    } ${isDisabled(option) ? "disabled" : ""}`}
                    onClick={() => {
                      if (!isDisabled(option)) {
                        setActiveOtts(option);
                      }
                      //   setActiveTag("Customize Plan");
                      setActiveTab("Customize Plan");
                    }}
                  >
                    {option}
                    {getLabel(option)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}
