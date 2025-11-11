import Link from "next/link";
import React, { useState } from "react";

const SkylinkQuickPayPage = () => {
  const [cafNumber, setCafNumber] = useState("");
  const [mobile, setMobile] = useState("");
  const [amount, setAmount] = useState("");
  const [serviceType, setServiceType] = useState("broadband");
  const [isFetching, setIsFetching] = useState(false);
  const [isPaying, setIsPaying] = useState(false);
  const [error, setError] = useState(null);
  const [customerName, setCustomerName] = useState(null);
  const [dueInfo, setDueInfo] = useState(null);

  const handleFetchDue = async (e) => {
    e.preventDefault();
    setError(null);

    if (!cafNumber || !mobile) {
      setError("Please enter CAF number and registered mobile.");
      return;
    }

    try {
      setIsFetching(true);
      const res = await fetch("/api/quick-pay/due", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_type: serviceType,
          caf_number: cafNumber,
          mobile,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        throw new Error(err?.message || "Failed to fetch due amount.");
      }

      const data = await res.json();
      setAmount(String(data.due_amount ?? ""));
      setCustomerName(data.customer_name || null);
      setDueInfo({ next_due_date: data.next_due_date });
    } catch (err) {
      setError(err.message || "Something went wrong while fetching due.");
    } finally {
      setIsFetching(false);
    }
  };

  const handlePay = async (e) => {
    e.preventDefault();
    setError(null);

    if (!cafNumber || !mobile || !amount) {
      setError("Please fill CAF, mobile and amount.");
      return;
    }

    try {
      setIsPaying(true);
      const res = await fetch("/api/quick-pay/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_type: serviceType,
          caf_number: cafNumber,
          mobile,
          amount: Number(amount),
          return_url: window.location.origin + "/payment/success",
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        throw new Error(err?.message || "Failed to initiate payment.");
      }

      const data = await res.json();
      if (data.redirect_url) {
        window.location.href = data.redirect_url;
      } else {
        setError("Payment created but redirect URL is missing.");
      }
    } catch (err) {
      setError(err.message || "Something went wrong while starting payment.");
    } finally {
      setIsPaying(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header truncated for brevity – keep the same one you already have */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-skylink-red text-xs font-bold text-white">
                S
              </div>
              <span className="text-lg font-semibold text-slate-900">
                Skylink
              </span>
            </Link>
            <nav className="hidden items-center gap-4 text-sm text-slate-600 md:flex">
              <Link href="/" className="hover:text-skylink-red">
                Home
              </Link>
              <Link href="/plans" className="hover:text-skylink-red">
                Plans
              </Link>
            </nav>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/quick-pay"
              className="rounded-full bg-skylink-red px-3 py-1.5 text-xs font-semibold text-white hover:bg-skylink-redDark"
            >
              Quick Pay
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-10">
        <section className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-skylink-red">
            Quick Pay
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900 md:text-4xl">
            Pay your Skylink bill in seconds
          </h1>
          <p className="mt-3 text-sm text-slate-600 md:text-base">
            No login required. Just enter your details, verify the amount, and
            pay securely.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-5 shadow-md">
          <form className="space-y-5" onSubmit={handlePay}>
            {/* Error message */}
            {error && (
              <div className="rounded-xl bg-red-50 px-3 py-2 text-xs text-red-600">
                {error}
              </div>
            )}

            {/* Service Toggle */}
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Service
              </p>
              <div className="inline-flex rounded-full bg-slate-100 p-1 text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setServiceType("broadband")}
                  className={`rounded-full px-4 py-1.5 transition ${
                    serviceType === "broadband"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  Broadband
                </button>
                <button
                  type="button"
                  onClick={() => setServiceType("iptv")}
                  className={`rounded-full px-4 py-1.5 transition ${
                    serviceType === "iptv"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  IPTV
                </button>
              </div>
            </div>

            {/* CAF / Account */}
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-700">
                CAF / Account Number
              </label>
              <input
                value={cafNumber}
                onChange={(e) => setCafNumber(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-skylink-red/20 focus:bg-white focus:ring-2"
                placeholder="Enter your CAF / account number"
              />
              <p className="mt-1 text-[11px] text-slate-400">
                You can find this on your invoice or welcome SMS / email.
              </p>
            </div>

            {/* Mobile */}
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-700">
                Registered Mobile Number
              </label>
              <div className="flex gap-2">
                <span className="inline-flex items-center rounded-xl border border-slate-200 bg-slate-50 px-3 text-xs text-slate-500">
                  +91
                </span>
                <input
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                  maxLength={10}
                  className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-skylink-red/20 focus:bg-white focus:ring-2"
                  placeholder="10-digit mobile number"
                />
              </div>
            </div>

            {/* Fetch due button */}
            <div className="flex items-center justify-between gap-2 rounded-xl bg-slate-50 px-3 py-2 text-xs">
              <span className="text-slate-600">
                Don’t know the bill amount? We can fetch it for you.
              </span>
              <button
                type="button"
                onClick={handleFetchDue}
                disabled={isFetching}
                className="rounded-full bg-white px-3 py-1 font-semibold text-skylink-red shadow-sm hover:bg-skylink-redSoft disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isFetching ? "Fetching..." : "Fetch Due"}
              </button>
            </div>

            {/* Fetched info */}
            {customerName && (
              <div className="rounded-xl bg-emerald-50 px-3 py-2 text-[11px] text-emerald-700">
                Hello <span className="font-semibold">{customerName}</span>
                {dueInfo?.next_due_date && (
                  <>
                    {" "}
                    – your next due date is{" "}
                    <span className="font-semibold">
                      {dueInfo.next_due_date}
                    </span>
                    .
                  </>
                )}
              </div>
            )}

            {/* Amount */}
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-700">
                Amount (₹)
              </label>
              <input
                type="number"
                min={1}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-skylink-red/20 focus:bg-white focus:ring-2"
                placeholder="Enter amount to pay"
              />
            </div>

            {/* Payment note */}
            <div className="rounded-xl bg-slate-50 p-3 text-[11px] text-slate-500">
              Payments are processed via a secure payment gateway. You will
              receive an SMS confirmation once the payment is successful.
            </div>

            {/* Pay button */}
            <button
              type="submit"
              disabled={isPaying}
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-skylink-red px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-skylink-redDark disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isPaying ? "Redirecting to payment..." : "Pay Now"}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};
export default SkylinkQuickPayPage;
