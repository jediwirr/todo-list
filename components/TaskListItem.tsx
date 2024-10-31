import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Checkbox } from "react-native-paper";

type TaskListItemProps = {
  title: string;
  description: string;
};

export function TaskListItem({ title, description }: TaskListItemProps) {
  const [checked, setIsChecked] = useState(false);

  const onPress = () => {
    setIsChecked((state) => !state);
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className="p-4 flex-row justify-between bg-secondary"
    >
      <View>
        <Text className="text-xl text-accent">{title}</Text>
        <Text className="text-xl text-accent">{description}</Text>
      </View>
      <Checkbox status={checked ? "checked" : "unchecked"} color="white" />
    </TouchableOpacity>
  );
}
