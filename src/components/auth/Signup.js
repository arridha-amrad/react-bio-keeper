import React, {useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SignupForm from './Forms/SignupForm'

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    width: 300
  },
  title: {
    textAlign: "center",
    backgroundColor: "#795548",
    color: "#fff"
  },
  contentText: {
    textAlign: "center"
  },
}));

const Signup = () => {

  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const modalToggler = () => {
    setOpen(!open)
  }

  return (
    <DialogActions>
      <Button color="inherit" variant="outlined" onClick={modalToggler}>
        Signup
      </Button>
      <Dialog
        open={open}
        onClose={modalToggler}
        aria-labelledby="form-dialog-title"
        disableBackdropClick
      >
        <DialogTitle id="form-dialog-title" className={classes.title}>Signup</DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.contentText}>Signup and control your data</DialogContentText>
          <SignupForm modalController={modalToggler}/>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={modalToggler} color="inherit">
            Cancel
          </Button>
          <Button className={classes.btnPrimary} type="submit">
            Signup
          </Button>
        </DialogActions> */}
      </Dialog>
    </DialogActions>
  );
}
export default Signup
