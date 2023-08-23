/** @format */

import { product } from "../ProductComponents";
import { ShowProduct } from "./ShowStyle";

function ShowComponents() {
	return product.map((products) => (
		<ShowProduct key={products.id} style={{ background: products.background }}>
			<div className='container-product-sw'>
				<div className='header-product-sw'>
					<h3>{products.produto}</h3>
				</div>
				<div className='image-sw'>
					<img src={products.image} alt={products.sabor} />
				</div>
				<div className='footer-sw'>
					<h3>{products.descricao}</h3>
					{/* <span>{products.valor}</span> */}
					<button>
						<a href='...'>Confira</a>
					</button>
				</div>
			</div>
		</ShowProduct>
	));
}
export default ShowComponents;
