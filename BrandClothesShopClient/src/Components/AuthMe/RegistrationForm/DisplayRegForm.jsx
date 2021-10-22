import React from "react";
import { AntInput, AntInputPassword } from "../../Common/Components/AntInputs/AntInputs";
import { Form, Field } from "formik";
import { usernameValidation, emailValidation, passwordValidation } from "../../Common/Components/AntInputs/fieldValidation/fieldValidation";


const DisplayRegForm = ({ handleSubmit, values, submitCount }) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Field
                component={AntInput}
                name='username'
                label='Username'
                validate={usernameValidation}
                submitCount={submitCount}
                defaultValue={values.username}
                hasFeedback
            />
            <Field
                component={AntInput}
                name='email'
                label='E-mail'
                validate={emailValidation}
                submitCount={submitCount}
                defaultValue={values.email}
                hasFeedback
            />
            <Field
                component={AntInputPassword}
                name='password'
                label='Password'
                validate={passwordValidation}
                submitCount={submitCount}
                defaultValue={values.password}
                hasFeedback
            />
            <button className="ant-btn" type="submit">
                Submit
            </button>
        </Form>
    );
}

// const DisplayLoginForm = (props) => {
//     console.log(props);
//     return (
//         <>
//             <Form
//                 name="basic"
//                 labelCol={{
//                     span: 8,
//                 }}
//                 wrapperCol={{
//                     span: 16,
//                 }}
//                 initialValues={{
//                     remember: true,
//                 }}
//                 onFinish={() => alert('fin')}
//                 onFinishFailed={() => alert('fail')}
//                 autoComplete="off"
//             >
//                 <Form.Item
//                     label="Username"
//                     name="username"
//                 >
//                     <Input />
//                 </Form.Item>

//                 <Form.Item
//                     label="E-mail"
//                     name="email"
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Please input your e-mail!',
//                         },
//                     ]}
//                 >
//                     <Input />
//                 </Form.Item>

//                 <Form.Item
//                     label="Password"
//                     name="password"
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Please input your password!',
//                         },
//                     ]}
//                 >
//                     <Input.Password />
//                 </Form.Item>

//                 <Form.Item
//                     wrapperCol={{
//                         offset: 8,
//                         span: 16,
//                     }}
//                 >
//                     <Button type="primary" htmlType="submit">
//                         Submit
//                     </Button>
//                 </Form.Item>
//             </Form>
//         </>
//     );
// }

export default DisplayRegForm;