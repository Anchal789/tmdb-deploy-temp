import { Outlet } from "react-router";
import Header from "../pages/Header/Header";

const Layout= () => {
	return (
		<>
			<Header />
			<Outlet />
			{/* <Footer /> */}
		</>
	);
};
 
export default Layout