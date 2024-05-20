import { incremented } from "@/lib/features/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useRouter } from "next/navigation";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.cartHook);
  const router = useRouter();
  return (
    <nav className="main-navbar">
      <div className="logo">
        {/* Your logo or website name */}
        App Name
      </div>
      <div
        className="cart-icon cursor-pointer"
        onClick={() => router.push("/cartPage")}
      >
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="cart-items">{state.cartItems.length}</span>
      </div>
    </nav>
  );
};
export default Navbar;
