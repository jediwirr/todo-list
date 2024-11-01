import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { UUID } from "./utils/UUID";
import { Task } from "./types";

type State = {
  tasks: Task[];
};

type Actions = {
  addTask: (text: Task["text"]) => void;
};

export const useTodoStore = create<State & Actions>()(
  persist(
    immer((set) => ({
      tasks: [],
      addTask: (text) =>
        set((state) => {
          const newTask = {
            text,
            id: UUID(),
          };

          state.tasks.push(newTask);
        }),
    })),
    {
      name: "todo",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
