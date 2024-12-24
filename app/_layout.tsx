import { StatusBar, useColorScheme } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  const isDark = useColorScheme() === "dark";

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <StatusBar
          animated
          barStyle={isDark ? "dark-content" : "light-content"} // Controls text color of the status bar (dark or light)
          hidden={false} // Ensures the status bar is visible
          backgroundColor="white" // Background color for Android (iOS ignores this)
        />
        <Stack.Screen name="(screens)" options={{ title: "Screens" }} />
      </Stack>
    </>
  );
};

export default RootLayout;
