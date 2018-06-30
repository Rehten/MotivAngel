import React, {Component} from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';
import {borderRadiusAll, paddingSide, paddingVertical, smallBorder} from "../../abstractions/style/physics";
import {colors} from '../../abstractions/style/visual'

export class ArgentButton extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <TouchableHighlight
                style={[styles.large, this.props.style]}>
                <Text style={[styles.text]}>Продолжить через Email</Text>
            </TouchableHighlight>
        );
    }
}

const buttonSizes = {
    large: {
        paddingVertical: 15,
        paddingSide: 20,
        borderRadius: 30
    }
};

const styles = StyleSheet.create({
    large: Object.assign(
        {
            backgroundColor: colors.secondary,
            width: 300
        },
        paddingSide(buttonSizes.large.paddingSide),
        paddingVertical(buttonSizes.large.paddingVertical),
        borderRadiusAll(buttonSizes.large.borderRadius),
        smallBorder(colors.border)
    ),
    text: {
        textAlign: 'center'
    }
});