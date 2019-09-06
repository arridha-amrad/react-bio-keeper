import React, { useState } from "react";
import {
  LockRounded,
  MailRounded,
  AccountBoxRounded,
  Visibility,
  VisibilityOff
} from "@material-ui/icons";
import {
  TextField,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  Button,
  Box
} from "@material-ui/core";

const SignupForm = ({ modalController }) => {
  const [values, setValues] = useState({
    showPassword: false,
    password: "",
    email: "",
    username: ""
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
      flexGrow: 1
    },
    textField: {
      width: 300
    },
    btnPrimary: {
      color: "#fff",
      backgroundColor: "#795548",
      '&:hover': {
        background: "#6d4c41"
      },
      marginLeft: theme.spacing(1),
    },
    btnSignup: {
      marginTop: theme.spacing(3),    
    }
  }));

  const classes = useStyles();
  const { showPassword, password, email, username } = values;

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ username, password, email });
    modalController();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountBoxRounded />
          </Grid>
          <Grid item>
            <TextField
              id="username"
              className={classes.textField}
              label="Username"
              value={username}
              onChange={handleChange("username")}
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <MailRounded />
          </Grid>
          <Grid item>
            <TextField id="email" className={classes.textField} label="Email" value={email} onChange={handleChange("email")} />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <LockRounded />
          </Grid>
          <Grid item>
            <TextField
              className={classes.textField}
              id="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handleChange("password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Grid>
        </Grid>
      </div>
      <Box className={classes.btnSignup} display="flex" justifyContent="flex-end">
        <Button onClick={modalController} color="inherit">
          Cancel
        </Button>
        <Button className={classes.btnPrimary} type="submit">
          Signup
        </Button>
      </Box>
    </form>
  );
};

export default SignupForm;
