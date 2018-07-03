import React, {Component} from 'react';
import { StyleSheet, TextInput } from 'react-native';
import {$largeInputStyle, $mediumInputStyle, $smallInputStyle} from "../../abstractions/style/inputs"

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
    large: $largeInputStyle(300),
    medium: $mediumInputStyle(300),
    small: $smallInputStyle(300)
});
