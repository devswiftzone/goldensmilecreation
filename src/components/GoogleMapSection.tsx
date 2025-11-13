"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "12px",
};

const center = {
  lat: 25.61072,
  lng: -80.44198,
};

export default function GoogleMapSection() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!,
  });

  if (!isLoaded)
    return (
      <div className="w-full h-full bg-slate-200 rounded-lg animate-pulse" />
    );

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      options={{
        disableDefaultUI: true,
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false,
      }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
