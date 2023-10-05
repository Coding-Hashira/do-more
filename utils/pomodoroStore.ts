import { create } from "zustand";

export interface PomodoroState {
  workMins: number;
  breakMins: number;
  themeColor: string;
  themeColors: string[];

  changeWorkMins: (newMins: number) => void;
  changeBreakMins: (newMins: number) => void;
  changeThemeColor: (newColor: string) => void;
}

const usePomodoroStore = create<PomodoroState>((set) => ({
  workMins: 25,
  breakMins: 5,
  themeColor: "#AC6DDD",
  themeColors: [
    "#AC6DDD",
    "#7dbbc0",
    "#fff",
    "#ee6055",
    "#17bebb",
    "#d7a954",
    "#34cc8b",
    "#9ccdd6",
  ],
  changeWorkMins: (newMins) => set({ workMins: newMins }),
  changeBreakMins: (newMins) => set({ breakMins: newMins }),
  changeThemeColor: (newColor) => set({ themeColor: newColor }),
}));

export default usePomodoroStore;
