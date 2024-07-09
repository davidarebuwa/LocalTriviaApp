import React from 'react';
import { Button, Paper  } from '@mui/material';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import classes from './score.module.css';

 function CircularWithValueLabel(props) {
  return (
    <div className="container"
  sx = {{
    overflow: 'hidden',
  }}
  >
      <Paper square={false} className="paper" elevation={0}
      sx = {{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',
        height: '100%',
        padding: '10px',
        overflow: 'hidden',
      }}>
        <div className="heading">
          <h1>Flag Quiz</h1>
        </div>
        <Paper className="scoresBody" elevation={0}>
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" 
      sx={{
        color: 'green',
        width: '80%',
        height: '80%',
        margin: '10px',
      }}
            {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
          
        </Paper>
        <Typography variant="h6"
        sx={{
          marginTop: '20px',
        }}
         component="div" color="text.secondary">
          You got 4 out of 5 questions correct!
        </Typography>
        <Button variant="contained" color="primary" href="/home"
        sx={{
          marginTop: '20px',
        }}
        >
          Play Again
        </Button>
      </Paper>
    </div>
  );
}

CircularWithValueLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export  function ScorePage() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularWithValueLabel value={progress} />;
}