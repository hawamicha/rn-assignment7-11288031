import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import addCircle from '../assets/add_circle.png';
import HeartIcon from '../assets/heartIcon.png';

const Card = ({ image, title, description, price, addToCart, removeFromCart, cart, onPress }) => {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const itemInCart = cart.find(item => item.title === title);
    setIsPressed(!!itemInCart);
  }, [cart]);

  const handlePress = () => {
    const newItem = { image, title, description, price };
    if (!isPressed) {
      addToCart(newItem);
    } else {
      removeFromCart(newItem);
    }
    setIsPressed(!isPressed);
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardContainer}>
        <Image source={typeof image === 'string' ? { uri: image } : image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.description}>
            {description}
          </Text>
          <Text style={styles.price}>${price}</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={handlePress}>
          <Image source={isPressed ? HeartIcon : addCircle} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  iconContainer: {
    position: 'absolute',
    bottom: 20,
    right: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'gray',
    paddingTop: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ee805b',
    paddingTop: 10,
  },
});

export default Card;
