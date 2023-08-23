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
	Sobre,
} from "./assets/style";
import {
	AiOutlineSearch,
	AiOutlineShoppingCart,
	AiOutlineMenu,
} from "react-icons/ai";
import ShowComponents from "./assets/components/showline/ShowComponents";
import FavoritosComponents from "./assets/components/favoritosline/FavoritosComponents";
import Line from "./assets/components/lineComponent/Line";

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
						<Line />
					</div>
					<div className='container-box-favoritos'>
						<FavoritosComponents />
					</div>
				</div>
			</Favoritos>
			<Sobre>
				<div className='container-sobre'>
					<div className='title-box-sobre'>
						<h3 className='title-sobre'>Kah Candy Lover</h3>
						<Line />
					</div>
					<p className='paragrafo-sobre'>
						Fundada em 2023 por Kamylle Dos Santos, a Kah Candy Lover surge com
						o objetivo de acrescentar mais sabor à vida das pessoas. <br />{" "}
						Iniciando suas atividades durante a Páscoa, a empresa lançou-se no
						mercado oferecendo ovos recheados e caixas de brigadeiro. Com o
						tempo, expandiu sua linha de produtos para incluir trufas e cones
						trufados, que rapidamente se tornaram os favoritos entre os
						consumidores. <br /> Além disso, a Kah Candy Lover atende a demandas
						maiores, aceitando encomendas para festas, aniversários e ocasiões
						comemorativas. Seu catálogo abrange uma ampla variedade de produtos,
						como bolos, tortas, cones trufados, trufas e ovos recheados.
					</p>
				</div>
			</Sobre>
		</div>
	);
}

export default App;
