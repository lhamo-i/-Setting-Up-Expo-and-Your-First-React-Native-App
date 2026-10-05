import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [likes, setLikes] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        {/* Profile Image */}
        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/e0/c1/62/e0c16260a50d8105f39fff05a36784ea.jpg',
          }}
          style={styles.profileImage}
        />

        {/* Name */}
        <Text style={styles.name}>Tshering Lhamo</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          BE Information Technology · Year 3
        </Text>

        {/* Bio */}
        <Text style={styles.bio}>
          I am a student interested in technology and mobile app development.
          For Project II, I would like to build a Lost and Found app that helps
          students report lost items and find items that have been found on campus.
        </Text>

        {/* Likes */}
        <View style={styles.likesRow}>
          <Ionicons name="heart" size={22} color="#d64545" />
          <Text style={styles.likesText}>{likes} likes</Text>
        </View>

        {/* Popular Message */}
        {likes >= 10 && (
          <Text style={styles.popularText}>
            You’re popular!
          </Text>
        )}

        {/* Buttons */}
        <View style={styles.row}>

          {/* Upvote */}
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && { opacity: 0.6 },
            ]}
            onPress={() => setLikes(likes + 1)}
          >
            <Ionicons name="arrow-up" size={22} color="#fff" />
            <Text style={styles.buttonLabel}>Upvote</Text>
          </Pressable>

          {/* Downvote */}
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && { opacity: 0.6 },
            ]}
            onPress={() => {
              if (likes > 0) {
                setLikes(likes - 1);
              }
            }}
          >
            <Ionicons name="arrow-down" size={22} color="#fff" />
            <Text style={styles.buttonLabel}>Downvote</Text>
          </Pressable>

          {/* Reset */}
          <Pressable
            style={({ pressed }) => [
              styles.resetButton,
              pressed && { opacity: 0.6 },
            ]}
            onPress={() => setLikes(0)}
          >
            <Ionicons name="refresh" size={22} color="#fff" />
            <Text style={styles.buttonLabel}>Reset</Text>
          </Pressable>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },

  card: {
    width: '85%',
    padding: 25,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },

  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    marginBottom: 15,
  },

  bio: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 23,
    marginBottom: 10,
  },

  likesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 20,
  },

  likesText: {
    fontSize: 18,
  },

  popularText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },

  row: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 15,
  },

  button: {
    backgroundColor: '#2f6fed',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    alignItems: 'center',
    minWidth: 80,
  },

  resetButton: {
    backgroundColor: '#e67e22',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    alignItems: 'center',
    minWidth: 80,
  },

  buttonLabel: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
});