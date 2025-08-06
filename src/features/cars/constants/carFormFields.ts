// features/cars/constants/carFormFields.ts

import { getPastYears } from "../utils/getPastYears";

export const carFormFields = [
  {
    name: "make",
    label: "Make",
    type: "text",
    required: true,
  },
  {
    name: "model",
    label: "Model",
    type: "text",
    required: true,
  },
  {
    name: "year",
    label: "Year",
    type: "select",
    required: true,
    options: getPastYears(10),
  },
  {
    name: "color",
    label: "Color",
    type: "text",
    required: true,
  },
  {
    name: "mobile",
    label: "Mobile Image URL",
    type: "text",
    required: false,
  },
  {
    name: "tablet",
    label: "Tablet Image URL",
    type: "text",
    required: false,
  },
  {
    name: "desktop",
    label: "Desktop Image URL",
    type: "text",
    required: false,
  },
] as const;
