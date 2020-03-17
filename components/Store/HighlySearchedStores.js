import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { CustomHeader } from '../../index';
import Axios from 'axios';
import { Link } from 'react-router-native';
import StoreDetails from './StoreDetails';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountScreen } from '../tabs/AccountScreen';
import { HomeScreen } from '../tabs/HomeScreen';
import { FavoriteStoreScreen } from '../tabs/FavoriteStoreScreen';
import { NotificationScreen } from '../tabs/NotificationScreen';


function Item({ _id, nameStore, addressStore, description }) {
    return (
        < View style={styles.container_text} >
            <Text style={styles.title}>{nameStore}</Text>
            <Text style={styles.address}>{addressStore}</Text>
            <Text style={styles.description}>{description}</Text>
        </View >
    );
}

const navOptionHandler = () => ({
    headerShown: false
})

const Stack = createStackNavigator();

export class HighlySearchedStores extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoaded: false
        }
    }

    componentDidMount = () => {
        const url = 'http://103.102.46.103:3000/stores'
        fetch(url).then(res => res.json()).then(data => {
            this.setState({
                isloaded: true,
                data: data
            })
            console.log('====================================');
            console.log(this.state.data);
            console.log('====================================');
        }).then(error => {
            console.log(error)
        })
    }

    render() {
        const { data, isLoaded } = this.state
        if (isLoaded) {
            return <View>
                <Text>Loading....</Text>
            </View>
        } else
            return (
                // <NavigationContainer>
                //     <Stack.Navigator initialRouteName="HighlySearchedStores">
                //         <Stack.Screen name="StoreDetails" component={StoreDetails} options={navOptionHandler} />
                //         <Stack.Screen name="HighlySearchedStores" component={HighlySearchedStores} options={navOptionHandler} />

                //     </Stack.Navigator>
                // </NavigationContainer>


                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('StoreDetails', { id: item._id })} style={styles.container} >

                                <Item _id={item._id} nameStore={item.nameStore} description={item.description} addressStore={item.addressStore} />


                            </TouchableOpacity>
                        } />

                </SafeAreaView>

            );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 22,
    },
    photo: {
        height: 100,
        width: 100,
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'flex-start',
    },
    description: {
        fontSize: 12,
        fontStyle: 'italic',
    },
    address: {
        fontSize: 15,
        fontStyle: 'italic',
    }
});

