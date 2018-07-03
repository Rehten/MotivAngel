import React, {Component} from 'react';
import { StyleSheet, Text } from 'react-native';
import {$borderRadiusAll, $paddingSide, $paddingVertical, $smallBorder} from "../../abstractions/style/physics";
import {$colors} from '../../abstractions/style/visual'

export class ArgentLogo extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <Text style={styles.text}>Logo</Text>
        );
    }
}

const sizes = {
    logo: {
        paddingVertical: 60,
        paddingSide: 10,
        borderRadius: 150
    }
};


const styles = StyleSheet.create({
    text: Object.assign(
        {
            backgroundColor: $colors.default.secondary,
            width: 150,
            marginBottom: 35,
            textAlign: 'center'
        },
        $paddingSide(sizes.logo.paddingSide),
        $paddingVertical(sizes.logo.paddingVertical),
        $borderRadiusAll(sizes.logo.borderRadius),
        $smallBorder($colors.default.border)
    )
});