import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Preencher"
                    defaultValue="Titulo"
                />

                <TextField
                    required
                    id="outlined-required"
                    label="S00E00"
                    defaultValue="Temporada/Episódio"
                />
                <TextField
                    required
                    id="outlined-required"
                    defaultValue="Genero"

                />

                
                <TextField
                    id="outlined-number"
                    label="DATA"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="outlined-number"
                    label="Nota"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

            </div>
        </Box>
    );
}