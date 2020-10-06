import React from 'react';
import { Text, StyleSheet, View, Image, Button } from "react-native";

const SemesterScreen = (props) => {
    //console.log(props);
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Semesters</Text>
            <View style={styles.viewStyle}>
                <Button
                    title="1st Semester"
                    onPress={function () {
                        props.navigation.navigate("FirstSemester");
                        //console.log("Button Pressed");
                    }}
                />
            </View>

            <View style={styles.viewStyle}>
                <Button
                    title="2nd Semester"
                    onPress={function () {
                        props.navigation.navigate("SecondSemester");
                    }}
                />
            </View>

            <View style={styles.viewStyle}>
            <Button
                title="3rd Semester"
                onPress={function () {
                    props.navigation.navigate("ThirdSemester");
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
    },
    textStyle: {
        fontSize: 40,
        fontWeight: "bold",
        color: "darkblue",
        textAlign: "center",
    },
    viewStyle: {
        paddingTop: 30,
        marginLeft: 30,
        marginRight: 30,
        alignContent: "center",
    },
});

export default SemesterScreen;
