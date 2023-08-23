/** @format */

import styled from "styled-components";

export const ShowProduct = styled.div`
	background: rgba(10, 7, 100, 1);
	width: 360px;
	height: 320px;
	color: #fafafa;
	.container-product-sw {
		display: flex;
		flex-direction: column;
	}
	.header-product-sw {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.header-product-sw h3 {
		font-size: 6vw;
		font-family: "Montserrat", sans-serif;
		font-weight: 700;
		margin: 10px 0;
	}
	.image-sw {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.footer-sw {
		display: flex;
		flex-direction: column;
	}
	.footer-sw h3 {
		font-size: 5.5vw;
		font-weight: 600;
		line-height: 20px;
		font-family: "Montserrat", sans-serif;
		margin: 15px 5px;
		text-align: center;
	}
	.footer-sw button {
		margin: 0 40px;
		padding: 5px;
		border-radius: 10px;
	}
	.footer-sw button a {
		font-size: 4vw;
		text-decoration: none;
		font-weight: 600;
		font-family: "Poppins", sans-serif;
	}
`;
