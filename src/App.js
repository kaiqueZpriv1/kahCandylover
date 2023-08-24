/** @format */
import React, { useState } from "react";
import LogoComponents from "./assets/components/LogoComponents";
import "./assets/css/reset.css";
import {
	CenterHeader,
	Favoritos,
	Header,
	MenuBurger,
	ShowLine,
	Sobre,
	Store,
} from "./assets/style";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ShowComponents from "./assets/components/showline/ShowComponents";
import FavoritosComponents from "./assets/components/favoritosline/FavoritosComponents";
import Line from "./assets/components/lineComponent/Line";
import StoreComponents from "./assets/components/store/StoreComponents";

function App() {
	const [touchStartX, setTouchStartX] = useState(null);
	const [scrollLeft, setScrollLeft] = useState(0);

	const handleTouchStart = (e) => {
		setTouchStartX(e.touches[0].clientX);
	};
	const handleTouchMove = (e) => {
		if (touchStartX !== null) {
			const touchMoveX = e.touches[0].clientX;
			const scrollAmount = touchStartX - touchMoveX;
			setScrollLeft(scrollLeft + scrollAmount);
			setTouchStartX(touchMoveX);
		}
	};

	const handleTouchEnd = () => {
		setTouchStartX(null);
	};
	const [menuOpen, setMenuOpen] = useState(false);
	const handleMenuToggle = () => {
		setMenuOpen((prevState) => !prevState);
	};
	const handleLinkMenu = () => {
		setMenuOpen(false);
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
					<div className='burger'>
						<button onClick={handleMenuToggle}>
							{menuOpen ? (
								<AiOutlineClose size={40} color='rgba(20, 17, 120)' />
							) : (
								<AiOutlineMenu size={40} color='rgba(20, 17, 120)' />
							)}
						</button>
					</div>
					<div className='menu' style={{ width: menuOpen ? "100%" : "0" }}>
						<div className='container-menu'>
							<a onClick={handleLinkMenu} href='...' className='linkMenu'>
								inicio
							</a>
							<a onClick={handleLinkMenu} href='...' className='linkMenu'>
								inicio
							</a>
							<a onClick={handleLinkMenu} href='...' className='linkMenu'>
								inicio
							</a>
							<a onClick={handleLinkMenu} href='...' className='linkMenu'>
								inicio
							</a>
						</div>
					</div>
				</div>
			</Header>
			{/* novidades */}
			<ShowLine>
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
			<Store>
				<div
					className='scroll-store'
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}>
					<div className='container-store'>
						<StoreComponents />
					</div>
				</div>
			</Store>
		</div>
	);
}

export default App;
