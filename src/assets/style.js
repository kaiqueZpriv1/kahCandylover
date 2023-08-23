/** @format */

import styled from "styled-components";

export const Header = styled.header`
	background: #ffe5e5;
	width: 100%;
	.container-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;
export const Logo = styled.div`
	.image-logo {
		width: 80px;
	}
`;
export const CenterHeader = styled.div`
	display: flex;
	flex-direction: column;
	.name h3 {
		font-size: 6vw;
		font-family: "Montserrat", sans-serif;
		color: rgb(20, 17, 120);
	}
	.search {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.search input {
		padding: 5px;
		border-radius: 20px;
		text-align: center;
		border: 1px solid rgb(20, 17, 120);
	}
	.search-icon {
		position: relative;
		right: 30px;
		color: rgb(20, 17, 120);
	}
`;
export const CarList = styled.div`
	margin-right: 10px;
	color: rgb(20, 17, 120);
`;

export const ShowLine = styled.div`
	background: rgba(200, 200, 200, 1);
	.header-show {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 25px;
	}
	.header-show h3 {
		font-size: 8vw;
		font-weight: 800;
		font-family: "Montserrat", sans-serif;
		color: rgba(20, 17, 120, 1);
	}
	.showScroll {
		width: 100%;
		display: flex;
		overflow-x: auto;
	}
	.container-show {
		display: flex;
	}
`;

// favoritos
export const Favoritos = styled.div`
	width: 100%;
	margin: 30px 0;
	.container-favoritos {
		display: flex;
		flex-direction: column;
	}
	.header-favoritos {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin: 20px 0;
	}
	.header-favoritos h3 {
		font-size: 8vw;
		color: rgba(20, 17, 120, 1);
		font-family: "Montserrat", sans-serif;
	}
	.container-box-favoritos {
		margin: 20px 0;
		display: grid;
		grid-template-columns: 150px 150px;
		gap: 30px 15px;
		justify-self: center;
		align-self: center;
	}
`;
