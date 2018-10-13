import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    AppRegistry,
    Image,
    ImageBackground
    } from "react-native";

export default class HeaderProfile extends Component{
    render(){
        return (
            <ImageBackground
                style={styles.backgroundImg}
                source={require('../../assets/images/background.jpeg')}
                >
                <View style={styles.header}>
                    <View style={styles.profilepicWrapper}>
                        <Image
                            style={styles.profilepic}
                            source={require('../../assets/images/profile.jpg')}
                            />
                    </View>
                    <Text style={styles.name}>Prashad Dey</Text>
                    <Text style={[styles.name, styles.position]}>
                        ~ Programmer & Software Developer ~
                    </Text>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImg: {
        flex: 1,
        width: null,
        alignSelf: 'stretch'
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(0,0,0, 0.2)',
    },
    profilepicWrapper: {
        width: 140,
        height: 140,
        alignSelf: 'center',
        borderWidth: 6,
        borderColor: 'rgba(0,0,0, 0.1)',
        borderRadius: 100,
    },
    profilepic: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        borderWidth: 4,
        borderColor: 'rgba(255,255,255, .8)',
        borderRadius: 100
    },
    name: {
        fontSize: 25,
        color: '#fff',
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 8,
        paddingRight: 8,
        marginBottom: 5,
        backgroundColor: 'rgba(0,0,0, .7)'
    },
    position: {
        fontStyle: 'italic',
        fontSize: 15,
        // color: '#44bd32', - light gub color
        // color: '#75BA28', - gub color
        color: '#0394c0',
    }

});

AppRegistry.registerComponent('HeaderProfile', () => 'HeaderProfile');