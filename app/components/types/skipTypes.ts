// Export types with type-only exports
export interface SkipOption {
  id: number;
  size: number;
  description?: string;
  dimensions?: string;
  capacity?: string;

  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  area: string;
  created_at: string;
  forbidden: boolean;
  hire_period_days: number;
  per_tonne_cost: number;
  postcode: string;
  price_before_vat: number;
  transport_cost: number;
  updated_at: string;
  vat: number;
}
