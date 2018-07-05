import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {ArgentInput} from "./components/reusable/ArgentInput";
import {ArgentButton} from "./components/reusable/ArgentButton";
import {ArgentLogo} from "./components/reusable/ArgentLogo";
import { RegistrationScreen } from './components/specific/RegistrationScreen';
import { RoleSelectingScreen } from './components/specific/RoleSelectingScreen';
import { CustomerChildTargetScreen } from './components/specific/CustomerChildTargetScreen';

const RootStack =  createStackNavigator(
    {
        RegistrationEmail: {
            screen: RegistrationScreen
        },
        RoleSelect: {
            screen: RoleSelectingScreen
        },
        ChildTargets: {
            screen: CustomerChildTargetScreen
        }
    }, 
    {
        initialRouteName: 'RoleSelect',
    }
);

class App extends React.Component {
    render() {
        return (
            <RootStack /> 
        );
    }
}

export default RootStack;
