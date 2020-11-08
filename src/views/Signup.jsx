import React, { useState } from "react";
import { Container, makeStyles } from "@material-ui/core";
import { NavAuth } from "../components/NavAuth";
import { InputPassword, InputText } from "../components/Input";
import { Form, useFormulario } from "../hooks/UseForm";
import { ButtonAuth } from "../components/Buttons";
import { Alerts } from "../components/Alerts";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    placeContent: "center",
  },
  form: {
    width: "350px",
  },
  logoAuth: {
    margin: "20px 0",
  },
}));

const initialFValues = {
  name: "",
  lastName: "",
  email: "@",
  password: "",
};
const Signup = () => {
  // Alert---------------------------------------------------------
  const [ActiveAlert, setActiveAlert] = useState(false);
  const [Message, setMessage] = useState("");

  //Validate Form--------------------------------------------------
 const [ShowError, setShowError] = useState(false)
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "This field is required.";
    if ("lastName" in fieldValues)
      temp.lastName = fieldValues.lastName ? "" : "This field is required.";
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
  } = useFormulario(initialFValues, true, validate );

  const handleSubmitSignup = (e) => {
    e.preventDefault();
    setShowError(true)
    if (validate()) {
      console.log(values);
      setActiveAlert(true);
      setMessage("Usuario creado satisfactoriamente");
      resetForm();
    }
  };

  const classes = useStyles();

  return (
    <>
      <Container className={classes.root}>
        <img
          src="/AllStarSportLogoBlack.svg"
          alt=""
          className={classes.logoAuth}
        />
        <NavAuth />
        <Form onSubmit={handleSubmitSignup} className={classes.form}>
          <InputText
            error={errors.name}
            label="Nombres"
            name="name"
            value={values.name}
            onChange={handleInputChange}
          />
          <InputText
            error={errors.lastName}
            label="Apellidos"
            name="lastName"
            value={values.lastName}
            onChange={handleInputChange}
          />
          <InputText
            error={ShowError? errors.email : false}
            label="Correo"
            name="email"
            value={values.email}
            type="email"
            onChange={handleInputChange}
          />
          <InputPassword
            error={errors.password}
            value={values.password}
            onChange={handleInputChange}
          />
          <ButtonAuth name="Registrar" />
        </Form>
      </Container>
      <Alerts
        severity="success"
        active={ActiveAlert}
        message={Message}
        desactive={setActiveAlert}
      />
    </>
  );
};

export default Signup;
