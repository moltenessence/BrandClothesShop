export const usernameValidation = (value) => {
    let errors;

    if (value.length > 12) {
        errors = "Max-length is 12 symbols!"
    }

    return errors;
}

export const emailValidation = (value) => {
    let errors;

    if (!value) {
        errors = "Field is required!";
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        errors = "Invalid value!";
    }

    return errors;
}

export const passwordValidation = (value) => {
    let errors;

    if (!value) {
        errors = "Field is required!";
    } else if (value.length < 5) {
        errors = "Min-length is 5 symbols!";
    } else if (value.length > 20) {
        errors = "Max-length is 20 symbols!";
    } else if (/^(?=.*[!@#$%^&(),.+/\/\]\[{}?><":;|])/.test(value)) {
        errors = `Forbidden symbols: !@#$%^&(),.+=\/]\[{}?><":;`;
    } else if (/^(?=.*[а-я])/.test(value) || /^(?=.*[А-Я])/.test(value)) {
        errors = `Passord must consist of Latin letters!`;
    } else if (!/([A-Z])/g.test(value)) {
        errors = 'Password must include one uppercase letter at least!';
    } else if (!/([0-9])/g.test(value)) {
        errors = 'Password must include one number at least!';
    }

    return errors;
}