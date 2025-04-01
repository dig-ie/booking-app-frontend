import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import theme from "../../../themes/mainTheme";

interface NavBarProps {
  title: string;
  onBackPress?: () => void;
  onProfilePress?: () => void;
}

export const NavBar: React.FC<NavBarProps> = ({
  title,
  onBackPress,
  onProfilePress,
}) => {
  return (
    <View style={styles.container}>
      {onBackPress && (
        <TouchableOpacity onPress={onBackPress} style={styles.iconButton}>
          {/* Ícone hamburger */}
          <SvgHamburgerIcon />
        </TouchableOpacity>
      )}

      {/* Título Central */}
      <Text style={styles.title}>{title}</Text>

      {/* Botão de Perfil */}
      {onProfilePress && (
        <TouchableOpacity onPress={onProfilePress} style={styles.iconButton}>
          {/* Exemplo de ícone SVG de perfil (pode ser trocado por outro SVG de sua escolha) */}
          <SvgProfileIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

// Ícone de Hamburger
const SvgHamburgerIcon = () => (
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="currentColor"
      d="M3 6h18M3 12h18M3 18h18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Ícone de Perfil (exemplo)
const SvgProfileIcon = () => (
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="7" r="4" fill="currentColor" />
    <path
      fill="currentColor"
      d="M4 21v-2c0-3.866 3.134-7 7-7h2c3.866 0 7 3.134 7 7v2"
    />
  </svg>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.small,
    paddingHorizontal: theme.spacing.medium,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.borderColor,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.primaryText,
    textAlign: 'center',
    flex: 1,
  },
  iconButton: {
    padding: theme.spacing.small,
  },
  buttonText: {
    color: theme.colors.primaryText,
    fontSize: 16,
  },
});
