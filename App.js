import * as React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {CustomHeader} from './components/CustomHeader';
import { IMAGE } from './constants/images';
import {HomeScreen} from './components/tabs/HomeScreen';
import {FavoriteStoreScreen} from './components/tabs/FavoriteStoreScreen';
import {NotificationScreen} from './components/tabs/NotificationScreen';
import {AccountScreen} from './components/tabs/AccountScreen';
import {ContactScreen} from './components/side_menu/ContactScreen';
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
const navOptionHandler = () => ({
  headerShown: false
})
const StackHome = createStackNavigator();
function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler} />

      <StackHome.Screen name="HomeDetail" component={HomeDetailScreen} />
    </StackHome.Navigator>
  )
}
const StackFavoriteStore = createStackNavigator();
function FavoriteStoreStack() {
  return (
    <StackFavoriteStore.Navigator initialRouteName="FavoriteStore">
      <StackFavoriteStore.Screen name="FavoriteStore" component={FavoriteStoreScreen} options={navOptionHandler} />
      <StackFavoriteStore.Screen name="FavoriteStoreDetail" component={FavoriteStoreDetailScreen} />
    </StackFavoriteStore.Navigator>
  )
}
const StackNotification = createStackNavigator();
function NotificationStack() {
  return (
    <StackNotification.Navigator initialRouteName="Notification">
      <StackNotification.Screen name="Notification" component={NotificationScreen} options={navOptionHandler} />
      <StackNotification.Screen name="NotificationStackDetail" component={NotificationDetailScreen} />
    </StackNotification.Navigator>
  )
}
const StackAccount = createStackNavigator();
function AccountStack() {
  return (
    <StackAccount.Navigator initialRouteName="Account">
      <StackAccount.Screen name="Account" component={AccountScreen} options={navOptionHandler} />
      <StackAccount.Screen name="AccountDetail" component={AccountDetailScreen} />
    </StackAccount.Navigator>
  )
}

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
          return <Image source={iconName} style={{ width: 22, height: 22}} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }} 
    >
      <Tab.Screen name="Trang chủ" component={HomeStack} />
      <Tab.Screen name="Cửa hàng yêu thích" component={FavoriteStoreStack} />
      <Tab.Screen name="Thông báo" component={NotificationStack} />
      <Tab.Screen name="Tài khoản" component={AccountStack} />
    </Tab.Navigator>
  );

}
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Trang chủ">
        <Drawer.Screen name="Trang chủ" component={TabNavigator} />
        <Drawer.Screen name="Liên hệ" component={ContactScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}