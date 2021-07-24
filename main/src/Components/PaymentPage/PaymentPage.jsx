import React from "react";
import "./PaymentPage.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const PaymentPage = () => {
  const classes = useStyles();
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleChange = (event) => {
    setFname(event.target.value);
    setLname(event.target.value);
    setAge(event.target.value);
    setGender(event.target.value);
  };

  const handleChange2 = (event) => {
    setMobile(event.target.value);
    setEmail(event.target.value);
  };
  return (
    <>
      <div className="payment__header">
        <div>
          <img
            src="https://images.ixigo.com/image/upload/f_auto/8a178b024470af59d0e1387babf3d02c-imdac.png"
            alt="ixigo"
          />
        </div>
        <div>
          <div>DP</div>
        </div>
      </div>
      <div className="payment__status"></div>
      <div className="payment__cont">
        <div className="payment__left">
          {/* booking details */}
          <div className="payment__bookingDetails"></div>
          {/* traveller form */}
          <div className="payment__travellerForm">
            <div className="payment__travellerForm_1">
              <div>Traveller Details</div>
              <div>1 Traveller</div>
            </div>
            <div>
              <h4>Traveller 1</h4>
            </div>
            <div>
              <TextField
                id="standard-multiline-flexible"
                label="First Name"
                multiline
                maxRows={4}
                value={fname}
                onChange={handleChange}
                placeholder="Enter first name"
              />
              &nbsp;
              <TextField
                id="standard-multiline-flexible"
                label="Last Name"
                multiline
                maxRows={4}
                value={lname}
                onChange={handleChange}
                placeholder="Enter last name"
              />
              &nbsp;
              <TextField
                id="standard-multiline-flexible"
                label=" Age"
                multiline
                maxRows={3}
                value={age}
                onChange={handleChange}
                placeholder="Enter age"
              />{" "}
              &nbsp;
              <FormControl className={classes.formControl}>
                <InputLabel
                  shrink
                  id="demo-simple-select-placeholder-label-label"
                >
                  Gender
                </InputLabel>
                <Select
                  labelId="demo-simple-select-placeholder-label-label"
                  id="demo-simple-select-placeholder-label"
                  value={gender}
                  onChange={handleChange}
                  displayEmpty
                  className={classes.selectEmpty}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={20}>Male</MenuItem>
                  <MenuItem value={30}>Female</MenuItem>
                </Select>
                {/* <FormHelperText>Label + placeholder</FormHelperText> */}
              </FormControl>
              &nbsp;
            </div>
          </div>
          {/* contact form */}
          <div className="payment__contactForm">
            <div className="payment__contactForm1">
              <div>Contact Details</div>
              <div>Your ticket SMS will be sent to this number and email</div>
            </div>
            <div style={{display:"flex" , alignItems:"center",gap:"10px"}}>
                <CallIcon color="primary"/>
              <TextField
                id="standard-multiline-flexible"
                label="Mobile"
                multiline
                maxRows={4}
                value={mobile}
                onChange={handleChange2}
                placeholder="Enter mobile number"
              />
              &nbsp;
              <MailOutlineIcon color="primary"/>
              <TextField
                id="standard-multiline-flexible"
                label="Email"
                multiline
                maxRows={4}
                value={email}
                onChange={handleChange2}
                placeholder="Enter your email ID"
              />
              &nbsp;
            </div>
          </div>
        </div>
        <div className="payment__right"></div>
      </div>
    </>
  );
};

export default PaymentPage;
