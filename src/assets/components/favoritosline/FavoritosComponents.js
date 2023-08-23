/** @format */

import { favoritos } from "./ListFavoritos";
import { Favoritos } from "./styleFavoritos.js";

function FavoritosComponents() {
	return favoritos.map((fav) => (
		<Favoritos key={fav.id}>
			<a href='...' className='image-favoritos'>
				<img src={fav.image} alt={fav.produto} />
			</a>
			<div className='footer-favoritos'>
				<h3>{fav.produto}</h3>
				<span>{fav.valor}</span>
			</div>
		</Favoritos>
	));
}
export default FavoritosComponents;
