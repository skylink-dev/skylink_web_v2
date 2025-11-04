import Link from "next/link";
import React from "react";

export default function Whereat() {
  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  // Split into 6 columns (5 per col, last one has 3)
  const columns = [];
  for (let i = 0; i < indianStates.length; i += 5) {
    columns.push(indianStates.slice(i, i + 5));
  }

  return (
    <section className="bg-white py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-black text-center mb-10">
        Where Skylink Fiber Service is Available
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-2 justify-items-start text-base md:text-lg text-gray-800 max-w-6xl mx-auto">
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-1 text-left">
            {col.map((state, index) => (
              <Link
                key={index}
                href="#"
                className="underline underline-offset-4 decoration-red-500 hover:text-red-600 transition duration-200"
              >
                {state}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
