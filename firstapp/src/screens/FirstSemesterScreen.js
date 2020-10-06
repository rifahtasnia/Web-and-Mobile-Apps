import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const FirstSemesterScreen = () => {
    const course_list = [
        { name: "Math 4141: Geometry and Differential Calculus", key: '1'},
        { name: "CSE 4107: Structured Programming I", key: '2' },
        { name: "CSE 4108: Structured Programming I Lab", key: '3' },
        { name: "SWE 4101: Introduction to Software Engineering", key: '4'},
        { name: "Phy 4143: Physics II", key: '5' },
        { name: "PHY 4144: Physics II Lab", key: '6' },
        { name: "CSE 4104: Engineering Drawing Lab", key: '7' },
        { name: "Hum 4145: Islamiat", key: '8' },
        { name: "HUM 4142: Arabic I", key: '9' },
        { name: "Hum 4147: Technology, Environment and Society", key: '10'},
    ];
    return (
        <View>
            <Text style={styles.headerStyle}>Semester 1: Course List</Text>
            <Text> </Text>
            <FlatList
                style={styles.ListStyle}
                data={course_list}
                renderItem={function ({ item }) {
                    return <Text style={styles.textStyle}>{item.name}</Text>;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        backgroundColor: "#3B9C9C",
    },
    textStyle: {
        fontSize: 20,
        color: "black",
        marginLeft: 15,
        marginRight: 10,
        marginVertical: 10,
    },
});

export default FirstSemesterScreen;