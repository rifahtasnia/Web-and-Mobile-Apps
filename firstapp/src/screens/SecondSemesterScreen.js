import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const SecondSemesterScreen = () => {
    const course_list = [  
        { name: "Math 4241: Integral Calculus and Differential Equations", key: '1'},
        { name: "CSE 4203: Discrete Mathematics", key: '2'},
        { name: "CSE 4205: Digital Logic Design", key: '3' },
        { name: "CSE 4206: Digital Logic Design Lab", key: '4' },
        { name: "SWE 4201: Object Oriented Concepts I", key: '5' },
        { name: "SWE 4202: Object Oriented Concepts I Lab", key: '6' },
        { name: "Hum 4247: Accounting", key: '7' },
        { name: "Hum 4242: Arabic II", key: '8' },
        { name: "Hum 4249: Business Psychology and Communications", key: '9'},
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.headerStyle}>Semester 2: Course List</Text>
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

export default SecondSemesterScreen;