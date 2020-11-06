import React from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";
import { RadioButtonChecked, RadioButtonUnchecked } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  navSign: {
    width: "350px",
  },
}));

export const NavAuth = () => {
  const classes = useStyles();

  const signupActive = window.location.pathname === "/auth/signup" 
  const signinActive = window.location.pathname === "/auth/sigin" 

  return (
    <div className={classes.navSign}>
      <Grid container spacing={2} justify="center">
        <Grid item xs={6}>
          <Button
            variant="outlined"
            color={signinActive? "primary" : "default"}
            size="large"
            fullWidth
            className={classes.button}
            startIcon={
                signinActive? (
                <RadioButtonChecked />
              ) : (
                <RadioButtonUnchecked />
              )
            }
            href={signinActive? "": "/auth/sigin"}
          >
            Ingresar
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            color={signupActive? "primary" : "default"}
            size="large"
            fullWidth
            className={classes.button}
            startIcon={
                signupActive ? (
                <RadioButtonChecked />
              ) : (
                <RadioButtonUnchecked />
              )
            }
            href={signupActive ? "": "/auth/signup"}

          >
            Registrar
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
