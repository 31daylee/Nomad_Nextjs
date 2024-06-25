import { create } from "zustand";

interface ViewState {
  currentView: string;
  setView: (view: string) => void;
}

export const useViewStore = create<ViewState>((set) => ({
  currentView: "overview",
  setView: (view) => set({ currentView: view }),
}));
