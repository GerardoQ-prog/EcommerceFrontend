import React, { useState } from "react";
import {
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  TextField,
} from "@material-ui/core";
// import Controls from "../../components/controls/Controls";
import { useFormulario, Form } from "../hooks/UseForm";
import clsx from "clsx";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { NavAuth } from "../components/NavAuth";
import { ButtonAuth } from "../components/Buttons";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  hireDate: new Date(),
  isPermanent: false,
  userName: "",
  password: "",
};
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "-webkit-center",
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
}));

const Signin = () => {
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required.";
    if ("userName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required.";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";
    if ("mobile" in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required.";
    if ("password" in fieldValues)
      temp.password =
        fieldValues.password.length !== 0 ? "" : "This field is required.";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(values);
      resetForm();
    }
  };

  const [ShowPassword, setShowPassword] = useState(false);

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <img src="/AllStarSportLogoBlack.svg" alt="" />
      <NavAuth />
      <Form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          // id="outlined-basic"
          error={false}
          label="Usuario"
          variant="outlined"
          name="userName"
          value={values.userName}
          onChange={handleInputChange}
          className={classes.textField}
        />
        <FormControl className={clsx(classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Contraseña
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={ShowPassword ? "text" : "password"}
            value={values.password}
            name="password"
            onChange={handleInputChange}
            label="Contraseña"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!ShowPassword)}
                  onMouseDown={(e) => e.preventDefault}
                  edge="end"
                >
                  {ShowPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <ButtonAuth name="Iniciar Sesión" />
      </Form>
    </Container>
  );
};

export default Signin;
