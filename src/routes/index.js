import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
    const navTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: 'transparent'
        },
    }

    return (
        <NavigationContainer theme={navTheme}>
            <AuthRoutes />
        </NavigationContainer>
    )
}