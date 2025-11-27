import React from "react";
import { usePlans } from "../../../src/app/(site)/plans/context/PlansContext";

export default function Speed() {
  const {
    planOptions: { speeds, pricing },
    activeTab,
    setActiveTab,
    activeNestedTab,
    setActiveNestedTab,
    setActiveChannel,
    setActiveOtts,
    setActiveTag,
    setActiveSpeed,
    activeSpeed,
  } = usePlans();

  return (
    <>
      <div className="blueWrap">
        <h3 style={{ marginTop: "0px" }} className="bluefont">
          Choose Your BandWidth
        </h3>
        <div className="wrapforplans blue">
          <div className="mbps-wrap">
            {speeds.map((speed) => (
              <div
                key={speed}
                className={`mpbstab ${
                  speed === activeSpeed ? "mbps-active" : ""
                }`}
                onClick={() => {
                  // setActiveTab(speed);
                  setActiveSpeed(speed);
                  setActiveNestedTab(activeNestedTab);
                  setActiveChannel(
                    (prevChannel) =>
                      pricing[speed]?.[activeNestedTab]?.tv || prevChannel
                  );
                  setActiveOtts(
                    (prevOTT) =>
                      pricing[speed]?.[activeNestedTab]?.ott || prevOTT
                  );
                  setActiveTab("Customize Plan");
                }}
              >
                {speed}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
