import React from "react";
import theme from "../../../themes/mainTheme";
theme;
import { View, StyleSheet } from "react-native";

interface GridProps {
  items: React.ReactNode[];
}

export const Grid: React.FC<GridProps> = ({ items }) => {
  return <View style={styles.container}>{items.map((item) => item)}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 8,
  },
});
