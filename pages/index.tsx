import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@chakra-ui/layout';

export default function Home(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    router.push('/cart');
  }, []);

  return <Box p={2}>Please wait we are redirecting you to the cart page...</Box>;
}
