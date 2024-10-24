import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function SignUpScreen() {
  // State to manage the visibility of the welcome text
  const [isInputFocused, setInputFocused] = useState(false);

  // Function to handle focus on input
  const handleFocus = () => {
    setInputFocused(true);
  };

  // Function to handle blur from input
  const handleBlur = () => {
    setInputFocused(false);
  };

  return (
    <LinearGradient
      colors={['#B2E0D4', '#6BFFB1']}
      style={styles.gradient} // Apply styles to gradient
    >
      <View style={styles.container}>
        {/* Main content (keyboard-affected) */}
        <KeyboardAvoidingView
          style={styles.content}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjust behavior for iOS and Android
          keyboardVerticalOffset={5} // Adjust this value as necessary
        >
          {/* Conditional Welcome Text */}
          {!isInputFocused && (
            <>
              <Text style={styles.welcomeText}>Join Us</Text>
              <Text style={styles.subtitle}>Create your account...</Text>
            </>
          )}

          {/* Input fields with labels */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#808080"
              onFocus={handleFocus} // Set focus state
              onBlur={handleBlur} // Reset focus state
            />

            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="name@example.com"
              placeholderTextColor="#808080"
              keyboardType="email-address"
              onFocus={handleFocus} // Set focus state
              onBlur={handleBlur} // Reset focus state
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor="#808080"
              secureTextEntry
              onFocus={handleFocus} // Set focus state
              onBlur={handleBlur} // Reset focus state
            />

            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor="#808080"
              secureTextEntry
              onFocus={handleFocus} // Set focus state
              onBlur={handleBlur} // Reset focus state
            />
          </View>

          {/* Sign Up Button */}
          <TouchableOpacity style={styles.button} activeOpacity={0.4}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          {/* Already have an account link */}
          <Text style={styles.signInText}>
            Already have an account?{' '}
            <Link href="/login">
              <Text style={styles.signInLink}>Log in here</Text>
            </Link>
          </Text>
        </KeyboardAvoidingView>

        {/* Footer decoration (fixed position) */}
        <Image
          source={require('../assets/images/footer-decoration.png')}
          style={styles.footerDecoration}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 40,
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20, // Reduced margin for subtitle
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10, // Reduced margin for input container
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 3, // Reduced margin for label
    marginLeft: 10,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    paddingVertical: 10, // Reduced padding for a more compact look
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10, // Reduced margin between input fields
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4A4A4A',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signInText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  signInLink: {
    color: '#4A4A4A',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  footerDecoration: {
    width: '100%',
    height: 100,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
});
