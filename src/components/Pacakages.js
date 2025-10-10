'use client'
import React, { useState } from 'react';

export default function Packages() {
    const [activeTab, setActiveTab] = useState("Best Offers");

    const tabs = [
        "Best Offers",
        "Annual",
        "Semi Annual",
        "Quarterly",
        "Monthly",
        "ISD",
        "Data Sachet",
        "Back-up Plan"  
    ];
    const planData = {
        'Best Offers': [
          {
            speed: '30 Mbps',
            price: '₹2222',
            validity: '3 Months',
          },
          {
            speed: '50 Mbps',
            price: '₹2999',
            validity: '3 Months',
          },
        ],
        Annual: [],
        'Semi Annual': [],
        Quarterly: [],
        Monthly: [],
        ISD: [],
        'Data Sachet': [],
        'Back-up Plan': [],
      };

      const renderTabContent = () => {
        const plans = planData[activeTab] || [];
    
        return (
          <div className="tabDetails" style={{ marginLeft: '2rem', flex: 1 }}>
            <h3>{activeTab}</h3>
            {plans.length > 0 ? (
              plans.map((plan, index) => (
                <div key={index} className="price-card-row">
                  <div className="package-names">{plan.speed}</div>
                  <div className="price-card">
                    <div className="price-details-wrap">
                      <div className="title-wrap">
                        <div className="plan-name">
                          <div className="price-wrap-header price flex justify-between">
                            <div>{plan.price}</div>
                            <svg viewBox="0 0 24 24" fill="none">
                              <path
                                d="M10 17a1.002 1.002 0 01-1.006-1 1 1 0 01.296-.71l3.3-3.29-3.3-3.29a1.004 1.004 0 011.42-1.42l4 4a.997.997 0 01.219 1.095.999.999 0 01-.22.325l-4 4A1 1 0 0110 17z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="price-detail flex">
                            <div className="validity">
                              <div className="validity-title">Validity</div>
                              <div className="validity-value">{plan.validity}</div>
                            </div>
                            <div className="speed">
                              <div className="speed-title">Speed</div>
                              <div className="speed-value">{plan.speed}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No plans available for <strong>{activeTab}</strong>.</p>
            )}
          </div>
        );
      };

    return (
        <div className="bgcolor max-width-background mar-b-xxs margin-bottom">
        <div className="container">
          <div className="row" style={{ display: 'flex' }}>
            <div className="packages" style={{ minWidth: '220px' }}>
              <h3 style={{ marginBottom: '15px' }}>Plan Category</h3>
              <div className="plan-category">
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {tabs.map((tab) => (
                    <li
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={activeTab === tab ? 'active' : ''}
                    >
                      {tab}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
  
            {/* Dynamic tab content */}
            {renderTabContent()}
          </div>
        </div>
      </div>  
    );
}