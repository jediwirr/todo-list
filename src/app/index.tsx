import { AddTaskForm } from "@/components/AddTaskForm";
import { TaskList } from "@/components/TaskList";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function App() {
  const { top: paddingTop } = useSafeAreaInsets();

  return (
    <View style={{ paddingTop }} className="flex-1 p-5 bg-primary">
      <TaskList />
      <AddTaskForm />
    </View>
  );
}
