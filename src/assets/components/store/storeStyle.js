/** @format */

import styled from "styled-components";

export const StoreBox = styled.div`
	width: 180px;
	height: 210px;
	.container-store {
		display: flex;
		flex-direction: column;
	}
	.image-store img {
		width: 140px;
	}
	.container-text {
		text-align: center;
	}
	.container-text h3 {
		font-size: 4.5vw;
		color: rgb(20, 17, 120);
		font-weight: 500;
		font-family: "Montserrat", sans-serif;
	}
	.container-text span {
		font-size: 3.5vw;
		color: rgb(20, 17, 120);
		font-family: "Poppins", sans-serif;
	}
`;
