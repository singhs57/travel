import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        Learn More
        </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Hello Nature</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Nature is often seen as something we can escape to when life is hard. 
          The reality is that the nature that surrounds us is far more meaningful and far more valuable than the money that we chase and obsess over. 
          If we appreciated nature the way we love money, we might just make the world a bit more peaceful… and beautiful.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}