import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

interface Event {
  title: string;
  date: {
    start_date: string;
    when: string;
  };
  address: string[];
  link: string;
}

const stateMap: { [key: string]: string } = {
  AL: 'Alabama',
  AK: 'Alaska',
  AZ: 'Arizona',
  AR: 'Arkansas',
  CA: 'California',
  CO: 'Colorado',
  CT: 'Connecticut',
  DE: 'Delaware',
  FL: 'Florida',
  GA: 'Georgia',
  HI: 'Hawaii',
  ID: 'Idaho',
  IL: 'Illinois',
  IN: 'Indiana',
  IA: 'Iowa',
  KS: 'Kansas',
  KY: 'Kentucky',
  LA: 'Louisiana',
  ME: 'Maine',
  MD: 'Maryland',
  MA: 'Massachusetts',
  MI: 'Michigan',
  MN: 'Minnesota',
  MS: 'Mississippi',
  MO: 'Missouri',
  MT: 'Montana',
  NE: 'Nebraska',
  NV: 'Nevada',
  NH: 'New Hampshire',
  NJ: 'New Jersey',
  NM: 'New Mexico',
  NY: 'New York',
  NC: 'North Carolina',
  ND: 'North Dakota',
  OH: 'Ohio',
  OK: 'Oklahoma',
  OR: 'Oregon',
  PA: 'Pennsylvania',
  RI: 'Rhode Island',
  SC: 'South Carolina',
  SD: 'South Dakota',
  TN: 'Tennessee',
  TX: 'Texas',
  UT: 'Utah',
  VT: 'Vermont',
  VA: 'Virginia',
  WA: 'Washington',
  WV: 'West Virginia',
  WI: 'Wisconsin',
  WY: 'Wyoming',
};

export default function HomeScreen() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [town, setTown] = useState('Marlboro');
  const [state, setState] = useState('NJ');
  const [showTownInput, setShowTownInput] = useState(false);

  const fetchEvents = async (selectedTown: string, selectedState: string) => {
    setLoading(true);
    try {
      const fullStateName =
        stateMap[selectedState.toUpperCase()] || selectedState;
      const response = await fetch(
        `https://serpapi.com/search?engine=google&q=events+in+${encodeURIComponent(
          selectedTown
        )}+${encodeURIComponent(fullStateName)}&location=${encodeURIComponent(
          selectedTown
        )},+${encodeURIComponent(
          fullStateName
        )},+United+States&google_domain=google.com&hl=en&gl=us&device=desktop&api_key=624423ea794c96c7c001a696323e47d0e8fcc773e272a81e5f3e9da85d22c845`
      );
      const data = await response.json();
      console.log('API Response:', data);

      if (data.events_results && data.events_results.length > 0) {
        setEvents(data.events_results);
      } else {
        setEvents([]);
        alert('No events found for the specified location.');
      }
    } catch (error) {
      console.error('Error fetching events:', error);
      alert('Error fetching events. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLinkPress = (eventTitle: string) => {
    const searchQuery = encodeURIComponent(`${eventTitle} ${town} ${state}`);
    const googleSearchUrl = `https://www.google.com/search?q=${searchQuery}`;
    Linking.openURL(googleSearchUrl);
  };

  const renderEvent = ({ item }: { item: Event }) => (
    <View style={styles.eventItem}>
      <Text style={styles.eventTitle}>{item.title}</Text>
      <View style={styles.dateContainer}>
        <Ionicons name="calendar-outline" size={18} color="#333" />
        <Text style={styles.eventDate}>{item.date.start_date}</Text>
      </View>
      <View style={styles.timeContainer}>
        <Ionicons name="time-outline" size={18} color="#333" />
        <Text style={styles.eventWhen}>{item.date.when}</Text>
      </View>
      {item.address && (
        <View style={styles.addressContainer}>
          <Ionicons name="location-outline" size={18} color="#333" />
          <Text style={styles.eventAddress}>{item.address.join(', ')}</Text>
        </View>
      )}
      <View style={styles.linkContainer}>
        <Ionicons name="book-outline" size={18} color="#333" />
        <TouchableOpacity onPress={() => handleLinkPress(item.title)}>
          <Text style={styles.moreInfo}> Click for more info</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const handleSubmit = () => {
    if (town && state) {
      if (state.length !== 2 || !stateMap[state.toUpperCase()]) {
        alert('Please enter a valid two-letter state abbreviation.');
        return;
      }
      fetchEvents(town, state);
      setShowTownInput(false);
    } else {
      alert('Please enter both town and state.');
    }
  };

  return (
    <LinearGradient colors={['#FF7E5F', '#FEB47B']} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.header}>
          Community Events in{' '}
          <Text style={{ color: '#008080' }}>
            {town.charAt(0).toUpperCase() + town.slice(1).toLowerCase()},{' '}
            {state}
          </Text>
        </Text>

        <TouchableOpacity
          style={styles.changeTownButton}
          onPress={() => setShowTownInput(!showTownInput)}
        >
          <Text style={styles.changeTownText}>
            {showTownInput ? 'Collapse' : 'Change Town/State'}
          </Text>
        </TouchableOpacity>

        {showTownInput && (
          <View style={styles.townInputContainer}>
            <TextInput
              style={styles.townInput}
              placeholder="Enter town name"
              placeholderTextColor={'#888'}
              value={town}
              onChangeText={(text) => setTown(text)}
            />
            <TextInput
              style={styles.townInput}
              placeholder="Enter state abbreviation (e.g., NJ)"
              placeholderTextColor={'#888'}
              value={state}
              onChangeText={(text) => setState(text.toUpperCase())}
              maxLength={2}
            />
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}

        {loading ? (
          <ActivityIndicator
            size="large"
            color="#007AFF"
            style={styles.loader}
          />
        ) : events.length > 0 ? (
          <FlatList
            data={events}
            renderItem={renderEvent}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.eventList}
          />
        ) : (
          <Text style={styles.text}>No events found</Text>
        )}

        <Text style={styles.footnote}>
          © 2024 CommUnity. All rights reserved.
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1, // Make sure the gradient covers the entire container
  },
  container: {
    flex: 1,
    padding: 20,
    // Removed backgroundColor here since it's now a gradient
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
    marginTop: 40,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#2C3E50', // Match header color for consistency
  },
  eventItem: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#ffffff', // White card background
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2980B9', // Blue color for emphasis
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  eventDate: {
    fontSize: 14,
    color: '#555', // Slightly lighter for date
    marginLeft: 5,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  eventWhen: {
    fontSize: 14,
    color: '#555',
    marginLeft: 5,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  eventAddress: {
    fontSize: 14,
    color: '#555',
    marginLeft: 5,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  moreInfo: {
    fontSize: 14,
    color: '#007AFF', // Link color
    textDecorationLine: 'underline',
  },
  changeTownButton: {
    backgroundColor: '#2980B9',
    padding: 10,
    borderRadius: 8,
    marginVertical: 20,
    alignSelf: 'center',
  },
  changeTownText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  townInputContainer: {
    marginVertical: 10,
  },
  townInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#008C74',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  loader: {
    marginTop: 20,
  },
  eventList: {
    paddingBottom: 20,
  },
  footnote: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 12,
    color: '#008C74',
  },
});
