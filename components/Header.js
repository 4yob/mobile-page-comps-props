import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header({ title }) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#FFFFFF",
        padding: 20,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        left: 0,
    },
    title: {
        fontSize: 24,
        color: "#9370DB",
        fontWeight: "bold",
        textAlign: "center",
    },
});