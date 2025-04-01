import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Footer({ text }) {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "#FFFFFF",
        padding: 20,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        bottom: 0,
        left: 0,
    },
    text: {
        fontSize: 24,
        color: "#9370DB",
        fontWeight: "bold",
        textAlign: "center",
    },
});