import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import { toast } from "react-toastify"
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector} from 'react-redux'
import { updateAuthId } from '../../../redux/dataSlice';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit">
        UoN Environmental Club
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)
  const history = useHistory("")
  const dispatch = useDispatch();
  const authId = useSelector((state) => state.authId);




  const login = (e)=> {
    e.preventDefault();
   setLoading(true)
    auth.signInWithEmailAndPassword(email,password)
    .then((auth) =>{
      setLoading(false)
      toast.success("Welcome Back!")
      history.push("/")
      window.location.reload();
    })
    .catch((e) =>{
            toast.error(e.message, {
              position: toast.POSITION.BOTTOM_CENTER
          })      
          setLoading(false)     
    })
}

  return (
<div id='bg'>
<div className="page-wraper">
<div id="loading-icon-bx" />
<div className="account-form">
  <div className="account-head" style={{backgroundImage: 'url(assets/images/background/bg2.jpg)'}}>
    <a href="/" style={{color:'#fff',fontSize:25}}><i>UoN Environmental Club</i></a>
  </div>
  <div className="account-form-inner">
    <div className="account-container">
      <div className="heading-bx left">
        <h2 className="title-head">Login to your <span>Account</span></h2>
        <p>Don't have an account? <a href="/memberships">Create one here</a></p>
      </div>	
      <form className="contact-bx">
        <div className="row placeani">
          <div className="col-lg-12">
            <div className="form-group">
              <div className="input-group">
                <label>Your Email</label>
                <input
                value={email} onChange={e => setEmail(e.target.value)}

                name="dzName" type="text" required className="form-control" />
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <div className="input-group"> 
                <label>Your Password</label>
                <input
                value={password} onChange={e => setPassword(e.target.value)}
                name="dzEmail" type="password" className="form-control" required />
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group form-forget">

              <a href="" className="ml-auto">Forgot Password?</a>
            </div>
          </div>
          <div className="col-lg-12 m-b30">
            <button name="submit" onClick={login} className="btn button-md">
            {loading === true ?(
              <span><span style={{color:'#fff'}}>signing in...<CircularProgress style={{color:'#fff',height:25,width:25}}/></span></span>
            ):(
              <span>Sign In</span>
            )}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
</div>
  );
}