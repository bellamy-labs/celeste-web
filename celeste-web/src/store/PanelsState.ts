import { writable } from "svelte/store";

export interface PanelsState {
  Search: boolean;
}

export const CurrPanelsState = writable<PanelsState>({
  Search: true,
});
