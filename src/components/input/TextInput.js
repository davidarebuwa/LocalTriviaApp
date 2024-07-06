import React from 'react'
import TextField from '@mui/material/TextField';
import { styled } from "@mui/material/styles";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import './TextInput.css';


export const TextInput = () => {
    return (
        <>
            <form className="wrapForm"  noValidate autoComplete="off">
            <TextField
                id="standard-text"
                label="Enter your messages here"
                className="wrapText"
            />
            <Button variant="contained" color="primary"
            sx={{
                height: '100%',
                width: '10%',
                marginRight: '10px',
                marginTop: '10px',
            }}
            >
                <SendIcon />
            </Button>
            </form>
        </>
    )
}



