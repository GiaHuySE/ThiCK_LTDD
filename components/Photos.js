import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Categories from "./Categories copy";
const Photos = ({ navigation }) => {
  const [list, setList] = useState([]);
  const [visible, setViisble] = useState(false);
  const [hideId, setHideId] = useState(null);
  const [productTitle, setProductTitle] = useState("");
  const [prodcutPrice, setProductPrice] = useState(0);
  const [prodcutDescription, setProductDescription] = useState(0);
  const [cart, setCart] = useState([]);
  console.log("cart", cart);
  const handleVisibleModal = () => {
    setViisble(!visible);
    setHideId(null);
  };
  useEffect(() => {
    getList();
  }, []);
  const getList = () => {
    fetch("https://6397336086d04c76338e2dce.mockapi.io/api/product", {
      //fetch("https://fakestoreapi.com/products", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((resJson) => {
        setList(resJson);
      })
      .catch((error) => {
        console.log("Error", error);
      });
    // axios({
    //   url: "https://jsonplaceholder.typicode.com/photos",
    //   method: "GET",
    // }).then((res) => {
    //   var response = res.data;
    //   setList(response.data);
    // });
  };

  const onChangeTitle = (value) => {
    setProductTitle(value);
  };

  const onChangePrice = (value) => {
    setProductPrice(value);
  };

  const onChangeDescription = (value) => {
    setProductDescription(value);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          flexDirection: "column",
          padding: 5,
          marginTop: 8,
          alignItems: "center",
          justifyContent: "flex-start",
          borderBottomColor: "black",
          borderWidth: 1,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PhotoInfo", { data: item });
          }}
        >
          <Image
            source={{ uri: item.image }}
            style={{ width: 100, height: 150 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={{ flex: 1, flexWrap: "wrap" }}>Title: {item.title}</Text>
        {/* <Text style={{ flex: 1, flexWrap: "wrap" }}>
          Description: {item.description}
        </Text> */}
        <Text style={{ flex: 1, flexWrap: "wrap" }}>price: {item.price}</Text>
        <View>
          {/* <TouchableOpacity onPress={() => handelDetete(item)}>
            <Text style={{ color: "red" }}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleEdit(item)}>
            <Text style={{ color: "green" }}>Edit</Text>
          </TouchableOpacity> */}
          {cart.includes(item) ? (
            <TouchableOpacity
              style={{
                backgroundColor: "green",
                width: 150,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                setCart(cart.filter((x) => x.id !== item.id));
              }}
            >
              <Text style={{ color: "white" }}>Remove from cart</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: "green",
                width: 150,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                setCart([...cart, item]);
              }}
            >
              <Text style={{ color: "white" }}>Add to cart</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "white",
          height: 50,
          borderColor: "black",
          borderWidth: 1,
          padding: 10,
        }}
      >
        <Text style={styles.txt_main}>Products {list.length}</Text>
        <TouchableOpacity
          style={{ backgroundColor: "black" }}
          onPress={handleVisibleModal}
        >
          <Text
            style={{
              color: "white",
              width: 100,
              padding: 4,
              borderRadius: 10,
              borderColor: "black",
              borderWidth: 1,
            }}
          >
            New Products
          </Text>
        </TouchableOpacity>
        <Modal animationType="slide" visible={visible}>
          <SafeAreaView>
            <View
              style={{
                padding: 15,
                // backgroundColor : "#e3e3e3",
                marginTop: 10,
              }}
            >
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={handleVisibleModal}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    marginVertical: 10,
                    // textAlign: "right",
                  }}
                >
                  Close
                </Text>
              </TouchableOpacity>
              <TextInput
                placeholder="Product title"
                value={productTitle}
                onChangeText={onChangeTitle}
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: "gray",
                  borderRadius: 10,
                  marginTop: 10,
                }}
              />
              <TextInput
                placeholder="Product description"
                value={prodcutDescription}
                onChangeText={onChangeDescription}
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: "gray",
                  borderRadius: 10,
                  marginTop: 10,
                }}
              />
              <TextInput
                placeholder="Product Price"
                value={prodcutPrice}
                onChangeText={onChangePrice}
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: "gray",
                  borderRadius: 10,
                  marginTop: 10,
                }}
              />
              <TouchableOpacity
                style={{
                  display: "flex",
                  padding: 15,
                  backgroundColor: "#000",
                  marginTop: 20,
                }}
              >
                <Text style={{ color: "white", textAlign: "center" }}>
                  {hideId == null ? "Save" : "Update"}
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </Modal>
      </View> */}
      <View>
        <Text style={{ fontWeight: "bold" }}>Welcome back</Text>
      </View>
      {/* <Categories onChange={(id) => setActiveCategoryId(id)} /> */}
      <FlatList
        style={{ flex: 1, padding: 8 }}
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => `key-${item.id}`}
      />
      {/* <View style={{ height: 300, height: 200 }}>
        <Text>List item added to cart</Text>
        {cart.map((item) => (
          <View key={item}>
            <Text>{item.name}</Text>
          </View>
        ))}
      </View> */}
    </SafeAreaView>
  );
};

export default Photos;

const styles = StyleSheet.create({});
