import React from 'react'
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import './TextInput.css';


export const TextInput = () => {
    return (
        <>
            <form className="wrapForm"  noValidate autoComplete="off">
            <TextField
                id="standard-text"
                label="Enter your answers here"
                className="wrapText"
            />
            <Button variant="contained" color="primary"
            sx={{
                height: '100%',
                width: '5%',
                margin: '20px',
                marginTop: '10px',
            }}
            >
                <SendIcon />
            </Button>
            </form>
        </>
    )
}



