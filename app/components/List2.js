/**
 * BACKUP of List.js file
 */


import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    AppRegistry,
    ScrollView,
    TouchableOpacity,
    ListView,
    Linking,
    Button,
    } from "react-native";

export default class List2 extends Component{

    /**
     * Fetching DATA from URL
     */
    //Constructor
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
        usersDS: ds,
        };
    }    

    //Hook the _fetchUsers() function to a LifeCycle method
    componentDidMount(){
        this._fetchUsers();
    }

    //_fethcUsers()
    _fetchUsers(){
        // fetch('http://stella.soladuro.com/photography/wp-json/wp/v2/users')
        // fetch('http://jsonplaceholder.typicode.com/users')
        // fetch('http://www.prashad.is-great.org/wp-json/wp/v2/posts')
        // fetch('https://prashaddey1.000webhostapp.com/wp-json/wp/v2/posts')
        fetch('http://prashaddey.xyz/gub1/wp-json/wp/v2/posts')
        .then((response) => response.json())
        .then((response) => {
            this.setState({
            usersDS: this.state.usersDS.cloneWithRows(response)
            });
        });
    }


    //ListView - single user
    _renderSingleUser(user){
        //removing html tags from content
        let string = user.excerpt.rendered.replace(/<(?:.|\n)*?>/gm, '');
        let link = user.link;
        return (
            //show single user
            <TouchableOpacity style={styles.item}>
                <Text style={styles.title}>- {user.title.rendered}</Text>
                <Text style={styles.para}>{string}</Text>
                <Text style={styles.teacher}>Date: {user.date}</Text>
                <Text style={styles.teacher}>~ PrashadDey</Text>
                <View style={styles.btn}>
                    <Button title="Details" onPress={ ()=>{ Linking.openURL(link)}} />
                </View>
            </TouchableOpacity>
        );
    }

    render(){
        return (
            <View style={styles.itemContainer}>
                <ScrollView>
                    <ListView
                        dataSource={this.state.usersDS}
                        renderRow={this._renderSingleUser.bind(this)}
                        />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemContainer:{
        flex:1,
        marginTop: -10,
    },
    item: {
        paddingTop: 12,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
        margin: 10,
        marginBottom: 5,
        borderRadius: 4,
        backgroundColor: '#fff',
        borderLeftWidth: 6,
        borderColor: '#0394c0',
        elevation: 5
    },
    title: {
        fontSize: 20,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    para: {
        fontSize: 12,
    },
    linkTitle:{
        fontSize: 12,
        fontWeight: 'bold',
    },
    link:{
        fontSize: 10,
        color: 'blue',
        textDecorationLine: 'underline'
    },
    teacher: {
        fontStyle: 'italic',
        fontSize: 10,
        textAlign: 'right',
        fontWeight: 'bold',
    },
    btn: {
        backgroundColor: '#44bd32',
        width: '30%',
    }
});

AppRegistry.registerComponent('List2', () => 'List2');