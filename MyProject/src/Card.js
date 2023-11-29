import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const Card = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-2nd-anniversary-celebration-poster-background-material-image_145699.jpg' }}
      style={styles.container}
    >
      <View style={styles.mainContent}>
        <Text style={styles.title}>25th Anniversary</Text>
        <Text style={styles.subtitle}>Wishing you a lifetime of love and happiness!</Text>
        <Text style={styles.couples}>Mom & Dad ❤️</Text>
        <Text style={styles.wish}>Happy Marriage Anniversary 💞</Text>
      </View>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>With Love and Best Wishes ,</Text>
        <Text style={styles.signature}>- Utkarsh Arora 💝</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    textShadowColor: 'pink',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textShadowColor: 'pink',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  couples: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    textShadowColor: 'pink',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  wish: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textShadowColor: 'pink',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  bottomTextContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 10,
    padding: 10,
  },
  bottomText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  signature: {
    fontSize: 16,
    textAlign:"right",
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Card;
