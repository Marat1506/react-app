import { Box, FormControl, Input, InputAdornment, InputLabel, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import afisha from './afisha.png'
export default function Chat() {
    return (
        <Box sx={{
            width: '100%', // Чтобы занимать всю ширину родительского контейнера
            maxWidth: '380px', // Максимальная ширина для планшетов и десктопов
            margin: 'auto', // Центрирование на экране
            padding: '20px', // Добавлено отступов для красоты
        }}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', marginTop: '-40px', alignItems: 'center'}}>
                <Typography sx={{color: 'aqua'}}>Чаты</Typography>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img src={afisha} alt="" width="180" height="180"/>
                    <Typography>Клубы по интересам</Typography>
                </Box>
                <Typography sx={{fontSize: '50px', color: 'aqua'}}>+</Typography>
            </Box>

            <FormControl fullWidth  variant="outlined">
                <InputLabel htmlFor="input-with-icon-adornment">
                    Поиск чата
                </InputLabel>
                <Input
                    id="input-with-icon-adornment"
                    endAdornment={
                        <InputAdornment position="start">
                            <Search fontSize="large" />
                        </InputAdornment>
                    }
                />
            </FormControl>

            <Box sx={{marginTop: '30px'}}>
                <Box sx={{ borderBottom: "1px solid black", marginTop: '10px', textAlign: 'left' }}>
                    <Typography sx={{fontSize: '30px'}}>Литература</Typography>
                </Box>
                <Box sx={{ borderBottom: "1px solid black", marginTop: '10px', textAlign: 'left' }}>
                    <Typography sx={{fontSize: '30px'}}>Фильмы и сериалы</Typography>
                </Box>
                <Box sx={{ borderBottom: "1px solid black", marginTop: '10px', textAlign: 'left' }}>
                    <Typography sx={{fontSize: '30px'}}>Туризм</Typography>
                </Box>
                <Box sx={{ borderBottom: "1px solid black", marginTop: '10px', textAlign: 'left' }}>
                    <Typography sx={{fontSize: '30px'}}>Живопись</Typography>
                </Box>
                <Box sx={{ borderBottom: "1px solid black", marginTop: '10px', textAlign: 'left' }}>
                    <Typography sx={{fontSize: '30px'}}>Кулинария</Typography>
                </Box>
                <Box sx={{marginTop: '20px', backgroundColor: 'darkgray', height: '20px'}}>

                </Box>
                <Box sx={{ borderBottom: "1px solid black", marginTop: '10px', textAlign: 'left' }}>
                    <Typography sx={{fontSize: '30px'}}>Танцы</Typography>
                </Box>
                <Box sx={{ borderBottom: "1px solid black", marginTop: '10px', textAlign: 'left' }}>
                    <Typography sx={{fontSize: '30px'}}>Здоровое питание, спорт</Typography>
                </Box>
                <Box sx={{ borderBottom: "1px solid black", marginTop: '10px', textAlign: 'left' }}>
                    <Typography sx={{fontSize: '30px'}}>Рукоделие</Typography>
                </Box>
                <Box sx={{marginTop: '20px', backgroundColor: 'darkgray', height: '20px'}}>

                </Box>
                <Box sx={{ borderBottom: "1px solid black", marginTop: '10px', textAlign: 'left' }}>
                    <Typography sx={{fontSize: '30px'}}>Астрология</Typography>
                </Box>

            </Box>

        </Box>
    )
}
