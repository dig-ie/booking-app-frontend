import React from "react";
import { ScrollView, View, StyleSheet, Text, SafeAreaView, Platform, KeyboardAvoidingView } from "react-native";
import { Calendar } from "react-native-calendars";
import theme from "../../themes/mainTheme";
import { Card } from "../components/card/Card";
import { Grid } from "../components/grid/Grid";
import { NavBar } from "../components/navBar/NavBar";
import { hotelData } from "../mock/hotelData";

const HomeScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : undefined} 
        style={styles.keyboardAvoidingView}
      >
        <View style={styles.container}>
          <NavBar
            title="Seu App de Reservas"
            onBackPress={() => navigation.navigate("Login")}
            onProfilePress={() => navigation.navigate("Profile")}
          />
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.innerContainer}>
              <Calendar style={styles.calendar} theme={calendarTheme} />
              <Text style={styles.title}>Hoteis disponíveis</Text>
              <Grid
                items={hotelData.map((hotel) => (
                  <Card
                    key={hotel.id}
                    imagePath={hotel.imagePath}
                    hotelName={hotel.hotelName}
                    priceByNight={hotel.priceByNight}
                    ratingStars={hotel.ratingStars}
                    locationDescription={hotel.locationDescription}
                  />
                ))}
              />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

// Tema do calendário separado para melhor organização
const calendarTheme = {
  backgroundColor: theme.colors.background,
  calendarBackground: theme.colors.secondaryBackground,
  textSectionTitleColor: theme.colors.primaryText,
  selectedDayBackgroundColor: theme.colors.primary,
  selectedDayTextColor: theme.colors.secondaryText,
  todayTextColor: theme.colors.tertiary,
  dayTextColor: theme.colors.secondaryText,
  textDisabledColor: theme.colors.secondary,
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background, // Evita cortes na Safe Area
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 64, // Maior espaçamento no final da rolagem
  },
  innerContainer: {
    alignItems: "center",
    paddingTop: 16, // Espaçamento do topo
    flex: 1, // Garantir que o conteúdo se expanda para a tela inteira
  },
  calendar: {
    borderWidth: 0,
    height: 320,
    maxWidth: 320,
    borderRadius: 8,
    marginBottom: 24, // Espaçamento entre o calendário e o grid
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    marginLeft: 8,
  }
});

export default HomeScreen;
