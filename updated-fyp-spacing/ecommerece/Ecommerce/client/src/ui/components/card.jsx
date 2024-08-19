import React from 'react';
import { Card, CardBody, CardFooter, ButtonGroup, Button, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ProductImg from '../assets/images/0a48d49733d61d3fa6a2ad469bc69ff3-removebg-preview-transformed.png';
import { useCart } from '../../context/cart.js'; // Import your cart context
import toast from 'react-hot-toast';

function ProductCard({ product }) {
  const [cart, setCart] = useCart(); // Use cart context

  const handleAddToCart = () => {
    // Add the product to the cart
    setCart([...cart, product]);
    localStorage.setItem('cart', JSON.stringify([...cart, product])); // Update localStorage
    toast.success('Item Added to Cart'); // Show success message
  };

  return (
    <Card w={"600px"} maxW={{ base: '100%', md: '60%', lg: '30%' }} rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
      <CardBody
        boxShadow={'sm'}
        display={'flex'}
        flexDir={'column'}
        align={'center'}
        justify={'center'}
        alignItems={'center'}
      >
        <Image
          w='full'
          src={`/api/v1/product/product-photo/${product._id}`}// Use product image if available
           objectFit='cover'
          alt={product.name}
          borderRadius="lg"
          h={{ base: '150px', md: '200px' }}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{product.name}</Heading>
          <Text> {product.description.split(' ').slice(0, 15).join(' ') + (product.description.split(' ').length > 15 ? '...' : '')}</Text>
          <Text color="red.500" fontWeight={"600"} fontSize="3xl">
            ${product.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider color={"red.500"} />
      <CardFooter>
        <ButtonGroup spacing="2">
          {/* Link to the ProductPage with dynamic product ID */}
          <Link to={`/product/${product.slug}`}>
            <Button variant="solid" colorScheme="red" >
              Buy now
            </Button>
          </Link>
          <Button variant="ghost" colorScheme="red" onClick={handleAddToCart}>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
