import React from 'react';
import { View, StyleSheet } from 'react-native';
import SocialMediaFeed from './screens/SocialMediaFeed';

const App = () => {
  return (
    <View style={styles.container}>
      <SocialMediaFeed />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#778899', 
  },
});

export default App;