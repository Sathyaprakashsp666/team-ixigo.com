import React from "react";
import "./PaymentPage.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import CallIcon from "@material-ui/icons/Call";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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

  const [fair, setFair] = React.useState(false);

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

  const handleFair = () => {
    setFair(!fair);
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
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <CallIcon color="primary" />
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
              <MailOutlineIcon color="primary" />
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
        <div className="payment__right">
          {/* offers container */}
          <div className="payment__offerCont">
            <div className="payment__offerContTitle">Offers</div>
            <div className="payment__checkbox">
              <input type="radio" id="html" name="fav_language" value="HTML" /> {" "}
              <label for="html">GAANA</label>
              <p>Get 3 months of gaana subscription</p>
              <p>FREE</p>
              <p className="orangered">KNOW MORE</p>
            </div>

            <div className="payment__checkbox">
              <input type="radio" id="html" name="fav_language" value="HTML" /> {" "}
              <label for="html">BCULT</label>
              <p>get FREE 21 day trail to cure.fit live</p>
              <p className="orangered">KNOW MORE</p>
            </div>

            <div className="payment__checkbox">
              <input type="radio" id="html" name="fav_language" value="HTML" /> {" "}
              <label for="html">BUS500</label>
              <p>Get Rs37 ixigo money on this booking</p>
              <p className="orangered">KNOW MORE</p>
            </div>

            <div>
              <p className="orangered">Have coupon code .?</p>
            </div>
          </div>

          {/* fair summary container */}
          <div className="payement_fair">
            <div className="payement_fairSummary">
              Fare Summary (1 traveller)
              <button onClick={handleFair}>
                {fair ? (
                  <KeyboardArrowUpIcon fontSize="large" />
                ) : (
                  <ExpandMoreIcon fontSize="large" />
                )}
              </button>
            </div>

            {fair ? (
              <>
                <div className="payment__cal">
                  <p>Bus Fare</p>&nbsp;
                  <p>Rs. 766</p>
                </div>
                <div className="payment__cal">
                  <p>Texes and fees</p>
                  <p>Rs. 766</p>
                </div>
                <div className="payment__cal">
                  <p> Promotinal discount</p>
                  <p> - 766</p>
                </div>
                <div className="payment__cal">
                  <h3> Promotinal discount</h3>
                  <h3>- 766</h3>
                </div>
              </>
            ) : (
              <div>
                <h3>Payable amount</h3>
                <h3>768</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;