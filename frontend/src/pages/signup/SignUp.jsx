import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
const SignUp = () => {

	const [ inputs, setInputs ] = useState({
		fullName : "",
		username : "", 
		password : "",
		confirmPassword : "",
		gender : ""
	});
	
	const { loading, signup } = useSignup()

	const handleCheckboxChange = (gender) =>{
		setInputs({...inputs, gender})
	}
	
	const handleSubmit = async(e) =>{
		e.preventDefault();
		await signup(inputs)
	}


	// const [inputs, setInputs ] = useState;
	// const [inputs, setInputs ] = useState;
	return (
		<div  className='h-screen flex flex-col items-center justify-center w-screen mx-auto'>
			<div className='custom:w-1/3 p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500'> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text text-slate-200'>Full Name</span>
						</label>
						<input 
						value={inputs.fullName}
						onChange={(e)=> {
							setInputs({...inputs, fullName : e.target.value})
						}}
						type='text' 
						placeholder='John Doe' 
						className='w-full input input-bordered h-10 placeholder-opacity-50 placeholder-slate-400'
						/>
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text text-slate-200'>Username</span>
						</label>
						<input
							value={inputs.username}
							onChange={(e) => setInputs({...inputs, username : e.target.value})}
							type='text' 
							placeholder='johndoe' 
							className='w-full input input-bordered h-10 placeholder-opacity-50 placeholder-slate-400' />
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-slate-200'>Password</span>
						</label>
						<input
							value={inputs.password}
							onChange={(e) => setInputs({...inputs, password : e.target.value})}
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10  placeholder-opacity-50 placeholder-slate-400'
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-slate-200'>Confirm Password</span>
						</label>
						<input
							value={inputs.confirmPassword}
							onChange={(e)=>setInputs({...inputs, confirmPassword : e.target.value})}
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10  placeholder-opacity-50 placeholder-slate-400'
						/>
					</div>

					<GenderCheckbox onCheckBoxChange = {handleCheckboxChange} selectedGender = {inputs.gender} />

					<Link className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' to='/login'>
						Already have an account?
					</Link> 

					<div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{
								loading ? <span className="loading loading-spinner"></span> : "Sign Up"
							}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;
