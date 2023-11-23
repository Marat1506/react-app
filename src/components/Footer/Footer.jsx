import { Box, Button, ButtonGroup, Typography, } from "@mui/material";
import { Home as HomeIcon, CalendarToday, Chat, Favorite, Settings } from '@mui/icons-material';

// eslint-disable-next-line react/prop-types
export default function Footer({ onPageChange, activePage }) {
    return (
      <Box sx={{ position: 'fixed', bottom: 15, left: 0, right: 0 }}>
        <ButtonGroup sx={{ display: 'flex', left: '15px', gap: '10px', justifyContent: 'space-between' }}>
          <Button sx={{ display: 'flex', flexDirection: 'column', border: 'none' }} onClick={() => onPageChange('home')} >
            <HomeIcon sx={{ color: activePage === 'home' ? 'blue' : 'inherit', fontSize: '40px' }} />
            <Typography sx={{ position: 'absolute', fontSize: '15px', top: '40px' }}>Главная</Typography>
          </Button>
  
          <Button sx={{ display: 'flex', flexDirection: 'column', border: 'none' }} onClick={() => onPageChange('task')} >
            <CalendarToday sx={{ color: activePage === 'task' ? 'blue' : 'inherit', fontSize: '40px' }} />
            <Typography sx={{ position: 'absolute', fontSize: '15px', top: '40px' }}>Афиша</Typography>
          </Button>
  
          <Button sx={{ display: 'flex', flexDirection: 'column', border: 'none' }} onClick={() => onPageChange('chat')} >
            <Chat sx={{ color: activePage === 'chat' ? 'blue' : 'inherit', fontSize: '40px' }} />
            <Typography sx={{ position: 'absolute', fontSize: '15px', top: '40px' }}>Чаты</Typography>
          </Button>
  
          <Button sx={{ display: 'flex', flexDirection: 'column', border: 'none' }} onClick={() => onPageChange('favorite')} >
            <Favorite sx={{ color: activePage === 'favorite' ? 'blue' : 'inherit', fontSize: '40px' }} />
            <Typography sx={{ position: 'absolute', fontSize: '13px', top: '40px' }}>Психолог</Typography>
          </Button>
  
          <Button sx={{ display: 'flex', flexDirection: 'column', border: 'none' }} onClick={() => onPageChange('profil')} >
            <Settings sx={{ color: activePage === 'profil' ? 'blue' : 'inherit', fontSize: '40px' }} />
            <Typography sx={{ position: 'absolute', fontSize: '13px', top: '40px' }}>Профиль</Typography>
          </Button>
        </ButtonGroup>
      </Box>
    );
  }