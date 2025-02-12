import { useNavigate } from 'react-router-dom';
import './Signup.css'

const Signup = () => {

    const navigate = useNavigate();
    
    const handleRegister = (e) => {
    e.preventDefault();
    navigate("/login");
    };

    return (
        <div className='Signup'>
            <div className="box">
                <h1>Signup</h1>
                <form action="" onSubmit={handleRegister}>
                    <label>Name :</label> <br />
                    <input type="text" placeholder='Enter Your Name...' required /> <br />
                    <label>Email :</label> <br />
                    <input type="email" placeholder='Enter Your Email...' required /> <br />
                    <label>Password :</label> <br />
                    <input type="password" placeholder='Enter Your Password...' required /><br />
                    <label>Conform Password :</label> <br />
                    <input type="password" placeholder='Enter Your Password again...' required /><br />
                    <button type='submit'>Signup</button>
                </form>
            </div>
        </div>
    )
}

export default Signup