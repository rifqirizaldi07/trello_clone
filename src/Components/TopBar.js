import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(2),
  },
  title: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: 'white',
    flexGrow: 1,
  },
}));

export default function TopBar() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Daily Task</Typography>
    </div>
  );
}
