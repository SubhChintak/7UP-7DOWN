import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ option, setOption }) {
    const handleChange = (event) => {
        setOption(event.target.value);
    };

    return (
        <Box sx={{ maxWidth:120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Option</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={option}
                    label="Option"
                    onChange={handleChange}
                >
                    <MenuItem value={'Below 7'}>Below 7</MenuItem>
                    <MenuItem value={'Lucky 7'}>Lucky 7</MenuItem>
                    <MenuItem value={'Above 7'}>Above 7</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
