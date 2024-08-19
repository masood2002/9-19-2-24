// import {
//   Tabs,
//   TabList,
//   TabPanels,
//   Tab,
//   TabPanel,
//   Flex,
// } from '@chakra-ui/react';
// import {
//   Button,
//   ButtonGroup,
//   Divider,
//   Heading,
//   Image,
//   Stack,
//   Text,
// } from '@chakra-ui/react';
// import ProductImg from '../assets/images/0a48d49733d61d3fa6a2ad469bc69ff3-removebg-preview-transformed.png';
// import { Card, CardBody, CardFooter } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useCart } from '../../context/cart.js';
// function ProductTabs() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useCart();
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const { data } = await axios.get('/api/v1/product/product-list/1'); // Adjust the endpoint as needed
//         setProducts(data?.products);

//         console.log(products);
        
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);
//   const handleAddToCart = () => {
//     // Add the product to the cart
//     setCart([...cart, products]);
//     localStorage.setItem('cart', JSON.stringify([...cart, products])); // Update localStorage
//     // toast.success('Item Added to Cart'); // Show success message
//   };
//   const truncateDescription = (description, maxWords) => {
//     const words = description.split(' ');
//     if (words.length > maxWords) {
//       return `${words.slice(0, maxWords).join(' ')}...`;
//     }
//     return description;
//   };
//   return (
//     <Flex justify={'center'}>
//       hlo
//       <Tabs
//         variant={'unstyled'}
//         border={'none'}
//         align="center"
//         textAlign="center"
//         w={'90%'}
//         mb={10}
//       >
//         <TabList textAlign={'center'}>
//           <Tab _selected={{ color: 'white', bg: 'red.500' }}>Featured</Tab>
//           <Tab _selected={{ color: 'white', bg: 'red.500' }}>Top rated</Tab>
//           <Tab _selected={{ color: 'white', bg: 'red.500' }}>Latest</Tab>
//           <Tab _selected={{ color: 'white', bg: 'red.500' }}>Special</Tab>
//         </TabList>

//         <TabPanels>
//         <TabPanel alignItems="center" justifyContent="center" mt={10} flexWrap={"wrap"} display={"flex"} gap={10}>
//       {products.map((product) => (
//         <Card key={product._id} maxW="sm" rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
//           <CardBody
//             boxShadow={'sm'}
//             display={'flex'}
//             flexDir={'column'}
//             align={'center'}
//             justify={'center'}
//             alignItems={'center'}
//           >
//             {/* <Image
//               w={{ base: "40vw", md: "10vw" }}
//               src={product.image || ProductImg} // Use product image or fallback to default
//               alt={product.name}
//               borderRadius="lg"
//             /> */}
//             <Image
//           w='full'
//           src={`/api/v1/product/product-photo/${product._id}`}// Use product image if available
//            objectFit='cover'
//           alt={product.name}
//           borderRadius="lg"
//           h={{ base: '150px', md: '200px' }}
//         />
//             <Stack mt="6" spacing="3">
//               <Heading size="md">{product.name}</Heading>
//               <Text>
//               {truncateDescription(product.description, 15)}
//               </Text>
//               <Text color="red.500" fontWeight={"600"} fontSize="3xl">
//                 ${product.price}
//               </Text>
//             </Stack>
//           </CardBody>
//           <Divider color={"red.500"} />
//           <CardFooter>
//             <ButtonGroup spacing="2">
//             <Link to={`/product/${product.slug}`}>
//                 <Button variant="solid" colorScheme="red">
//                   Buy now
//                 </Button>
//               </Link>
//               <Button variant="ghost" colorScheme="red" onClick={handleAddToCart}>
//                 Add to cart
//               </Button>
//             </ButtonGroup>
//           </CardFooter>
//         </Card>
//       ))}
//     </TabPanel>
          

//     <TabPanel alignItems="center" justifyContent="center" mt={10} flexWrap={"wrap"} display={"flex"} gap={10}>
//       {products.map((product) => (
//         <Card key={product._id} maxW="sm" rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
//           <CardBody
//             boxShadow={'sm'}
//             display={'flex'}
//             flexDir={'column'}
//             align={'center'}
//             justify={'center'}
//             alignItems={'center'}
//           >
//              <Image
//           w='full'
//           src={`/api/v1/product/product-photo/${product._id}`}// Use product image if available
//            objectFit='cover'
//           alt={product.name}
//           borderRadius="lg"
//           h={{ base: '150px', md: '200px' }}
//         />
//             <Stack mt="6" spacing="3">
//               <Heading size="md">{product.name}</Heading>
//               <Text>
//               {truncateDescription(product.description, 15)}
//               </Text>
//               <Text color="red.500" fontWeight={"600"} fontSize="3xl">
//                 ${product.price}
//               </Text>
//             </Stack>
//           </CardBody>
//           <Divider color={"red.500"} />
//           <CardFooter>
//             <ButtonGroup spacing="2">
//               <Link to={`/product/${product._id}`}> {/* Adjust the link as needed */}
//                 <Button variant="solid" colorScheme="red">
//                   Buy now
//                 </Button>
//               </Link>
//               <Button variant="ghost" colorScheme="red" onClick={handleAddToCart}>
//                 Add to cart
//               </Button>
//             </ButtonGroup>
//           </CardFooter>
//         </Card>
//       ))}
//     </TabPanel>
//     <TabPanel alignItems="center" justifyContent="center" mt={10} flexWrap={"wrap"} display={"flex"} gap={10}>
//       {products.map((product) => (
//         <Card key={product._id} maxW="sm" rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
//           <CardBody
//             boxShadow={'sm'}
//             display={'flex'}
//             flexDir={'column'}
//             align={'center'}
//             justify={'center'}
//             alignItems={'center'}
//           >
//              <Image
//           w='full'
//           src={`/api/v1/product/product-photo/${product._id}`}// Use product image if available
//            objectFit='cover'
//           alt={product.name}
//           borderRadius="lg"
//           h={{ base: '150px', md: '200px' }}
//         />
//             <Stack mt="6" spacing="3">
//               <Heading size="md">{product.name}</Heading>
//               <Text>
//               {truncateDescription(product.description, 15)}
//               </Text>
//               <Text color="red.500" fontWeight={"600"} fontSize="3xl">
//                 ${product.price}
//               </Text>
//             </Stack>
//           </CardBody>
//           <Divider color={"red.500"} />
//           <CardFooter>
//             <ButtonGroup spacing="2">
//               <Link to={`/product/${product._id}`}> {/* Adjust the link as needed */}
//                 <Button variant="solid" colorScheme="red">
//                   Buy now
//                 </Button>
//               </Link>
//               <Button variant="ghost" colorScheme="red" onClick={handleAddToCart}>
//                 Add to cart
//               </Button>
//             </ButtonGroup>
//           </CardFooter>
//         </Card>
//       ))}
//     </TabPanel>

//     <TabPanel alignItems="center" justifyContent="center" mt={10} flexWrap={"wrap"} display={"flex"} gap={10}>
//       {products.map((product) => (
//         <Card key={product._id} maxW="sm" rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
//           <CardBody
//             boxShadow={'sm'}
//             display={'flex'}
//             flexDir={'column'}
//             align={'center'}
//             justify={'center'}
//             alignItems={'center'}
//           >
//             <Image
//           w='full'
//           src={`/api/v1/product/product-photo/${product._id}`}// Use product image if available
//            objectFit='cover'
//           alt={product.name}
//           borderRadius="lg"
//           h={{ base: '150px', md: '200px' }}
//         />
//             <Stack mt="6" spacing="3">
//               <Heading size="md">{product.name}</Heading>
//               <Text>
//               {truncateDescription(product.description, 15)}
//               </Text>
//               <Text color="red.500" fontWeight={"600"} fontSize="3xl">
//                 ${product.price}
//               </Text>
//             </Stack>
//           </CardBody>
//           <Divider color={"red.500"} />
//           <CardFooter>
//             <ButtonGroup spacing="2">
//               <Link to={`/product/${product._id}`}> {/* Adjust the link as needed */}
//                 <Button variant="solid" colorScheme="red">
//                   Buy now
//                 </Button>
//               </Link>
//               <Button variant="ghost" colorScheme="red" onClick={handleAddToCart}>
//                 Add to cart
//               </Button>
//             </ButtonGroup>
//           </CardFooter>
//         </Card>
//       ))}
//     </TabPanel>

//         </TabPanels>
//       </Tabs>
//     </Flex>
//   );
// }

// export default ProductTabs;
// // import React, { useState, useEffect } from 'react';
// // import {
// //   Tabs, TabList, TabPanels, Tab, TabPanel, Flex,
// //   Button, ButtonGroup, Divider, Heading, Image, Stack, Text, Card, CardBody, CardFooter,
// // } from '@chakra-ui/react';
// // import { Link } from 'react-router-dom';
// // import axios from 'axios';
// // import { useCart } from '../../context/cart.js';
// // import ProductImg from '../assets/images/0a48d49733d61d3fa6a2ad469bc69ff3-removebg-preview-transformed.png';

// // function ProductTabs() {
// //   const [products, setProducts] = useState([]);
// //   const [cart, setCart] = useCart();

// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       try {
// //         const { data } = await axios.get('/api/v1/product/product-list/1');
// //         setProducts(data?.products);
// //       } catch (error) {
// //         console.error('Error fetching products:', error);
// //       }
// //     };
// //     fetchProducts();
// //   }, []);

// //   const handleAddToCart = (product) => {
// //     setCart([...cart, product]);
// //     localStorage.setItem('cart', JSON.stringify([...cart, product]));
// //     // toast.success('Item Added to Cart'); // Uncomment if using toast notifications
// //   };

// //   const truncateDescription = (description, maxWords) => {
// //     const words = description.split(' ');
// //     if (words.length > maxWords) {
// //       return `${words.slice(0, maxWords).join(' ')}...`;
// //     }
// //     return description;
// //   };

// //   const ProductCard = ({ product }) => (
// //     <Card key={product._id} maxW="sm" rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
// //       <CardBody display={'flex'} flexDir={'column'} align={'center'} justify={'center'} alignItems={'center'}>
// //         <Image w={{ base: "40vw", md: "10vw" }} src={product.image || ProductImg} alt={product.name} borderRadius="lg" />
// //         <Stack mt="6" spacing="3">
// //           <Heading size="md">{product.name}</Heading>
// //           <Text>{truncateDescription(product.description, 15)}</Text>
// //           <Text color="red.500" fontWeight={"600"} fontSize="3xl">${product.price}</Text>
// //         </Stack>
// //       </CardBody>
// //       <Divider color={"red.500"} />
// //       <CardFooter>
// //         <ButtonGroup spacing="2">
// //           <Link to={`/product/${product._id}`}>
// //             <Button variant="solid" colorScheme="red">Buy now</Button>
// //           </Link>
// //           <Button variant="ghost" colorScheme="red" onClick={() => handleAddToCart(product)}>Add to cart</Button>
// //         </ButtonGroup>
// //       </CardFooter>
// //     </Card>
// //   );

// //   return (
// //     <Flex justify={'center'}>
// //       <Tabs variant={'unstyled'} border={'none'} align="center" textAlign="center" w={'90%'} mb={10}>
// //         <TabList textAlign={'center'}>
// //           <Tab _selected={{ color: 'white', bg: 'red.500' }}>Featured</Tab>
// //           <Tab _selected={{ color: 'white', bg: 'red.500' }}>Top rated</Tab>
// //           <Tab _selected={{ color: 'white', bg: 'red.500' }}>Latest</Tab>
// //           <Tab _selected={{ color: 'white', bg: 'red.500' }}>Special</Tab>
// //         </TabList>

// //         <TabPanels>
// //           <TabPanel alignItems="center" justifyContent="center" mt={10} flexWrap={"wrap"} display={"flex"} gap={10}>
// //             {products.map((product) => (
// //               <ProductCard key={product._id} product={product} />
// //             ))}
// //           </TabPanel>

// //           <TabPanel alignItems="center" justifyContent="center" mt={10} flexWrap={"wrap"} display={"flex"} gap={10}>
// //             {products.map((product) => (
// //               <ProductCard key={product._id} product={product} />
// //             ))}
// //           </TabPanel>

// //           <TabPanel alignItems="center" justifyContent="center" mt={10} flexWrap={"wrap"} display={"flex"} gap={10}>
// //             {products.map((product) => (
// //               <ProductCard key={product._id} product={product} />
// //             ))}
// //           </TabPanel>

// //           <TabPanel alignItems="center" justifyContent="center" mt={10} flexWrap={"wrap"} display={"flex"} gap={10}>
// //             {products.map((product) => (
// //               <ProductCard key={product._id} product={product} />
// //             ))}
// //           </TabPanel>
// //         </TabPanels>
// //       </Tabs>
// //     </Flex>
// //   );
// // }

// // export default ProductTabs;
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Button,
  ButtonGroup,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  Card,
  CardBody,
  CardFooter,
  useToast,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../../context/cart.js';

function ProductTabs() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart();
  const toast = useToast();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('/api/v1/product/product-list/1'); // Adjust the endpoint as needed
        setProducts(data?.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    localStorage.setItem('cart', JSON.stringify([...cart, product]));

    toast({
      title: 'Item Added to Cart',
      description: `${product.name} has been added to your cart.`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const truncateDescription = (description, maxWords) => {
    const words = description.split(' ');
    if (words.length > maxWords) {
      return `${words.slice(0, maxWords).join(' ')}...`;
    }
    return description;
  };

  return (
    <Flex justify={'center'}>
      <Tabs
        variant={'unstyled'}
        border={'none'}
        align="center"
        textAlign="center"
        w={'90%'}
        mb={10}
      >
        <TabList textAlign={'center'}>
          <Tab _selected={{ color: 'white', bg: 'red.500' }}>Featured</Tab>
          <Tab _selected={{ color: 'white', bg: 'red.500' }}>Top rated</Tab>
          <Tab _selected={{ color: 'white', bg: 'red.500' }}>Latest</Tab>
          <Tab _selected={{ color: 'white', bg: 'red.500' }}>Special</Tab>
        </TabList>

        <TabPanels>
          {/* Display all products in each TabPanel */}
          {['Featured', 'Top rated', 'Latest', 'Special'].map((tab, index) => (
            <TabPanel key={index} alignItems="center" justifyContent="center" mt={10} flexWrap={"wrap"} display={"flex"} gap={10}>
              {products.map((product) => (
                <Card key={product._id} maxW="sm" rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
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
                      src={`/api/v1/product/product-photo/${product._id}`}
                      objectFit='cover'
                      alt={product.name}
                      borderRadius="lg"
                      h={{ base: '150px', md: '200px' }}
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{product.name}</Heading>
                      <Text>{truncateDescription(product.description, 15)}</Text>
                      <Text color="red.500" fontWeight={"600"} fontSize="3xl">
                        ${product.price}
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider color={"red.500"} />
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      <Link to={`/product/${product.slug}`}>
                        <Button variant="solid" colorScheme="red">
                          Buy now
                        </Button>
                      </Link>
                      <Button variant="ghost" colorScheme="red" onClick={() => handleAddToCart(product)}>
                        Add to cart
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              ))}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default ProductTabs;
