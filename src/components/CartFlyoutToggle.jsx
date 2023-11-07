import { useStore } from '@nanostores/react';
import { isCartOpen } from './cartStore.jsx';

export default function CartFlyoutToggle() {
	const $isCartOpen = useStore(isCartOpen);
	return <button onClick={() => isCartOpen.set(!$isCartOpen)}>Cart</button>;
}
