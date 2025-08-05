import { SortValue } from "../car.types";

export const CAR_SORT_OPTIONS: { label: string; value: SortValue }[] = [
  { label: "Year ↑", value: "year_asc" },
  { label: "Year ↓", value: "year_desc" },
  { label: "Model A-Z", value: "model_asc" },
  { label: "Model Z-A", value: "model_desc" },
];
