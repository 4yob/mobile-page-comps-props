import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Card({ text }) {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFFFFF",
        padding: 20,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        width: 180,
        height: 180,
        borderRadius: 10,
    },
    text: {
        fontSize: 18,
        color: "#9370DB",
        fontWeight: "bold",
        textAlign: "center",
    },
});