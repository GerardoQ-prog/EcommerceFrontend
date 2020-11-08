import React, { useState } from "react";
import { Button, Container, makeStyles } from "@material-ui/core";
import { useFormulario, Form } from "../hooks/UseForm";
import { NavAuth } from "../components/NavAuth";
import { ButtonAuth } from "../components/Buttons";
import { InputPassword, InputText } from "../components/Input";
import { Alerts } from "../components/Alerts";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    placeContent: "center",
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "100%",
    margin: "20px 0",
  },
  form: {
    width: "350px",
  },
  buttonSubmitForm: {
    color: "white",
    width: "100%",
    margin: "10px 0",
  },
  logoAuth: {
    margin: "20px 0",
  },
  buttonRestorePassword: {
    color: "#C4C4C4",
    fontWeight: "bold",
    textTransform: "none",
  },
}));

const initialFValues = {
  email: "",
  name: "",
  password: "",
};

const Signin = () => {

  // Alert---------------------------------------------------------
  const [ActiveAlert, setActiveAlert] = useState(false);
  const [Message, setMessage] = useState("");
  const [Severity , setSeverity] = useState("");


  //Validate Form--------------------------------------------------
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "This field is required.";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";
    if ("password" in fieldValues)
      temp.password =
        fieldValues.password.length > 6 ? "" : "This field is required.";
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const {
    values,
    // setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useFormulario(initialFValues, true, validate);

  const handleSubmitSignin = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(values);
      setSeverity("success")
      setActiveAlert(true);
      setMessage("Usuario creado satisfactoriamente");
      resetForm();
    }
  };

  const classes = useStyles();

  console.log(navigator)
  return (
    <>
      <Container className={classes.root}>
        <img
          src="/AllStarSportLogoBlack.svg"
          alt="AllStarSportLogoBlack"
          className={classes.logoAuth}
        />
        <NavAuth />
        <Form onSubmit={handleSubmitSignin} className={classes.form}>
          <InputText
            error={errors.name}
            label="Nombre"
            name="name"
            value={values.name}
            onChange={handleInputChange}
          />
          <InputPassword
            error={errors.password}
            value={values.password}
            onChange={handleInputChange}
          />
          <ButtonAuth name="Iniciar Sesión" />
        </Form>
    <Button className={classes.buttonRestorePassword}>
      Recuperar contraseña
    </Button>
      </Container>
      {/* <Button onClick={() => {setActiveAlert(!ActiveAlert); setMessage("Holaa BB")}}>Active alert</Button> */}
      <Alerts
        severity={Severity}
        active={ActiveAlert}
        message={Message}
        desactive={setActiveAlert}
      />
    </>
  );
};

export default Signin;
