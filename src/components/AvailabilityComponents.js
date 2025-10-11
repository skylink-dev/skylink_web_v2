'use client'
import Link from 'next/link'
import React, { useState } from 'react'

export default function AvailabilityComponents() {
    const [inputValue, setInputValue] = useState('')
    const [showPopup, setShowPopup] = useState(false)
    const [isAvailable, setIsAvailable] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')

    const availableAreas = [
        "Tamil Nadu",
        'Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirunelveli', 'Tiruppur', 'Ranipet', 'Nagercoil',
        'Thanjavur', 'Vellore', 'Kancheepuram', 'Erode', 'Tiruvannamalai', 'Pollachi', 'Rajapalayam', 'Sivakasi',
        'Pudukkottai', 'Neyveli (TS)', 'Nagapattinam', 'Viluppuram', 'Tiruchengode', 'Vaniyambadi', 'Theni Allinagaram',
        'Udhagamandalam', 'Aruppukkottai', 'Paramakudi', 'Arakkonam', 'Virudhachalam', 'Srivilliputhur', 'Tindivanam',
        'Virudhunagar', 'Karur', 'Valparai', 'Sankarankovil', 'Tenkasi', 'Palani', 'Pattukkottai', 'Tirupathur',
        'Ramanathapuram', 'Udumalaipettai', 'Gobichettipalayam', 'Thiruvarur', 'Thiruvallur', 'Panruti', 'Namakkal',
        'Thirumangalam', 'Vikramasingapuram', 'Nellikuppam', 'Rasipuram', 'Tiruttani', 'Nandivaram-Guduvancheri',
        'Periyakulam', 'Pernampattu', 'Vellakoil', 'Sivaganga', 'Vadalur', 'Rameshwaram', 'Tiruvethipuram', 'Perambalur',
        'Usilampatti', 'Vedaranyam', 'Sathyamangalam', 'Puliyankudi', 'Nanjikottai', 'Thuraiyur', 'Sirkali', 'Tiruchendur',
        'Periyasemur', 'Sattur', 'Vandavasi', 'Tharamangalam', 'Tirukkoyilur', 'Oddanchatram', 'Palladam',
        'Vadakkuvalliyur', 'Tirukalukundram', 'Uthamapalayam', 'Surandai', 'Sankari', 'Shenkottai', 'Vadipatti', 'Sholingur',
        'Manachanallur', 'Viswanatham', 'Polur', 'Panagudi', 'Uthiramerur', 'Thiruthuraipoondi', 'Pallapatti', 'Ponneri',
        'Lalgudi', 'Natham', 'Unnamalaikadai', 'P.N.Patti', 'Tharangambadi', 'Tittakudi', 'Pacode', "O' Valley",
        'Suriyampalayam', 'Sholavandan', 'Thammampatti', 'Namagiripettai', 'Peravurani', 'Parangipettai', 'Pudupattinam',
        'Pallikonda', 'Sivagiri', 'Punjaipugalur', 'Padmanabhapuram', 'Thirupuvanam', "Delhi",
        'New Delhi', 'North Delhi', 'South Delhi', 'East Delhi', 'West Delhi', 'Central Delhi', 'Shahdara', 'Dwarka',
        'Rohini', 'Karol Bagh', 'Saket', 'Janakpuri', 'Narela', 'Najafgarh', 'Mayur Vihar', 'Vasant Kunj', 'Laxmi Nagar',
        'Chandni Chowk', 'Connaught Place', 'Lajpat Nagar', 'Pitampura',

        "Rajasthan",
        'Jaipur', 'Jodhpur', 'Bikaner', 'Udaipur', 'Ajmer', 'Bhilwara', 'Alwar', 'Bharatpur', 'Pali', 'Barmer', 'Sikar',
        'Tonk', 'Sadulpur', 'Sawai Madhopur', 'Nagaur', 'Makrana', 'Sujangarh', 'Sardarshahar', 'Ladnu', 'Ratangarh', 'Nokha',
        'Nimbahera', 'Suratgarh', 'Rajsamand', 'Lachhmangarh', 'Rajgarh (Churu)', 'Nasirabad', 'Nohar', 'Phalodi', 'Nathdwara',
        'Pilani', 'Merta City', 'Sojat', 'Neem-Ka-Thana', 'Sirohi', 'Pratapgarh', 'Rawatbhata', 'Sangaria', 'Lalsot',
        'Pilibanga', 'Pipar City', 'Taranagar', 'Vijainagar, Ajmer', 'Sumerpur', 'Sagwara', 'Ramganj Mandi', 'Lakheri',
        'Udaipurwati', 'Losal', 'Sri Madhopur', 'Ramngarh', 'Rawatsar', 'Rajakhera', 'Shahpura', 'Raisinghnagar', 'Malpura',
        'Nadbai', 'Sanchore', 'Nagar', 'Rajgarh (Alwar)', 'Sheoganj', 'Sadri', 'Todaraisingh', 'Todabhim', 'Reengus',
        'Rajaldesar', 'Sadulshahar', 'Sambhar', 'Mount Abu', 'Mangrol', 'Phulera', 'Mandawa', 'Pindwara', 'Mandalgarh',
        'Takhatgarh',

        "Himachal Pradesh",
        'Shimla', 'Mandi', 'Solan', 'Nahan', 'Sundarnagar', 'Palampur', 'Kullu', 'Manali',

        "Punjab",
        'Ludhiana', 'Patiala', 'Amritsar', 'Jalandhar', 'Bathinda', 'Pathankot', 'Hoshiarpur', 'Batala', 'Moga', 'Malerkotla',
        'Khanna', 'Mohali', 'Barnala', 'Firozpur', 'Phagwara', 'Kapurthala', 'Zirakpur', 'Kot Kapura', 'Faridkot', 'Muktsar',
        'Rajpura', 'Sangrur', 'Fazilka', 'Gurdaspur', 'Kharar', 'Gobindgarh', 'Mansa', 'Malout', 'Nabha', 'Tarn Taran',
        'Jagraon', 'Sunam', 'Dhuri', 'Firozpur Cantt.', 'Sirhind Fatehgarh Sahib', 'Rupnagar', 'Jalandhar Cantt.', 'Samana',
        'Nawanshahr', 'Rampura Phul', 'Nangal', 'Nakodar', 'Zira', 'Patti', 'Raikot', 'Longowal', 'Urmar Tanda',
        'Morinda, India', 'Phillaur', 'Pattran', 'Qadian', 'Sujanpur', 'Mukerian', 'Talwara',

        "Jammu and Kashmir",
        'Srinagar', 'Jammu', 'Baramula', 'Anantnag', 'Sopore', 'KathUrban Agglomeration', 'Rajauri', 'Punch', 'Udhampur',

        "Haryana",
        'Faridabad', 'Gurgaon', 'Hisar', 'Rohtak', 'Panipat', 'Karnal', 'Sonipat', 'Yamunanagar', 'Panchkula', 'Bhiwani',
        'Bahadurgarh', 'Jind', 'Sirsa', 'Thanesar', 'Kaithal', 'Palwal', 'Rewari', 'Hansi', 'Narnaul', 'Fatehabad', 'Gohana',
        'Tohana', 'Narwana', 'Mandi Dabwali', 'Charkhi Dadri', 'Shahbad', 'Pehowa', 'Samalkha', 'Pinjore', 'Ladwa', 'Sohna',
        'Safidon', 'Taraori', 'Mahendragarh', 'Ratia', 'Rania', 'Sarsod'
    ]

    const unavailableAreas = ['udumalpet', 'pollachi']

    const checkAvailability = () => {
        const userInput = inputValue.trim().toLowerCase()

        if (!userInput) {
            setErrorMessage('Please enter your location')
            return
        }

        setErrorMessage('') // Clear previous error if any

        if (availableAreas.some(area => userInput.includes(area.toLowerCase()))) {
            setIsAvailable(true)
        } else if (unavailableAreas.some(area => userInput.includes(area.toLowerCase()))) {
            setIsAvailable(false)
        } else {
            setIsAvailable(false)
        }

        setShowPopup(true)
    }

    const closePopup = () => {
        setShowPopup(false)
    }

    return (
        <div className="jsx-3603273698 check-availability-panel-v2 max-width-background pad-b-xs">
            <div className="container">
                <div className="grid-col-12 rel">
                    <div className="text-center">
                        <h2 className="mar-b-xs heading-xxl">Enter your address to get started</h2>
                    </div>
                    <div className="row flex-wrap felx justify-center container">
                        <div className="pad-l-none-md pad-r-none-md grid-col-6 grid-col-12-md grid-col-12-sm">
                            <div className="jsx-3659446277 nopad rel">
                                <div id="addressInput" className="rel">
                                    <div className="inline-flex">
                                        <label className="htmlFormfield-label" htmlFor="input-addressInput">
                                            Address
                                        </label>
                                        <span className="hidden-spoken"></span>
                                    </div>

                                    <div>
                                        <div id="multi-select-container" className="selectWrap">
                                            <input
                                                id="input-addressInput"
                                                aria-label="addressInput"
                                                className="textfield pad-r-lg overflow-hidden text-overflow"
                                                autoComplete="off"
                                                type="text"
                                                placeholder="Enter Your City Name"
                                                aria-autocomplete="list"
                                                aria-controls="aria-control-addressInput"
                                                tabIndex="0"
                                                value={inputValue}
                                                onChange={(e) => setInputValue(e.target.value)}
                                            />
                                            {errorMessage && (
                                                <p style={{ color: 'red', marginTop: '0.5rem' }}>{errorMessage}</p>
                                            )}
                                            <div id="aria-control-addressInput" className="optionWrapper overflow-y-hidden box-shadow1"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="jsx-3659446277 pad-xs justify-center text-center button-padtop-ckav">
                            <div className="jsx-3659446277 text-center">
                                <button
                                    id="Check-availability-btn-7107"
                                    type="button"
                                    className="jsx-1196099039 btn-primary"
                                    onClick={checkAvailability}
                                >
                                    Check availability
                                </button>
                                <div className="duc-captcha"></div>
                            </div>
                        </div>
                    </div>
                    <div className="mar-t-xs mar-b-xs flex justify-center flex-items-center">
                        <label className="checkbox flex" htmlFor="checkbox-:Rn4djm:">
                            <input id="checkbox-:Rn4djm:" type="checkbox" />
                            <div className="checkbox-skin"></div>
                            <span className="rad-chk-txt">This is my home or business</span>
                        </label>
                    </div>
                </div>
                <div className="flex flex-wrap flex-column-sm justify-center flex-items-center mar-t-none-lg mar-t-md-md mar-t-md-sm">
                    <div className="type-sm">Are you a business customer?</div>
                    <Link
                        id="link-:R194djm:"
                        className="type-sm link-text3 mar-l-xxs mar-t-xxxs-sm mar-l-none-sm link-text3"
                        href="/plans"
                    >
                        Learn more about business offers
                    </Link>
                </div>

                {/* Popup */}
                {showPopup && (
                    <div
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 1000,
                        }}
                    >
                        <div
                            style={{
                                background: 'white',
                                padding: '2rem',
                                borderRadius: '8px',
                                maxWidth: '600px',
                                textAlign: 'center',
                            }}
                        >
                            {isAvailable ? (
                                <>
                                    <div className="">

                                        <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4 drop-shadow-lg">
                                            🎉 Great news!
                                        </h3>
                                        <p className="text-lg text-gray-800 mb-6 font-semibold drop-shadow-sm">Service is available in your area.</p>
                                        <p className="flex gap-2">
                                        <Link href="tel:+91 99441 99445" className="btn-primary" style={{}}>Call (+91)  99441 99445</Link>
                                        <Link href="mailto:support@skyplay.in" className="btn-secondary">support@skyplay.in</Link>
                                        </p>

                        
                                        <span className="absolute top-[-20px] left-[-20px] w-12 h-12 bg-gradient-to-tr from-green-400 to-blue-500 rounded-full opacity-30 filter blur-2xl animate-pulse"></span>
                                        <span className="absolute bottom-[-20px] right-[-20px] w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full opacity-25 filter blur-3xl animate-pulse delay-1500"></span>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <h3>Sorry, service is not available in your area.</h3>
                                    <p>Please contact customer support for more information.</p>
                                    <p>
                                        Phone: <Link href="tel:(+91)  99441 99445">(+91)  99441 99445</Link>
                                    </p>
                                </>
                            )}
                            <button onClick={closePopup} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
