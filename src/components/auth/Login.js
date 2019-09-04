import React, {useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LoginForm from './Forms/LoginForm'

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  title: {
    textAlign: "center",
    backgroundColor: "#795548",
    color: "#fff"
  },
  btnPrimary:{
    backgroundColor: "#795548",
    color: "#fff",
    marginRight: theme.spacing(2)
  },
  contentText:{
    textAlign: "center"
  }
}));

const Login = () => {

  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const modalToggler = () => {
    setOpen(!open)
  }
  return (
    <DialogActions>
      <Button color="inherit" onClick={modalToggler}>
        Login
      </Button>
      <Dialog
        open={open}
        onClose={modalToggler}
        aria-labelledby="form-dialog-title"
        disableBackdropClick
      >
        <DialogTitle id="form-dialog-title" className={classes.title}>Login</DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.contentText}>Login and control your data</DialogContentText>
          <LoginForm/>
        </DialogContent>
        <DialogActions>
          <Button onClick={modalToggler} color="primary">
            Cancel
          </Button>
          <Button onClick={modalToggler} className={classes.btnPrimary}>
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </DialogActions>
  );
}
export default Login
