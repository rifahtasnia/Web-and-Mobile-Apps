import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ThirdSemesterScreen = () => {
    const course_list = [
        { name: "Math 4341: Linear Algebra", key: '1'},
        { name: "CSE 4303: Data Structures", key: '2' },
        { name: "CSE 4304: Data Structures Lab", key: '3' },
        { name: "CSE 4305: Computer Organization and Architecture", key: '4'},
        { name: "CSE 4307: Database Management System", key: '5' },
        { name: "CSE 4308: Database Management Systems Lab", key: '6' },
        { name: "CSE 4309: Theory of Computing", key: '7'},
        { name: "SWE 4301: Object Oriented Concepts II", key: '8' },
        { name: "SWE 4302: Object Oriented Concepts II Lab", key: '9' },
        { name: "SWE 4304: Software Project Lab I", key: '10' },
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.headerStyle}>Semester 3: Course List</Text>
            <FlatList
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
        flex: 1,
        overflow: 'hidden',
        backgroundColor: '#F0FFFF',
        justifyContent: 'flex-start',
    },
    headerStyle: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        backgroundColor: "#3B9C9C",
        marginBottom: 30,
    },
    textStyle: {
        fontSize: 20,
        color: "black",
        marginLeft: 15,
        marginRight: 10,
        marginBottom: 30,
    },
});

export default ThirdSemesterScreen;