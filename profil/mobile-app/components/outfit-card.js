import { View, Text, Image, StyleSheet } from 'react-native';

export default function OutfitCard({ outfit }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: outfit.image }} style={styles.image} />
      <Text style={styles.title}>{outfit.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});