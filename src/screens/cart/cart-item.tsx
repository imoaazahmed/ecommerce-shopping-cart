import { Tr, Td, Flex, Box, Text, Button, Stack, Input } from "@chakra-ui/react";
import { Image } from "@elements";
import React from "react";
import { CartItemType, CartType } from "src/__mocks__/types";
import DATA from "src/__mocks__/cart-data.json";

interface ProductDetailsProps {
	id: string;
	image: string;
	name: string;
	category: string;
}

const ProductDetails = (props: ProductDetailsProps): JSX.Element => {
	const { id, image, name, category } = props;

	const onDelete = () => {
		// Dispatch remove cart item by item ID
	};

	return (
		<Flex>
			<Box me="1rem" boxSize="75px">
				<Image src={image} width="75px" height="75px" />
			</Box>
			<Stack spacing=".5rem" align="start">
				<Text fontWeight="bold">{name}</Text>
				<Text color="#495057" fontSize="sm">
					{category}
				</Text>
				<Button size="sm" colorScheme="pink" variant="link" onClick={onDelete}>
					Remove
				</Button>
			</Stack>
		</Flex>
	);
};

interface QuantityProps {
	id: string;
	quantity: number;
}

const Quantity = ({ id, quantity }: QuantityProps): JSX.Element => {
	const onDecrement = () => {
		const newQty = quantity - 1;
		if (newQty === 0) return;
		// Dispatch update quantity by ID and qty
	};

	const onIncrement = () => {
		const newQty = quantity + 1;
		if (newQty === 101) return;
		// Dispatch update quantity by ID and qty
	};

	const onChange = (e: React.FormEvent<HTMLInputElement>) => {
		const newQty = Number(e.currentTarget.value);
		if (newQty >= 100) return; // Dispatch update quantity by ID and qty = 100 as max qty
		// Dispatch update quantity by ID and qty
	};

	return (
		<Stack isInline>
			<Button onClick={onDecrement}>-</Button>
			<Input type="number" value={quantity} maxW="100px" textAlign="center" onChange={onChange} />
			<Button onClick={onIncrement}>+</Button>
		</Stack>
	);
};

interface PriceProps {
	currency: string;
	price: number;
}

const Price = ({ currency, price }: PriceProps): JSX.Element => {
	return (
		<Text fontWeight="bold">
			{currency} {price}
		</Text>
	);
};

interface TotalProps {
	currency: string;
	total: number;
}

const Total = ({ currency, total }: TotalProps): JSX.Element => {
	return (
		<Text fontWeight="bold">
			{currency} {total}
		</Text>
	);
};

interface CartItemProps {
	cartItem: CartItemType;
}

export function CartItem({ cartItem }: CartItemProps): JSX.Element {
	const data = DATA as CartType;
	const orderSummary = data.orderSummary;

	return (
		<Tr verticalAlign="top">
			<Td ps="0">
				<ProductDetails id={cartItem.id} image={cartItem.image} name={cartItem.name} category={cartItem.category} />
			</Td>

			<Td>
				<Quantity id={cartItem.id} quantity={cartItem.quantity} />
			</Td>

			<Td>
				<Price currency={orderSummary?.currency} price={cartItem.price} />
			</Td>

			<Td pe="0">
				<Total currency={orderSummary?.currency} total={cartItem.totalPrice} />
			</Td>
		</Tr>
	);
}
