import React from "react";
import { Form, Input } from "antd";

export const AntInput = ({
    field,
    form,
    hasFeedback,
    label,
    submitCount,
    ...props
}) => {
    const touched = form.touched[field.name];
    const submitted = submitCount > 0;
    const hasError = form.errors[field.name];
    const submittedError = hasError && submitted;
    const touchedError = hasError && touched;
    const onChange = ({ target: { value } }) => form.setFieldValue(field.name, value);
    const onBlur = () => form.setFieldTouched(field.name, true);

    return (
        <>
            <Form.Item
                label={label}
                help={submittedError || touchedError ? hasError : false}
                validateStatus={submittedError || touchedError ? 'error' : 'success'}
                hasFeedback={(hasFeedback && submitted) || (hasFeedback && touched) ? true : false}
            >
                <Input
                    onChange={onChange}
                    onBlur={onBlur}
                    {...props}
                    {...field}
                />
            </Form.Item>
        </>
    );
}

export const AntInputPassword = ({
    field,
    form,
    hasFeedback,
    label,
    submitCount,
    ...props
}) => {
    const touched = form.touched[field.name];
    const submitted = submitCount > 0;
    const hasError = form.errors[field.name];
    const submittedError = hasError && submitted;
    const touchedError = hasError && touched;
    const onChange = ({ target: { value } }) => form.setFieldValue(field.name, value);
    const onBlur = () => form.setFieldTouched(field.name, true);

    return (
        <>
            <Form.Item
                label={label}
                help={submittedError || touchedError ? hasError : false}
                validateStatus={submittedError || touchedError ? 'error' : 'success'}
                hasFeedback={(hasFeedback && submitted) || (hasFeedback && touched) ? true : false}
            >
                <Input.Password
                    onChange={onChange}
                    onBlur={onBlur}
                    {...props}
                    {...field}
                />
            </Form.Item>
        </>
    );
}