import { isCartOpen, addCartItem } from './cartStore.jsx';

export default function AddToCartForm({ item, children }) {
	function addToCart(e) {
		e.preventDefault();
		isCartOpen.set(true);
		addCartItem(item);
	}

	return <form onSubmit={addToCart}>{children}</form>;
}
