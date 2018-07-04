import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {ArgentInput} from "./../reusable/ArgentInput";
import {ArgentButton} from "./../reusable/ArgentButton";
import {ArgentLogo} from "./../reusable/ArgentLogo";

export class RegistrationScreen extends Component {
    static navigationOptions = {
        title: 'Home',
      };

    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                <ArgentLogo/>
                <ArgentInput placeholder={'Имя'} style={{marginTop: 10}}/>
                <ArgentInput placeholder={'Email'} style={{marginTop: 10}}/>
                <ArgentInput placeholder={'Пароль'} style={{marginTop: 10}}/>
                <ArgentButton onPress={() => this.props.navigation.navigate('RoleSelect')} style={{marginTop: 10}}>
                    Зарегистрироваться
                </ArgentButton>
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
