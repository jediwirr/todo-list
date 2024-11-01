import { FlatList, ListRenderItem } from "react-native";
import { TaskListItem } from "./TaskListItem";
import { Task } from "@/types";
import { useTodoStore } from "@/store";

export function TaskList() {
  const { tasks } = useTodoStore();

  const renderItem: ListRenderItem<Task> = ({ item }) => (
    <TaskListItem {...item} />
  );

  return (
    <FlatList
      contentContainerClassName="gap-2"
      data={tasks}
      renderItem={renderItem}
    />
  );
}
