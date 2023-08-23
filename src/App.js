/** @format */
import React, { useState } from "react";
import LogoComponents from "./assets/components/LogoComponents";
import "./assets/css/reset.css";
import {
	CarList,
	CenterHeader,
	Favoritos,
	Header,
	ShowLine,
} from "./assets/style";
import {
	AiOutlineSearch,
	AiOutlineShoppingCart,
	AiOutlineMenu,
} from "react-icons/ai";
import ShowComponents from "./assets/components/showline/ShowComponents";
import FavoritosComponents from "./assets/components/favoritosline/FavoritosComponents";

function App() {
	const [touchStartX, setTouchStartX] = useState(null);
	const [scrollLeft, setScrollLeft] = useState(0);

	const handleTouchStart = (e) => {
		setTouchStartX(e.touch[0].clientX);
	};
	const handleTouchMove = (e) => {
		if (touchStartX !== null) {
			const touchMoveX = e.touch[0].clientX;
			const scrollAmont = touchStartX - touchMoveX;
			setScrollLeft(scrollLeft + scrollAmont);
			setTouchStartX(touchMoveX);
		}
	};

	const handleTouchEnd = () => {
		setTouchStartX(null);
	};

	return (
		<div className='App'>
			<Header>
				<div className='container-header'>
					<LogoComponents />
					<CenterHeader>
						<div className='name'>
							<h3>Kah Candy lover</h3>
						</div>
						<div className='search'>
							<input placeholder='buscar...' type='search' />
							<AiOutlineSearch className='search-icon' size={25} />
						</div>
					</CenterHeader>
					<CarList>
						<AiOutlineMenu size={40} />
					</CarList>
				</div>
			</Header>
			{/* novidades */}
			<ShowLine>
				{/* <div className='header-show'>
					<h3>Novidades !</h3>
				</div> */}
				<div
					className='showScroll'
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}>
					<div className='container-show'>
						<ShowComponents />
					</div>
				</div>
			</ShowLine>
			{/* favoritos */}
			<Favoritos>
				<div className='container-favoritos'>
					<div className='header-favoritos'>
						<h3>Favoritos</h3>
					</div>
					<div className='container-box-favoritos'>
						<FavoritosComponents />
					</div>
				</div>
			</Favoritos>
		</div>
	);
}

export default App;
