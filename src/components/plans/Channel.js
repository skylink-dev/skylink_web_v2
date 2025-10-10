import React from 'react';
import { usePlans } from '../../../src/app/(site)/plans/context/PlansContext';
import { isChannelOptionDisabled, getChannelLabel } from '../../../src/app/(site)/plans/utils/channelUtils';

export default function Channel() {
    const { planOptions: { tvChannel, pricing }, activeTab, activeNestedTab, activeChannel, setActiveChannel, setActiveTag } = usePlans();
    const activePricing = pricing[activeTab]?.[activeNestedTab]?.tv;
    return (
        activeChannel && (
            <>
            <div className="yellowWrap">
                <h3 className='yellowFont'>Choose Your TV Channels</h3>
                <div className="wrapforplans yellow">
                    <div>
                        <div className="plans-tabs">
                            {tvChannel.map((option) => {
                                const disabled = isChannelOptionDisabled(activePricing, option);
                                return (
                                <div
                                    key={option}
                                    className={`plan-tab ${activeChannel === option ? "plan-active" : ""} ${disabled ? "disabled" : ""}`}
                                    onClick={() => {
                                        if (!disabled) {
                                            setActiveChannel(option);
                                            setActiveTag("Customize Plan");
                                        }
                                    }}
                                >
                                    {option}<span className='include-wrap'>{getChannelLabel(activePricing, option)}</span>
                                </div>
                            )})}
                        </div>
                    </div>
                </div>
                </div>
            </>
        )
    );
}