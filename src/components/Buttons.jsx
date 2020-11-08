import React from "react";
import { Button, makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({

    buttonSubmitForm: {
        color: "white",
        width: "100%",
        margin: "10px 0",
        height: "55px",
        textTransform: "capitalize",
      fontSize: "18px"

      },
}));
export const ButtonAuth = ({ name, onClick }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.buttonSubmitForm}
      disableElevation
      onClick={onClick}
      type="submit"
    >
      {name}
    </Button>
  );
};
