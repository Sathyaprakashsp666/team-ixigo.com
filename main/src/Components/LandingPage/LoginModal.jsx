import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import "./LoginModal.css";
import { login, logout } from "../../Redux/Auth/action";
import { useDispatch,useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal({ img }) {
  const auth = useSelector(state => state.authReducer)
  console.log(auth.isAuth)
  const dispatch= useDispatch()
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = useState({email:"", password:""})

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    dispatch(login(state))
    setOpen(false)
    console.log(state)
  }
  

  return auth.isAuth ? (<div>Welcome {auth.data.user.name} <button onClick={()=>{dispatch(logout()) }}>Logout</button> </div>)  :(
    <div>
      <button type="button" onClick={handleOpen}>
        {img}
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="modal__cont">
              <div className="modal__left">
                <img src="https://images.ixigo.com/rt/pc/img/login/bus_banner.png" />
              </div>
              <div className="modal__right">
                <div className="modal__signup">
                  <p>
                    Don't have an account SIGN UP
                  </p>
                </div>
                <div className="modal__login">
                  <p>Log in to ixigo</p>
                </div>
                
                  <div className="modal__input">
                    <label>Email </label>
                    <br />
                    <input type="text" placeholder="Enter Email" value={state.email} onChange={(e)=>setState(st=>({...st,email:e.target.value}))} />
                  </div>
                  <div className="modal__input">
                    <label>Password </label>
                    <br />
                    <input type="password" placeholder="Enter Password" value={state.password} onChange={(e)=>setState(st=>({...st,password:e.target.value}))}  />
                  </div>
                  <div>
                    <button type="submit" onClick={handleSubmit} className="modal__loginbtn">LOGIN</button>
                  </div>
                
                <div className="modal__or">
                  <p>OR</p>
                </div>
                <div className="modal__btns">
                  <button>facebook</button>
                  <button>google</button>
                </div>
                <div className="modal__policy">
                  <p>
                    By logging in, I understand & agree to ixigo terms of use
                    and <br/>privacy policy
                  </p>
                </div>
                <div>
                  <p className="modal__policy">
                    This site is protected by reCAPTCHA and the Google
                    Privacy<br/> Policy and
                    Terms of Service apply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
