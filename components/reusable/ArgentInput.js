import React, {Component} from 'react';
import { StyleSheet, TextInput } from 'react-native';
import {borderRadiusAll, paddingSide, paddingVertical, smallBorder} from "../../abstractions/style/physics";
import {colors} from '../../abstractions/style/visual'

export class ArgentInput extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <TextInput
                placeholder={this.props.placeholder}
                underlineColorAndroid={'transparent'}
                style={[styles.large, this.props.style]} />
        );
    }
}

const inputSizes = {
    large: {
        paddingVertical: 10,
        paddingSide: 20,
        borderRadius: 30
    }
};

const styles = StyleSheet.create({
    large: Object.assign(
        {
            fontSize: 16,
            backgroundColor: colors.secondary,
            width: 300
        },
        paddingSide(inputSizes.large.paddingSide),
        paddingVertical(inputSizes.large.paddingVertical),
        borderRadiusAll(inputSizes.large.borderRadius),
        smallBorder(colors.border)
    ),
});
