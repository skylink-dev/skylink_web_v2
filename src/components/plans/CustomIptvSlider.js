import React, { useState } from "react";

const CustomIptvSlider = ({ iptvaddons }) => {
  const currentIndex = useState(0);
  const items = iptvaddons.filter(item => item && item.trim() !== "");
  if (items.length === 0) return null;
  const currentItem = items[currentIndex].trim();
  const renderSlide = () => {
    switch (currentItem) {
      case "Skyplay Mini":
        return (
          <div className="info-details px-4">
            <h2 className="mt-4 font-semibold">Mini Addon - ₹ 211</h2>
            <div className="image-wrap w-100 flex gap-2">
              <img alt="sun-tv" width={40} height={40} src="https://skyplay.in/assets/sun-tv.png" />
              <img alt="zee" width={40} height={40} src="https://skyplay.in/assets/zee-tamizh.png" />
              <img alt="vijay" width={40} height={40} src="https://skyplay.in/assets/vijay-tv.png" />
            </div>
          </div>
        );
      case "Skyplay Pro":
        return (
          <div className="info-details px-4">
            <h2 className="mt-4 font-semibold">Pro Addon - ₹ 282</h2>
            <div className="image-wrap w-100 flex gap-2">
              <img alt="sun-tv" width={40} height={40} src="https://skyplay.in/assets/sun-tv.png" />
              <img alt="zee" width={40} height={40} src="https://skyplay.in/assets/zee-tamizh.png" />
              <img alt="vijay" width={40} height={40} src="https://skyplay.in/assets/vijay-tv.png" />
              <img alt="star" width={40} height={40} src="https://skyplay.in/assets/star-sports.png" />
            </div>
          </div>
        );
      case "Skyplay Premium":
        return (
          <div className="info-details px-4">
            <h2 className="mt-4 font-semibold">Premium Addon</h2>
            <div className="image-wrap w-100 flex gap-2">
              <img alt="sun-tv" width={40} height={40} src="https://skyplay.in/assets/sun-tv.png" />
              <img alt="zee" width={40} height={40} src="https://skyplay.in/assets/zee-tamizh.png" />
              <img alt="vijay" width={40} height={40} src="https://skyplay.in/assets/vijay-tv.png" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="custom-slider relative w-full max-w-md mx-auto">
      <div>{renderSlide()}</div>
    </div>
  );
};

export default CustomIptvSlider;
