import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ArgentInput} from "./components/reusable/ArgentInput";
import {ArgentButton} from "./components/reusable/ArgentButton";
import {ArgentLogo} from "./components/reusable/ArgentLogo";

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ArgentLogo/>
                <ArgentInput placeholder={'Имя'} style={{marginTop: 10}}/>
                <ArgentInput placeholder={'Email'} style={{marginTop: 10}}/>
                <ArgentInput placeholder={'Пароль'} style={{marginTop: 10}}/>
                <ArgentButton style={{marginTop: 10}}/>
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
