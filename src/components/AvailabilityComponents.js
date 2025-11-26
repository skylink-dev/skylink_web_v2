"use client";
import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, CheckCircle, X } from "lucide-react";
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
      bounds.extend({ lat: 11.0103, lng: 76.9511 });
      gMap.fitBounds(bounds);

      const input = document.getElementById("autocomplete");
      const autocomplete = new window.google.maps.places.Autocomplete(input);

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (!place.geometry || !place.geometry.location) return;

        const newMarker = new window.google.maps.Marker({
          position: place.geometry.location,
          map: gMap,
          draggable: true,
        });

        if (marker) marker.setMap(null);

        newMarker.addListener("dragend", () => {
          const pos = newMarker.getPosition();
          new window.google.maps.Geocoder().geocode(
            { location: pos },
            (results, status) => {
              if (status === "OK" && results[0])
                setAddress(results[0].formatted_address);
            }
          );
        });

        gMap.setCenter(place.geometry.location);
        gMap.setZoom(18);
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
    setWarning("");

    try {
      const res = await apiService.checkFesability({
        lat: marker.getPosition().lat(),
        lng: marker.getPosition().lng(),
      });

      if (res?.data?.available) {
        setIsAvailable(true);
        setAvailableArea(res.data.area_name);
        setShowModal(true);
        setShowErrorModal(false);
      } else {
        setIsAvailable(false);
        setShowErrorModal(true);
      }
    } catch (err) {
      console.error(err);
      setIsAvailable(false);
      setShowErrorModal(true);
    }
  };

  const setMapView = (type) => {
    if (!map) return;
    map.setMapTypeId(type === "roadmap" ? "roadmap" : "satellite");
    map.setTilt(type === "3d" ? 45 : 0);
  };

  return (
    <div className="flex flex-col items-center justify-start p-6 bg-gray-50">
      <div className="w-full max-w-6xl bg-gray-100 rounded-3xl border shadow-2xl p-6 mb-0">
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Check Your Availability
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Enter your address to see if our service covers your area
          </p>
        </div>

        <div className="flex flex-col items-center">
          <input
            id="autocomplete"
            type="text"
            placeholder="Enter your address..."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full md:w-3/4 border p-3 rounded-xl mb-2 text-center"
          />
          {warning && <p className="text-sm text-yellow-600 mb-1">{warning}</p>}

          {showButton && (
            <button
              onClick={checkAvailability}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md"
            >
              Check Availability
            </button>
          )}
        </div>

        <div
          ref={mapRef}
          className="w-full h-[350px] md:h-[500px] mt-2 rounded-2xl shadow-lg border"
        />

        <div className="flex justify-center mt-4 gap-2">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-xl"
            onClick={() => setMapView("roadmap")}
          >
            Roadmap
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-xl"
            onClick={() => setMapView("satellite")}
          >
            Satellite
          </button>
        </div>
      </div>

      {showModal && (
        <SuccessModal setShowModal={setShowModal} area={availableArea} />
      )}
      {showErrorModal && <ErrorModal setShowErrorModal={setShowErrorModal} />}
    </div>
  );
}

function SuccessModal({ setShowModal, area }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm relative border-t-4 border-green-500">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-3 right-3"
        >
          <X size={22} />
        </button>
        <div className="flex flex-col items-center">
          <CheckCircle className="text-green-500 w-14 h-14 mb-3" />
          <h2 className="text-2xl font-bold text-green-600">
            🎉 You’re Covered!
          </h2>
          <p className="text-gray-700 mt-2 text-sm">
            Our service is available in <b>{area}</b>.
          </p>
        </div>
      </div>
    </div>
  );
}

function ErrorModal({ setShowErrorModal }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm relative border-t-4 border-red-500">
        <button
          onClick={() => setShowErrorModal(false)}
          className="absolute top-3 right-3"
        >
          <X size={22} />
        </button>
        <div className="flex flex-col items-center">
          <CheckCircle className="text-red-500 w-14 h-14 mb-3" />
          <h2 className="text-2xl font-bold text-red-600">
            ❌ Service Not Available
          </h2>
        </div>
      </div>
    </div>
  );
}
