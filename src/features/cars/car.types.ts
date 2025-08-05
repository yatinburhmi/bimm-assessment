export type Car = {
  id: string;
  make: string;
  model: string;
  year: number;
  color: string;
  mobile: string;
  tablet: string;
  desktop: string;
};

export type SortValue = "year_asc" | "year_desc" | "model_asc" | "model_desc";
