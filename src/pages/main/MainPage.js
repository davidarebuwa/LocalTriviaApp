import React from "react";
import { Paper } from "@mui/material";
import { TextInput } from "../../components/input/TextInput";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import {
  MessageLeft,
  MessageRight,
} from "../../components/message/MessageCell";
import "./main.module.css";
import questions from "../../core/questions.json";


export function MainPage() {
  const [messageQueue, setMessageQueue] = React.useState([]);
  const [currentMessage, setCurrentMessage] = React.useState("");
  const [name, setName] = React.useState(() => {
    const savedFirstName = localStorage.getItem("firstName");
    const savedLastName = localStorage.getItem("lastName");
    const initialValue = JSON.parse(savedFirstName) + JSON.parse(savedLastName);
    return initialValue || "quizzer";
  });
  const introMessage = `Welcome to the quiz ${name}! Please provide an answer given the question.  This is a quick 5 qs quiz to test your knowledge of world flags.`;
  const introQuestion = `In this game you will be given a flag emoji and you will have to provide the country that the flag represents.
  For example, given this flag emoji 🇩🇪, what is the country?`;
  const correctMessage = "Correct! Lets move on to the next question.";
  const incorrectMessage = "Incorrect! Lets move on to the next question.";

  const handleSendMessage = (message) => {
    setMessageQueue([...messageQueue, message]);
  };

  const handleCurrentMessageChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage(currentMessage);
      setCurrentMessage("");
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSendMessage(currentMessage);
    setCurrentMessage("");
  }

  return (
    <div
      className="container"
      sx={{
        overflow: "hidden",
      }}
    >
      <Paper
        square={false}
        className="paper"
        elevation={0}
        sx={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          width: "80%",
          height: "100%",
          padding: "10px",
          overflow: "hidden",
        }}
      >
        <div className="heading">
          <h1>Flag Quiz</h1>
        </div>
        <Paper className="messagesBody">
          {messageQueue.length === 0 && (
            <>
              <MessageLeft message={introMessage} timestamp="MM/DD 00:00" />
              <MessageLeft message={introQuestion} timestamp="MM/DD 00:00" />
            </>
          )}
          {messageQueue.map((message, index) => {
            <>
              <MessageRight
                message="Hi this is is a test reply of how a very long answer would look like"
                timestamp="MM/DD 00:00"
                photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                avatarDisp={true}
              />
              
              <MessageRight
                message={message}
                timestamp="MM/DD 00:00"
                photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                avatarDisp={false}
              />
            </>;
          })}
        </Paper>
      </Paper>
      <Paper
        className="inputBody"
        sx={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          height: "80%",
          padding: "10px",
          margin: "10px",
          overflow: "hidden",
        }}
      >
        <form className="wrapForm"  noValidate
        onSubmit={onSubmit}
         autoComplete="off">
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
      </Paper>
    </div>
  );
}
