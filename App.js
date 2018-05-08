import React from 'react';
import { View, Text, ScrollView, TouchableNativeFeedback, Alert } from 'react-native'
import { ListItem } from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';

export default class App extends React.Component{

  constructor(props) {
    super(props);
    // const list = [
    //   {
    //     name: 'Amy Farha',
    //     email: 'sudhakar692@gmail.com',
    //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    //     subtitle: 'Vice President'
    //   },
    //   {
    //     name: 'Chris Jackson',
    //     email:'sudhakar@gmail.com',
    //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    //     subtitle: 'Vice Chairman'
    //   },
    // ]
    this.state = { list: [],  visible: true};
  }

  handlePressList(name){
    Alert.alert(name)
  }
  componentDidMount(){
    fetch("http://192.168.1.100/SOL/api/api/Pre_Sales.json")
    .then((response) => res = response.json())
    .then((res) => {
      if (Array.isArray(res.content)) {
        this.setState({
          list: res.content,
          visible:false
        })
        
      }else {
        this.setState({
          list: [res.content],
          visible:false
        })
      }
      
    })
  }
  render(){
    // const {data} = this.state.list === undefined ? [] : this.state.list;
    if(this.state.visible) {
      return (
        <View style={{ flex: 1 }}>
          <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
        </View>
      );
    }
    return (
      <View>
        <ScrollView>
        {
          this.state.list.map((l,i) => (
            <TouchableNativeFeedback
              key={i}
              onPress={this.handlePressList(l.name)}
              
            >
              <ListItem
              // key={l.id}
              // leftAvatar= {{source: {uri:l.avatar_url }}}
              title = {l.name.toLocaleUpperCase().trim()}
              subtitle = {l.trip_location}
              />
            </TouchableNativeFeedback>
          ))
        }
        </ScrollView>
      </View>
    )    
  }
}
