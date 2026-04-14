import styles from "./App.module.scss";
import Layout from "./layout/Layout";
import AppRoutes from "./router/AppRoutes";

const App = () => {
	return (
		<AppRoutes>
			<div className={styles.App}>
				<Layout />
			</div>
		</AppRoutes>
	);
};

export default App;
