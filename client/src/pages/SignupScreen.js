function SignupScreen() {
    return (
        <div class="signup">

         <h3 class="signup_heading"> SignUp </h3>
        

         <form action="">

            <div class="signup_inputs">
               <div class="signup_inputs">
                <label>name</label>
                <input type="text" placeholder="enter your name" />
            </div>
            <div class="signup_inputs">
                <label> Email</label>
                <input type="email" placeholder="enter your email" />
            </div>
            <div class="signup_inputs">
                <label> password</label>
                <input type="password" placeholder="password" />
            </div>
        </div>
        

        <input type="submit" value="order now" class="btn"/>

    </form>

</div>
    )
}

export default SignupScreen
