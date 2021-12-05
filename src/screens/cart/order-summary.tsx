import { Heading, Divider, Flex, Text, Stack, Box, BoxProps, Select, Input, Button } from '@chakra-ui/react';
import { useAppSelector } from '@redux/hooks';

interface InputContainerProps extends BoxProps {
  title: string;
}

const InputContainer = ({ title, children }: InputContainerProps): JSX.Element => {
  return (
    <Box>
      <Text color='#495057' textTransform='uppercase' fontWeight='bold' mb='1rem'>
        {title}
      </Text>
      {children}
    </Box>
  );
};

export function OrderSummary(): JSX.Element {
  const orderSummary = useAppSelector((state) => state.cart?.data?.orderSummary);
  const { totalPrice, totalCost, currency, count, shippingCost } = orderSummary ?? {};

  return (
    <Stack spacing='3rem'>
      <Box>
        <Heading color='#343a40' mb='2rem'>
          Order Summary
        </Heading>

        <Divider borderColor='#343a40' />
      </Box>

      <Flex justify='space-between' color='#495057' textTransform='uppercase' fontWeight='bold'>
        <Text>items {count}</Text>
        <Text>
          {currency} {totalPrice}
        </Text>
      </Flex>

      <InputContainer title='shipping'>
        <Select bgColor='white' placeholder='Select option' defaultValue='standardDelivery'>
          <option value='standardDelivery'>
            Standard Delivery - {currency} {shippingCost?.standard}
          </option>
          <option value='nextDayDelivery'>
            Next Day Delivery - {currency} {shippingCost?.nextDay}
          </option>
        </Select>
      </InputContainer>

      <InputContainer title='promo code'>
        <Input bgColor='white' placeholder='Enter your code' mb='1rem' />

        <Button colorScheme='blue' variant='solid'>
          APPLY
        </Button>
      </InputContainer>

      <Divider borderColor='#343a40' />

      <Flex justify='space-between' color='#495057' textTransform='uppercase' fontWeight='bold'>
        <Text>total cost</Text>
        <Text>
          {currency} {totalCost}
        </Text>
      </Flex>

      <Button colorScheme='teal' variant='solid'>
        APPLY
      </Button>
    </Stack>
  );
}
