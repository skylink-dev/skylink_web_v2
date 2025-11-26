// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { Mail, Phone, CheckCircle, X } from "lucide-react";

// export default function AvailabilityChecker() {
//   const mapRef = useRef(null);
//   const [map, setMap] = useState(null);
//   const [marker, setMarker] = useState(null);
//   const [address, setAddress] = useState("");
//   const [isAvailable, setIsAvailable] = useState(null);
//   const [availableArea, setAvailableArea] = useState("");
//   const [showButton, setShowButton] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [warning, setWarning] = useState("");

//   const createCircle = (center, radius) => {
//     const points = [];
//     const EARTH_RADIUS = 6371;
//     for (let i = 0; i < 360; i++) {
//       const angle = (i * Math.PI) / 180;
//       const dx = radius * Math.cos(angle);
//       const dy = radius * Math.sin(angle);
//       const newLat = center.lat + (dy / EARTH_RADIUS) * (180 / Math.PI);
//       const newLng =
//         center.lng +
//         (dx / (EARTH_RADIUS * Math.cos((center.lat * Math.PI) / 180))) *
//           (180 / Math.PI);
//       points.push({ lat: newLat, lng: newLng });
//     }
//     return points;
//   };

//   const serviceAreas = [
//     {
//       name: "Coimbatore",
//       color: "#94b894ff",
//       subAreas: [
//         {
//           name: "Ganthipuram",
//           center: { lat: 11.0103, lng: 76.9511 },
//           radius: 10,
//         },
//         { name: "Sulur", center: { lat: 11.0243, lng: 77.1257 }, radius: 4 },
//         {
//           name: "Kinathu Kadavu",
//           center: { lat: 10.822477, lng: 77.016144 },
//           radius: 5,
//         },
//         {
//           name: "Annur",
//           center: { lat: 11.2320952, lng: 77.1050488 },
//           radius: 5,
//         },
//       ],
//     },
//     {
//       name: "Erode",
//       color: "#b68686ff",
//       subAreas: [
//         {
//           name: "Erode Area 1",
//           center: { lat: 11.34, lng: 77.7172 },
//           radius: 10,
//         },
//       ],
//     },
//     {
//       name: "Tiruppur",
//       color: "#7f7fadff",
//       subAreas: [
//         {
//           name: "Tiruppur Area 1",
//           center: { lat: 11.1085, lng: 77.3411 },
//           radius: 10,
//         },
//       ],
//     },
//   ];

//   const loadGoogleMaps = () => {
//     return new Promise((resolve) => {
//       if (window.google) return resolve();

//       const script = document.createElement("script");
//       script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places,geometry`;
//       script.async = true;
//       document.head.appendChild(script);

//       script.onload = resolve;
//     });
//   };
//   useEffect(() => {
//     const initMap = async () => {
//       await loadGoogleMaps();

//       const gMap = new window.google.maps.Map(mapRef.current, {
//         center: { lat: 11.1, lng: 77.1 },
//         zoom: 7,
//         streetViewControl: false,
//         mapTypeControl: false,
//       });

//       setMap(gMap);

//       // fit bounds
//       const bounds = new window.google.maps.LatLngBounds();
//       serviceAreas.forEach((city) =>
//         city.subAreas.forEach((area) => bounds.extend(area.center))
//       );
//       gMap.fitBounds(bounds);

//       // Draw polygons
//       serviceAreas.forEach((city) =>
//         city.subAreas.forEach((area) => {
//           const circlePath = createCircle(area.center, area.radius);
//           new window.google.maps.Polygon({
//             paths: circlePath,
//             strokeColor: city.color,
//             strokeOpacity: 0.8,
//             strokeWeight: 2,
//             fillColor: city.color,
//             fillOpacity: 0.1,
//             map: gMap,
//           });
//         })
//       );

//       // Autocomplete
//       const input = document.getElementById("autocomplete");
//       const autocomplete = new window.google.maps.places.Autocomplete(input);
//       autocomplete.bindTo("bounds", gMap);

//       autocomplete.addListener("place_changed", () => {
//         const place = autocomplete.getPlace();
//         if (!place.geometry || !place.geometry.location) return;

//         const location = place.geometry.location;

//         gMap.setCenter(location);
//         gMap.setZoom(18);

//         if (marker) marker.setMap(null);

//         const newMarker = new window.google.maps.Marker({
//           position: location,
//           map: gMap,
//           draggable: true,
//         });

//         newMarker.addListener("dragend", () => {
//           setShowButton(true);
//           const pos = newMarker.getPosition();
//           new window.google.maps.Geocoder().geocode(
//             { location: pos },
//             (results, status) => {
//               if (status === "OK" && results[0]) {
//                 setAddress(results[0].formatted_address);
//               }
//             }
//           );
//         });

//         setMarker(newMarker);
//         setAddress(place.formatted_address);
//         setShowButton(true);
//       });
//     };

//     initMap();
//   }, []);

//   const checkAvailability = () => {
//     if (!address.trim()) {
//       setWarning("⚠️ Please enter an address before checking availability.");
//       return;
//     }
//     if (warning) setWarning("");

//     if (!marker) return;
//     const point = new window.google.maps.LatLng(
//       marker.getPosition().lat(),
//       marker.getPosition().lng()
//     );
//     let foundArea = null;

//     serviceAreas.forEach((city) => {
//       city.subAreas.forEach((area) => {
//         const polygon = new window.google.maps.Polygon({
//           paths: createCircle(area.center, area.radius),
//         });
//         if (window.google.maps.geometry.poly.containsLocation(point, polygon))
//           foundArea = area.name;
//       });
//     });

//     if (foundArea) {
//       setIsAvailable(true);
//       setAvailableArea(foundArea);
//       setShowModal(true);
//     } else setIsAvailable(false);
//     setShowButton(false);
//   };

//   const setMapView = (type) => {
//     if (!map) return;
//     if (type === "roadmap") {
//       map.setMapTypeId("roadmap");
//       map.setTilt(0);
//     } else if (type === "satellite") {
//       map.setMapTypeId("satellite");
//       map.setTilt(0);
//     } else if (type === "3d") {
//       map.setMapTypeId("satellite");
//       map.setTilt(45);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-start p-6 bg-gray-50">
//       {/* Map Card with 3D effect */}
//       <div className="w-full max-w-6xl bg-gray-100 rounded-3xl border border-gray-200 shadow-2xl p-6 mb-0 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-3xl">
//         {/* Animated Title & Subtitle */}
//         <div className="text-center mb-6 animate-fade-in">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 animate-slide-down">
//             Check Your Availability
//           </h1>
//           <p className="text-gray-600 text-lg md:text-xl animate-slide-up">
//             Enter your address to see if our service covers your area
//           </p>
//         </div>

//         <div className="flex flex-col items-center">
//           <input
//             id="autocomplete"
//             type="text"
//             placeholder="Enter your address..."
//             value={address}
//             onChange={(e) => {
//               setAddress(e.target.value);
//               if (warning) setWarning("");
//             }}
//             className="w-full md:w-3/4 border border-gray-300 p-3 rounded-xl mb-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-center bg-white"
//           />
//           {warning && <p className="text-sm text-yellow-600 mb-1">{warning}</p>}
//           {showButton && (
//             <button
//               onClick={checkAvailability}
//               className="bg-red-600 hover:bg-red-700 mb-2 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition-all duration-200 hover:scale-105"
//             >
//               Check Availability
//             </button>
//           )}
//           {isAvailable === false && (
//             <p className="mt-3 text-lg font-semibold text-red-600">
//               ❌ Sorry, service not available here.
//             </p>
//           )}
//         </div>

//         {/* Map */}
//         <div
//           ref={mapRef}
//           className="w-full h-[350px] md:h-[500px] mt-0 rounded-2xl shadow-lg border border-gray-200"
//         />

//         {/* Map View Buttons */}
//         {/* Map View Buttons */}
//         <div className="flex justify-center mt-4 gap-1">
//           {" "}
//           {/* reduced gap from 2 -> 1 */}
//           <button
//             className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 shadow-md transition-colors duration-200"
//             onClick={() => setMapView("roadmap")}
//           >
//             Roadmap
//           </button>
//           <button
//             className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 shadow-md transition-colors duration-200"
//             onClick={() => setMapView("satellite")}
//           >
//             Satellite
//           </button>
//         </div>
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 px-3">
//           <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm scale-105 relative border-t-4 border-green-500">
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-3 right-3"
//             >
//               <X size={22} />
//             </button>
//             <div className="flex flex-col items-center text-center">
//               <CheckCircle className="text-green-500 w-14 h-14 mb-3" />
//               <h2 className="text-2xl font-bold text-green-600 mb-2">
//                 🎉 You’re Covered!
//               </h2>
//               <p className="text-gray-700 mb-3 text-sm">
//                 Our service is available in <b>Your Location</b>. Connect now
//                 instantly.
//               </p>

//               {/* Quick Contact Buttons */}
//               <div className="flex w-full gap-3">
//                 {/* Call Button */}
//                 <a
//                   href="tel:+919944199445"
//                   className="flex-1 bg-green-500 text-white py-3 rounded-xl flex justify-center items-center gap-2 transition-transform duration-200 hover:scale-105 shadow-md"
//                 >
//                   <Phone size={18} /> Call
//                 </a>

//                 {/* Email Button */}
//                 <a
//                   href="mailto:info@skylink.net.in"
//                   className="flex-1 bg-blue-500 text-white py-3 rounded-xl flex justify-center items-center gap-2 transition-transform duration-200 hover:bg-blue-600 shadow-md"
//                 >
//                   <Mail size={18} /> Email
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

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
          radius: 10,
        },
        { name: "Sulur", center: { lat: 11.0243, lng: 77.1257 }, radius: 4 },
        {
          name: "Kinathu Kadavu",
          center: { lat: 10.822477, lng: 77.016144 },
          radius: 5,
        },
        {
          name: "Annur",
          center: { lat: 11.2320952, lng: 77.1050488 },
          radius: 5,
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

      // fit bounds
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

      // Autocomplete
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
    const point = new window.google.maps.LatLng(
      marker.getPosition().lat(),
      marker.getPosition().lng()
    );
    let foundArea = null;
    const formData = {
      lat: marker.getPosition().lat(),
      lng: marker.getPosition().lng(),
    };
    console.log("Inside Check Availability Component");
    await apiService
      .checkFesability(formData)
      .then((res) => {
        console.log(res);
        if (res?.available) {
          setIsAvailable(true);
          setAvailableArea(foundArea);
          setShowModal(true);
        } else {
          setIsAvailable(false);
          setShowButton(false);
        }
      })
      .catch((err) => {
        setIsAvailable(false);
        setShowButton(false);
        console.log(err);
      });
  };

  // serviceAreas.forEach(city => {
  //   city.subAreas.forEach(area => {
  //     const polygon = new window.google.maps.Polygon({ paths: createCircle(area.center, area.radius) });
  //     if (window.google.maps.geometry.poly.containsLocation(point, polygon)) foundArea = area.name;
  //   });
  // });

  const setMapView = (type) => {
    if (!map) return;
    if (type === "roadmap") {
      map.setMapTypeId("roadmap");
      map.setTilt(0);
    } else if (type === "satellite") {
      map.setMapTypeId("satellite");
      map.setTilt(0);
    } else if (type === "3d") {
      map.setMapTypeId("satellite");
      map.setTilt(45);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start p-6 bg-gray-50">
      {/* Map Card with 3D effect */}
      <div className="w-full max-w-6xl bg-gray-100 rounded-3xl border border-gray-200 shadow-2xl p-6 mb-0 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-3xl">
        {/* Animated Title & Subtitle */}
        <div className="text-center mb-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 animate-slide-down">
            Check Your Availability
          </h1>
          <p className="text-gray-600 text-lg md:text-xl animate-slide-up">
            Enter your address to see if our service covers your area
          </p>
        </div>

        <div className="flex flex-col items-center">
          <input
            id="autocomplete"
            type="text"
            placeholder="Enter your address..."
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              if (warning) setWarning("");
            }}
            className="w-full md:w-3/4 border border-gray-300 p-3 rounded-xl mb-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-center bg-white"
          />
          {warning && <p className="text-sm text-yellow-600 mb-1">{warning}</p>}
          {showButton && (
            <button
              onClick={checkAvailability}
              className="bg-red-600 hover:bg-red-700 mb-2 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition-all duration-200 hover:scale-105"
            >
              Check Availability
            </button>
          )}
          {isAvailable === false && (
            <p className="mt-3 text-lg font-semibold text-red-600">
              ❌ Sorry, service not available here.
            </p>
          )}
        </div>

        {/* Map */}
        <div
          ref={mapRef}
          className="w-full h-[350px] md:h-[500px] mt-0 rounded-2xl shadow-lg border border-gray-200"
        />

        {/* Map View Buttons */}
        {/* Map View Buttons */}
        <div className="flex justify-center mt-4 gap-1">
          {" "}
          {/* reduced gap from 2 -> 1 */}
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 shadow-md transition-colors duration-200"
            onClick={() => setMapView("roadmap")}
          >
            Roadmap
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 shadow-md transition-colors duration-200"
            onClick={() => setMapView("satellite")}
          >
            Satellite
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 px-3">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm scale-105 relative border-t-4 border-green-500">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3"
            >
              <X size={22} />
            </button>
            <div className="flex flex-col items-center text-center">
              <CheckCircle className="text-green-500 w-14 h-14 mb-3" />
              <h2 className="text-2xl font-bold text-green-600 mb-2">
                🎉 You’re Covered!
              </h2>
              <p className="text-gray-700 mb-3 text-sm">
                Our service is available in <b>Your Location</b>. Connect now
                instantly.
              </p>

              {/* Quick Contact Buttons */}
              <div className="flex w-full gap-3">
                {/* Call Button */}
                <a
                  href="tel:+919944199445"
                  className="flex-1 bg-green-500 text-white py-3 rounded-xl flex justify-center items-center gap-2 transition-transform duration-200 hover:scale-105 shadow-md"
                >
                  <Phone size={18} /> Call
                </a>

                {/* Email Button */}
                <a
                  href="mailto:info@skylink.net.in"
                  className="flex-1 bg-blue-500 text-white py-3 rounded-xl flex justify-center items-center gap-2 transition-transform duration-200 hover:bg-blue-600 shadow-md"
                >
                  <Mail size={18} /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
