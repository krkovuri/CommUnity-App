import { Stack } from 'expo-router';
import { colors } from '../constants/Colors';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTransparent: true,
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: colors.primary.main,
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
