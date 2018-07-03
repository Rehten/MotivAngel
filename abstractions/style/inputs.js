import {$borderRadiusAll, $paddingSide, $paddingVertical, $smallBorder } from "./physics";
import { $colors, $borderColor } from "./visual";
import { $interactionComponentStyle } from "./complex";

// вводится абстракция size - коэффициент на который умножаются физические значения(отступы и прочее) внутри функции
// примесь - выдающая готовый внешний вид для компонента взаимодействия с пользователем(типа кнопка или поле ввода)
export const $inputStyle = (size, componentBgColor = $colors.default.secondary, componentBorderColor = $colors.default.border) => {
    return  Object.assign(
        {},
        $interactionComponentStyle(size, componentBgColor, componentBorderColor)
    );
};

export const $largeInputStyle = (width, theme = 'default') => {
    return Object.assign(
        {
            width: width,
            fontSize: 18
        },
        $inputStyle(5, $colors[theme].secondary, $colors[theme].border)
    );
};

export const $mediumInputStyle = (width, theme = 'default') => {
    return  Object.assign(
        {
            width: width,
            fontSize: 16
        },
        $inputStyle(3, $colors[theme].secondary, $colors[theme].border)
    );
};

export const $smallInputStyle = (width, theme = 'default') => {
    return  Object.assign(
        {
            width: width,
            fontSize: 14
        },
        $inputStyle(1, $colors[theme].secondary, $colors[theme].border)
    );
};