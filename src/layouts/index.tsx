import { Box, BoxProps } from '@chakra-ui/layout';

export function Layout({ children }: BoxProps): JSX.Element {
  return (
    <Box w='100%' h='100vh'>
      {children}
    </Box>
  );
}
