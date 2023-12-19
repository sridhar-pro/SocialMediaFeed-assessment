import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Footer = () => {
  const handleButtonPress = (buttonName) => {
    console.log(`${buttonName} button pressed!`);
  };

  return (
    <View style={styles.footer}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleButtonPress('Home')} style={styles.button}>
         
          <Image
            source={require('./profile/home.png')} 
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleButtonPress('Explore')} style={styles.button}>
        
          <Image
            source={require('./profile/explo.png')} 
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleButtonPress('Notifications')} style={styles.button}>
          
          <Image
            source={require('./profile/not.png')} 
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        
        <TouchableOpacity onPress={() => handleButtonPress('Log-out')} style={styles.button}>
          
          <Image
            source={require('./profile/log.png')} 
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 6,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10, 
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 3, 
  },
});

export default Footer;
