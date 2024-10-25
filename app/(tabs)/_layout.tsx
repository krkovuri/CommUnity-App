// app/home/_layout.tsx
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Import icons
import { StyleSheet } from 'react-native';

export default function HomeLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1E90FF', // A vibrant blue color for active tabs
        tabBarStyle: {
          height: 70, // Height of the tab bar
          paddingBottom: 20, // Padding at the bottom
          backgroundColor: '#f0f8ff', // Light background color for the tab bar
          borderTopWidth: 0, // Remove border for a cleaner look
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Events',
          tabBarLabel: 'Events',
          tabBarIcon: ({ color }) => (
            <Ionicons name="calendar-outline" size={24} color={color} />
          ), // Custom icon
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbubble-outline" size={24} color={color} />
          ), // Custom icon
        }}
      />
      {/* <Tabs.Screen
        name="community"
        options={{
          tabBarLabel: 'My CommUnity',
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-outline" size={24} color={color} />
          ), // Custom icon
        }}
      /> */}
      <Tabs.Screen
        name="account"
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ), // Custom icon
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff', // Set tab bar background color
    borderTopWidth: 0, // Remove top border
    elevation: 5, // Add shadow for Android
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 3.84, // Shadow radius
    height: 60, // Adjust height of the tab bar
  },
});
