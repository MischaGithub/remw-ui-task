import { useState, useEffect, useCallback, useMemo } from "react";
import Header from "../components/skip-selection/Header";
import SkipCard from "../components/skip-selection/SkipCard";
import Disclaimer from "../components/skip-selection/Disclaimer";
import ActionBar from "../components/skip-selection/ActionBar";
import LoadingSpinner from "../components/common/LoadingSpinner";
import ErrorDisplay from "../components/common/ErrorDisplay";
import type { SkipOption } from "../components/types/skipTypes";

const API_URL =
  "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";

const SkipSelectionPage = () => {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [skipOptions, setSkipOptions] = useState<SkipOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      // Assuming the API returns an array of skips directly, or modify this as needed
      setSkipOptions(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load skip options. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSelect = (size: number) => {
    setSelectedSize((prev) => (prev === size ? null : size));
  };

  const selectedSkip = useMemo(() => {
    return skipOptions.find((skip) => skip.size === selectedSize) || null;
  }, [selectedSize, skipOptions]);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans p-4 pb-40 md:p-8 md:pb-24">
      <Header />

      <main className="max-w-6xl mx-auto">
        {isLoading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorDisplay error={error} onRetry={fetchData} />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {skipOptions.map((skip) => (
                <SkipCard
                  key={skip.id}
                  skip={skip}
                  isSelected={selectedSize === skip.size}
                  onSelect={handleSelect}
                />
              ))}
            </div>

            <Disclaimer />
          </>
        )}
      </main>

      <ActionBar selectedSize={selectedSize} selectedSkip={selectedSkip} />
    </div>
  );
};

export default SkipSelectionPage;
