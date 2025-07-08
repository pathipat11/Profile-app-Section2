import { Stack } from "expo-router";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function StackLayout() {
    const { color } = useTheme();

    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: color.background,
                },
                headerTintColor: color.text,
                headerTitleStyle: {
                    color: color.text,
                },
                headerTitleAlign: "center",
            }}>
            <Stack.Screen
                name="index"
                options={{ title: "Profile", headerRight: () => <ThemeToggle /> }}
            />
            <Stack.Screen
                name="about"
                options={{ title: "About This Course", headerRight: () => <ThemeToggle /> }}
            />
        </Stack>
    );
}
export default function Layout() {
    return (
        <ThemeProvider>
            <StackLayout />
        </ThemeProvider>
    );
}
