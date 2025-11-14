'use client';
import React, { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, CheckCircle, X } from "lucide-react";

export default function AvailabilityChecker() {
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);
    const [address, setAddress] = useState("");
    const [isAvailable, setIsAvailable] = useState(null);
    const [availableArea, setAvailableArea] = useState("");
    const [showButton, setShowButton] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const serviceAreas = [
        {
            name: "Erode",
            color: "#FF0000",
            coords: [
                { lat: 11.25, lng: 77.55 },
                { lat: 11.25, lng: 77.85 },
                { lat: 11.45, lng: 77.85 },
                { lat: 11.45, lng: 77.55 },
            ],
        },
        {
            name: "Coimbatore",
            color: "#00AA00",
            coords: [
                { lat: 10.85, lng: 76.80 },
                { lat: 10.85, lng: 77.15 },
                { lat: 11.20, lng: 77.15 },
                { lat: 11.20, lng: 76.80 },
            ],
        },
        {
            name: "Tiruppur",
            color: "#0000FF",
            coords: [
                { lat: 11.00, lng: 77.20 },
                { lat: 11.00, lng: 77.55 },
                { lat: 11.25, lng: 77.55 },
                { lat: 11.25, lng: 77.20 },
            ],
        },
    ];

    useEffect(() => {
        if (window.google) {
            const defaultLocation = { lat: 11.0, lng: 77.0 };
            const gMap = new window.google.maps.Map(mapRef.current, {
                center: defaultLocation,
                zoom: 7.5,
            });
            setMap(gMap);

            // Draw polygons
            serviceAreas.forEach((area) => {
                new window.google.maps.Polygon({
                    paths: area.coords,
                    strokeColor: area.color,
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: area.color,
                    fillOpacity: 0.2,
                    map: gMap,
                });
            });

            const input = document.getElementById("autocomplete");
            const autocomplete = new window.google.maps.places.Autocomplete(input);
            autocomplete.bindTo("bounds", gMap);

            autocomplete.addListener("place_changed", () => {
                const place = autocomplete.getPlace();
                if (!place.geometry || !place.geometry.location) return;

                const location = place.geometry.location;
                gMap.setCenter(location);
                gMap.setZoom(14);

                if (marker) marker.setMap(null);

                const newMarker = new window.google.maps.Marker({
                    position: location,
                    map: gMap,
                    draggable: true,
                });

                setMarker(newMarker);
                setAddress(place.formatted_address);
                setShowButton(true);

                // 🔄 Reset previous results when address changes
                setIsAvailable(null);
                setAvailableArea("");
                setShowModal(false);

                // Handle drag
                newMarker.addListener("dragend", () => {
                    const newPos = newMarker.getPosition();
                    const geocoder = new window.google.maps.Geocoder();
                    geocoder.geocode({ location: newPos }, (results, status) => {
                        if (status === "OK" && results[0]) {
                            setAddress(results[0].formatted_address);
                            setShowButton(true);

                            // Reset when marker is moved
                            setIsAvailable(null);
                            setAvailableArea("");
                            setShowModal(false);
                        }
                    });
                });
            });
        }
    }, []);

    const checkAvailability = () => {
        if (!marker) return;
        const position = marker.getPosition();
        const point = new window.google.maps.LatLng(position.lat(), position.lng());
        let foundArea = null;

        serviceAreas.forEach((area) => {
            const polygon = new window.google.maps.Polygon({ paths: area.coords });
            if (window.google.maps.geometry.poly.containsLocation(point, polygon)) {
                foundArea = area.name;
            }
        });

        if (foundArea) {
            setIsAvailable(true);
            setAvailableArea(foundArea);
            setShowModal(true);
        } else {
            setIsAvailable(false);
            setAvailableArea("");
            setShowModal(false);
        }

        setShowButton(false);
    };

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-white min-h-screen">
            <div className="w-full max-w-5xl bg-gray-100 rounded-3xl border border-gray-200 shadow-lg p-6 mb-6">
                {/* Map Pin Title Section */}
                <div className="text-center mb-6">
                    <div className="flex justify-center items-center gap-2 mb-2">
                        <MapPin className="text-red-600 w-6 h-6"/>
                        <h1 className="text-2xl font-bold text-gray-800">
                            Check Your Availability
                        </h1>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base">
                        Find out if Skylink Internet service is available at your location.
                    </p>
                </div>

                {/* Address + Button + Error Message */}
                <div className="flex flex-col items-center">
                    <div className="w-full max-w-md mx-auto">
                        <input
                            id="autocomplete"
                            type="text"
                            placeholder="Enter your address..."
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full border border-gray-300 p-3 rounded-xl mb-3 text-sm md:text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    {showButton && (
                        <div className="w-full max-w-md mx-auto">
                            <button
                                onClick={checkAvailability}
                                className="bg-red-600 hover:bg-red-700 text-white text-base md:text-lg font-semibold py-2.5 px-8 rounded-xl transition-all shadow-md w-full"
                            >
                                Check Availability
                            </button>
                        </div>
                    )}

                    {/* Error Message */}
                    {isAvailable === false && (
                        <p className="mt-3 text-lg font-semibold text-red-600">
                            ❌ Sorry, service not available here.
                        </p>
                    )}
                </div>

                {/* Map */}
                <div
                    ref={mapRef}
                    className="w-full h-[450px] mt-6 rounded-2xl shadow-lg border border-gray-200"
                />
            </div>

            {/* ✅ Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 px-3">
                    <div className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-sm animate-fadeIn relative">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                        >
                            <X size={20} />
                        </button>

                        <div className="flex flex-col items-center text-center">
                            <CheckCircle className="text-green-600 w-12 h-12 mb-3" />
                            <h2 className="text-2xl font-bold text-green-600 mb-1">
                                Service Available!
                            </h2>
                            <p className="text-gray-700 mb-3 text-sm md:text-base">
                                Great news! Our service is available in{" "}
                                <b className="text-gray-900">{availableArea}</b>.
                            </p>
                            <p className="text-gray-600 text-sm mb-5">
                                Get connected with us today!
                            </p>

                            {/* 📞 Contact Info */}
                            <div className="text-center mb-5">
                                <p className="text-gray-800 font-semibold text-base">📞 Call Us</p>
                                <p className="text-gray-800 font-medium text-lg mb-2">
                                    (+91) 99441 99445
                                </p>
                                <p className="text-gray-800 font-semibold text-base">✉ Email Us</p>
                                <p className="text-gray-700 text-sm">info@skylink.net.in</p>
                            </div>

                            {/* 📞 Buttons */}
                            <div className="flex flex-col gap-3 w-full">
                                <a
                                    href="tel:+919944199445"
                                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-xl text-base font-medium shadow"
                                >
                                    <Phone size={18} /> Call Now
                                </a>

                                <a
                                    href="mailto:info@skylink.net.in"
                                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl text-base font-medium shadow"
                                >
                                    <Mail size={18} /> Email Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}