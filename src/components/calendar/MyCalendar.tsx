import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

const MyCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");

  const onDayPress = (day: any) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select a Date</Text>
      <Calendar
        current={"2024-11-22"}
        onDayPress={onDayPress}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: "blue" },
        }}
        monthFormat={"yyyy MM"}
        minDate={"2023-01-01"}
        maxDate={"2025-12-31"}
      />
      <Text style={styles.selectedDateText}>
        {selectedDate ? `Selected Date: ${selectedDate}` : "No date selected"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    maxWidth: 300,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
  },
  selectedDateText: {
    marginTop: 20,
    fontSize: 18,
    color: "green",
  },
});

export default MyCalendar;
