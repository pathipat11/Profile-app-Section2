import { Stack, usePathname } from "expo-router";
import ThemeToggle from "./components/ThemeToggle";
import AuthToggle from "./components/AuthToggle";
import { ThemeProvider, useTheme } from "../context/ThemeContext";

function StackLayout() {
    const { color } = useTheme();
    const pathname = usePathname();

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
                headerLeft: () => (pathname === "/" ? <AuthToggle /> : null),

                headerRight: () => <ThemeToggle />,
            }}
        >
            <Stack.Screen name="index" options={{ title: "Profile" }} />
            <Stack.Screen name="about" options={{ title: "About This Course" }} />
            <Stack.Screen name="book" options={{ title: "Book Collection" }} />
            <Stack.Screen name="signup" options={{ title: "Sign Up" }} />
            <Stack.Screen name="signin" options={{ title: "Sign In" }} />
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
