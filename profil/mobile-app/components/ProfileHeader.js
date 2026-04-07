import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileHeader({ user }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.bio}>{user.bio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 40,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bio: {
    color: '#909090',
    marginTop: 5,
  },
});