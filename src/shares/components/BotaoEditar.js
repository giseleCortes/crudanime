import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CreateIcon from '@mui/icons-material/Create';

export default function IconButtonSizes() {
    return (
        <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton aria-label="editar" size="large">
                <CreateIcon />
            </IconButton>
        </Stack>
    );
}