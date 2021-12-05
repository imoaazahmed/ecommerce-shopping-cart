import React from "react";
import { Flex, Box, Heading, Divider, Table, Thead, Tbody, Th, Tr } from "@chakra-ui/react";
import { CartItem } from "@screens/cart/cart-item";
import { CartItemType } from "src/__mocks__/types";
import { OrderSummary } from "@screens/cart/order-summary";
import DATA from "src/__mocks__/cart-data.json";
import { CartType } from "src/__mocks__/types";

export function CartScreen(): JSX.Element {
	const data = DATA as CartType;

	return (
		<Flex boxSize="100%">
			<Box py="5rem" px="7rem" flexGrow={1}>
				<Flex justify="space-between">
					<Heading color="#343a40">Shopping Cart</Heading>
					<Heading color="#343a40">{3} Items</Heading>
				</Flex>

				<Divider my="2rem" borderColor="#343a40" />

				<Table variant="unstyled">
					<Thead textTransform="uppercase" color="#495057">
						<Tr>
							<Th ps="0">product details</Th>
							<Th>quantity</Th>
							<Th>price</Th>
							<Th pe="0">total</Th>
						</Tr>
					</Thead>
					<Tbody>
						{data?.items?.map((item: CartItemType) => (
							<CartItem key={item?.id} cartItem={item} />
						))}
					</Tbody>
				</Table>
			</Box>

			<Box w="500px" py="5rem" px="4rem" bgColor="#dee2e6">
				<OrderSummary />
			</Box>
		</Flex>
	);
}
