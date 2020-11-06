import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import { NavAuth } from "../components/NavAuth";
import { InputPassword, InputText } from "../components/Input";
import { Form, useFormulario } from "../hooks/UseForm";
import { ButtonAuth } from "../components/Buttons";
// import { useForm } from "react-hook-form";
const useStyles = makeStyles(() => ({
  root: {
    textAlign: "-webkit-center",
  },
  form: {
    width: "350px",
  },
}));

const initialFValues = {
  name: "",
  lastName: "",
  email: "",
  password: "",
};
const Signup = () => {
//   const { register, errors, handleSubmit,  } = useForm();

  const {
    values,
    // setValues,
    handleInputChange,
    resetForm,
  } = useFormulario(initialFValues, true);

  const classes = useStyles();

  const handleSubmitRegister = (e) => {
    e.preventDefault()
    console.log("hola");

    console.log(values);
    setTimeout(() => {
      resetForm();
    }, 5000);
  };

  return (
    <Container className={classes.root}>
      <img src="/AllStarSportLogoBlack.svg" alt="" />
      <NavAuth />
      <Form onSubmit={handleSubmitRegister} className={classes.form}>
        <InputText
          label="Nombres"
          name="name"
          value={values.name}
          onChange={handleInputChange}
        />
        <InputText
          label="Apellidos"
          name="lastName"
          value={values.lastName}
          onChange={handleInputChange}

        />
        <InputText
          label="Correo"
          name="email"
          value={values.email}
          onChange={handleInputChange}
        //   ref={() => register({
        //     required: {
        //       value: true,
        //       noData: true,
        //     },
        //   })}
        />
        <InputPassword value={values.password} onChange={handleInputChange} />
        <ButtonAuth name="Registrar" />
      </Form>
    </Container>
  );
};

export default Signup;
