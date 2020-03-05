import React, {Component} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image } from 'react-native';
import {CustomHeader} from '../../index';
import {IMAGE} from '../../constants/images';
const DATA = [
  { title: 'Thông báo 1', content: 'Địa chỉ 1', dateSend: '01-02-2020' },
  { title: 'Thông báo 2', content: 'Địa chỉ 1, Địa chỉ 1, Địa chỉ 1, Địa chỉ 1 Địa chỉ 1 Địa chỉ 1 Địa chỉ 1 Địa chỉ 1 Địa chỉ 1 Địa chỉ 1 Địa chỉ 1Địa chỉ 1', dateSend: '02-02-2020'},
  { title: 'Thông báo 3', content: 'Địa chỉ 1', dateSend: '02-02-2020'},
  { title: 'Thông báo 4', content: 'Địa chỉ 1', dateSend: '02-02-2020'},
  { title: 'Thông báo 5', content: 'Địa chỉ 1', dateSend: '02-02-2020'},
  { title: 'Thông báo 6', content: 'Địa chỉ 1', dateSend: '02-02-2020'},
  { title: 'Thông báo 7', content: 'Địa chỉ 1', dateSend: '02-02-2020'},
  { title: 'Thông báo 8', content: 'Địa chỉ 1', dateSend: '02-02-2020'}
]
function Item({ title, content, dateSend}) {
  return (
      <View style={styles.container}>
          <Image source={IMAGE.ICON_NOTIFICATION_RED} style={styles.photo} />
          <View style={styles.container_text}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.address}>{content}</Text>
              <Text style={styles.description}>{dateSend}</Text>
          </View>

      </View>
  );
}
export class NotificationScreen extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title="Notification" isHome={true}  navigation={this.props.navigation} />
            
            <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item title={item.title} content={item.content} dateSend={item.dateSend} />}
                />
           
          </SafeAreaView>
        
          );
    }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      padding: 10,
      marginLeft:16,
      marginRight:16,
      marginTop: 8,
      marginBottom: 8,
      borderRadius: 5,
      backgroundColor: '#FFF',
      elevation: 2,
  },
  title: {
      fontSize: 22,
  },
  photo: {
      height: 50,
      width: 50,
  },
  container_text: {
      flex: 1,
      flexDirection: 'column',
      marginLeft: 12,
      justifyContent: 'flex-start',
  },
  content: {
    fontSize: 15,
    fontStyle: 'italic',
},
  dateSend: {
      fontSize: 12,
      fontStyle: 'italic',
      color:'#c2b8b8'
  },

});