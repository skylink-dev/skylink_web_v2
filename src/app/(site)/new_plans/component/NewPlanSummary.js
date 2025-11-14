import Image from "next/image";
import {
  Gauge,
  Database,
  Tv,
  PlayCircle,
  Calendar,
  Wrench,
  Zap,
  Crown,
  CheckCircle,
} from "lucide-react";
import { channelImageList } from "@/redux/data/ChannelsNamesImage";
import { ottImageList } from "@/redux/data/OTTNamesImage";

export default function NewPlanSummary({
  selectedSpeed,
  selectedValidity,
  selectedChannel,
  selectedOtt,
  discountList,
}) {
  if (!selectedSpeed || !selectedChannel || !selectedOtt) {
    return (
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 p-8 rounded-2xl text-center">
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
          <Zap className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-600 mb-2">
          Plan Summary
        </h3>
        <p className="text-gray-500 text-sm">
          Select your plan details to see your customized package
        </p>
      </div>
    );
  }

  // SPEED (remove Mbps text)
  const speedNumber = selectedSpeed?.name?.replace(/mbps/i, "").trim();

  // CHANNEL IMAGES
  const channelList =
    selectedChannel?.channelList?.map((name) => {
      const m = channelImageList?.find((i) => i.name === name);
      return m
        ? { name: m.name, image: m.image }
        : { name, image: "/newassets/channel/default.png" };
    }) || [];

  // OTT IMAGES
  const ottList =
    selectedOtt?.ottList?.map((name) => {
      const m = ottImageList?.find((i) => i.name === name);
      return m
        ? { name: m.name, image: m.image }
        : { name, image: "/newassets/ott/default.png" };
    }) || [];

  // VALIDITY LABEL
  const validityLabel =
    selectedValidity === 12
      ? "Annual"
      : selectedValidity === 6
      ? "Half Yearly"
      : selectedValidity === 3
      ? "Quarterly"
      : "Monthly";

  // PRICE CALCULATION
  const basePrice = selectedSpeed?.price * selectedValidity;
  return (
    <div className="w-full bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
      <div className="flex flex-col lg:flex-row">
        {/* LEFT SIDE - PLAN DETAILS & PRICING */}
        <div className="flex-1 p-8">
          {/* HEADER */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-red-600 rounded-xl flex items-center justify-center">
              <Crown className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">Your Plan</h2>
              <p className="text-sm text-gray-500">
                Perfect combination for your needs
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* FEATURES GRID */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">
                Plan Features
              </h3>

              {/* 
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Gauge className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                      Speed
                    </p>
                    <p className="font-bold text-lg text-gray-800">
                      {speedNumber} Mbps
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-700">
                  <CheckCircle className="w-4 h-4" />
                  <span>Lightning fast</span>
                </div>
              </div> */}

              {/* CHANNELS */}
              {/* <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-2xl border border-amber-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Tv className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-amber-600 uppercase tracking-wide">
                      Channels
                    </p>
                    <p className="font-bold text-gray-800">
                      {selectedChannel?.name}
                    </p>
                  </div>
                </div>

                {channelList?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {channelList.slice(0, 5).map((ch, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-xl p-2 shadow-sm border border-amber-200 hover:shadow-md hover:scale-105 transition-all duration-200"
                        title={ch.name}
                      >
                        <Image
                          src={ch.image}
                          alt={ch.name}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                    ))}
                    {channelList.length > 5 && (
                      <div className="text-xs text-amber-600 font-medium bg-amber-100 px-3 py-2 rounded-lg">
                        +{channelList.length - 5} more
                      </div>
                    )}
                  </div>
                )}
              </div> */}

              {/* OTT APPS */}
              {/* <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-2xl border border-purple-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <PlayCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-purple-600 uppercase tracking-wide">
                      OTT Apps
                    </p>
                    <p className="font-bold text-gray-800">
                      {selectedOtt?.name}
                    </p>
                  </div>
                </div>

                {ottList?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {ottList.slice(0, 5).map((ott, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-xl p-2 shadow-sm border border-purple-200 hover:shadow-md hover:scale-105 transition-all duration-200"
                        title={ott.name}
                      >
                        <Image
                          src={ott.image}
                          alt={ott.name}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                    ))}
                    {ottList.length > 5 && (
                      <div className="text-xs text-purple-600 font-medium bg-purple-100 px-3 py-2 rounded-lg">
                        +{ottList.length - 5} more
                      </div>
                    )}
                  </div>
                )}
              </div> */}

              {/* PRICING BREAKDOWN */}
              <div className="bg-gradient-to-br from-gray-50 to-slate-100 p-6 rounded-2xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Cost Breakdown
                </h3>

                <div className="space-y-4">
                  {/* Plan Duration */}
                  <div className="bg-white p-4 rounded-xl border border-gray-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        Plan Duration
                      </span>
                      <span className="text-sm font-semibold text-gray-800">
                        {validityLabel} ({selectedValidity} months)
                      </span>
                    </div>
                  </div>

                  {/* Cost Items */}
                  <div className="space-y-3">
                    {/* Internet Cost */}
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Gauge className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            Internet
                          </p>
                          <p className="text-xs text-gray-500">
                            {speedNumber} Mbps
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-gray-800">
                          ₹{selectedSpeed?.price * selectedValidity}
                        </p>
                        <p className="text-xs text-gray-500">
                          ₹{selectedSpeed?.price}/month
                        </p>
                      </div>
                    </div>

                    {/* TV Channels Cost */}
                    {selectedChannel?.price > 0 && (
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                            <Tv className="w-4 h-4 text-amber-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800">
                              TV Channels
                            </p>
                            <p className="text-xs text-gray-500">
                              {selectedChannel?.name}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-gray-800">
                            ₹{selectedChannel?.price * selectedValidity}
                          </p>
                          <p className="text-xs text-gray-500">
                            ₹{selectedChannel?.price}/month
                          </p>
                        </div>
                      </div>
                    )}

                    {/* OTT Apps Cost */}
                    {selectedOtt?.price > 0 && (
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                            <PlayCircle className="w-4 h-4 text-purple-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800">
                              OTT Apps
                            </p>
                            <p className="text-xs text-gray-500">
                              {selectedOtt?.name}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-gray-800">
                            ₹{selectedOtt?.price * selectedValidity}
                          </p>
                          <p className="text-xs text-gray-500">
                            ₹{selectedOtt?.price}/month
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Discount */}
                    {discountList?.discountAmount > 0 && (
                      <div className="flex justify-between items-center py-2 bg-green-50 rounded-lg px-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-green-800">
                              Discount Applied
                            </p>
                            <p className="text-xs text-green-600">
                              {discountList?.offerText}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-green-800">
                            -₹{discountList.discountAmount}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Total */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-semibold text-gray-800">
                            Total Payable
                          </p>
                          <p className="text-xs text-gray-600">
                            One-time payment for {selectedValidity} months
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-gray-800">
                            ₹{basePrice}
                          </p>
                          <p className="text-sm text-gray-600">
                            ≈ ₹{Math.round(basePrice / selectedValidity)}/month
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — CTA CARD */}
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white p-8 lg:max-w-xs flex flex-col justify-between relative overflow-hidden">
          {/* BACKGROUND PATTERN */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold text-white">
                Ready to Subscribe?
              </span>
            </div>

            <div className="text-center mb-6">
              <div className="text-3xl font-black mb-2">₹{basePrice}</div>
              <p className="text-white/80 text-sm">
                One-time payment • {selectedValidity} months
              </p>
              <p className="text-white/60 text-xs mt-1">
                ₹{Math.round(basePrice / selectedValidity)} per month
              </p>
            </div>

            {discountList?.offerText && (
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 mb-4 border border-white/30">
                <p className="text-sm font-medium text-white text-center">
                  🎉 {discountList.offerText}
                </p>
              </div>
            )}

            <div className="space-y-3 text-sm text-white/80 mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>No hidden charges</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Instant activation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>24/7 support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Free installation</span>
              </div>
            </div>
          </div>

          <button className="relative z-10 w-full py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
}
