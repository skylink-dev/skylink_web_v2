import React from "react";
import { usePlans } from "../../../src/app/(site)/plans/context/PlansContext";
import getBillingCycleLabel from "../../../src/app/(site)/plans/utils/planUtils";

export default function BilledCycle() {
  const {
    planOptions: { billedCycle },
    activeNestedTab,
    setActiveNestedTab,
    checkCondition,
    setActiveTab,
    setActiveTag,
  } = usePlans();
  return (
    checkCondition && (
      <>
        <div className="redWrap w-full">
          <h3 className="redFont">Choose Your Billing Cycle</h3>
          <div className="wrapforplans redBorder">
            <div>
              <div className="plans-tabs">
                {billedCycle.map((option) => (
                  <div
                    key={option}
                    className={`plan-tab ${
                      option === activeNestedTab ? "plan-active" : ""
                    }`}
                    onClick={() => {
                      setActiveNestedTab(option);
                      // setActiveTag("Customize Plan");
                      setActiveTab("Customize Plan");
                    }}
                  >
                    {option === "Yearly" ? "Annual" : option}{" "}
                    {getBillingCycleLabel(option)}
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
