import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface PomodoroState {
  workMins: number;
  breakMins: number;
  themeColor: string;

  changeWorkMins: (newMins: number) => void;
  changeBreakMins: (newMins: number) => void;
  changeThemeColor: (newColor: string) => void;
}

const usePomodoroStore = create<PomodoroState>()(
  persist(
    (set) => ({
      workMins: 25,
      breakMins: 5,
      themeColor: "#AC6DDD",
      changeWorkMins: (newMins) => set({ workMins: newMins }),
      changeBreakMins: (newMins) => set({ breakMins: newMins }),
      changeThemeColor: (newColor) => set({ themeColor: newColor }),
    }),
    {
      name: "pomodoro-store",
    }
  )
);

export default usePomodoroStore;
