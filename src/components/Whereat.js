import Link from 'next/link';
import React from 'react'

export default function Whereat() {
    const indianStates = [
        { name: "Andhra Pradesh", capital: "Amaravati" },
        { name: "Arunachal Pradesh", capital: "Itanagar" },
        { name: "Assam", capital: "Dispur" },
        { name: "Bihar", capital: "Patna" },
        { name: "Chhattisgarh", capital: "Raipur" },
        { name: "Goa", capital: "Panaji" },
        { name: "Gujarat", capital: "Gandhinagar" },
        { name: "Haryana", capital: "Chandigarh" },
        { name: "Himachal Pradesh", capital: "Shimla" },
        { name: "Jharkhand", capital: "Ranchi" },
        { name: "Karnataka", capital: "Bengaluru" },
        { name: "Kerala", capital: "Thiruvananthapuram" },
        { name: "Madhya Pradesh", capital: "Bhopal" },
        { name: "Maharashtra", capital: "Mumbai" },
        { name: "Manipur", capital: "Imphal" },
        { name: "Meghalaya", capital: "Shillong" },
        { name: "Mizoram", capital: "Aizawl" },
        { name: "Nagaland", capital: "Kohima" },
        { name: "Odisha", capital: "Bhubaneswar" },
        { name: "Punjab", capital: "Chandigarh" },
        { name: "Rajasthan", capital: "Jaipur" },
        { name: "Sikkim", capital: "Gangtok" },
        { name: "Tamil Nadu", capital: "Chennai" },
        { name: "Telangana", capital: "Hyderabad" },
        { name: "Tripura", capital: "Agartala" },
        { name: "Uttar Pradesh", capital: "Lucknow" },
        { name: "Uttarakhand", capital: "Dehradun" },
        { name: "West Bengal", capital: "Kolkata" }
      ];
  return (
   <div className="max-width-background bgcolor theme-base-bg pad-b-md pad-t-xs">
    <div className="container">
        <div className="row justify-center">
            <div className="text-center grid-col-10">
            <h2 className="jsx-2262622147 heading-xxl">Where Skylink Fiber service is available</h2>
            </div>
        </div>
        <div className="row justify-center">
            <div className="rel grid-col-12">
                <ul className="jsx-1831028250 bullets type-sm  custom-cols">
                    {indianStates.map((item, index) => (
                    <li key={index} className="font-regular linkfarmLI pad-t-xxs pad-b-xxs mar-b-none">
                    <Link id="link-:r1m:" className="link-text" href="#">{item.name}</Link>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
   </div>
  )
}
