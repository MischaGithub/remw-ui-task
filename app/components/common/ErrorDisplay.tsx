import React from "react";

interface ErrorDisplayProps {
  error: string;
  onRetry: () => void;
}

const ErrorDisplay = ({ error, onRetry }: ErrorDisplayProps) => (
  <div className="bg-gray-800/80 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm">
    <div className="text-center py-8">
      <div className="bg-gradient-to-br from-pink-600/20 to-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-pink-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">Loading Error</h3>
      <p className="text-gray-400 mb-6">{error}</p>
      <button
        className="bg-gradient-to-r from-pink-600 to-blue-600 px-6 py-2.5 rounded-xl font-medium hover:from-pink-500 hover:to-blue-500 transition-all duration-300"
        onClick={onRetry}
      >
        Try Again
      </button>
    </div>
  </div>
);

export default ErrorDisplay;
