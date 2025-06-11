import React from "react";
import type { SkipOption } from "../types/skipTypes";

interface SkipCardProps {
  skip: SkipOption;
  isSelected: boolean;
  onSelect: (size: number) => void;
}

const SkipCard = ({ skip, isSelected, onSelect }: SkipCardProps) => {
  return (
    <div
      className={`bg-gray-800 rounded-2xl overflow-hidden border-2 transition-all duration-300 relative
      ${
        isSelected
          ? "border-pink-500 shadow-lg shadow-pink-500/30 transform -translate-y-1"
          : "border-gray-700 hover:border-pink-400"
      }`}
    >
      {" "}
      <div
        className={`p-4 text-center font-bold ${
          isSelected
            ? "bg-gradient-to-r from-pink-600 to-blue-600"
            : "bg-gray-700"
        }`}
      >
        <span className="text-white text-lg tracking-wide">
          {skip.size} YARD SKIP
        </span>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-4">
          <div className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
            {skip.dimensions}
          </div>
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-400">
            £{skip.price_before_vat}
          </div>
        </div>

        <div className="relative h-40 mb-4 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
            <div className="bg-gray-600 rounded-xl w-16 h-16 flex items-center justify-center">
              <span className="text-xs font-bold text-gray-300">SKIP</span>
            </div>
          </div>
          <div className="absolute bottom-3 right-3 bg-gradient-to-r from-pink-600 to-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg">
            {skip.capacity}
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-4 min-h-[40px]">
          {skip.description}
        </p>

        <button
          onClick={() => onSelect(skip.size)}
          className={`w-full py-3.5 rounded-xl font-semibold transition-all duration-300 ${
            isSelected
              ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/20"
              : "bg-gray-700 hover:bg-gray-600 text-gray-300"
          }`}
        >
          {isSelected ? (
            <span className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Selected
            </span>
          ) : (
            "Select This Skip"
          )}
        </button>
      </div>
      {isSelected && (
        <div className="absolute -top-2 -right-2">
          <div className="bg-gradient-to-r from-pink-500 to-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            SELECTED
          </div>
        </div>
      )}
    </div>
  );
};

export default SkipCard;
