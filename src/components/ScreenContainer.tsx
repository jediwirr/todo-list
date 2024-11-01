import { ReactNode } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ScreenContainerProps = {
  children: ReactNode;
};

export function ScreenContainer({ children }: ScreenContainerProps) {
  const { top: paddingTop } = useSafeAreaInsets();

  return (
    <View style={{ paddingTop }} className="flex-1 p-5 bg-primary">
      {children}
    </View>
  );
}
