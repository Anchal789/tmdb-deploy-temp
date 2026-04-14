import { Navigate, Route, Routes } from "react-router-dom";
import type { PropsWithChildren } from "react";
// import MoviesContent from "../pages/MainContent/Index";

const AppRoutes = ({ children }: PropsWithChildren) => {
	return (
		<>
			{children}
			<Routes>
				<Route path='/' element={<Navigate to='/movie' replace />} />
				<Route path='/movie'>
					<Route path='now-playing'/>
					<Route path='upcoming'/>
					<Route path='top-rated'/>
				</Route>
				<Route path='/tv'>
					<Route path='airing-today'/>
					<Route path='on-the-air'/>
					<Route path='top-rated'/>
				</Route>
			</Routes>
		</>
	);
};

export default AppRoutes;
