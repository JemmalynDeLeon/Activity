import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const styles = {
  box: {
    backgroundColor: "skyblue",
    border: "10px",
    padding: "5px",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
   
  p: {
    fontSize: "15px",
    paddingLeft: "7px"
  },

  sButton: {
  width: "40%",
  height: "40px",
  fontSize: "14px",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
  },

  label: {
    padding: "5px",
  },

}

const SignupForm = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!").max(70, "Too Long!").required("Required!"),

    lastName: Yup.string()
      .min(2, "Too Short!").max(70, "Too Long!").required("Required!"),

    email: Yup.string()
      .email("Invalid email").required("Required!"), 

    password: Yup.string()
      .min(8, "Password must be at least 8 characters").max(15, "Too Long!") .required("Required!"),
    birthdate: Yup.date()
      .required("Required!"),
    gender: Yup.string()
      .oneOf(['male', 'female', 'prefer not to say'], 'Invalid Gender').required("Required!"),
});

const [display, setDisplay] = useState();

  return (
    <div style={styles.box}  >
      <h1>SIGN UP</h1>
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
        setDisplay(`You've successfully created an Account! 
        Name:${values.firstName} ${values?.lastName} 
        Email: ${values.email}
        Password: ${values?.password}
        Gender: ${values?.gender}`);
        }}
      >
        {/* // error-message */}

        {({ errors, touched, values }) => (
          <Form style={{ display: "flex", flexDirection: "column",  }}>
            <label style={styles.label} htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" placeholder="First Name" />
            <ErrorMessage component="div" style={{ color: 'red' }} name="firstName" />

            <label style={styles.label} htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" placeholder="Last Name" />
            <ErrorMessage component="div" style={{ color: 'red' }} name="lastName" />

            <label style={styles.label} htmlFor="email">Email</label>
            <Field id="email" name="email" placeholder="Email" />
            <ErrorMessage component="div" style={{ color: 'red' }} name="email" />

            <label style={styles.label} htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="Password"
            />
            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />

            <label style={styles.label} htmlFor="birthdate">Birthdate</label>
            <Field
              id="birthdate"
              name="birthdate"
              type="date"
              placeholder="MM/DD/YYYY"
            />
            <ErrorMessage component="div" style={{ color: 'red' }} name="birthdate" />

            <label style={styles.label} htmlFor="gender">Gender</label>
            <Field as="select" id="gender" name="gender">
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="custom">Custom</option>
            </Field>
            <ErrorMessage component="div" style={{ color: 'red' }} name="gender" />

            <div style={styles.p} class='content'>
              <p>People who use our service may have uploaded your contact information to Facebook. <span class="blue">Learn more</span></p>
              <p>By clicking Sign Up, you agree to our Terms, <span class="blue">Privacy Policy and Cookies Policy</span>. You may receive SMS Notifications from us and can opt out any time.</p>
            </div>
            <button style={styles.sButton} type='submit'>Sign up</button>

            <p>{display}</p>
            
          </Form>
         )}
       </Formik>
      </div>
    );
  };


export default SignupForm;