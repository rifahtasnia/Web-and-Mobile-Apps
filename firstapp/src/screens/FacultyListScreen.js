import React from "react";
import { Text, View, StyleSheet, FlatList} from "react-native";

const FacultyListScreen = () => {
    const facultyList = [
        { name: "1. Professor Dr. Muhammad Mahbub Alam" , key: '1'},
        { name: "2. Professor Dr. Md. Hasanul Kabir", key: '2'},
        { name: "3. Professor Dr. Abu Raihan Mostofa Kamal", key: '3'},
        { name: "4. Professor Dr. Kamrul Hasan", key: '4'},
        { name: "5. Mohayeminul Islam", key: '5'},
        { name: "6. Tajkia Rahman Toma", key: '6'},
        { name: "7. Faisal Hussain", key: '7'},
        { name: "8. Ridwan Kabir", key: '8'},
        { name: "9. Bakhtiar Hasan", key: '9'},
        { name: "10. Shohel Ahmed", key: '10' },
        { name: "11. Redwan Karim Sony", key: '11' },
        { name: "12. Md. Jubair Ibna Mostafa", key: '12' },
        { name: "13. Tasnim Ahmed", key: '13' },
        { name: "14. Shahriar Ivan", key: '14' },
        { name: "15. Sadia Sharmin", key: '15' },
    ];
    return (
        <View>
            <Text style={styles.headerStyle}>FACULTY LIST</Text>
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
    headerStyle: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        backgroundColor: "#3B9C9C",
    },
    textStyle: {
        fontSize: 20,
        color: "black",
        marginLeft: 20,
        marginVertical: 7,
    },
});

export default FacultyListScreen;
