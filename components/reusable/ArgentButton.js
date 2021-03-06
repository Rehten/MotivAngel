import React, {Component} from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';
import {$largeButtonStyle, $mediumButtonStyle, $smallButtonStyle} from '../../abstractions/style/buttons';

export class ArgentButton extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <TouchableHighlight
                style={[styles.large, this.props.style]}
                onPress={this.props.onPress}>
                <Text style={[styles.text]}>{this.props.children}</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    large: $largeButtonStyle(300),
    medium: $mediumButtonStyle(300),
    small: $smallButtonStyle(300),
    text: {
        fontSize: 18,
        textAlign: 'center'
    }
});