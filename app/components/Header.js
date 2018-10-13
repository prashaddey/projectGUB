import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    AppRegistry
    } from "react-native";

export default class Header extends Component{
    render(){
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>GUB News Portal</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer:{
        height: '10%',
        backgroundColor: '#44bd32',
        elevation: 2,
    },
    headerText: {
        fontSize: 20,
        // color: '#0394c0',
        color: '#fff',
        alignSelf: 'center',
        marginTop: 12,
        fontWeight: 'bold',
        
    }
});

AppRegistry.registerComponent('Header', () => 'Header');