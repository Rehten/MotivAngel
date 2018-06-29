import React, {Component} from 'react';
import { StyleSheet, TextInput } from 'react-native';
import {borderRadiusAll, paddingAll, smallBorder} from "../../abstractions/style/physics";
import {colors} from '../../abstractions/style/visual'

export class ArgentInput extends Component {
    render() {
        return (
            <TextInput underlineColorAndroid={'transparent'} style={styles.large} />
        );
    }
}

const inputSizes = {
    large: {
        padding: 15,
        borderRadius: 30
    }
};

const styles = StyleSheet.create({
    large: Object.assign(
        {
            fontSize: 22,
            backgroundColor: colors.secondary,
            width: 300
        },
        paddingAll(inputSizes.large.padding),
        borderRadiusAll(inputSizes.large.borderRadius),
        smallBorder(colors.border)
    ),
});
