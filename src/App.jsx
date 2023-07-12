import { Routing } from "./routes/Routing.routes";
import { CartProvider } from "./context/Cart/CartProvider";
import "./index.scss";

function App() {
  return (
    <CartProvider>
      <Routing />
    </CartProvider>
  );
}

export default App;
