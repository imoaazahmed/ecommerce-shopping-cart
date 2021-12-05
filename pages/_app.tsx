import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

// Redux
import store from "../src/redux/store";
import { Provider } from "react-redux";

function MyApp(props: AppProps): JSX.Element {
	const { Component, pageProps } = props;

	return (
		<ChakraProvider>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</ChakraProvider>
	);
}

export default MyApp;
