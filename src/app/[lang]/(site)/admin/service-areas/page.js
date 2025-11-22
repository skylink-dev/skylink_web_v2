"use client";
import { useEffect, useRef, useState } from "react";

export default function PolygonAdmin() {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [drawingManager, setDrawingManager] = useState(null);
  const [polygons, setPolygons] = useState([]);

  // Load Google Maps
  const loadGoogleMaps = () => {
    return new Promise((resolve) => {
      if (window.google) return resolve();
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=drawing,geometry`;
      script.async = true;
      document.head.appendChild(script);
      script.onload = resolve;
    });
  };

  useEffect(() => {
    const init = async () => {
      await loadGoogleMaps();

      const gMap = new window.google.maps.Map(mapRef.current, {
        center: { lat: 11.0, lng: 77.0 },
        zoom: 9,
      });
      setMap(gMap);

      // Drawing Manager
      const dm = new window.google.maps.drawing.DrawingManager({
        drawingMode: window.google.maps.drawing.OverlayType.POLYGON,
        drawingControl: true,
        drawingControlOptions: {
          drawingModes: ["polygon"],
        },
        polygonOptions: {
          editable: true,
          draggable: true,
        },
      });

      dm.setMap(gMap);
      setDrawingManager(dm);

      // Listen when polygon is completed
      window.google.maps.event.addListener(dm, "polygoncomplete", (polygon) => {
        const coords = polygon
          .getPath()
          .getArray()
          .map((p) => ({ lat: p.lat(), lng: p.lng() }));

        const areaName = prompt("Enter Area Name:");
        const city = prompt("Enter City Name:");

        savePolygon(city, areaName, coords);
      });
    };

    init();
  }, []);

  // Save polygon to backend
  const savePolygon = async (city, name, coords) => {
    const res = await fetch("/api/polygons", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ city, name, coords }),
    });

    if (res.ok) {
      alert("Polygon saved!");
      loadPolygons(); // refresh UI
    }
  };

  // Load polygons from backend
  const loadPolygons = async () => {
    const res = await fetch("/api/polygons");
    const data = await res.json();
    setPolygons(data);

    data.forEach((area) => {
      new window.google.maps.Polygon({
        paths: area.coords,
        map,
        strokeColor: "#ff0000",
        fillColor: "#ff0000",
        fillOpacity: 0.3,
      });
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Polygon Manager</h1>

      <button
        onClick={loadPolygons}
        className="mt-4 p-3 bg-blue-600 text-white rounded"
      >
        Load Polygons
      </button>

      <div className="w-full h-[600px] mt-4 border rounded" ref={mapRef}></div>
    </div>
  );
}
