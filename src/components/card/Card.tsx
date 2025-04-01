import React from "react";
import theme from "../../../themes/mainTheme";
import { View, Text, Image, StyleSheet } from "react-native";
import { RatingStars } from "../ratingStars/RatingStars";

interface CardProps {
  imagePath: any;
  hotelName: string;
  priceByNight: number;
  ratingStars: number;
  locationDescription: string;
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
        <Text style={styles.hotelName} numberOfLines={2}>
          {hotelName}
        </Text>
        <Text style={styles.location} numberOfLines={1}>
          {locationDescription}
        </Text>
        <Text style={styles.price}>R$ {priceByNight} / noite</Text>
      </View>
      <View style={styles.ratingContainer}>
        <RatingStars starsNumbers={ratingStars} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondaryBackground,
    width: 160,
    borderRadius: 8,
    margin: 8,
    shadowColor: "#222",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 80,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  subContainer: {
    padding: 8,
    minHeight: 80, // Mantém altura fixa para evitar empurrões
    justifyContent: "center",
  },
  hotelName: {
    fontWeight: "bold",
    fontSize: 14,
    flexShrink: 1,
  },
  location: {
    fontSize: 12,
    color: theme.colors.secondaryText,
  },
  price: {
    fontSize: 12,
    fontWeight: "600",
    marginTop: 4,
  },
  ratingContainer: {
    alignItems: "center",
    paddingBottom: 8,
  },
});

export default Card;
