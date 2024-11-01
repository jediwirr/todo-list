import { ScreenContainer } from "@/components/ScreenContainer";
import { TaskList } from "@/components/TaskList";
import { useNavigation } from "expo-router";
import { Button } from "react-native-paper";

export default function TasksToDo() {
  const { navigate } = useNavigation();

  const onAddTaskPress = () => {
    navigate("add-task" as never);
  };

  return (
    <ScreenContainer>
      <TaskList />
      {/*<AddTaskForm />*/}
      <Button onPress={onAddTaskPress}>ADD TASK</Button>
    </ScreenContainer>
  );
}
