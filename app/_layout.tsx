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
      <Stack.Screen name="index" options={{ title: '' }} />
      <Stack.Screen name="login" options={{ title: '' }} />
      <Stack.Screen name="signup" options={{ title: '' }} />
    </Stack>
  );
}
