export interface CardProps {
  type: 'dog' | 'cat';
  url: string;
}

export interface PetProps {
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  rotate: string;
  seconds?: string;
};

export interface ThemeProps {
  theme: boolean;
  setTheme: Function;
};