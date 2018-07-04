import {$borderRadiusAll, $paddingSide, $paddingVertical, $smallBorder } from "./physics";
import { $colors, $borderColor } from "./visual";

// вводится абстракция size - коэффициент на который умножаются физические значения(отступы и прочее) внутри функции
// примесь - выдающая готовый внешний вид для компонента взаимодействия с пользователем(типа кнопка или поле ввода)
export const $interactionComponentStyle = (size, componentBgColor, componentBorderColor) => {
    return Object.assign(
        {
            backgroundColor: componentBgColor,
        },
        $paddingSide(size * 4),
        $paddingVertical(size * 2),
        $borderRadiusAll(size * 6),
        $borderColor(componentBorderColor),
        $smallBorder()
    );
}
