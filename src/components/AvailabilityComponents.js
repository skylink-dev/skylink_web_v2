"use client";
import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, CheckCircle, X, AlertTriangle } from "lucide-react";
import { apiService } from "@/backend/apiservice";

export default function AvailabilityChecker() {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [address, setAddress] = useState("");
  const [isAvailable, setIsAvailable] = useState(null);
  const [availableArea, setAvailableArea] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [warning, setWarning] = useState("");
  const checkFesability = apiService.checkFesability;

  const createCircle = (center, radius) => {
    const points = [];
    const EARTH_RADIUS = 6371;
    for (let i = 0; i < 360; i++) {
      const angle = (i * Math.PI) / 180;
      const dx = radius * Math.cos(angle);
      const dy = radius * Math.sin(angle);
      const newLat = center.lat + (dy / EARTH_RADIUS) * (180 / Math.PI);
      const newLng =
        center.lng +
        (dx / (EARTH_RADIUS * Math.cos((center.lat * Math.PI) / 180))) *
          (180 / Math.PI);
      points.push({ lat: newLat, lng: newLng });
    }
    return points;
  };

  const serviceAreas = [
    {
      name: "Coimbatore",
      color: "#94b894ff",
      subAreas: [
        {
          name: "Ganthipuram",
          center: { lat: 11.0103, lng: 76.9511 },
          radius: 25,
        },
      ],
    },
    {
      name: "Erode",
      color: "#b68686ff",
      subAreas: [
        {
          name: "Erode Area 1",
          center: { lat: 11.34, lng: 77.7172 },
          radius: 15,
        },
      ],
    },
    {
      name: "Tiruppur",
      color: "#7f7fadff",
      subAreas: [
        {
          name: "Tiruppur Area 1",
          center: { lat: 11.1085, lng: 77.3411 },
          radius: 15,
        },
      ],
    },
  ];

  const loadGoogleMaps = () => {
    return new Promise((resolve) => {
      if (window.google) return resolve();
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places,geometry`;
      script.async = true;
      document.head.appendChild(script);
      script.onload = resolve;
    });
  };

  useEffect(() => {
    const initMap = async () => {
      await loadGoogleMaps();
      const gMap = new window.google.maps.Map(mapRef.current, {
        center: { lat: 11.1, lng: 77.1 },
        zoom: 7,
        streetViewControl: false,
        mapTypeControl: false,
      });

      setMap(gMap);

      const bounds = new window.google.maps.LatLngBounds();
      serviceAreas.forEach((city) =>
        city.subAreas.forEach((area) => bounds.extend(area.center))
      );
      gMap.fitBounds(bounds);

      // Draw polygons
      serviceAreas.forEach((city) =>
        city.subAreas.forEach((area) => {
          const circlePath = createCircle(area.center, area.radius);
          new window.google.maps.Polygon({
            paths: circlePath,
            strokeColor: city.color,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: city.color,
            fillOpacity: 0.25,
            map: gMap,
          });
        })
      );

      const input = document.getElementById("autocomplete");
      const autocomplete = new window.google.maps.places.Autocomplete(input);
      autocomplete.bindTo("bounds", gMap);

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (!place.geometry || !place.geometry.location) return;

        const location = place.geometry.location;
        gMap.setCenter(location);
        gMap.setZoom(18);

        if (marker) marker.setMap(null);

        const newMarker = new window.google.maps.Marker({
          position: location,
          map: gMap,
          draggable: true,
        });

        newMarker.addListener("dragend", () => {
          setShowButton(true);
          const pos = newMarker.getPosition();
          new window.google.maps.Geocoder().geocode(
            { location: pos },
            (results, status) => {
              if (status === "OK" && results[0]) {
                setAddress(results[0].formatted_address);
              }
            }
          );
        });

        setMarker(newMarker);
        setAddress(place.formatted_address);
        setShowButton(true);
      });
    };

    initMap();
  }, []);

  const checkAvailability = async () => {
    if (!address.trim()) {
      setWarning("⚠️ Please enter an address before checking availability.");
      return;
    }
    if (warning) setWarning("");

    if (!marker) return;

    const formData = {
      lat: marker.getPosition().lat(),
      lng: marker.getPosition().lng(),
    };

    await apiService
      .checkFesability(formData)
      .then((res) => {
        if (res?.data?.available) {
          setIsAvailable(true);
          setAvailableArea(res.data.area_name);
          setShowModal(true);
          setShowButton(false);
          setShowErrorModal(false);
        } else {
          setIsAvailable(true);
          setShowErrorModal(true);
          setShowButton(true);
        }
      })
      .catch(() => {
        setIsAvailable(true);
        setShowErrorModal(true);
        setShowButton(false);
      });
  };

  const setMapView = (t) => {
    if (!map) return;
    map.setMapTypeId(t === "roadmap" ? "roadmap" : "satellite");
    map.setTilt(t === "3d" ? 45 : 0);
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-full">
      <div className="w-full max-w-6xl backdrop-blur-lg bg-white/70 shadow-2xl rounded-3xl border border-gray-200 p-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900">
            Check Availability
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Enter your address to see if our internet service is available
          </p>
        </div>

        <div className="flex flex-col items-center">
          <input
            id="autocomplete"
            type="text"
            placeholder="Search your exact location..."
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              if (warning) setWarning("");
            }}
            className="w-full md:w-3/4 p-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-gray-500 bg-white text-center"
          />

          {warning && <p className="text-sm text-yellow-600 mt-1">{warning}</p>}

          {showButton && (
            <button
              onClick={checkAvailability}
              className="mt-3 bg-red-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:scale-105 transition-all"
            >
              Check Availability
            </button>
          )}
        </div>

        <div
          ref={mapRef}
          className="w-full h-[400px] mt-6 rounded-2xl shadow-xl overflow-hidden border border-gray-300"
        />

        <div className="flex justify-center mt-5 gap-3">
          <button
            className="px-5 py-2 bg-gray-800 text-white rounded-xl shadow hover:bg-black"
            onClick={() => setMapView("roadmap")}
          >
            Roadmap
          </button>
          <button
            className="px-5 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
            onClick={() => setMapView("satellite")}
          >
            Satellite
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn z-50">
          <div className="relative bg-white p-6 rounded-2xl max-w-xs w-full shadow-xl border-t-4 border-green-500 animate-scaleIn">
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <X size={22} />
            </button>

            <div className="text-center flex flex-col items-center">
              <CheckCircle className="text-green-600 w-16 h-16 animate-bounceSlow" />
              <h2 className="text-2xl font-bold text-green-700 mt-2">
                Service Available
              </h2>
              <p className="text-gray-700 mt-2 text-sm">
                Great news! We provide service in your area.
              </p>

              <div className="flex flex-col gap-3 mt-5 w-full">
                <a
                  href="tel:+919944199445"
                  className="bg-green-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-semibold shadow hover:scale-105 transition"
                >
                  <Phone size={18} /> Call: +91 99441 99445
                </a>

                <a
                  href="mailto:info@skylink.net.in"
                  className="bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-semibold shadow hover:scale-105 transition"
                >
                  <Mail size={18} /> info@skylink.net.in
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn z-50">
          <div className="relative bg-white p-6 rounded-2xl max-w-xs w-full shadow-xl border-t-4 border-red-600 animate-scaleIn">
            {/* Close button */}
            <button
              onClick={() => setShowErrorModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <X size={22} />
            </button>

            <div className="text-center flex flex-col items-center">
              <AlertTriangle className="text-red-600 w-16 h-16 animate-pulse" />
              <h2 className="text-2xl font-bold text-red-700 mt-2">
                Not Available
              </h2>
              <p className="text-gray-700 mt-2 text-sm">
                Contact us for future expansion updates.
              </p>

              <div className="flex flex-col gap-3 mt-5 w-full">
                <a
                  href="tel:+919944199445"
                  className="bg-red-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-semibold shadow hover:scale-105 transition"
                >
                  <Phone size={18} /> Call Support
                </a>
                <a
                  href="mailto:info@skylink.net.in"
                  className="bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-semibold shadow hover:scale-105 transition"
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
