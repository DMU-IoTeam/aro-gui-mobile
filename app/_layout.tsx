import {
  DefaultTheme,
  ThemeProvider
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useColorScheme } from "@/hooks/useColorScheme";

// 1. 기본 테마를 복사하고 원하는 색상으로 덮어씁니다.
const MyTheme = {
  ...DefaultTheme, // 기본 테마의 모든 속성을 그대로 가져옵니다.
  colors: {
    ...DefaultTheme.colors, // 기본 색상들을 가져온 뒤,
    background: '#F0F9FF', // background 색상만 원하는 색으로 변경합니다.
    // primary, text, card, border 등 다른 색상도 여기서 변경 가능합니다.
  },
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider value={MyTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
