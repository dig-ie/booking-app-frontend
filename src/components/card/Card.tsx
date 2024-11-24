import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import theme from "../../../themes/mainTheme";

interface CardProps {
  imagePath: any;
  hotelName: String;
  priceByNight: Number;
  ratingStars: Number;
  locationDescription: String;
}

export const Card: React.FC<CardProps> = ({
  imagePath = "../../assets/defaultHotelImage.jpg",
  hotelName,
  priceByNight,
  ratingStars,
  locationDescription,
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.imgur.com/cD9a3I2.jpeg" }}
        style={styles.image}
      />
      <View>
        <Text>texto1</Text>
        <Text>texto2</Text>
        <Text>texto3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondaryBackground,
    minHeight: 300,
    maxWidth: 200,
  },
  image: {
    width: 200,
    height: 200,
  },
});
