import AddAvatar from '../img/addAvatar.png'


export const Register = () => {
    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className='logo'>Chat</span>
                <span className='title'>Register</span>

                <form>
                    <input type="text" placeholder='Nickname'/>
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password'/>

                    <label htmlFor="file">
                        <img src={AddAvatar} alt="Add file image"/>
                        <span>Add an avatar</span>
                    </label>
                    <input style={{display: "none"}} type="file" id='file'/>

                    <button>Sign up</button>
                </form>

                <p>You do have an account? Login</p>
            </div>
        </div>
    )
}