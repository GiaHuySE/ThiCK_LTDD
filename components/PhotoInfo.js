import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useRoute, useState } from "@react-navigation/native";

const PhotoInfo = () => {
  const route = useRoute();
  const title = route.params.data.title;
  const image = route.params.data.image;
  const description = route.params.data.description;
  const price = route.params.data.price;
  return (
    <View style={{ flexDirection: "column" }}>
      <Image
        source={{ uri: image }}
        style={{ width: 100, height: 150, padding: 100 }}
        resizeMode="contain"
      />
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: "bold" }}>Title: </Text>
        <Text style={{ flexWrap: "wrap", flex: 1 }}>{title}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: "bold" }}>Description: </Text>
        <Text style={{ flexWrap: "wrap", flex: 1 }}>{description}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: "bold" }}>Price: </Text>
        <Text style={{ flexWrap: "wrap", flex: 1 }}>{price}</Text>
      </View>
      <TouchableOpacity
        style={{
          display: "flex",
          padding: 15,
          backgroundColor: "#000",
          marginTop: 20,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PhotoInfo;

const styles = StyleSheet.create({});
