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
      <View style={styles.subContainer}>
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
    margin: 8,
    borderRadius: 8,
    shadowColor: "#222", // Cor da sombra (mais escura)
    shadowOffset: { width: 5, height: 5 }, // Deslocamento da sombra (direita e para baixo)
    shadowOpacity: 0.5, // Opacidade da sombra (aumentada para mais escuro)
    shadowRadius: 6, // Raio da sombra (um pouco maior para uma sombra mais forte)
    elevation: 5, // Necessário para Android
  },
  subContainer: {
    padding: 8,
  },
  image: {
    width: 200,
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  text: {},
});
