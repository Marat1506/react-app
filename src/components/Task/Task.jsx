import { Box, Typography } from "@mui/material";
import { AccountCircle, AccessAlarm, Favorite, Chat } from '@mui/icons-material';
import afisha from './afisha.png'

export default function Task() {
    return (
        <Box sx={{
            width: '100%', // Чтобы занимать всю ширину родительского контейнера
            maxWidth: '380px', // Максимальная ширина для планшетов и десктопов
            margin: 'auto', // Центрирование на экране
            padding: '20px', // Добавлено отступов для красоты
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Box sx={{
                position: 'relative',
                marginTop: '-100px',
                borderRadius: '8px', // Пример добавления скругленных углов
                overflow: 'hidden' // Чтобы обрезать изображение по границам контейнера
            }}>
            <img src={afisha} alt="" width="100%" height="auto"/>
                <Typography sx={{ marginLeft: '15px', marginTop: '-60px' }}>Афиша</Typography>
            </Box>
            <Box sx={{
                marginTop: '40px',
                width: '100%', // Чтобы занимать всю ширину родительского контейнера
                maxWidth: '350px', // Максимальная ширина для планшетов и десктопов
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Пример добавления тени
                borderRadius: '8px', // Пример добавления скругленных углов
                padding: '20px' // Добавлено отступов для красоты
            }}>
                <Box sx={{ borderBottom: "1px solid black" }}>
                    <Typography sx={{ marginLeft: '270px' }}>Онлайн</Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center', alignItems: 'center' }}>
                    <Typography>Готовим вместе</Typography>
                    <Box>
                        <AccessAlarm fontSize="large" />
                        <Favorite fontSize="large" sx={{ color: 'red' }} />
                    </Box>

                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center', alignItems: 'center' }}>
                    <Typography>Йога</Typography>
                    <Box>
                        <AccessAlarm fontSize="large" />
                        <Favorite fontSize="large" />
                    </Box>

                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center', alignItems: 'center' }}>
                    <Typography>Как пробить стеснение</Typography>
                    <Box>
                        <AccessAlarm fontSize="large" />
                        <Favorite fontSize="large" />
                    </Box>

                </Box>
            </Box>
            <Box sx={{ marginTop: '20px', width: '350px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Box sx={{ borderBottom: "1px solid black" }}>
                    <Typography sx={{ marginLeft: '270px' }}>Офлайн</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px' }}>
                    <Box sx={{ display: 'flex', gap: '20px' }}>
                        <AccountCircle />
                        <Typography>Иван Орлов</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography>Прогулка в </Typography>
                            <Typography>парке 18:00 </Typography>
                        </Box>

                        <Chat />
                    </Box>

                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', gap: '20px' }}>
                        <AccountCircle />
                        <Typography>Павел Дуров</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography>Пообщаться</Typography>
                            <Typography>за ужином</Typography>
                        </Box>

                        <Chat />
                    </Box>

                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', gap: '20px' }}>
                        <AccountCircle />
                        <Typography>Сергей Карякин</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography>Сходить в </Typography>
                            <Typography>кино</Typography>
                        </Box>

                        <Chat />
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}
