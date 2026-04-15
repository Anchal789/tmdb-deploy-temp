import styles from "./App.module.scss";
import AppRoutes from "./router/AppRoutes";

const App = () => {
	return (
		<div className={styles.App}>
			<AppRoutes />
		</div>
	);
};

export default App;
