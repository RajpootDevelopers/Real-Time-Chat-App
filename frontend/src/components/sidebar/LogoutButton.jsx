import { BiLogOut } from "react-icons/bi";

import React from 'react'
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const {loading, logout}= useLogout();
  return (
	<div className="mt-auto text-white cursor-pointer">
		{
			loading ? (
				<span className="loading loading-spinner"></span>
			) : (
				
				<BiLogOut onClick={logout}/>
			)
		}

	</div>
  )
}

export default LogoutButton

