import type { SkipOption } from "../types/skipTypes";

interface ActionBarProps {
  selectedSize: number | null;
  selectedSkip: SkipOption | null;
}

const ActionBar = ({ selectedSize, selectedSkip }: ActionBarProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 shadow-[0_-5px_30px_-15px_rgba(236,72,153,0.3)]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="flex-1 min-w-0">
          {selectedSize ? (
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-2 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="truncate text-white">
                <span className="font-semibold">{selectedSize} Yard Skip</span>{" "}
                - £{selectedSkip?.price_before_vat} for 14 days
              </div>
            </div>
          ) : (
            <div className="text-gray-400">
              <span className="font-medium">No skip selected</span> - Please
              choose a size
            </div>
          )}
        </div>

        <div className="flex gap-3 w-full sm:w-auto">
          <button className="px-5 py-2.5 border border-gray-600 rounded-xl font-medium text-gray-300 hover:bg-gray-700/50 transition-colors w-full sm:w-auto">
            Back
          </button>
          <button
            disabled={!selectedSize}
            className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 w-full sm:w-auto ${
              selectedSize
                ? "bg-gradient-to-r from-pink-600 to-blue-600 text-white hover:from-pink-500 hover:to-blue-500 shadow-lg shadow-pink-500/20"
                : "bg-gray-700 text-gray-500 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionBar;
