// app/home/account.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // For background gradient

export default function AccountScreen() {
  return (
    <LinearGradient colors={['#6DD5FA', '#2980B9']} style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Placeholder for profile picture
          style={styles.profileImage}
        />
        <Text style={styles.username}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>

      <ScrollView style={styles.infoContainer}>
        <Text style={styles.sectionTitle}>Account Information</Text>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Phone Number:</Text>
          <Text style={styles.infoValue}>+1 (555) 123-4567</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Joined:</Text>
          <Text style={styles.infoValue}>January 1, 2022</Text>
        </View>

        <Text style={styles.sectionTitle}>Settings</Text>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Notifications:</Text>
          <Text style={styles.infoValue}>Enabled</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Privacy:</Text>
          <Text style={styles.infoValue}>Public</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    padding: 20, // Added padding for better spacing
    marginVertical: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light background for contrast
    borderRadius: 12, // Rounded corners
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderColor: '#fff', // White border around the profile image
    borderWidth: 2,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2980B9',
  },
  email: {
    fontSize: 16,
    color: '#2980B9',
    marginBottom: 10,
  },
  infoContainer: {
    backgroundColor: '#f0f8ff',
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2980B9',
    marginVertical: 10,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  infoLabel: {
    fontSize: 16,
    color: '#333',
  },
  infoValue: {
    fontSize: 16,
    color: '#666',
  },
});
