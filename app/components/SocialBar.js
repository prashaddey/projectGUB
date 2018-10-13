import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    AppRegistry
    } from "react-native";

export default class SocialBar extends Component{
    render(){
        return (
            <View style={styles.bar}>
                <View style={[styles.barItem, styles.rightBorder]}>
                    <Text style={styles.itemTop}>Website</Text>
                    <Text style={styles.itemBottom}>https://prashaddey.com</Text>
                </View>
                <View style={[styles.barItem]}>
                    <Text style={styles.itemTop}>Facebook</Text>
                    <Text style={styles.itemBottom}>http://fb.com/prashad.dey</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bar:{
        flexDirection: 'row',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#fff'
    },
    barItem: {
        flex: 1,
        backgroundColor: '#44bd32',
        padding: 10,
    },
    itemTop: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
    },
    itemBottom: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 12,
        fontStyle: 'italic',
    },
    rightBorder: {
        borderRightWidth: 4,
        borderColor: '#fff'
    }
});

AppRegistry.registerComponent('SocialBar', () => 'SocialBar');