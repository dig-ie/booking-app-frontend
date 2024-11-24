import React, { useState } from "react";
import { View } from "react-native";
import { FaStar } from "react-icons/fa"; // Ícone de estrela do Font Awesome
import { StyleSheet } from "react-native";

interface RatingStarsProps {
  starsNumbers: any;
}

export const RatingStars: React.FC<RatingStarsProps> = ({ starsNumbers }) => {
  const starsNumberArray = Array.from(
    { length: starsNumbers },
    (_, index) => index + 1
  );

  const offStarsArray = Array.from({ length: 5 - starsNumbers });

  return (
    <View style={styles.container}>
      {starsNumberArray.map((star) => (
        <FaStar style={styles.onStar} />
      ))}
      {offStarsArray.map((star) => (
        <FaStar style={styles.offStar} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
  },
  onStar: {
    color: "gold",
  },
  offStar: {
    color: "#A9A9A9",
  },
});
