"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

/**
 * SelectedPlanSummary (Option A)
 * - Accordion for details (collapsible)
 * - Total & Subscribe button always visible at the bottom (outside accordion)
 * - Responsive, compact, modern styling (Tailwind)
 *
 * Props: speed, validity, installation, channelCount, ottCount, internetCharge, discount
 */
export default function SelectedPlanSummary({
  speed = "50 Mbps",
  validity = 3,
  installation = 1000,
  channelCount = 350,
  ottCount = 22,
  internetCharge = 1497,
  discount = 0,
  onSubscribe = () => {},
}) {
  const [open, setOpen] = useState(true);

  // calculations
  const subtotal = Math.max(0, internetCharge + installation - discount);
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + gst;

  const billingCycleStr = `₹${Math.round(
    internetCharge / (validity || 1)
  )} / month`;

  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl">
        {/* Top row: compact highlights */}
        <div className="flex flex-col sm:flex-row gap-4 p-5 sm:p-6 border-b border-gray-100">
          <div className="flex-1 grid grid-cols-3 gap-4">
            <Highlight label="Speed" value={speed} />
            <Highlight label="TV Channels" value={`${channelCount}+`} />
            <Highlight label="OTTs" value={`${ottCount}+`} />
          </div>

          {/* Billing cycle summary */}
          <div className="sm:w-56 flex items-center justify-center sm:justify-end">
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

        {/* Accordion header */}
        <button
          type="button"
          onClick={() => setOpen((s) => !s)}
          className="w-full flex items-center justify-between gap-3 px-5 py-4 bg-white hover:bg-gray-50 transition-all duration-200 border-b border-gray-100 group"
          aria-expanded={open}
        >
          <div className="flex items-center gap-3">
            <div className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
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
          <div className="p-5 sm:p-6 bg-white animate-in fade-in duration-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Row label="Speed" value={speed} />
              <Row label="Billing Cycle" value={`${validity} months`} />
              <Row label="Internet Charges" value={`₹${internetCharge}`} />
              <Row label="Installation" value={`₹${installation}`} />
              <Row label="Channels" value={`${channelCount}+`} />
              <Row label="OTTs" value={`${ottCount}+`} />
              <div className="sm:col-span-2">
                <div className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3 border border-gray-100">
                  <strong className="text-gray-700">Notes:</strong> Installation
                  charge {installation > 0 ? `₹${installation}` : "Free"} • GST
                  18% applied on subtotal.
                </div>
              </div>
            </div>

            {/* Discount line inside details (if any) */}
            {discount > 0 && (
              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-green-600 bg-green-50 rounded-lg p-3 border border-green-100">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Discount applied: - ₹{discount}
              </div>
            )}
          </div>
        )}

        {/* Bottom: always-visible total & subscribe */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-5 py-5 sm:px-6 sm:py-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-between border-t border-gray-200">
          <div className="flex flex-col">
            <div className="text-sm text-gray-600 font-medium">Subtotal</div>
            <div className="flex items-baseline gap-2 mt-1">
              <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                ₹{total}
              </div>
              <div className="text-sm text-gray-500">incl. GST</div>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              You pay now:{" "}
              <span className="font-semibold text-gray-800">₹{subtotal}</span> +
              GST ₹{gst}
            </div>
          </div>

          <div className="flex-1 sm:flex-none flex items-center">
            <button
              onClick={onSubscribe}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-emerald-700 hover:to-emerald-800 active:scale-[0.99] transition-all duration-200 transform hover:-translate-y-0.5"
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

function Highlight({ label, value }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all duration-200 hover:border-gray-300">
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
