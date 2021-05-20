import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    filed:{
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    },

    form:{
        maxWidth:1000,
        margin: '100px  auto'
    }
})

const AdminAddUser = () => {
    const classes = useStyles();

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log('emad')
    }
 
  return (
    <div >
        <form noValidate className={classes.form} onSubmit={handleSubmit}>
            <Typography>
                Use This form to Add new user
            </Typography>
            <TextField name='username' className={classes.filed} color='primary' variant='outlined' label='username' fullWidth/>
            <TextField className={classes.filed} variant='outlined' label='email' fullWidth required/>
            <TextField className={classes.filed} variant='outlined' label='password' fullWidth required/>
            <TextField className={classes.filed} variant='outlined' label='confirm password' fullWidth required/>
            <Button type='submit'  variant='contained' color='secondary'>Add user</Button>
        </form>
    </div>
  );
};

export default AdminAddUser;
