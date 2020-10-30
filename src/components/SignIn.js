export default function SignIn(){

    return(
            <form action="" class="form-container">
                <h2>Login : Artsy </h2>
                <div class="contents">
                    <label for="user">
                        username:
                    </label>
                    <input type="text">
                    <label for="pass">
                        password:
                    </label>
                    <input type="text">
                    <button class="btn">Login</button>
                </div>
                <p>Dont have an account?</p><a href="#">Register here</a>
            </form>
    )
}

