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
    ParallaxScrollView,
    Image,
    RefreshControl
    } from "react-native";


export default class List extends Component{

    /**
     * Fetching DATA from URL
     */
    //Constructor
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            usersDS: ds,
            refreshing: false
        };
    }
    //Hook the _fetchUsers() function to a LifeCycle method
    fetchData = async() =>{
        // const response =  await fetch('http://gub.prashaddey.xyz/wp-json/wp/v2/posts/');
        // const products = await response.json(); // products have array data
        // this.setState({usersDS: products}); // filled data with dynamic array
        fetch('http://gub.prashaddey.xyz/wp-json/wp/v2/posts/', {
            headers: {
                'Cache-Control': 'no-cache'
            }
            }).then((response) => response.json())
            .then((response) => {
                this.setState({
                usersDS: this.state.usersDS.cloneWithRows(response),
                });

                console.log(JSON.stringify(response));
            });
    };
    componentDidMount(){
        this.fetchData();
    }

    // _fetchUsers(){
    //     // fetch('http://stella.soladuro.com/photography/wp-json/wp/v2/users')
    //     // fetch('http://jsonplaceholder.typicode.com/users')
    //     // fetch('http://www.prashad.is-great.org/wp-json/wp/v2/posts')
    //     // fetch('https://prashaddey1.000webhostapp.com/wp-json/wp/v2/posts')
    //     // fetch('http://prashaddey.xyz/gub1/wp-json/wp/v2/posts')
    //     fetch('http://gub.prashaddey.xyz/wp-json/wp/v2/posts/')
    //     .then((response) => response.json())
    //     .then((response) => {
    //         this.setState({
    //         usersDS: this.state.usersDS.cloneWithRows(response),
    //         });
    //
    //         console.log('Checking Json file : '+JSON.stringify(response));
    //     });
    // }
    _onRefresh(){
        this.setState({refreshing:true});
        this.fetchData().then(()=>{
            this.setState({refreshing:false})
        });
    }

    //ListView - single user
    _renderSingleUser(user){
        //removing html tags from content
        let string = user.excerpt.rendered.replace(/<(?:.|\n)*?>/gm, '');
        let slicedString = string.slice(0, 160);
        let link = user.link;

        //file_link
        let file_link = user.file_link;

        //Post Author
        let author = user._links.author.href;

        console.log(file_link);
        //IsFileLinkExists function - callback

        IsFileLinkExists = () => {
            if (file_link) {
                return (
                    <View style={styles.btnDownload}>
                        <Button
                            style={styles.btnDownload2}
                            title="Download"
                            onPress={ ()=>{ Linking.openURL(file_link)} } 
                            />
                    </View>
                );
            }
            return (
                <View style={styles.btnDownload}>
                    {/* No $file_link - So, there will be no Download button */}
                </View>
            );
        };

        return (
            //show single user
            <TouchableOpacity style={styles.item}>
                <View style={styles.titleContainer}>
                    <Image 
                        style={styles.titleImage}
                        source={{uri: 'http://gub.prashaddey.xyz/wp-content/uploads/2018/07/logo-sm-1.png'}}
                        />
                    <Text style={styles.title}>{user.title.rendered}</Text>
                </View>
                <Text style={styles.para}>{slicedString} ...</Text>
                <Text style={styles.teacher}>Date: {user.date}</Text>
                <View style={styles.btnContainer}>
                    <View style={styles.btn}>
                        <Button title="Details" onPress={ ()=>{ Linking.openURL(link)}} />
                    </View>
                    <IsFileLinkExists />
                </View>
            </TouchableOpacity>
        );
    }


    render(){
        return (
            <View style={styles.itemContainer}>

                    <ListView
                        dataSource={this.state.usersDS}
                        renderRow={this._renderSingleUser.bind(this)}
                        initialListSize={2}
                        refreshControl={
                            <RefreshControl
                                refreshing ={this.state.refreshing}
                                onRefresh={this._onRefresh.bind(this)}
                            />}
                        />

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
        fontSize: 18,
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
    btnContainer: {
        flexDirection: 'row',
        alignContent: 'space-between',
        marginTop: 10,
    },
    btn: {
        width: '30%',
        marginRight: 'auto'
    },
    btnDownload: {
        width: '45%',
    },
    btnDownload2: {
        // color:"#FF3526",
    },
    titleContainer:{
        flex: 1,
        flexDirection: 'row',
        paddingRight: 20
    },
    titleImage: {
        width: 20,
        height: 20,
        borderRadius: 30,
        marginRight: 10,
        marginTop: 5
    }
});

AppRegistry.registerComponent('List', () => 'List');