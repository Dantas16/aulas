import * as React from 'react';
// import TextField from '@mui/material/TextField';

function Login() {
    return (
        <div className='login'>
            <h3>Login</h3>
            {/* <TextField id="outlined-basic" label="E-mail" variant="outlined" /> */}
            <input type="email" name="email" placeholder="E-mail" />
        </div>
    )
}

export default Login;