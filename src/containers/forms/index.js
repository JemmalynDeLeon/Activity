import FormsFormik from "@components/forms-formik";

const styles = {
    screen: {
        height: "100%",
        marginTop: "100px",
    },

    h2: {
        marginLeft: "10px",
        fontFamily: " Arial",
    },

    p: {
        marginLeft: "10px",
        fontFamily: " Arial",
    },
    container: {
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        margin: "auto",
        color: "bold black",
        borderRadius: "3px",
    },
    hr: {
        borderTop: "2px solid #bbb",
        marginLeft: "5px"
      }
}

const FormsContainer = () => {
  return (
    <div style={styles.screen}>
    <div style={styles.container}>
      {/* <p>Normal Form</p>
      <Forms /> */}
      <br />
      <h2 style={styles.h2}>Sign Up</h2>
      <p style={styles.h2}></p>
      <hr class="hr" style={styles.hr}></hr>
      <FormsFormik />
    </div></div>
  );
};

export default FormsContainer;