import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {

    const navigate = useNavigate();
    
    const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
    };

    return (
        <div className="Login">
            <div className="box">
                <h1>Login</h1>
                <form action="" onSubmit={handleLogin}>
                    <label>Email :</label> <br />
                    <input type="email" placeholder='Enter Your Email...' required /> <br />
                    <label>Password :</label> <br />
                    <input type="password" placeholder='Enter Your Password...' required /><br />
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login