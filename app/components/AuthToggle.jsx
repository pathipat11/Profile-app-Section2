// components/AuthToggle.jsx
import { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRouter, usePathname } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AuthToggle() {
    const router = useRouter();
    const pathname = usePathname();
    const isSignin = pathname.includes("signin");

    const [usernameInitial, setUsernameInitial] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const userData = await AsyncStorage.getItem("user");
            if (userData) {
                try {
                    const parsed = JSON.parse(userData);
                    if (parsed?.username) {
                        setUsernameInitial(parsed.username.charAt(0).toUpperCase());
                    }
                } catch (e) {
                    console.error("Failed to parse user from storage");
                }
            }
        };

        fetchUser();
    }, []);

    const handlePress = () => {
        if (usernameInitial) {
            // อาจเปิดเมนูหรือโปรไฟล์
            console.log("Go to profile (future feature)");
        } else {
            router.push(isSignin ? "/signup" : "/signin");
        }
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            {usernameInitial ? (
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>{usernameInitial}</Text>
                </View>
            ) : (
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{isSignin ? "Sign Up" : "Sign In"}</Text>
                </View>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        marginLeft: 16,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 8,
        backgroundColor: "#4a90e2",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 12,
    },
    avatar: {
        marginLeft: 16,
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: "#4a90e2",
        justifyContent: "center",
        alignItems: "center",
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    avatarText: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 16,
    },
});
