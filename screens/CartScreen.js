import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import Card from "../components/card";
import { CartContext } from '../contexts/CartContext';

const CartScreen = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <View>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
            cart={cart}
            addToCart={() => {}} 
            removeFromCart={removeFromCart}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default CartScreen;
