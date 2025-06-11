// Export types with type-only exports
export interface SkipOption {
  id: number;
  size: number;
  price: number;
  description: string;
  dimensions: string;
  capacity: string;
}

export const mockSkipOptions: SkipOption[] = [
  {
    id: 1,
    size: 4,
    price: 211,
    description: "Perfect for small home cleanups",
    dimensions: "3.5m x 1.8m",
    capacity: "25-30 bin bags",
  },
  // ... other skip options
];
