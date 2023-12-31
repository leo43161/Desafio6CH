import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import React from "react";
import Card from "./Card";
import { colors } from "../Global/Colors";

const LocationItem = ({ navigation, location }) => {
    return (
        <Pressable onPress={() => navigation.navigate("Location Selector")}>
            <Card additionalStyle={styles.card}>
                <View style={styles.textContainer}>
                    <Text style={styles.textPrice}>
                        {location.address}
                    </Text>
                </View>
                <View>
                    <FontAwesome name="map-marker" size={30} color="black" />
                </View>
            </Card>
        </Pressable>
    );
};

export default LocationItem;

const styles = StyleSheet.create({
    card: {
        height: 100,
        padding: 18,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "70%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    texInfo: {
        fontFamily: "BROmega",
        fontSize: 18,
        color: colors.darkBlue,
        marginBottom: 5
    },
    textPrice: {
        fontFamily: "BROmega",
        fontSize: 19,
        color: colors.blue,
        fontWeight: "bold",
    },
});
