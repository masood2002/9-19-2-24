// import { useEffect, useState } from 'react';
// import { Button } from '@chakra-ui/react';
// import { ArrowBackIcon } from '@chakra-ui/icons';
// import { Flex, HStack, Img, Text, Icon, Select } from '@chakra-ui/react';
// import { Link, useParams, useNavigate } from 'react-router-dom';
// import { useToast } from '@chakra-ui/react';
// import axios from 'axios';
// import NavBar from '../components/navBar';
// import Footer from '../components/Footer';
// import { useCart } from '../../context/cart';

// function ProductPage() {
//   const params = useParams();
//   const navigate = useNavigate();
//   const toast = useToast();
//   const [product, setProduct] = useState(null);
//   const [selectedAttributes, setSelectedAttributes] = useState({});
//   const [cart, setCart] = useCart();

//   const getProduct = async () => {
//     try {
//       const { data } = await axios.get(`/api/v1/product/get-product/${params.slug}`);
//       setProduct(data?.product);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleAttributeChange = (key, value, price) => {
//     setSelectedAttributes({
//       ...selectedAttributes,
//       [key]: { value, price }
//     });
//   };

//   const calculatePrice = () => {
//     if (!product) return 0;
//     let totalPrice = product.price;
//     Object.values(selectedAttributes).forEach(attr => {
//       totalPrice += attr.price;
//     });
//     return totalPrice;
//   };

//   const onAddToCart = () => {
//     if (product) {
//       setCart([...cart, { ...product, selectedAttributes }]);
//       localStorage.setItem('cart', JSON.stringify([...cart, { ...product, selectedAttributes }]));
//       toast({
//         title: 'Product Added to Cart',
//         description: "You've successfully added the product to your cart",
//         status: 'success',
//         duration: 2000,
//         isClosable: true,
//         position: 'top-right',
//       });
//     }
//   };

//   const formatTitle = (title) => {
//     const maxLength = 20;
//     const nonBreakingSpace = '\u00A0'; // Unicode for non-breaking space
//     if (title.length < maxLength) {
//       return title.padEnd(maxLength, nonBreakingSpace); // Pad with non-breaking spaces if title is less than 20 characters
//     }
//     return title;
//   };

//   useEffect(() => {
//     if (params?.slug) getProduct();
//   }, [params?.slug]);

//   if (!product) {
//     return <Text>Loading...</Text>;
//   }

//   return (
//     <>
//       <NavBar />
//       <Flex justify={'center'} h={'100vh'} alignItems={'center'} flexDir={'column'} my={{ base: '6rem', md: '1rem' }}>
//         <Flex
//           mx={{ base: '30px', md: '60px' }}
//           justify={'center'}
//           rounded={20}
//           p={10}
//           gap={20}
//           boxShadow={'10px 10px 20px rgba(0, 0, 0, 0.1)'}
//           flexWrap={'wrap'}
//         >
//           <Img
//             src={`/api/v1/product/product-photo/${product._id}`}
//             alt={product.name}
//             objectFit='contain' // Adjust this to 'cover' or 'fill' if needed
//             maxW={{ base: '100%', md: '400px' }}
//             maxH={{ base: '300px', md: '400px' }}
//           />
//           <Flex flexDir={'column'} justify={'center'} gap={2}>
//             <Link to="/">
//               <HStack>
//                 <Icon as={ArrowBackIcon} />
//                 <Text _hover={{ color: 'green' }}>Home</Text>
//               </HStack>
//             </Link>
//             <Text fontWeight={'700'} fontSize={'40px'} textTransform={'uppercase'}>
//               {formatTitle(product.name)}
//             </Text>
//             {/* <Text fontWeight={'500'} fontSize={'15px'}>
//               {product.description}
//             </Text> */}
//             <Text fontWeight={'500'} fontSize={'25px'} color={'green'}>
//               {calculatePrice().toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
//             </Text>
//             <Text textAlign={'left'} textTransform={'uppercase'}>
//               <strong>Category: </strong> {product.category.name}
//             </Text>
//             {product.attributes.map((attr, index) => (
//               <HStack key={index}>
//                 <Text fontWeight={'bold'}>{attr.key}:</Text>
//                 <Select
//                   w={'9rem'}
//                   placeholder={`Select ${attr.key}`}
//                   onChange={(e) => {
//                     const selectedOption = attr.values.find(value => value.value === e.target.value);
//                     if (selectedOption) {
//                       handleAttributeChange(attr.key, selectedOption.value, selectedOption.price);
//                     }
//                   }}
//                 >
//                   {attr.values.map((option, idx) => (
//                     <option key={idx} value={option.value}>{option.value}</option>
//                   ))}
//                 </Select>
//               </HStack>
//             ))}
//             <HStack mt={4}>
//               <Button mt={5} colorScheme="red" onClick={onAddToCart}>
//                 Add to Cart
//               </Button>
//               <Button variant="ghost" mt={5} colorScheme="red">
//                 Buy Now
//               </Button>
//             </HStack>
            
//           </Flex>
          
//         </Flex>

//       </Flex>
      
//       <Footer />
//     </>
//   );
// }

// export default ProductPage;
import { useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Flex, HStack, Img, Text, Icon, Select } from '@chakra-ui/react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import NavBar from '../components/navBar';
import Footer from '../components/Footer';
import { useCart } from '../../context/cart';
import ProductCard from '../components/card';


const formatTitle = (title) => {
  const maxLength = 20;
  const nonBreakingSpace = '\u00A0'; // Unicode for non-breaking space
  if (title.length < maxLength) {
    return title.padEnd(maxLength, nonBreakingSpace); // Pad with non-breaking spaces if title is less than 20 characters
  }
  return title;
};
function ProductPage() {
  const params = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const [product, setProduct] = useState(null);
  const [selectedAttributes, setSelectedAttributes] = useState({});
  const [cart, setCart] = useCart();
  const [relatedProducts, setRelatedProducts] = useState([]);
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  const getProduct = async () => {
    try {
      const { data } = await axios.get(`/api/v1/product/get-product/${params.slug}`);
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAttributeChange = (key, value, price) => {
    setSelectedAttributes({
      ...selectedAttributes,
      [key]: { value, price }
    });
  };

  const calculatePrice = () => {
    if (!product) return 0;
    let totalPrice = product.price;
    Object.values(selectedAttributes).forEach(attr => {
      totalPrice += attr.price;
    });
    return totalPrice;
  };

  const onAddToCart = () => {
    if (product) {
      setCart([...cart, { ...product, selectedAttributes }]);
      localStorage.setItem('cart', JSON.stringify([...cart, { ...product, selectedAttributes }]));
      toast({
        title: 'Product Added to Cart',
        description: "You've successfully added the product to your cart",
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  if (!product) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <NavBar />
      <Flex justify={'center'} h={'100%'} alignItems={'flex-center'} flexDir={'column'} my={{ base: '6rem', md: '1rem' }}>
        <Flex
          mx={{ base: '30px', md: '60px' }}
          justify={'center'}
          rounded={20}
          mb={3}
          p={10}
          gap={20}
          boxShadow={'10px 10px 20px rgba(0, 0, 0, 0.1)'}
          flexWrap={'wrap'}
        >
         <Img
            src={`/api/v1/product/product-photo/${product._id}`}
            alt={product.name}
            objectFit='contain' // Adjust this to 'cover' or 'fill' if needed
            maxW={{ base: '100%', md: '400px' }}
            maxH={{ base: '300px', md: '400px' }}
          />
          <Flex flexDir={'column'} justify={'center'} gap={2}>
            <Link to="/">
              <HStack>
                <Icon as={ArrowBackIcon} />
                <Text _hover={{ color: 'green' }}>Home</Text>
              </HStack>
            </Link>
            <Text fontWeight={'700'} fontSize={'40px'} textTransform={'uppercase'}>
              {formatTitle(product.name)}
            </Text>
            <Text fontWeight={'500'} fontSize={'25px'} color={'green'}>
              {calculatePrice().toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </Text>
            <Text textAlign={'left'} textTransform={'uppercase'}>
              <strong>Category: </strong> {product.category.name} {/* Ensure this is a string */}
            </Text>
            {product.attributes.map((attr, index) => (
              <HStack key={index}>
                <Text fontWeight={'bold'}>{attr.key}:</Text>
                <Select
                  w={'9rem'}
                  placeholder={`Select ${attr.key}`}
                  onChange={(e) => {
                    const selectedOption = attr.values.find(value => value.value === e.target.value);
                    if (selectedOption) {
                      handleAttributeChange(attr.key, selectedOption.value, selectedOption.price);
                    }
                  }}
                >
                  {attr.values.map((option, idx) => (
                    <option key={idx} value={option.value}>{option.value}</option>
                  ))}
                </Select>
              </HStack>
            ))}
            <HStack mt={4}>
              <Button mt={5} colorScheme="red" onClick={onAddToCart}>
                Add to Cart
              </Button>
              <Button variant="ghost" mt={5} colorScheme="red">
                Buy Now
              </Button>
            </HStack>
          </Flex>
        </Flex>
        <Flex
          mx={{ base: '30px', md: '60px' }}
          justify={'start'}
          rounded={20}
          p={10}
          mb={3}
          boxShadow={'10px 10px 20px rgba(0, 0, 0, 0.1)'}
          flexWrap={'wrap'}
        >
          <Text fontWeight={'700'} fontSize={'25px'} mb={2}>
            Description:
          </Text>
          <Text fontWeight={'500'} fontSize={'15px'}>
           {product.description}
                   </Text>
        </Flex>
        {/* <div className="row container similar-products">
        <h4>Similar Products</h4>
        {relatedProducts.length < 1 && (
          <p className="text-center">No Similar Products found</p>
        )}
        <div className="d-flex flex-wrap">
          {relatedProducts?.map((p) => (
            <div className="card m-2" key={p._id}>
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <div className="card-name-price">
                  <h5 className="card-title">{p.name}</h5>
                  <h5 className="card-title card-price">
                    {p.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </h5>
                </div>
                <p className="card-text ">
                  {p.description.substring(0, 60)}...
                </p>
                <div className="card-name-price">
                  <button
                    className="btn btn-info ms-1"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <Flex gap={10} flexWrap='wrap' flexDir={'column'}>
      <h4 mb={5}>Similar Products</h4>
      <Flex>

              { 
                relatedProducts.map((p) => <ProductCard key={p._id} product={p} />)
}
      </Flex>
            </Flex>
      </Flex>
      <Footer />
    </>
  );
}

export default ProductPage;
