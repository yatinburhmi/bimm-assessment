import { setupWorker } from "msw/browser";
import { handlers } from "@/features/cars/__mocks__/handlers";

export const worker = setupWorker(...handlers);
