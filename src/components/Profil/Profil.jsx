import { Box, FormControl, Input, InputAdornment, InputLabel, TextField, Typography } from "@mui/material";
import { AccountCircle,  LocationOn } from '@mui/icons-material';
import afisha from './afisha.png'
export default function Profil() {
  return (
    <Box id="profil"sx={{
      width: '100%', // Занимать всю ширину родительского контейнера
      maxWidth: '350px', // Максимальная ширина для планшетов и десктопов
      margin: 'auto', // Центрирование на экране
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      marginLeft: '10px',
      marginTop: '-70px',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Пример добавления тени
      borderRadius: '8px', // Пример добавления скругленных углов
    }}>
      <Box>
      <img width="100%" height="auto" src={afisha} alt="swiftui" />
      <Typography sx={{fontSize: '30px', marginTop: '-50px'}}>Личный кабинет</Typography>
      <AccountCircle fontSize="large" sx={{fontSize: '130px', marginTop: '40px'}}/>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
      <TextField id="standard-basic" label="Имя" variant="standard" />
      <TextField id="standard-basic" label="Фамилия" variant="standard" />
      <TextField  type="date" id="standard-basic" variant="standard" />
      <TextField id="standard-basic" label="Никнейм" variant="standard" />
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Место нахождения
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          endAdornment={
            <InputAdornment position="start">
              <LocationOn fontSize="large" sx={{color: 'aqua'}} />
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField id="standard-basic" label="Интересы" variant="standard" />
      </Box>
    </Box>
  )
}
