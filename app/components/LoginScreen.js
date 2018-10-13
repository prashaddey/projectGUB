import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    AppRegistry,
    Image,
    ImageBackground,
    Button
    } from "react-native";

export default class LoginScreen extends Component{
    static navigationOptions = {
        header: null
    }

    render(){
        return (
            <ImageBackground
                style={styles.container}
                // source={{uri: 'http://gub.prashaddey.xyz/wp-content/uploads/2018/07/green-university-permanent-campus.jpg'}}
                // source={{uri: 'http://green.edu.bd/wp-content/uploads/2017/09/03-Copy-2.jpg'}}
                source={require('../../assets/images/campus.jpg')}
                >
                <View style={styles.logoContainer}>
                    <Image
                        resizeMode="contain"
                        style={styles.logo}
                        source={{uri: 'http://gub.prashaddey.xyz/wp-content/uploads/2018/07/logo-sm-1.png'}}
                        />
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={() => {this.props.navigation.navigate('Home')}}
                            title="GUB News"
                            accessibilityLabel="Learn more about this purple button"
                            style={styles.btn1}
                            />
                        <Button
                            onPress={() => {this.props.navigation.navigate('Profile')}}
                            title="Profile"
                            accessibilityLabel="Learn more about this purple button"
                            style={styles.btn2}
                            />
                    </View>
                    
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#fff',
        
    },
    logoContainer: {
        width: 220,
        backgroundColor: '#222',
        padding: 20,
        borderRadius: 10,
        opacity: .8
    },
    logo: {
        width: 100,
        height: 100,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    buttonContainer: {
        width: '100%',
        height: 80,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    btn1: {
        color:"#4BB93E",
        marginBottom: 10,
        width: 200,
        height: 200,
    },
    btn2: {
        color:"#4BB93E",
    }
});

AppRegistry.registerComponent('LoginScreen', () => 'LoginScreen');