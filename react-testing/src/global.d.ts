import { store } from "./index";

export {};

declare global {
  type RootState = ReturnType<typeof store.getState>;
}
