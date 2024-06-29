import { store } from "./store/store";

export {};

declare global {
  type RootState = ReturnType<typeof store.getState>;
}
