export const $paddingSide = (value) => { 
    return {
        paddingStart: value,
        paddingEnd: value,
    }
};

export const $paddingVertical = (value) => {
    return {
        paddingBottom: value,
        paddingTop: value,
    }
};

export const $paddingAll = (value) => {
    return {
        paddingBottom: value,
        paddingStart: value,
        paddingEnd: value,
        paddingTop: value,
    }
};

export const $borderRadiusAll = (value) => {
    return {
        borderTopLeftRadius: value,
        borderBottomLeftRadius: value,
        borderTopRightRadius: value,
        borderBottomRightRadius: value,
    }
};

export const $smallBorder = () => {
    return {
        borderWidth: 1
    }
};
