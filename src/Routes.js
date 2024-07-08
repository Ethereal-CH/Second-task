import { BrowserRouter as Router, Route , Routes} from "react-router-dom"
import { HomePage } from "../src/components/home/home"
import { CartPage } from "../src/components/cart/cart"


export const RoutePage = () => {
    return(
        <Router>
            <Routes>
                <Route path="/"  element={<HomePage />}>
                </Route>
                <Route path="/cart" element={<CartPage />}>
                </Route>
               
            </Routes>
        </Router>
    )
}