import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";

interface GridProps {
  items: React.ReactNode[];
}

export const Grid: React.FC<GridProps> = ({ items }) => {
  return (
    <View style={styles.gridWrapper}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {items.map((item, index) => (
            <View key={index} style={styles.gridItem}>
              {item}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  gridWrapper: {
    width: "100%",
    maxHeight: 500, // Ajustável conforme a necessidade
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingBottom: 16,
  },
  gridItem: {
    width: "45%", // Mantém duas colunas
    margin: 8,
    alignItems: "center",
  },
});
