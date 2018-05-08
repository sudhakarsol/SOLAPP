import React from 'react';
import { View, TouchableNativeFeedback, Alert } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';

export default class Enquiry extends React.Component {
    
    showAlert(){
        Alert.alert("You have pressed the button")
    }
    render(){
        // const {
        //     name,
        //     email,
        //     phone,
        //     starting_place,
        //     ending_place,
        //     source
        // } = this.props.enquiryData;
        const enquiryData = this.props.enquiryData;
        const {featuredTitleStyle} = styles;
        return (
            <Text>
                {enquiryData.name}
            </Text>
        )
    }
}


const styles = {
    featuredTitleStyle: {
        marginHorizontal: 5,
        textShadowColor: '#00000f',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 3
      }
}