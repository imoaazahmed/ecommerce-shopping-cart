import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp(props: AppProps): JSX.Element {
	const { Component, pageProps } = props;

	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
