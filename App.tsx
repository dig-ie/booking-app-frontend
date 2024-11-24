import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import theme from "./themes/mainTheme";
import { Card } from "./src/components/card/Card";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Calendar
          style={{
            borderWidth: 0,
            borderColor: "gray",
            height: 320,
            maxWidth: 320,
            borderRadius: 8,
          }}
          theme={{
            backgroundColor: theme.colors.background,
            calendarBackground: theme.colors.secondaryBackground,
            textSectionTitleColor: theme.colors.primaryText,
            selectedDayBackgroundColor: theme.colors.primary,
            selectedDayTextColor: theme.colors.secondaryText,
            todayTextColor: theme.colors.tertiary,
            dayTextColor: theme.colors.secondaryText,
            textDisabledColor: theme.colors.secondary,
          }}
        />
        <br />
        <Card
          imagePath={"./src/assets/defaultHotelImage"}
          hotelName="hotel name"
          priceByNight={300}
          ratingStars={3}
          locationDescription="good de mais"
        />

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
  },
});
