import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {ArgentInput} from "./../reusable/ArgentInput";
import {ArgentButton} from "./../reusable/ArgentButton";
import {ArgentLogo} from "./../reusable/ArgentLogo";

export class RoleSelectingScreen extends Component {
    static navigationOptions = {
        title: 'RoleSelect',
      };

    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                <ArgentLogo/>
                <ArgentButton style={{marginTop: 10}}>Я Родитель</ArgentButton>
                <ArgentButton style={{marginTop: 10}}>Я Ребенок</ArgentButton>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});