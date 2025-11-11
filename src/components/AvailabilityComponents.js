'use client'
import Link from 'next/link'
import React, { useState } from 'react'

export default function AvailabilityComponents() {
  const [inputValue, setInputValue] = useState('')
  const [showPopup, setShowPopup] = useState(false)
  const [isAvailable, setIsAvailable] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const availableAreas = [
    'Tamil Nadu', 'Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirunelveli', 'Tiruppur'
  ]

  const checkAvailability = () => {
    const userInput = inputValue.trim().toLowerCase()
    if (!userInput) {
      setErrorMessage('Please enter your location')
      return
    }
    setErrorMessage('')
    if (availableAreas.some(area => userInput.includes(area.toLowerCase()))) {
      setIsAvailable(true)
    } else {
      setIsAvailable(false)
    }
    setShowPopup(true)
  }

  const closePopup = () => {
    setShowPopup(false)
    setIsAvailable(null)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') checkAvailability()
  }

  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Light Gray Container with max-width 5xl */}
      <div className="w-full max-w-5xl bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 text-gray-900 max-w-xl mx-auto leading-tight">
          Enter your address to get started
        </h2>

        {/* Input + Button in single row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-start gap-3 sm:gap-4 mb-6 w-full max-w-md mx-auto">
          {/* Input Field */}
          <div className="w-full sm:flex-1 flex flex-col">
            <input
              type="text"
              placeholder="Enter Your City Name"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value)
                setErrorMessage('')
              }}
              onKeyPress={handleKeyPress}
              className="w-full border border-gray-300 rounded-xl py-2.5 px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 h-[44px]"
            />
            <p className="text-red-500 text-xs sm:text-sm h-5 mt-1">{errorMessage}</p>
          </div>

          {/* Button with same height as input */}
          <button
            onClick={checkAvailability}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm sm:text-base py-2.5 px-5 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 w-full sm:w-auto h-[44px] flex items-center justify-center whitespace-nowrap"
          >
            Check availability
          </button>
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-2 sm:gap-3 mb-4 p-3 bg-white rounded-lg text-sm sm:text-base max-w-md mx-auto">
          <input
            id="home-business"
            type="checkbox"
            className="w-4 h-4 accent-red-600 rounded focus:ring-2 focus:ring-red-500"
          />
          <label htmlFor="home-business" className="text-gray-700">
            This is my home or business
          </label>
        </div>

        {/* Business Link */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base">
          <p className="text-gray-600">Are you a business customer?</p>
          <Link href="/plans" className="text-red-600 font-medium hover:underline">
            Learn more about business offers
          </Link>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 sm:p-8 rounded-2xl max-w-sm sm:max-w-md w-full shadow-2xl">
            {isAvailable ? (
              <>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                  🎉 Great news!
                </h3>
                <p className="text-gray-700 mb-5 text-center text-sm sm:text-base">
                  Service is available in your area.
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    href="tel:+919944199445"
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 px-6 rounded-xl text-center transition-all duration-200 text-sm sm:text-base"
                  >
                    Call (+91) 99441 99445
                  </Link>
                  <Link
                    href="mailto:support@skyplay.in"
                    className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2.5 px-6 rounded-xl text-center transition-all duration-200 text-sm sm:text-base"
                  >
                    support@skyplay.in
                  </Link>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                  Sorry 😕
                </h3>
                <p className="text-gray-700 mb-4 text-center text-sm sm:text-base">
                  Service is not available in your area.
                </p>
                <p className="text-gray-700 text-center mb-5 text-sm sm:text-base">
                  Phone:{' '}
                  <Link
                    href="tel:+919944199445"
                    className="text-red-600 font-semibold hover:underline"
                  >
                    (+91) 99441 99445
                  </Link>
                </p>
              </>
            )}
            <button
              onClick={closePopup}
              className="w-full mt-2 py-2.5 px-6 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm sm:text-base transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}