import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Checkbox } from "react-native-paper";

type TaskListItemProps = {
  text: string;
};

export function TaskListItem({ text }: TaskListItemProps) {
  const [checked, setIsChecked] = useState(false);

  const onPress = () => {
    setIsChecked((state) => !state);
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className="p-4 flex-row justify-between bg-secondary rounded-xl"
    >
      <View>
        <Text className="text-xl text-accent">{text}</Text>
      </View>
      <Checkbox status={checked ? "checked" : "unchecked"} color="white" />
    </TouchableOpacity>
  );
}
