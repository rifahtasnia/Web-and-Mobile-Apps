import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from "react-native";

const HomeScreen = (props) => {
    //console.log(props);
    return (
        <View style={styles.container}>

            <Image
                style={styles.imageStyle}
                source={require("./../../assets/iutlogo.png")} />
            <Text style={styles.textStyle}>Department Of CSE
                Programme: SWE</Text>

            <TouchableOpacity>
                <View style={styles.viewStyle}>
                    <Button
                        title="My Profile"
                        onPress={function () {
                            props.navigation.navigate("My Profile");
                            //console.log("Button Pressed");
                        }}
                    />
                </View>
            </TouchableOpacity>

            <View style={styles.viewStyle}>
                <Button
                    title="Semester Wise Course List"
                    onPress={function () {
                        props.navigation.navigate("Semesters");
                        //console.log("Button Pressed");
                    }}
                />
            </View>
            <View style={styles.viewStyle}>
                <Button
                    title="List of Faculty Members"
                    onPress={function () {
                        props.navigation.navigate("Faculty List");
                        //console.log("Button Pressed");
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
    },
    textStyle: {
        fontSize: 35,
        fontWeight: "bold",
        color: "green",
        textAlign: "center",
        marginTop: 20,
    },
    imageStyle: {
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
});

export default HomeScreen;