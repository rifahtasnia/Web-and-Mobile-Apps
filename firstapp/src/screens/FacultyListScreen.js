import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const FacultyListScreen = () => {
    const facultyList = [
        { name: "1. Professor Dr Muhammad Mahbub Alam" , key: '1'},
        { name: "2. Professor Dr Md. Hasanul Kabir", key: '2'},
        { name: "3. Professor Dr Abu Raihan Mostofa Kamal", key: '3'},
        { name: "4. Professor Dr Kamrul Hasan", key: '4'},
        { name: "5. Mohayeminul Islam", key: '5'},
        { name: "6. Tajkia Rahman Toma", key: '6'},
        { name: "7. Faisal Hussain", key: '7'},
        { name: "8. Ridwan Kabir", key: '8'},
        { name: "9. Bakhtiar Hasan", key: '9'},
        { name: "10. Tasnim Ahmed", key: '10'},
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.headerStyle}>Faculty List</Text>
            <Text> </Text>
            <FlatList
                style={styles.ListStyle}
                data={facultyList}
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
        fontSize: 40,
        fontWeight: "bold",
        textDecorationLine: "underline",
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

export default FacultyListScreen;
