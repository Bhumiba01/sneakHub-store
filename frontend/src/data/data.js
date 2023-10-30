import product1 from '../assets/Shoes/classic-sneakers.jpg'
import product2 from '../assets/Shoes/trail-running-shoes.jpg'
import product3 from '../assets/Shoes/canvas-slip-ons.jpg'
import product4 from '../assets/Shoes/hiking-boots.jpg'
import product5 from '../assets/Shoes/running-sneakers.jpg'
import product6 from '../assets/Shoes/suede-loafers.jpg'
import product7 from '../assets/Shoes/high-top-sneakers.jpg'
import product8 from '../assets/Shoes/work-boots.jpg'
import product9 from '../assets/Shoes/ballet-flats.jpg'
import product10 from '../assets/Shoes/skateboard-shoes.jpg'
import product11 from '../assets/Shoes/cross-trainers.jpg'
import product12 from '../assets/Shoes/leather-oxfords.jpg'
import product13 from '../assets/Shoes/fashion-sneakers.jpg'
import product14 from '../assets/Shoes/casual-slip-ons.jpg'
import product15 from '../assets/Shoes/ankle-boots.jpg'
import product16 from '../assets/Shoes/suede-moccasins.jpg'
import product17 from '../assets/Shoes/wedge-sandals.jpg'
import product18 from '../assets/Shoes/canvas-espadrilles.jpg'
import product19 from '../assets/Shoes/thong-sandals.jpg'
import product20 from '../assets/Shoes/boat-shoes.jpg'
import product21 from '../assets/Shoes/work-shoes.jpg'
import product22 from '../assets/Shoes/combat-boots.jpg'
import product23 from '../assets/Shoes/formal-oxford-shoes.jpg'
import product24 from '../assets/Shoes/platform-sandals.jpg'
import product25 from '../assets/Shoes/chelsea-boots.jpg'

const shoesData = [
    {
      id: 1,
      name: 'Classic Leather Sneakers',
      brand: 'Reebok',
      price: 89.99,
      color: 'White',
      size: '9',
      gender: 'Men',
      description: 'Timeless white leather sneakers for a casual look.',
      image: product1,
    },
    {
      id: 2,
      name: 'Trail Running Shoes',
      brand: 'Salomon',
      price: 129.99,
      color: 'Green/Black',
      size: '8.5',
      gender: 'Men',
      description: 'Durable trail running shoes for outdoor adventures.',
      image: product2,
    },
    {
      id: 3,
      name: 'Canvas Slip-Ons',
      brand: 'TOMS',
      price: 54.95,
      color: 'Navy',
      size: '7',
      gender: 'Women',
      description: 'Comfortable navy blue slip-on shoes for women.',
      image: product3,
    },
    {
      id: 4,
      name: 'Hiking Boots',
      brand: 'Merrell',
      price: 50,
      color: 'Brown/Red',
      size: '10',
      gender: 'Men',
      description: 'Rugged hiking boots designed for tough terrains.',
      image: product4,
    },
    {
      id: 5,
      name: 'Running Sneakers',
      brand: 'ASICS',
      price: 119.99,
      color: 'Blue/Gray',
      size: '8',
      gender: 'Women',
      description: 'Performance-oriented running sneakers for women.',
      image: product5,
    },
    {
      id: 6,
      name: 'Suede Loafers',
      brand: 'Clarks',
      price: 79.95,
      color: 'Black',
      size: '11',
      gender: 'Men',
      description: 'Elegant black suede loafers for a formal look.',
      image: product6,
    },
    {
      id: 7,
      name: 'High-Top Sneakers',
      brand: 'Converse',
      price: 65.00,
      color: 'Red/White',
      size: '6.5',
      gender: 'Women',
      description: 'Classic red and white high-top sneakers.',
      image: product7,
    },
    {
      id: 8,
      name: 'Steel Toe Work Boots',
      brand: 'Caterpillar',
      price: 139.99,
      color: 'Black/Yellow',
      size: '12',
      gender: 'Men',
      description: 'Durable steel toe work boots for heavy-duty jobs.',
      image: product8,
    },
    {
      id: 9,
      name: 'Ballet Flats',
      brand: 'Cole Haan',
      price: 89.00,
      color: 'Beige',
      size: '8',
      gender: 'Women',
      description: 'Chic beige ballet flats for a versatile style.',
      image: product9,
    },
    {
      id: 10,
      name: 'Skateboard Shoes',
      brand: 'Vans',
      price: 69.99,
      color: 'Black/White',
      size: '9.5',
      gender: 'Men',
      description: 'Stylish skateboard shoes with a timeless design.',
      image: product10,
    },
    {
      id: 11,
      name: 'Athletic Cross Trainers',
      brand: 'New Balance',
      price: 109.99,
      color: 'Gray/Teal',
      size: '7.5',
      gender: 'Women',
      description: 'Versatile cross trainers for various sports and workouts.',
      image: product11,
    },
    {
      id: 12,
      name: 'Leather Oxfords',
      brand: 'ECCO',
      price: 129.95,
      color: 'Brown',
      size: '10.5',
      gender: 'Men',
      description: 'Classic brown leather oxfords for formal occasions.',
      image: product12,
    },
    {
      id: 13,
      name: 'Fashion Sneakers',
      brand: 'PUMA',
      price: 79.99,
      color: 'Pink/White',
      size: '6',
      gender: 'Women',
      description: 'Trendy pink and white fashion sneakers for a unique style.',
      image: product13,
    },
    {
      id: 14,
      name: 'Casual Slip-Ons',
      brand: 'Skechers',
      price: 64.99,
      color: 'Gray/Black',
      size: '11',
      gender: 'Men',
      description: 'Comfortable slip-on shoes for casual everyday wear.',
      image: product14,
    },
    {
      id: 15,
      name: 'Ankle Boots',
      brand: 'Steve Madden',
      price: 89.00,
      color: 'Cognac',
      size: '8.5',
      gender: 'Women',
      description: 'Stylish cognac ankle boots with a touch of elegance.',
      image: product15,
    },
    {
      id: 16,
      name: 'Suede Moccasins',
      brand: 'UGG',
      price: 79.95,
      color: 'Chestnut',
      size: '9',
      gender: 'Men',
      description: 'Cozy chestnut suede moccasins for indoor comfort.',
      image: product16,
    },
    {
      id: 17,
      name: 'Wedge Sandals',
      brand: 'Nine West',
      price: 74.99,
      color: 'Navy',
      size: '7',
      gender: 'Women',
      description: 'Navy wedge sandals for a fashionable summer look.',
      image: product17,
    },
    {
      id: 18,
      name: 'Canvas Espadrilles',
      brand: 'TOMS',
      price: 59.95,
      color: 'Olive',
      size: '10',
      gender: 'Men',
      description: 'Comfortable olive canvas espadrilles for a relaxed style during warm days.',
      image: product18,
    },
    {
      id: 19,
      name: 'Thong Sandals',
      brand: 'Havaianas',
      price: 19.99,
      color: 'Black',
      size: '8',
      gender: 'Women',
      description: 'Classic black thong sandals for beach and casual wear.',
      image: product19,
    },
    {
      id: 20,
      name: 'Boat Shoes',
      brand: 'Sperry',
      price: 79.99,
      color: 'Navy/White',
      size: '11.5',
      gender: 'Men',
      description: 'Navy and white boat shoes for a nautical-inspired look.',
      image: product20,
    },
    {
      id: 21,
      name: 'Slip-Resistant Work Shoes',
      brand: 'Skechers Work',
      price: 94.95,
      color: 'Black',
      size: '9',
      gender: 'Men',
      description: 'Durable black slip-resistant work shoes for safety on the job.',
      image: product21,
    },
    {
      id: 22,
      name: 'Lace-Up Combat Boots',
      brand: 'Dr. Martens',
      price: 149.00,
      color: 'Cherry Red',
      size: '7',
      gender: 'Women',
      description: 'Cherry red lace-up combat boots for a bold statement.',
      image: product22,
    },
    {
      id: 23,
      name: 'Formal Oxford Shoes',
      brand: 'Florsheim',
      price: 129.95,
      color: 'Black',
      size: '10.5',
      gender: 'Men',
      description: 'Classic black formal oxford shoes for special occasions.',
      image: product23,
    },
    {
      id: 24,
      name: 'Platform Sandals',
      brand: 'Steve Madden',
      price: 89.00,
      color: 'Coral',
      size: '8',
      gender: 'Women',
      description: 'Coral platform sandals for a trendy summer look.',
      image: product24,
    },
    {
      id: 25,
      name: 'Leather Chelsea Boots',
      brand: 'Cole Haan',
      price: 139.99,
      color: 'Brown',
      size: '9.5',
      gender: 'Men',
      description: 'Stylish brown leather Chelsea boots for a versatile style.',
      image: product25,
    },
  ];
  
  export default shoesData;
    