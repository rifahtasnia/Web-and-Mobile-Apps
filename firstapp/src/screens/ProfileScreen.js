import React from 'react';
import { Text, StyleSheet, View, Image } from "react-native";

const ProfileScreen = () => {
    //console.log(props);
    return (
        <View style={styles.container}>
            <Text style={styles.headerStyle}>PROFILE</Text>
            <Image
                style={styles.imageStyle}
                source={require("./../../assets/myphoto.jpg")} />
            <Text> </Text>
            <Text style={styles.textStyle2}>Name: Khandaker Rifah Tasnia</Text>
            <Text style={styles.textStyle}>Student ID: 170042042</Text>
            <Text style={styles.textStyle}>Room no: 404, Utility (FHR)</Text>
            <Text style={styles.textStyle}>Email: rifahtasnia@iut-dhaka.edu</Text>
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
    },
    textStyle: {
        fontSize: 20,
        color: "black",
        textAlign: "left",
        marginLeft: 10,
    },
    textStyle2: {
        fontSize: 25,
        color: "#438D80",
        textAlign: "left",
        marginLeft: 10,
    },
    imageStyle: {
        marginTop: 20,
        width: 250,
        height: 400,
        alignSelf: "center",
    },
});

export default ProfileScreen;