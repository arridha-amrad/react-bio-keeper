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
  makeStyles
} from "@material-ui/core";

const SignupForm = () => {
  const [values, setValues] = useState({
    showPassword: false,
    password: "",
    email: ""
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
      margin: theme.spacing(1)
    },
    textField: {
      width: 300
    }
  }));

  const classes = useStyles();

  return (
    <>
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
            <TextField id="email" className={classes.textField} label="Email" />
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
              type={values.showPassword ? "text" : "password"}
              value={values.password}
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
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default SignupForm;
