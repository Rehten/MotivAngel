import {$borderRadiusAll, $paddingSide, $paddingVertical, $smallBorder } from "./physics";
import { $colors, $borderColor } from "./visual";
import { $interactionComponentStyle } from "./complex";

// вводится абстракция size - коэффициент на который умножаются физические значения(отступы и прочее) внутри функции
// примесь - выдающая готовый внешний вид для компонента взаимодействия с пользователем(типа кнопка или поле ввода)
export const $buttonStyle = (size, componentBgColor = $colors.default.secondary, componentBorderColor = $colors.default.border) => {
    return  Object.assign(
        {},
        $interactionComponentStyle(size, componentBgColor, componentBorderColor)
    );
};

export const $largeButtonStyle = (width, theme = 'default') => {
    return Object.assign(
        {
            width: width,
        },
        $buttonStyle(5, $colors[theme].secondary, $colors[theme].border)
    );
};

export const $mediumButtonStyle = (width, theme = 'default') => {
    return  Object.assign(
        {
            width: width,
        },
        $buttonStyle(3, $colors[theme].secondary, $colors[theme].border)
    );
};

export const $smallButtonStyle = (width, theme = 'default') => {
    return  Object.assign(
        {
            width: width,
        },
        $buttonStyle(1, $colors[theme].secondary, $colors[theme].border)
    );
};