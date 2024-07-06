import React from 'react';
import { Paper,  } from '@mui/material';
import { TextInput } from '../../components/input/TextInput';
import { MessageLeft, MessageRight } from '../../components/message/MessageCell';
import './main.module.css';



const question = {
  question: "What is the capital of France?",
  options: ["New York", "London", "Paris", "Dublin"],
  correct: 2
}

export  function MainPage() {
  const handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };
  
  return (
  <div className="container">
      <Paper square={false} className="paper" zDepth={2}
      sx = {{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        padding: '10px',
        overflow: 'hidden',
      }}>
        <Paper className="messagesBody">
          <MessageLeft
            message="Welcome to the quiz! Please provide an answer given the question.  This is a quick quiz to test your knowledge of world capitals."
            timestamp="MM/DD 00:00"
          />
          <MessageRight
            message="Hi this is is a test reply"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="まさりぶ"
            avatarDisp={true}
          />
          <MessageLeft
            message="Given this flag emoji 🇫🇷, what is the capital of France?"
            timestamp="MM/DD 00:00"
          />
          <MessageRight
            message="Paris"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="まさりぶ"
            avatarDisp={false}
          />
        </Paper>
        <TextInput />
      </Paper>
    </div>
  );
}