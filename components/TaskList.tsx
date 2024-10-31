import { FlatList, ListRenderItem, Text } from "react-native";
import { TaskListItem } from "./TaskListItem";

type Task = {
  id: string;
  title: string;
  description: string;
};

const tasks: Task[] = [
  { id: "jwf923jjjd2jd2d", title: "Task 1", description: "task 1 description" },
  { id: "ij9refupfpa3ufu", title: "Task 2", description: "task 2 description" },
];

export function TaskList() {
  const renderItem: ListRenderItem<Task> = ({ item }) => (
    <TaskListItem {...item} />
  );

  return (
    <FlatList
      className="bg-primary"
      contentContainerClassName="gap-2"
      data={tasks}
      renderItem={renderItem}
      ListHeaderComponent={<Text className="text-accent">Todo list</Text>}
    />
  );
}
