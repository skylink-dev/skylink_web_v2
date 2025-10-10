import React from 'react';
import { usePlans } from '../../../src/app/(site)/plans/context/PlansContext';

export default function Speed() {
  const { planOptions: { speeds, pricing }, activeTab, setActiveTab, activeNestedTab, setActiveNestedTab, setActiveChannel, setActiveOtts, setActiveTag } = usePlans();

  return (
    <>
    <div className="blueWrap">
      <h3 style={{ marginTop: "0px" }} className="bluefont">Choose Your BandWidth</h3>
      <div className="wrapforplans blue">
        <div className="mbps-wrap">
          {speeds.map((speed) => (
            <div
              key={speed}
              className={`mpbstab ${speed === activeTab ? 'mbps-active' : ''}`}
              onClick={() => {
                setActiveTab(speed);
                setActiveNestedTab(activeNestedTab);
                setActiveChannel(prevChannel => pricing[speed]?.[activeNestedTab]?.tv || prevChannel);
                setActiveOtts(prevOTT => pricing[speed]?.[activeNestedTab]?.ott || prevOTT);
                setActiveTag("Customize Plan");
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
