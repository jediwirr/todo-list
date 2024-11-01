import { Button } from "react-native-paper";
import { Input } from "./Input";
import { useState } from "react";
import { useTodoStore } from "@/store";

export function AddTaskForm() {
  const [newTask, setNewTask] = useState("");
  const { addTask } = useTodoStore();

  const onChangeNewTask = (value: string) => {
    setNewTask(value);
  };

  const onClearNewTask = () => {
    setNewTask("");
  };

  const onAddNewTask = () => {
    addTask(newTask);
    setNewTask("");
  };
  return (
    <>
      <Input
        placeholder="Add new task"
        onClear={onClearNewTask}
        value={newTask}
        onChangeText={onChangeNewTask}
      />
      <Button
        onPress={onAddNewTask}
        className="mt-4"
        mode="contained-tonal"
        buttonColor="rgba(63, 63, 63, 0.6)"
        textColor="white"
        disabled={!newTask}
      >
        + Add task
      </Button>
    </>
  );
}
