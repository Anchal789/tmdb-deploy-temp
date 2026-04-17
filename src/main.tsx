import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { FilterProvider } from "./store/store.tsx";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

const theme = createTheme({
	typography: {
		fontFamily: '"Source Sans Pro", Arial, sans-serif',
	},
});

createRoot(document.getElementById("root") ?? document.body).render(
	<StrictMode>
		<BrowserRouter>
			<FilterProvider>
				<QueryClientProvider client={queryClient}>
					<ThemeProvider theme={theme}>
						<App />
					</ThemeProvider>
				</QueryClientProvider>
			</FilterProvider>
		</BrowserRouter>
	</StrictMode>,
);
