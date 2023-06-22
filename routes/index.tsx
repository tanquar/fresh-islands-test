import { useSignal } from "@preact/signals";
import Header from "../islands/Header.tsx";
import AddToCart from "../islands/AddToCart.tsx";

export default function Page() {
  const cart = useSignal<string[]>([]);
  return (
    <div>
      <Header cart={cart} />
      <div>
        <h1>Lemon</h1>
        <p>A very fresh fruit.</p>
        <AddToCart cart={cart} id="lemon" />
      </div>
    </div>
  );
}
