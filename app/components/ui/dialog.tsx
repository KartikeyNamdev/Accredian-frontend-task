import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// import { useState } from "react";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  // const [submit, setSubmit] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Refer now
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: "form",
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              // const formData = new FormData(event.currentTarget);
              // const formJson = Object.fromEntries((formData as any).entries());

              handleClose();
            },
          },
        }}
      >
        <DialogTitle>Refer someone a Program</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To refer someone a program, please enter their email address and
            required details.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="referrerEmail"
            name="referrerEmail"
            label="Your Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="referrerName"
            label="Your Name"
            type="string"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="referrerPhone"
            name="referrerPhone"
            label="Your Phone number"
            type="string"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="refereeEmail"
            name="refereeEmail"
            label="Reciever's email"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="refereeName"
            name="refereeName"
            label="Reciever's Name"
            type="string"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="refereePhone"
            name="refereePhone"
            label="Reciever's Phone Number"
            type="string"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="program"
            name="program"
            label="Program you wanna refer"
            type="string"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              alert("Mail sent successfully ! It might take few minutes ");
            }}
            type="submit"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
