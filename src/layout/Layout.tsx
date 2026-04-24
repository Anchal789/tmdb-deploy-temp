import { Outlet } from "react-router";
import Header from "../pages/Header/Header";
import Footer from "../pages/Footer/Footer";

const Layout= () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};
 
export default Layout