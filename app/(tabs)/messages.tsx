import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons
import { LinearGradient } from 'expo-linear-gradient'; // For background gradient

// Define a Message interface for type safety
interface Message {
  id: string;
  sender: string;
  message: string;
  time: string;
}

// Mock data for messages
const mockMessages: Message[] = [
  {
    id: '1',
    sender: 'John Doe',
    message: "Hey! I'm John Doe from your neighborhood!",
    time: '2:00 PM',
  },
  {
    id: '2',
    sender: 'Karen Smith',
    message:
      'Can we talk about the loud noises coming from your house? This is your last chance before I report you to the HOA!',
    time: '1:30 PM',
  },
  {
    id: '3',
    sender: 'Alice Johnson',
    message: 'Your dog is so cute!',
    time: '12:45 PM',
  },
  {
    id: '4',
    sender: 'Bob Brown',
    message: 'Let’s catch up this weekend at my place.',
    time: '10:15 AM',
  },
  {
    id: '5',
    sender: 'Charlie Davis',
    message: 'Happy Birthday! 🎉',
    time: 'Yesterday',
  },
];

const MessagesScreen = () => {
  // Render each message item
  const renderMessage = ({ item }: { item: Message }) => (
    <View style={styles.messageItem}>
      <Ionicons name="person-circle-outline" size={50} color="#007AFF" />
      <View style={styles.messageContent}>
        <Text style={styles.sender}>{item.sender}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  return (
    <LinearGradient colors={['#6DD5FA', '#2980B9']} style={styles.container}>
      <Text style={styles.header}>Messages</Text>
      <FlatList
        data={mockMessages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messageList}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 40,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  messageList: {
    paddingBottom: 20,
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  messageContent: {
    flex: 1,
    marginLeft: 15,
  },
  sender: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  message: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  time: {
    fontSize: 12,
    color: '#999',
    marginLeft: 10,
  },
});

export default MessagesScreen;
