import { View, Text, StyleSheet } from 'react-native';

export default function ProfileStats({ user }) {
  return (
    <View style={styles.container}>
      <Stat label="Vêtements" value={user.clothes} />
      <Stat label="Tenues" value={user.outfits} />
      <Stat label="Likes" value={user.likes} />
    </View>
  );
}

function Stat({ label, value }) {
  return (
    <View style={styles.stat}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  stat: {
    alignItems: 'center',
  },
  value: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  label: {
    color: '#909090',
  },
});