/** @format */

import React from "react";
import { Logo } from "../style";
import logo from "../image/logo_candylover.png";
function LogoComponents() {
	return (
		<Logo>
			<img className='image-logo' src={logo} alt='logo' />
		</Logo>
	);
}
export default LogoComponents;
