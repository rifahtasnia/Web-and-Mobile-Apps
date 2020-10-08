import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from "react-native";

const HomeScreen = (props) => {
    //console.log(props);
    return (
        <View style={styles.container}>
            <Text style={styles.headerStyle}>HOME</Text>

            <Image
                style={styles.imageStyle}
                source={require("./../../assets/iutlogo.png")} />
            <Text style={styles.textStyle}>DEPARTMENT OF CSE</Text>
            <Text style={styles.textStyle2}>PROGRAMME : SWE</Text>

            <View style={styles.opacityViewStyle}>
                <TouchableOpacity
                    style={{ alignSelf: "center",}}
                    onPress={function () {
                        props.navigation.navigate("My Profile");
                    }}
                >
                    <Text style={styles.opacityTextStyle}>My Profile</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.viewStyle}>
                <Button
                    title="Semester Wise Course List"
                    onPress={function () {
                        props.navigation.navigate("Semesters");
                        //console.log("Button Pressed");
                    }}
                    color="#3EA99F"
                />
            </View>
            <View style={styles.viewStyle}>
                <Button
                    title="List of Faculty Members"
                    onPress={function () {
                        props.navigation.navigate("Faculty List");
                        //console.log("Button Pressed");
                    }}
                    color="#3EA99F"
                />
            </View>
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
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        backgroundColor: "#3B9C9C",
        marginBottom: 20,
    },
    textStyle: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#438D80",
        textAlign: "center",
        marginTop: 20,
    },
    textStyle2: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#438D80",
        textAlign: "center",
        marginBottom: 40,
    },
    imageStyle: {
        marginTop: 20,
        width: 130,
        height: 220,
        alignSelf: "center",
    },
    viewStyle: {
        paddingTop: 30,
        marginLeft: 30,
        marginRight: 30,
        alignContent: "center",
    },
    opacityViewStyle: {
        backgroundColor: '#3EA99F',
        marginTop: 10,
        marginLeft: 45,
        padding: 10,
        width: 320,
        borderRadius: 30,
        alignContent: "center",
    },
    opacityTextStyle: {
        fontSize: 18,
        color: "white",
        alignContent: "center",
    },
});

export default HomeScreen;