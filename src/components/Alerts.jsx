import React from "react";
import { Alert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  rootAlert: {
    width: "100%",
    display: "flex",
    placeContent: "center",
  },
  rootAlertActive: {
    maxWidth: "500px !important",
    width: "80% !important",
    top: "50px !important",
    opacity: "1 !important",
  },
  alert: {
    width: "90%",
    position: "fixed",
    zIndex: "4",
    transition: "cubic-bezier(0.075, 0.82, 0.165, 1) 1s",
    opacity: ".2",
    top: "-50px",
    boxShadow: "0px 10px 20px #dcd9fa5c",
    borderRadius: "9px",
    border:"1px solid #18CE94",
    background: "white",
    // fontWeight: "bold",
    color: "#18CE94",
  },
}));

export const Alerts = ({ severity, message, active, desactive }) => {
  const classes = useStyles();

  //error
  //warning
  //info
  //success

  if (active) {
    setTimeout(() => {
      desactive(false);
    }, 5000);
  }
  
  return (
    <div className={classes.rootAlert}>
      <Alert
        severity={severity || "info"}
        variant="outlined"
        className={`${classes.alert} ${active ? classes.rootAlertActive : ""}`}
      >
        {message}
      </Alert>
    </div>
  );
};
