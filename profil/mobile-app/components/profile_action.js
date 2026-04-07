import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProfileActions() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryText}>Modifier le profil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton}>
        <Text style={styles.secondaryText}>Paramètres</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    gap: 10,
  },
  primaryButton: {
    backgroundColor: '#4A26D0',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  primaryText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#F2F2F2',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  secondaryText: {
    color: '#333',
  },
});