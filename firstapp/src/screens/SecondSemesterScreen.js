import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const SecondSemesterScreen = () => {
    const course_list = [  
        { name: "Math 4241: Integral Calculus and Differential Equations", key: '1'},
        { name: "CSE 4203: Discrete Mathematics", key: '2'},
        { name: "CSE 4205: Digital Logic Design", key: '3'},
        { name: "SWE 4201: Object Oriented Concepts I", key: '4'},
        { name: "Hum 4247: Accounting", key: '5'},
        { name: "Hum 4249: Business Psychology and Communications", key: '6'},
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.headerStyle}>Semester 2: Courses List</Text>
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

export default SecondSemesterScreen;