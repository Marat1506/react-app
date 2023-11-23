/* eslint-disable react/prop-types */
import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from 'react';

export default function Vhod({ onClose }) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    // Обработка логики входа здесь
    onClose(); // Закрыть диалоговое окно после успешного входа
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextField id="standard-basic" label="Адрес электронной почты" variant="standard" sx={{ width: '80%', marginBottom: '10px' }} />
        <FormControl sx={{ width: '80%', marginBottom: '10px' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Пароль</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button fullWidth onClick={handleLogin} sx={{ width: '80%', marginBottom: '10px' }} variant="contained">Войти</Button>
      </form>
      <Typography sx={{ fontSize: 'small', marginBottom: '20px' }}>или через соцсети</Typography>
      <Box sx={{ display: 'flex', width: "80%", justifyContent: 'space-between', marginBottom: '30px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: "48%" }}>
          <img width="32" height="32" src="https://img.icons8.com/color/48/vk-circled--v2.png" alt="vk-circled--v2" />
          <Typography sx={{ fontSize: 'small', marginTop: '5px' }}>забыли пароль?</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: "48%" }}>
          <img width="32" height="32" src="https://img.icons8.com/fluency/48/google-logo.png" alt="google-logo" />
          <Typography sx={{ fontSize: 'small', marginTop: '5px' }}>зарегистрироваться</Typography>
        </Box>
      </Box>
    </Box>
  );
}