import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ThirdSemesterScreen = () => {
    const course_list = [
        { name: "CSE 4403: Algorithms", key: '1' },
        { name: "CSE 4404: Algorithms Lab", key: '2' },
        { name: "CSE 4409: Database Management Systems II", key: '3' },
        { name: "CSE 4410: Database Management Systems II Lab", key: '4' },
        { name: "CSE 4411: Data Communications and Networking", key: '5' },
        { name: "CSE 4412: Data Communications and Networking Lab", key: '6' },
        { name: "Hum 4441: Engineering Ethics", key: '7' },
        { name: "Math 4441: Probability and Statistics", key: '8' },
        { name: "SWE 4401: Software Requirements and Specifications", key: '9' },
        { name: "SWE 4402: Software Requirements and Specifications Lab", key: '10' },
        { name: "SWE 4404: Software Project Lab II", key: '11' },
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.headerStyle}>Semester 4: Course List</Text>
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