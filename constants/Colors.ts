// constants/colors.ts

export const colors = {
  // Primary colors
  primary: {
    main: '#007AFF',
    light: '#47A3FF',
    dark: '#0055B3',
  },

  // Secondary colors
  secondary: {
    main: '#5856D6',
    light: '#7A79E0',
    dark: '#3E3B9C',
  },

  // Semantic colors
  success: '#34C759',
  error: '#FF3B30',
  warning: '#FF9500',
  info: '#5856D6',

  // Neutral colors
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    gray50: '#F9FAFB',
    gray100: '#F3F4F6',
    gray200: '#E5E7EB',
    gray300: '#D1D5DB',
    gray400: '#9CA3AF',
    gray500: '#6B7280',
    gray600: '#4B5563',
    gray700: '#374151',
    gray800: '#1F2937',
    gray900: '#111827',
  },

  // Background colors
  background: {
    primary: '#FFFFFF',
    secondary: '#F3F4F6',
    tertiary: '#E5E7EB',
  },

  // Text colors
  text: {
    primary: '#111827',
    secondary: '#4B5563',
    tertiary: '#6B7280',
    inverse: '#FFFFFF',
  },

  // Border colors
  border: {
    light: '#E5E7EB',
    medium: '#D1D5DB',
    dark: '#9CA3AF',
  },
};

// You can also add type definitions for better TypeScript support
export type ColorPalette = typeof colors;
