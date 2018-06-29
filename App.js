import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ArgentInput} from "./components/reusable/ArgentInput";
import {ArgentButton} from "./components/reusable/ArgentButton";

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Йоу бро! Я все-таки запустил вьюху на андроиде</Text>
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
