import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [ username, setUsername ] = useState("");
	const [ password, setPassword ] = useState("");

	const {loading, login} = useLogin();

	const handleSubmit = async (e) =>{
		e.preventDefault();
		await login(username, password);
	}
	return (
		<div className='h-screen flex flex-col items-center justify-center min-w-full mx-auto'>
			<div className=' custom:w-1/3 p-6  rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 '>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Login
					<span className='text-blue-500'> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						{/* userName */}
						<label className='label p-2'>
							<span className='text-base label-text text-slate-200'>Username</span>
						</label>
						<input 
						type='text' 
						placeholder='Enter username' 
						className='w-full input input-bordered h-10 placeholder-opacity-50 placeholder-slate-400'
						value={username}
						onChange={(e)=> setUsername(e.target.value)}
						/>
					</div>
						{/* Password */}
					<div>
						<label className='label'>
							<span className='text-base label-text text-slate-200'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10 placeholder-opacity-50 placeholder-slate-400'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<Link to='/signup' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block '>
						{"Don't"} have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2' disabled={loading}>
							{
								loading ? <span className="loading loading-spinner"/> : "Login"
							}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;
 