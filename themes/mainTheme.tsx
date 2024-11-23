// theme.ts

const colors = {
    // Primary Colors
    primary: '#A3C6FF',         // Blue Pastel (Main button, links)
    primaryHover: '#91B8FF',    // Hover effect for primary buttons
    primaryText: '#333333',     // Main text color
    
    // Secondary Colors
    secondary: '#B6A0FF',       // Pastel Blue Purple (used for accents, highlights)
    secondaryText: '#707070',   // Secondary text (muted, less prominent text)
  
    // Tertiary Colors
    tertiary: '#D4B0FF',         // Soft pastel purple (highlighted elements, callouts)
  
    // Neutral Colors (Backgrounds, Borders, etc.)
    background: '#F5F1E6',      // Light beige background
    secondaryBackground: '#E1E6EB', // Light gray background for cards, sections
    borderColor: '#D4C6B1',     // Light beige for borders or dividers
    lightGray: '#E1E6EB',       // Light gray for softer contrasts
  
    // Alert Colors
    success: '#66BB6A',         // Green for success (confirmation messages)
    error: '#F44336',           // Red for errors (error messages)
  };
  
  const fonts = {
    body: 'Arial',       // Default font for body text
    heading: 'Roboto',   // Font for headings
    subtitle: 'Verdana', // Font for subtitles
  };
  
  const spacing = {
    small: 8,
    medium: 16,
    large: 32,
    extraLarge: 64,
  };
  
  const theme = {
    colors,
    fonts,
    spacing,
  };
  
  export default theme;
  