/** @format */

import { product } from "../ProductComponents";
import { StoreBox } from "./storeStyle";
function StoreComponents() {
	return product.map((store) => (
		<StoreBox key={store.id}>
			<div className='container-store'>
				<div className='image-store'>
					<a href='...'>
						<img src={store.image} alt={store.produto} />
					</a>
				</div>
				<div className='container-text'>
					<h3>{store.produto}</h3>
					<span>{store.valor}</span>
				</div>
			</div>
		</StoreBox>
	));
}
export default StoreComponents;
