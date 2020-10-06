import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ThirdSemesterScreen = () => {
    const course_list = [
        { name: "Math 4341: Linear Algebra", key: '1'},
        { name: "CSE 4303: Data Structures", key: '2'},
        { name: "CSE 4305: Computer Organization and Architecture", key: '3'},
        { name: "CSE 4307: Database Management System", key: '4'},
        { name: "CSE 4309: Theory of Computing", key: '5'},
        { name: "SWE 4301: Object Oriented Concepts II", key: '6'},
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.headerStyle}>Semester 3: Courses List</Text>
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
    container: {
        paddingTop: 30,
    },
    headerStyle: {
        fontSize: 30,
        fontWeight: "bold",
        color: "darkblue",
        textAlign: "center",
    },
    textStyle: {
        fontSize: 20,
        color: "black",
        marginLeft: 10,
        marginVertical: 5,
    },
});

export default ThirdSemesterScreen;