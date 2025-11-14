'use client';
import React, {useEffect, useRef, useState, useMemo} from "react";
import { MapPin, Phone, Mail, CheckCircle, X, Navigation, Search } from "lucide-react";

export default function AvailabilityChecker() {
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);
    const [address, setAddress] = useState("");
    const [isAvailable, setIsAvailable] = useState(null);
    const [availableArea, setAvailableArea] = useState("");
    const [showButton, setShowButton] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const serviceAreas = useMemo(() => [
        {
            name: "Erode",
            color: "#EF4444",
            coords: [
                { lat: 11.25, lng: 77.55 },
                { lat: 11.25, lng: 77.85 },
                { lat: 11.45, lng: 77.85 },
                { lat: 11.45, lng: 77.55 },
            ],
        },
        {
            name: "Coimbatore",
            color: "#10B981",
            coords: [
                { lat: 10.85, lng: 76.80 },
                { lat: 10.85, lng: 77.15 },
                { lat: 11.20, lng: 77.15 },
                { lat: 11.20, lng: 76.80 },
            ],
        },
        {
            name: "Tiruppur",
            color: "#3B82F6",
            coords: [
                { lat: 11.00, lng: 77.20 },
                { lat: 11.00, lng: 77.55 },
                { lat: 11.25, lng: 77.55 },
                { lat: 11.25, lng: 77.20 },
            ],
        },
    ], []);

    useEffect(() => {
        if (window.google) {
            const defaultLocation = { lat: 11.0, lng: 77.0 };
            const gMap = new window.google.maps.Map(mapRef.current, {
                center: defaultLocation,
                zoom: 7.5,
                styles: [
                    {
                        featureType: "all",
                        elementType: "geometry",
                        stylers: [{ color: "#f5f5f5" }],
                    },
                    {
                        featureType: "all",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#666666" }],
                    },
                ],
            });
            setMap(gMap);

            // Draw polygons
            serviceAreas.forEach((area) => {
                new window.google.maps.Polygon({
                    paths: area.coords,
                    strokeColor: area.color,
                    strokeOpacity: 0.8,
                    strokeWeight: 3,
                    fillColor: area.color,
                    fillOpacity: 0.25,
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
                    animation: window.google.maps.Animation.DROP,
                    icon: {
                        path: window.google.maps.SymbolPath.CIRCLE,
                        scale: 10,
                        fillColor: "#EF4444",
                        fillOpacity: 1,
                        strokeColor: "#FFFFFF",
                        strokeWeight: 2,
                    },
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
    }, [marker, serviceAreas]);

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
        <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
            {/* 🗺️ Enhanced Title Section */}
            <div className="text-center mb-8 max-w-2xl">
                <div className="flex justify-center items-center gap-3 mb-4">
                    <div className="p-3 bg-red-50 rounded-2xl shadow-sm">
                        <MapPin className="text-red-600 w-7 h-7" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        Check Your Availability
                    </h1>
                </div>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                    Find out if Skylink Internet service is available at your location.
                    Enter your address and discover high-speed connectivity options.
                </p>
            </div>

            {/* 📍 Enhanced Search Section */}
            <div className="w-full max-w-2xl flex flex-col items-center mb-8">
                <div className="relative w-full mb-4">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="text-gray-400 w-5 h-5" />
                    </div>
                    <input
                        id="autocomplete"
                        type="text"
                        placeholder="Enter your complete address..."
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full border-2 border-gray-200 p-4 pl-12 rounded-2xl text-base shadow-lg focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    />
                </div>

                {/* 🔘 Enhanced Button */}
                {showButton && (
                    <button
                        onClick={checkAvailability}
                        className="group relative w-full max-w-md bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-lg font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden"
                    >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Navigation className="w-5 h-5" />
              Check Availability
            </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </button>
                )}

                {/* ❌ Enhanced Error Message */}
                {isAvailable === false && (
                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-2xl shadow-sm">
                        <p className="text-red-700 font-semibold text-lg flex items-center justify-center gap-2">
                            <X className="w-5 h-5" />
                            Service not available in this area
                        </p>
                        <p className="text-red-600 text-sm text-center mt-1">
                            We&apos;re expanding our network. Contact us for updates!
                        </p>
                    </div>
                )}
            </div>

            {/* 🗺️ Enhanced Map Container */}
            <div className="w-full max-w-6xl">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden p-1">
                    <div
                        ref={mapRef}
                        className="w-full h-[500px] rounded-2xl"
                    />
                </div>

                {/* Service Areas Legend */}
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                    {serviceAreas.map((area) => (
                        <div key={area.name} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm border border-gray-200">
                            <div
                                className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                                style={{ backgroundColor: area.color }}
                            />
                            <span className="text-sm font-medium text-gray-700">{area.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ✅ Enhanced Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 px-4">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md animate-scaleIn relative border border-gray-100">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-colors duration-200"
                        >
                            <X size={24} />
                        </button>

                        <div className="flex flex-col items-center text-center">
                            <div className="p-4 bg-green-50 rounded-3xl mb-4 shadow-sm">
                                <CheckCircle className="text-green-600 w-16 h-16" />
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                                Service Available!
                            </h2>

                            <div className="bg-green-50/50 rounded-2xl p-4 mb-6 w-full border border-green-100">
                                <p className="text-gray-700 text-base mb-2">
                                    Great news! Our service is available in
                                </p>
                                <p className="text-2xl font-bold text-green-700 bg-white py-2 px-4 rounded-xl shadow-sm">
                                    {availableArea}
                                </p>
                            </div>

                            <p className="text-gray-600 text-sm mb-6">
                                Get connected with blazing-fast internet today!
                            </p>

                            {/* 📞 Enhanced Contact Info */}
                            <div className="bg-gray-50 rounded-2xl p-5 mb-6 w-full border border-gray-200">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-center gap-3">
                                        <div className="p-2 bg-blue-50 rounded-xl">
                                            <Phone className="text-blue-600 w-5 h-5" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-gray-600 text-sm font-medium">Call Us</p>
                                            <p className="text-gray-900 font-bold text-lg">(+91) 99441 99445</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center gap-3">
                                        <div className="p-2 bg-orange-50 rounded-xl">
                                            <Mail className="text-orange-600 w-5 h-5" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-gray-600 text-sm font-medium">Email Us</p>
                                            <p className="text-gray-900 font-medium text-base">info@skylink.net.in</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 📞 Enhanced Buttons */}
                            <div className="flex flex-col gap-3 w-full">
                                <a
                                    href="tel:+919944199445"
                                    className="group flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                                >
                                    <Phone size={20} />
                                    Call Now
                                    <div className="w-5 h-5 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors" />
                                </a>

                                <a
                                    href="mailto:info@skylink.net.in"
                                    className="group flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                                >
                                    <Mail size={20} />
                                    Email Us
                                    <div className="w-5 h-5 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}