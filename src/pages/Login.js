import PropTypes from 'prop-types';
import {signInWithGoogle, signInWithGoogle2} from '../Firebase'


export default function Login({ setToken }) {    
  const handleSubmit = e => {
    signInWithGoogle2()
        .then((result)=>{
            console.log(result);
            const namegoog = result.user.displayName
            const emailgoog = result.user.email
            const pictgoog = result.user.photoURL
            localStorage.setItem('token', namegoog);
            localStorage.setItem('emtoken', emailgoog);
            localStorage.setItem('phtoken', pictgoog);
            setToken(namegoog);
        }).catch((error)=>{
            console.log(error);
        });
  }

  return(
    <div className="login-page">
    <div className="login-box">
    <div className="login-logo">
       <b>Office</b>
    </div>
    {/* /.login-logo */}
    <div className="card">
        <div className="card-body login-card-body">
        <p className="login-box-msg">Sign in to start your session</p>
        <div className="social-auth-links text-center mb-3">
            <button onClick={handleSubmit} className="btn btn-block btn-danger">
            <i className="fab fa-google-plus mr-2" /> Sign in using Google
            </button>
        </div>
        </div>
        {/* /.login-card-body */}
    </div>
    </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};