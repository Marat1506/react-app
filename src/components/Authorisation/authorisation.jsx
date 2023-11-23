import { Box, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import { useState } from "react";
import Vhod from "./Vhod";
import afisha from './afisha.png';

const Authorisation = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '-5px', textAlign: 'center', alignItems: 'center', marginTop: '30px' }}>
          <img src={afisha} alt="" width="200" height="200" />
          <Typography sx={{ fontSize: 'large', marginTop: '10px' }}>Добро пожаловать!</Typography>
        </Box>

        <DialogTitle sx={{ fontSize: 'x-large', textAlign: 'center' }}>Вход</DialogTitle>
        <DialogContent>
          <Vhod onClose={handleClose} />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Authorisation;