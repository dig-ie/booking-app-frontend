import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import theme from "./themes/mainTheme";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Calendar
        style={{
          borderWidth: 0,
          borderColor: "gray",
          height: 350,
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
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
