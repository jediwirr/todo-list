import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { TextInput, TextInputProps } from "react-native-paper";

type InputProps = {
  onClear: () => void;
} & TextInputProps;

export function Input(props: InputProps) {
  const { value, onClear } = props;
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const resolveRightIcon = () => {
    if (!isFocused || !value) return null;

    return (
      <TextInput.Icon
        forceTextInputFocus={false}
        icon={() => (
          <Ionicons
            name="close-circle"
            color="rgba(63, 63, 63, 0.6)"
            size={24}
          />
        )}
        onPress={onClear}
      />
    );
  };

  return (
    <TextInput
      {...props}
      right={resolveRightIcon()}
      mode="outlined"
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}
