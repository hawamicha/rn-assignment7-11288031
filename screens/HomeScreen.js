import React, { useState, useEffect, useContext } from "react";
import { View, TextInput, ScrollView, Text, Image, FlatList, TouchableOpacity, Modal, StyleSheet, Button, ActivityIndicator } from "react-native";
import Card from "../components/card";
import { CartContext } from "../contexts/CartContext";
import useCustomFonts from '../hooks/useFonts';

const HomeScreen = ({ navigation }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const fontsLoaded = useCustomFonts();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handleCardPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = data.filter(item => 
      item.title.toLowerCase().includes(text.toLowerCase()) ||
      item.description.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (!showSearch) {
      setSearch('');
      setFilteredData(data);
    }
  };

  if (loading || !fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Open Fashion</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={toggleSearch} style={{ marginRight: 10 }}>
            <Image source={require("../assets/Search.png")} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <Image source={require("../assets/shoppingBag.png")} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
        </View>
        {showSearch && (
          <View style={styles.searchContainer}>
            <TextInput 
              style={styles.searchInput}
              placeholder="Search..."
              value={search}
              onChangeText={handleSearch}
            />
        
          </View>
        )}
      </View>
      <FlatList
        data={filteredData.length > 0 ? filteredData : data}
        renderItem={({ item }) => (
          <View style={{ width: "50%", padding: 10 }}>
            <Card
              image={{ uri: item.image }}
              title={item.title}
              description={item.description}
              price={item.price}
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              onPress={() => handleCardPress(item)}
            />
          </View>
        )}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
      />
      {selectedItem && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalView}>
              <Image source={{ uri: selectedItem.image }} style={styles.modalImage} />
              <Text style={styles.modalTitle}>{selectedItem.title}</Text>
              <ScrollView contentContainerStyle={styles.modalDescriptionContainer}>
                <Text style={styles.modalDescription}>{selectedItem.description}</Text>
              </ScrollView>
              <Text style={styles.modalPrice}>${selectedItem.price}</Text>
              <Button title="Close" onPress={closeModal} />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: 'BrockScript', 
    textAlign: "center",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  headerIcons: {
    flexDirection: "row",
    position: 'absolute',
    right: 10,
    top: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#fff", 
    paddingHorizontal: 15,
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2, 
  },
  searchInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 20, // match the container's border radius
    backgroundColor: "#fff", // white background
    paddingHorizontal: 15,
  },
  
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: 300,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  modalDescriptionContainer: {
    maxHeight: 150,  
    paddingVertical: 10,
  },
  modalDescription: {
    fontSize: 16,
    color: 'gray',
    marginVertical: 10,
  },
  modalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#ee805b',
    marginVertical: 10,
  },
});

export default HomeScreen;