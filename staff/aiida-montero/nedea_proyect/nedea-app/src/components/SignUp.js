import './SignUp.scss'

function SignUp({ onSignUp }) {
    return <section className="sign-up">
        <h2 >Sign Up</h2>
       <div className = "register">
    
        <form className = "register_form" onSubmit={event => {
            event.preventDefault()

            const { target: { fullname: { value: fullname }, email: { value: email }, password: { value: password } } } = event

            onSignUp(fullname, email, password)
        }}>
          <p class="register-text">
    <span class="fas fa-user-graduate fa-5x ">
    </span>
  </p>
  <input type="text" name= "fullname" class="register-fullname"  placeholder="Fullname" />
  <input type="email" name= "email" class="register-username"  placeholder="Email" />
  <input type="password" name= "password" class="register-password" placeholder="Password" />
  <input type="submit" name="Register" value="register" class="register-submit" />
        </form>
        </div>
    </section>
}
export default SignUp