import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, {backgroundColor: 'lightblue'}]}>
        <Image source={require('./assets/earth.jpg')} style={styles.image} />
        <View style={styles.overlay}>
          <Text style={styles.text}>Section 1</Text>
          <Text style={styles.text}>Some text for section 1</Text>
        </View>
      </View>
      <View style={[styles.box, {backgroundColor: 'lightgreen'}]}>
        <Image source={require('./assets/treepic.jpg')} style={styles.image} />
        <View style={styles.overlay}>
          <Text style={styles.text}>Section 2</Text>
          <Text style={styles.text}>Some text for section 2</Text>
        </View>
      </View>
      <View style={[styles.box, {backgroundColor: 'lightcoral'}]}>
        <Image source={require('./assets/forest.jpg')} style={styles.image} />
        <View style={styles.overlay}>
          <Text style={styles.text}>Section 3</Text>
          <Text style={styles.text}>Some text for section 3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative', // Added position relative to allow absolute positioning of overlay
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Take up the entire space of the parent
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    color: 'white', // Text color is set to white for better contrast
  },
});
