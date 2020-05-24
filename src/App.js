import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './App.styled';


function App() {

  const classes = useStyles();

  return (
    <div className="App">
      <Button className={classes.root}>Button</Button>
    </div>
  )
}

export default App;
