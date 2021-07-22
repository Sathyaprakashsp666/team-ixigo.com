import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import "./LoginModal.css";

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
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
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
                    Don't have an account <span>SIGN UP</span>
                  </p>
                </div>
                <div className="modal__login">
                  <p>Log in to ixigo</p>
                </div>
                <div className="modal__input">
                  <label>Mobile No./Email </label>
                  <br />
                  <input type="text" placeholder="Enter Mobile Number/ Email" />
                </div>
                <div>
                  <button className="modal__loginbtn">LOGIN</button>
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
                    and <br/><span>privacy policy</span>
                  </p>
                </div>
                <div>
                  <p className="modal__policy">
                    This site is protected by reCAPTCHA and the Google
                    <span>Privacy<br/> Policy </span>and
                    <span>Terms of Service </span>apply.
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
