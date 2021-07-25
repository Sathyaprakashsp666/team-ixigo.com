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
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import { useHistory } from "react-router";

import AcUnitIcon from "@material-ui/icons/AcUnit";
import HorizontalLinearStepper from "./Stepper";
import HorizontalLabelPositionBelowStepper from "./Stepper";

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
  const [fair, setFair] = React.useState(true);

  const [state, setState] = React.useState(false);

  const history = useHistory();

  const handleChangeName = (event) => {
    setFname(event.target.value);
  };
  const handleChangeLname = (event) => {
    setLname(event.target.value);
  };
  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleChangeMobile = (event) => {
    setMobile(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChange2 = (event) => {
    setGender(event.target.value);
  };

  const handleFair = () => {
    setFair(!fair);
  };

  const handlePay = () => {
    history.push("/payment/gateway");
  };
  const modify = () => {
    history.push("/search");
  };

  // console.log(fname, lname, age, gender);

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
      <div className="payment__status">
        <HorizontalLabelPositionBelowStepper/>
      </div>
      <div className="payment__cont">
        <div className="payment__left">
          {/* booking details */}
          <div className="payment__bookingDetails">
            <div className="payment__bookingDetailsCont">
              <div>
                <h3>Ideal Travels</h3>
                <AcUnitIcon fontSize="small" />
                <h3>AC</h3>
              </div>
              <div>
                <h3>22.21</h3>
                <img
                  src="https://cdn.kastatic.org/ka-perseus-graphie/a26f5a5d1677c840eb556ced719307a3de52c26f.png"
                  alt="line"
                  width="170px"
                />
                <h3>35.5</h3>
              </div>
              <div>
                <p>Non sleeper</p>
              </div>
            </div>
            <div className="payment__bookingDetailsContR">
              <div className='payment__points'>
                <p>Pickup Point</p>
                <p>Dropoff Point</p>
              </div>
              <div className="payment__places">
                <p>chandrapura</p>
                <p>hassan bypasss</p>
              </div>
              {/* <div>
                <h6>Selected Seats</h6>
              </div> */}
              <div>
                <p>Selected Seat</p>
                <p>E</p>
                <button className="payment__modify" onClick={modify}>
                  Modify Booking
                </button>
              </div>
            </div>
          </div>
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
                onChange={handleChangeName}
                placeholder="Enter first name"
              />
              &nbsp;
              <TextField
                id="standard-multiline-flexible"
                label="Last Name"
                multiline
                maxRows={4}
                value={lname}
                onChange={handleChangeLname}
                placeholder="Enter last name"
              />
              &nbsp;
              <TextField
                id="standard-multiline-flexible"
                label=" Age"
                multiline
                maxRows={3}
                value={age}
                onChange={handleChangeAge}
                placeholder="Enter age"
              />
              &nbsp;
              <FormControl>
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
                  onChange={handleChange2}
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
              <div className="payment__contactformTitle">
                Contact Details&nbsp;
              </div>
              <div className="payment__contactformText">
                Your ticket SMS will be sent to this number and email
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <CallIcon color="primary" />
              <TextField
                id="standard-multiline-flexible"
                label="Mobile"
                multiline
                maxRows={4}
                value={mobile}
                onChange={handleChangeMobile}
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
                onChange={handleChangeEmail}
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
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <label for="html">BCULT</label>
              <p>get FREE 21 day trail to cure.fit live</p>
              <p className="orangered">KNOW MORE</p>
            </div>

            <div className="payment__checkbox">
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <label for="html">BUS500</label>
              <p>Get Rs37 ixigo money on this booking</p>
              <p className="orangered">KNOW MORE</p>
            </div>

            <div className="payment__couponCont">
              <p className="orangered">Have coupon code .?</p>
              <p>
                <ChevronRightIcon color="secondary" />
              </p>
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
                  <p className="payment__gray">&nbsp; Bus Fare</p>&nbsp;
                  <p>&nbsp;₹ 766</p>
                </div>
                <div className="payment__cal">
                  <p className="payment__gray">Texes and fees</p>
                  <p>&nbsp; &nbsp;&nbsp;&nbsp; ₹ 766</p>
                </div>
                <div className="payment__cal">
                  <p className="payment__green"> Promotinal discount</p>
                  <p className="payment__green"> &nbsp; -₹ 766</p>
                </div>
                <div className="payment__cal">
                  <h4 className="payment__orange"> You Pay</h4>
                  <h4 className="payment__orange"> ₹ 766</h4>
                </div>
              </>
            ) : (
              <div>
                <h5>Payable amount</h5>
                <h5> ₹ 768</h5>
              </div>
            )}
          </div>
          <div className="payment__policy">
            <label>
              <input type="checkbox" /> &nbsp;I confirm that I have read,
              understood and agree with the Privacy Policy and Terms of use
            </label>
          </div>
          <div>
            <button className="payment__button" onClick={handlePay}>
              PAY SECURELY
            </button>
          </div>
        </div>
      </div>
      <div className="payment__footer">
        <div className="payment__footerLeft">
          <p>ABOUT US</p>
          <p>. PRESS</p>
          <p>. FAQ</p>
          <p>. MOBILE</p>
          <p>. PRIVACY</p>
          <p>. TERMS OF USE</p>
          <p>. CAREER</p>
          <p>. CUSTOMER SERVICE</p>
        </div>
        <div className="payment__footerRight">
          <div>
            <FacebookIcon />
          </div>
          <div>
            <YouTubeIcon />
          </div>
          <div>
            <TwitterIcon />
          </div>
        </div>
      </div>
      <div className="gateway__footer">
        <p>
          © 2021 Le Travenues Technology Pvt. Ltd. India. All brands are
          trademarks of their respective owners.
        </p>
      </div>
    </>
  );
};

export default PaymentPage;
