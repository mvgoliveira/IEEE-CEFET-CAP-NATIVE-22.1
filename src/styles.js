import { StyleSheet } from "react-native";
import { theme } from "./global/styles/theme";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      justifyContent: "center",
      alignItems: 'center'
    },
  
    buttonContainer: {
      flexDirection: "row"
    },
  
    button: {
      paddingVertical: 18,
      paddingHorizontal: 23,
      marginHorizontal: 15,
      marginTop: 25,
      backgroundColor: "#D9D9D9",
      elevation: 2,
      borderRadius: 4
    },
  
    title: {
      color: theme.colors.primary,
      fontSize: 30,
      fontFamily: theme.fonts.title700
    },
  
    subTitle: {
      color: theme.colors.secondary,
      fontSize: 16,
      fontFamily: theme.fonts.title400
    }
  });