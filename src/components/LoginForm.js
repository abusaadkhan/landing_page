import React,{useState} from "react";

const LoginForm = () => {

    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	
	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('https://reqres.in/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()
		console.log('response of login form :',data)


	}

    return(
		<div id="formlogin" >
			<div className="wrapper">
			<h2>Welcome Back</h2>
			<p>Sub-title goes here</p>
			<form onSubmit={loginUser}>
				<input
					className="formInput"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input
					className="formInput"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input className="submit" type="submit" value="Login" /><br/>
				<div id="checkbox">
					<input type='checkbox' />
					<label > Remember Password</label>
				</div>
				<a id="forgot-password" href="#">Forgot Password ?</a>
			</form>
			</div>
		</div>
    )
}

export default LoginForm