import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Header = () => {
  const handleButtonPress = (buttonName) => {
    console.log(`${buttonName} button pressed!`);
  };
  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Social Media Feed</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleButtonPress('Notify')} style={styles.button}>
          <Image
            source={require('./profile/noti.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000000',
    padding: 15,
    width: '100%',
    height: 50,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#f0f8ff',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    right: 15,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#000000',
    padding: 2,
    borderRadius: 0,
    width: 35,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  logo: {
    width: '60%',
    height: 20,
    borderRadius: 5,
    resizeMode: 'contain',
  },
});

export default Header;
