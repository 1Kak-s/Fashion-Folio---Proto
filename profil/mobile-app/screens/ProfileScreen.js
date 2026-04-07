import { View, StyleSheet, ScrollView } from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import ProfileStats from '../components/ProfileStats';
import ProfileActions from '../components/ProfileActions';
import OutfitCard from '../components/OutfitCard';
import { useEffect, useState } from 'react';
import { getUser } from '../services/userService';

export default function ProfileScreen() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser();
      setUser(data);
    };
    fetchUser();
  }, []);

  if (!user) return null;

  return (
    <ScrollView style={styles.container}>
      <ProfileHeader user={user} />
      <ProfileStats user={user} />
      <ProfileActions />

      {/* Tenues sauvegardées */}
      <View style={styles.outfits}>
        {user.savedOutfits.map((outfit, index) => (
          <OutfitCard key={index} outfit={outfit} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  outfits: {
    padding: 20,
  },
});