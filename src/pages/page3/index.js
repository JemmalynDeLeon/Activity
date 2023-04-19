import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const SignupForm = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("Required!"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("Required!"),
    email: Yup.string()
      .email("Invalid email")
      .required("Required!"), 
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required!"),
    birthdate: Yup.date()
      .required("Required!"),
    gender: Yup.string()
      .oneOf(['male', 'female', 'custom'], 'Invalid Gender')
      .required("Required!"),
});

const [display, setDisplay] = useState();

  return (
    <div>
      <h2>SIGN UP</h2>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          birthdate: "",
          gender: "",
        }}
        // add reset
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          setDisplay(`Welcome ${values.firstName} ${values?.lastName}! You've successfully created an Account!`);
        }}
      >
        {({ errors, touched, values }) => (
          <Form style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" placeholder="First Name" />
            <ErrorMessage component="div" style={{ color: 'red' }} name="firstName" />

            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" placeholder="Last Name" />
            <ErrorMessage component="div" style={{ color: 'red' }} name="lastName" />

            <label htmlFor="email">Email</label>
            <Field id="email" name="email" placeholder="Email" />
            <ErrorMessage component="div" style={{ color: 'red' }} name="email" />

            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="Password"
            />
            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />

            <label htmlFor="birthdate">Birthdate</label>
            <Field
              id="birthdate"
              name="birthdate"
              type="date"
              placeholder="MM/DD/YYYY"
            />
            <ErrorMessage component="div" style={{ color: 'red' }} name="birthdate" />

            <label htmlFor="gender">Gender</label>
            <Field as="select" id="gender" name="gender">
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="custom">Custom</option>
            </Field>
            <ErrorMessage component="div" style={{ color: 'red' }} name="gender" />

            <button type="submit">Submit</button>

            {display && <p>{display}</p>}
          </Form>
         )}
       </Formik>
      </div>
    );
  };


export default SignupForm;