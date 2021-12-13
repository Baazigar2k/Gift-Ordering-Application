import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "black",
  color: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "1rem",
};

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[300]),
  backgroundColor: purple[700],
  "&:hover": {
    backgroundColor: purple[800],
  },
}));

function Login() {
  const history = useNavigate();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithPopup(provider)
      .then((auth) => history("/"))
      .catch((err) => alert(err.message));
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="login">
      <h2 className="login__head">Order Gifts Online</h2>
      <div className="login__title">
        <h1>Gift Ordering Application</h1>

        <button type="submit" className="login__submit" onClick={signIn}>
          <div className="btn__inside">
            <img
              src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_960_720.png"
              className="gLogo"
            />
            Login With Google
          </div>
        </button>

        {/* <Button onClick={handleOpen} variant="outlined" color="primary">
          About Us
        </Button> */}

        <Stack spacing={2} direction="row">
          <ColorButton variant="contained" onClick={handleOpen}>
            About Us
          </ColorButton>
        </Stack>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <div className="modal__content">
                <h2>Shop N Surprise</h2>
                <p className="modal__info">
                  Choose Alluring and Rare Gift Articles from a Wide Range of
                  Unique Products and Categories to shop from. Still confused
                  about how to find that Heart-touching Present? Don’t Worry! We
                  are always here to Guide you to shop by various Occasions,
                  Gift Types, Relations, and Age Groups, with Personalized
                  Products just for You and your Dear Ones!
                </p>

                <p className="modal__members">Ravi Patel</p>
                <p className="modal__members">Ansh Agraval</p>
                <p className="modal__members">Niharika Shrivastav</p>
              </div>
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
            ></Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default Login;
