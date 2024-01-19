import { Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import SendIcon from '@mui/icons-material/Send';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Fingerprint from '@mui/icons-material/Fingerprint';

const MaterialIcons = () => {
    return (
        <>
            <div dir='ltr' >
                <Stack direction="row" gap={2} sx={{ width: "90vw", margin: "0 auto", }} >
                    <Stack alignItems="center">
                        <Typography variant='body1'>common</Typography>
                        <DeleteIcon sx={{ fontSize: 50, color: "warning.main" }} />
                    </Stack>
                    <Stack alignItems="center">
                        <Typography variant='body1'>Outlined</Typography>
                        <DeleteOutlinedIcon sx={{ fontSize: 50, color: "warning.main" }} />
                    </Stack>
                    <Stack alignItems="center">
                        <Typography variant='body1'>Rounded</Typography>
                        <DeleteRoundedIcon sx={{ fontSize: 50, color: "warning.main" }} />
                    </Stack>
                    <Stack alignItems="center">
                        <Typography variant='body1'>TwoTone</Typography>
                        <DeleteTwoToneIcon sx={{ fontSize: 50, color: "warning.main" }} />
                    </Stack>
                    <Stack alignItems="center">
                        <Typography variant='body1'>Sharp</Typography>
                        <DeleteSharpIcon sx={{ fontSize: 50, color: "warning.main" }} />
                    </Stack>
                    <Stack alignItems="center">
                        <Typography variant='body1'>SendIcon</Typography>
                        <SendIcon sx={{ fontSize: 50, color: "primary.main" }} />
                    </Stack>
                    <Stack alignItems="center">
                        <Typography variant='body1'>AlarmIcon</Typography>
                        <AlarmIcon sx={{ fontSize: 50, color: "success.main" }} />
                    </Stack>
                    <Stack alignItems="center">
                        <Typography variant='body1'>AddShoppingCart</Typography>
                        <AddShoppingCartIcon sx={{ fontSize: 50, color: "secondary.main" }} />
                    </Stack>
                    <Stack alignItems="center">
                        <Typography variant='body1'>Fingerprint</Typography>
                        <Fingerprint sx={{ fontSize: 50, color: "success.main" }} />
                    </Stack>
                  
                    
                    
                    
                   

                </Stack>
            </div>

        </>
    );
}

export default MaterialIcons;
