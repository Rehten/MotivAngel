import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ArgentInput} from "./../reusable/ArgentInput";
import {ArgentButton} from "./../reusable/ArgentButton";
import {ArgentLogo} from "./../reusable/ArgentLogo";

export class CustomerChildTargetScreen extends Component {
    static navigationOptions = {
        title: 'Target Screen',
        header: null
      };

    constructor() {
        super();
    }

    render() {
        return (
            <View>
                <Text>TARGET SCREEN FOR CHILD!!!</Text>
            </View>
        );
    }
}