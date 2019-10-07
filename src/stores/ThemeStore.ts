import React from "react";


export interface IThemeStore {
    theme: string;
    layout: string;
    toggleTheme(): any;
    toggleLayout(): any; 
}

export const ThemeStore: IThemeStore = {
  theme: "light",
  layout: "cozy",
  toggleTheme() {
    if(this.theme === "light") {
        this.theme = "dark"
    } else {
        this.theme = "light"
    }
  },
  toggleLayout() {
    if(this.layout === "light") {
        this.layout = "dark"
    } else {
        this.layout = "light"
    }
  }

}
export const createThemeStore = () => {
  const store = {
    ...ThemeStore
  };

  return store;
};

export type ThemeStore = ReturnType<typeof createThemeStore>
export const ThemeContext = React.createContext(ThemeStore);
