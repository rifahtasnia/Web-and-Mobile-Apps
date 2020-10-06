import React from 'react';
import { Text, StyleSheet, View, Image, Button } from "react-native";

const SemesterScreen = (props) => {
    //console.log(props);
    return (
        <View>
            <Text style={styles.headerStyle}>SEMESTERS</Text>
            <Image
                style={styles.imageStyle}
                source={require("./../../assets/semester.png")} />

            <View style={styles.viewStyle}>
                <Button
                    title="1st Semester"
                    onPress={function () {
                        props.navigation.navigate("First Semester");
                        //console.log("Button Pressed");
                    }}
                    color="#3EA99F"
                />
            </View>

            <View style={styles.viewStyle}>
                <Button
                    title="2nd Semester"
                    onPress={function () {
                        props.navigation.navigate("Second Semester");
                    }}
                    color="#3EA99F"
                />
            </View>

            <View style={styles.viewStyle}>
            <Button
                title="3rd Semester"
                onPress={function () {
                    props.navigation.navigate("Third Semester");
                    }}
                    color="#3EA99F"
                />
            </View>

            <View style={styles.viewStyle}>
                <Button
                    title="4th Semester"
                    onPress={function () {
                        props.navigation.navigate("Fourth Semester");
                    }}
                    color="#3EA99F"
                />
            </View>

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
        marginBottom: 100,
    },
    viewStyle: {
        paddingTop: 30,
        marginLeft: 30,
        marginRight: 30,
        alignContent: "center",
    },
    imageStyle: {
        marginBottom: 40,
        width: 250,
        height: 200,
        alignSelf: "center",
    },
});

export default SemesterScreen;
