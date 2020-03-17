import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomHeader } from './components/CustomHeader';
import { IMAGE } from './constants/images';
import { HomeScreen } from './components/tabs/HomeScreen';
import { FavoriteStoreScreen } from './components/tabs/FavoriteStoreScreen';
import { NotificationScreen } from './components/tabs/NotificationScreen';
import { AccountScreen } from './components/tabs/AccountScreen';
import { ContactScreen } from './components/side_menu/ContactScreen';
import { ProductScreen } from './components/side_menu/products/ProductScreen';
import { MyStore } from './components/side_menu/mystore/MyStore';
import StoreDetails from './components/Store/StoreDetails';
function HomeDetailScreen() {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader title="Home Detail" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home detail!</Text>
      </View>
    </View>

  );
}

function FavoriteStoreDetailScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Favorite Store Detail" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Favorite Store Detail Screen!</Text>
      </View>
    </SafeAreaView>

  );
}

function NotificationDetailScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Notification detail" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notification Detail Screen detail!</Text>
      </View>
    </SafeAreaView>

  );
}

function AccountDetailScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Account detail" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Account Detail Screen!</Text>
      </View>
    </SafeAreaView>

  );
}

const Tab = createBottomTabNavigator();


const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Trang chủ"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'Trang chủ') {
            iconName = focused
              ? IMAGE.ICON_HOME_RED : IMAGE.ICON_HOME_BLACK;
          } else if (route.name === 'Cửa hàng yêu thích') {
            iconName = focused ? IMAGE.ICON_FAVORITE_RED : IMAGE.ICON_FAVORITE_BLACK;
          } else if (route.name === 'Thông báo') {
            iconName = focused ? IMAGE.ICON_NOTIFICATION_RED : IMAGE.ICON_NOTIFICATION_BLACK;
          } else if (route.name === 'Tài khoản') {
            iconName = focused ? IMAGE.ICON_ACCOUNT_RED : IMAGE.ICON_ACCOUNT_BLACK;
          }

          // You can return any component that you like here!
          return <Image source={iconName} style={{ width: 22, height: 22 }} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}
    >
      <Tab.Screen name="Trang chủ" component={HomeScreen} />
      <Tab.Screen name="Cửa hàng yêu thích" component={FavoriteStoreScreen} />
      <Tab.Screen name="Thông báo" component={NotificationScreen} />
      <Tab.Screen name="Tài khoản" component={AccountScreen} />
    </Tab.Navigator>
  );

}
const Drawer = createDrawerNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    
  }


  render() {
    return (
      <Drawer.Navigator initialRouteName="Trang chủ">
        <Drawer.Screen name="Trang chủ" component={TabNavigator} />
        <Drawer.Screen name="Sản phẩm" component={ProductScreen} />
        <Drawer.Screen name="Cửa hàng của tôi" component={MyStore} />
        <Drawer.Screen name="Liên hệ" component={ContactScreen} />

      </Drawer.Navigator>

      //    <NavigationContainer>
      //    <Stack.Navigator initialRouteName="Home">
      //      <Stack.Screen name="StoreDetails" component={StoreDetails} options={navOptionHandler} />
      //      <Stack.Screen name="Account" component={AccountScreen} options={navOptionHandler} />
      //      <Stack.Screen name="Home" component={HomeScreen} options={navOptionHandler} />
      //      <Stack.Screen name="FavoriteStore" component={FavoriteStoreScreen} options={navOptionHandler} />
      //      <Stack.Screen name="Notification" component={NotificationScreen} options={navOptionHandler} />

      //    </Stack.Navigator>
      //  </NavigationContainer>

    );
  }
}