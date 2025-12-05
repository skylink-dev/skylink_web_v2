"use client";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ottImageList } from "@/redux/data/OTTNamesImage";
import { channelImageList } from "@/redux/data/ChannelsNamesImage";
import Image from "next/image";

/**
 * SelectedPlanSummary (Option A)
 * - Accordion for details (collapsible)
 * - Total & Subscribe button always visible at the bottom (outside accordion)
 * - Responsive, compact, modern styling (Tailwind)
 *
 * Props: speed, validity, installation, channel, ott, internetCharge, discount
 */
export default function SelectedPlanSummary({
  activeTab,
  speed,
  validity,
  installation = 0,
  channel,
  ott,
  discount,
  setSelectedPlan,
  isContactOpen,
  setIsContactOpen,
  setShowInfo,
  onSubscribe = () => {},
}) {
  const [open, setOpen] = useState(true);

  const ottImage =
    ott?.ottList?.map((ottName) => {
      const match = ottImageList.find((item) => item.name === ottName);
      return match
        ? { name: match.name, image: match.image }
        : { name: ottName, image: "/newassets/ott/default.png" };
    }) || [];

  function getExtraCharges(list) {
    for (let item of list?.packValidity) {
      if (item?.speed + "" == speed.name + "") {
          //ottExtraCharge*12)+(ottExtraCharge*12*18/100)
        return Math.round((item.additionalcost*validity)*100)/100;
      }
    }
  }

  const ottExtraCharge = getExtraCharges(ott);
  const channelExtraCharge = getExtraCharges(channel);
  // 🟢 Extract Channel image list

  const channelImage = channel?.channelList.map((chName) => {
    const match = channelImageList.find((item) => item.name === chName);
    return match
      ? { name: match.name, image: match.image }
      : { name: chName, image: "/newassets/channel/default.png" };
  });

  for (let install of installation) {
    if (install?.speed + "" == speed.name + "") {
      let curridx = -1;
      for (let i = 0; i <= install?.validity?.length; i++) {
        if (install?.validity[i] + "" == validity + "") {
          curridx = i;
        }
      }
      if (curridx != -1) {
        installation = install?.amount[curridx];
      }
    }
  }
  for (let discountPrice of discount) {
    if (discountPrice?.speed + "" == speed.name + "") {
      let curridx = -1;
      for (let i = 0; i < discountPrice?.validity?.length; i++) {
        if (discountPrice?.validity[i] + "" == validity + "") {
          curridx = i;
        }
      }
      if (curridx != -1) {
        discount = discountPrice?.rate[curridx];
      }
    }
  }

  // calculations
  const subtotal = Math.max(
    0,
    speed?.price * validity +
      installation +
      ottExtraCharge +
      channelExtraCharge +
      -(speed?.price * validity * discount * 0.01)
  );
  const gst = Math.round(subtotal * 0.18 * 100) / 100;
  const total = Math.round((subtotal + gst) * 100) / 100;

  const billingCycleStr = `₹${Math.round(speed?.price)} / month`;

  return (
    <div
      className={`w-full ${activeTab == "Custom Plan" ? " " : "opacity-50 "}`}
    >
      <div
        className={`bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl`}
      >
        {/* Top row: compact highlights */}
        <div
          className={`mt-4 text-start px-4 text-xl font-bold ${
            activeTab == "Custom Plan"
              ? " bg-gradient-to-r from-red-600 to-red-700"
              : " bg-gradient-to-r from-gray-600 to-gray-700 hidden"
          }  bg-clip-text text-transparent`}
        >
          Plan Highlights
        </div>
        <div
          className={`flex flex-col sm:flex-row gap-4 p-5 sm:p-6 border-b border-gray-100`}
        >
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch gap-4 auto-rows-fr">
            <Highlight label="Speed" value={speed.name} />
            <Highlight
              label="TV Channels"
              value={`${channel.name}+`}
              imageList={channelImage}
            />
            <Highlight
              label="OTTs"
              value={`${ott.name}+`}
              imageList={ottImage}
            />
            {/* Billing cycle summary */}
            <div className="sm:w-56 md:w-full flex items-center justify-center sm:justify-end">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl border border-indigo-100 text-center w-full shadow-sm">
                <div className="text-xs text-gray-600 font-medium">
                  Billing Cycle
                </div>
                <div className="mt-1 font-bold text-gray-900 text-lg">
                  {validity} months
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  {billingCycleStr}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion header */}
        <button
          type="button"
          onClick={() => setOpen((s) => !s)}
          className={` ${
            activeTab == "Custom Plan" ? " " : " hidden "
          } w-full flex items-center justify-between gap-3 px-5 py-4 bg-white hover:bg-gray-50 transition-all duration-200 border-b border-gray-100 group`}
          aria-expanded={open}
        >
          <div className="flex items-center gap-3">
            <div
              className={`text-xl font-bold ${
                activeTab == "Custom Plan"
                  ? " bg-gradient-to-r from-red-600 to-red-700"
                  : " bg-gradient-to-r from-gray-600 to-gray-700 "
              }  bg-clip-text text-transparent`}
            >
              Selected Plan Details
            </div>
            <div className="text-sm text-gray-500 hidden sm:block transition-colors group-hover:text-gray-700">
              Tap to {open ? "collapse" : "expand"}
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-500 transition-colors group-hover:text-gray-700">
            {open ? (
              <ChevronUp className="w-5 h-5 transition-transform" />
            ) : (
              <ChevronDown className="w-5 h-5 transition-transform" />
            )}
          </div>
        </button>

        {/* Accordion body */}
        {open && (
          <div
            className={` ${
              activeTab == "Custom Plan" ? " " : " hidden "
            } p-5 sm:p-6 bg-white animate-in fade-in duration-200`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* <Row label="Speed" value={speed.name} />
              <Row label="Billing Cycle" value={`${validity} months`} /> */}
              <Row
                label="Internet Charges"
                value={`₹${speed?.price} X ${validity}`}
              />

              <Row
                label="Installation"
                value={` ${installation > 0 ? `₹ ${installation}` : `Free`}`}
              />
              {channelExtraCharge <= 0 ? (
                <></>
              ) : (
                <Row
                  label={`${channel.name} + Channels `}
                  value={`₹ ${channelExtraCharge} `}
                />
              )}

              {ottExtraCharge <= 0 ? (
                <></>
              ) : (
                <Row
                  label={`${ott.name} + OTTs `}
                  value={`₹ ${ottExtraCharge} `}
                />
              )}
              <Row label="GST (18%)" value={`₹ ${gst}`} />

              {discount > 0 && (
                <div
                  className={` w-full h-full flex items-center gap-2 text-sm font-medium ${
                    activeTab == "Custom Plan"
                      ? "text-green-600 bg-green-50  border-green-100"
                      : " text-gray-600 bg-gray-50  border-gray-100 "
                  }  rounded-lg p-3 border `}
                >
                  <div
                    className={`w-2 h-2 ${
                      activeTab == "Custom Plan"
                        ? " bg-green-500"
                        : " bg-gray-500 "
                    }  rounded-full`}
                  ></div>
                  Discount applied: - ₹
                  {speed?.price * validity * discount * 0.01}
                </div>
              )}

              {/* <div className="sm:col-span-2">
                <div className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3 border border-gray-100">
                  <strong className="text-gray-700">Notes:</strong> Installation
                  charge {installation > 0 ? `₹${installation}` : "Free"} • GST
                  18% applied on subtotal.
                </div>
              </div> */}
            </div>

            {/* Discount line inside details (if any) */}
          </div>
        )}

        {/* Bottom: always-visible total & subscribe */}
        <div
          className={` ${
            activeTab == "Custom Plan" ? " " : "hidden "
          } bg-gradient-to-r from-gray-50 to-gray-100 px-5 py-5 sm:px-6 sm:py-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-between border-t border-gray-200`}
        >
          <div className="flex flex-col items-center p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
            <div className="text-sm text-gray-500 font-medium tracking-wide">
              Total Amount
            </div>

            <div className="flex items-end gap-2 mt-2">
              <span className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-br from-red-600 to-red-700 bg-clip-text text-transparent drop-shadow-sm">
                ₹{total}
              </span>
              <span className="text-xs sm:text-sm text-gray-500 font-medium">
                (incl. GST)
              </span>
            </div>

            {/* <div className="mt-2 text-xs sm:text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
              Subtotal:{" "}
              <span className="font-semibold text-gray-800">₹{subtotal}</span>
              &nbsp;•&nbsp; GST:{" "}
              <span className="font-semibold text-gray-800">₹{gst}</span>
            </div> */}
          </div>
          {/* <div className="flex flex-col">
            <div className="text-sm text-gray-600 font-medium">Total</div>
            <div className="flex justify-center items-baseline gap-2 mt-1">
              <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                ₹{total}
              </div>
              <div className="text-sm text-gray-500">incl. GST</div>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              You pay now:{" "}
              <span className="font-semibold justify-center text-gray-800">
                ₹{subtotal}
              </span>{" "}
              + GST ₹{gst}
            </div>
          </div> */}

          <div className="flex-1 sm:flex-none flex items-center">
            <button
              onClick={() => {
                setShowInfo(false);
                setIsContactOpen(!isContactOpen);
              }}
              className={`w-full ${
                activeTab == "Custom Plan"
                  ? " bg-gradient-to-r from-emerald-600 to-emerald-700 hover:to-emerald-800"
                  : "bg-gradient-to-r from-gray-600 to-gray-700 hover:to-gray-800  "
              } sm:w-auto px-8 py-4  text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-emerald-700  active:scale-[0.99] transition-all duration-200 transform hover:-translate-y-0.5`}
              aria-label="Subscribe now"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Small subcomponents for clarity */

function Highlight({ label, value, imageList = [] }) {
  // console.log(imageList);
  return (
    <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all duration-200 hover:border-gray-300">
      <>
        {imageList?.length > 0 ? (
          <div className={`flex flex-ssl gap-1`}>
            {imageList.map((currimage) => {
              return (
                <Image
                  key={currimage.name}
                  alt={currimage.name}
                  src={currimage.image}
                  width={20}
                  height={20}
                  className="w-8 h-8 rounded-xl"
                />
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </>
      <div className="text-lg font-bold text-gray-900">{value}</div>
      <div className="text-xs text-gray-600 mt-1 font-medium">{label}</div>
    </div>
  );
}

function Row({ label, value, valueClass = "text-gray-800" }) {
  return (
    <div className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3 border border-gray-100 hover:bg-white hover:border-gray-200 transition-all duration-200">
      <div className="text-sm text-gray-700 font-medium">{label}</div>
      <div className={`text-sm font-semibold ${valueClass}`}>{value}</div>
    </div>
  );
}
