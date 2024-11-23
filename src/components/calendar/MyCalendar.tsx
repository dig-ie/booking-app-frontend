import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const MyCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');

  // Handler to handle date selection
  const onDayPress = (day: any) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select a Date</Text>
      <Calendar
        // Initially visible month. Default = Date()
        current={'2024-11-22'}
        // Handler for when a date is selected
        onDayPress={onDayPress}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: 'blue' },
        }}
        // Format of the month header
        monthFormat={'yyyy MM'}
        // Minimum date that can be selected
        minDate={'2023-01-01'}
        // Maximum date that can be selected
        maxDate={'2025-12-31'}
      />
      <Text style={styles.selectedDateText}>
        {selectedDate ? `Selected Date: ${selectedDate}` : 'No date selected'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
  },
  selectedDateText: {
    marginTop: 20,
    fontSize: 18,
    color: 'green',
  },
});

export default MyCalendar;
