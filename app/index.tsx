import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#B2E0D4', '#87CEFA', '#E6E6FA']}
        style={styles.background}
      />
      <View style={styles.content}>
        <View style={styles.upperContent}>
          <View style={styles.wrap}>
            <Image
              style={styles.logo}
              source={require('../assets/images/app-logo.png')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>CommUnity</Text>
            <Text style={styles.tagline}>
              "Connect, Share, Thrive Together"
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Link href="/login" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Sign In/Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 150,
  },
  upperContent: {
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 210,
  },
  wrap: {
    width: 150,
    height: 150,
    overflow: 'hidden',
    borderRadius: 75,
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#1E3A5F',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 20,
    color: '#2C5282',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
