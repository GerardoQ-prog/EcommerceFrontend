import React, { useState } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  TextField,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import clsx from "clsx";

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
}));

export const InputText = ({
  name,
  label,
  value,
  error = null,
  onChange,
  type
}) => {
  const classes = useStyles();

  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      required
      type={type}
      // helperText={helperText}
      onChange={onChange}
      {...(error && { error: true,
        //  helperText: error 
        })}
      className={classes.textField}
    />
  );
};
export const InputPassword = ({ value, error = null, onChange }) => {
  const [ShowPassword, setShowPassword] = useState(false);
  const classes = useStyles();

  return (
    <FormControl className={clsx(classes.textField)} variant="outlined"
   required
    {...(error && { error: true})}
    >
      <InputLabel htmlFor="outlined-adornment-password" >Contraseña</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        name="password"
        label="Contraseña"
        type={ShowPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
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
  );
};
