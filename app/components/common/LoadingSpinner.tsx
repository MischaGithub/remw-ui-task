import React from "react";

const LoadingSpinner = () => (
  <div className="bg-gray-800/80 border border-gray-700 rounded-2xl p-8 text-center backdrop-blur-sm">
    <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500 mb-4"></div>
    <p className="text-gray-400">Loading skip sizes...</p>
  </div>
);

export default LoadingSpinner;
