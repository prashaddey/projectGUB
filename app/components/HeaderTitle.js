import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    AppRegistry,
    Image
    } from "react-native";

export default class HeaderTitle extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View>
                    <Image
                        style={styles.logo}
                        source={{uri: 'http://gub.prashaddey.xyz/wp-content/uploads/2018/07/green.png'}}
                        resizeMode="contain"
                        />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:.20,
        alignItems:'flex-start',
        justifyContent:'center',
        backgroundColor: '#fff',
        marginTop: -20,
        // marginLeft: 10,
        // marginRight: 10,
        marginBottom: 10,
        paddingTop: 30,
        borderBottomWidth: 4,
        borderBottomColor: '#0394c0',
        // borderRadius: 10,
        zIndex: 99,
    },
    logo: {
        flex: 1,
        width: 150,
        height: 100,
        marginLeft: 10,
    }
});

AppRegistry.registerComponent('HeaderTitle', () => 'HeaderTitle');