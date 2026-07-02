import 'dotenv/config';
import mongoose from 'mongoose';
import User from './models/User.js';
import Restaurant from './models/Restaurant.js';
import FoodItem from './models/FoodItem.js';



const restaurants = [
  { name: 'Paradise Biryani', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzvDeLJRQgwiz5FzjpHTqBKJ3cd06HNLf46PMprm4HbOKjmfHQO2bumVvJ3ghb5231NOfB-fcMvHzEXmxaGKBIaXRgIMuhdg0b-Y28YL9YyiK8jskPqjOgLowzB9nxK_IOnMtM8PMxhX2yXNrLyrZs9PNiSaeQPnVszUG23qCeVooT7qBJpVv4VSqVRjRN9ZggwTTRs1QDHSLXT73e0HzeGBFK4cr6cpgR9QUg3qcQoCJZRJbN1CBvIr_N7OPEktLG_plNaTdXEbk', description: 'Hyderabadi Biryani & Kebabs', address: 'Banjara Hills, Hyderabad', rating: 4.5, deliveryTime: '30-40 min', cuisine: 'Indian' },
  { name: 'Pizza Planet', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ0K-mntTTaWIbFo53HoC_yWGh99nNFCTnMCqCShVr2pkDWf1Ow_zT_hTjg02kAUgxxgCnHmdC54hTkt2_PF1VrmxA2JjFwqSP8zq-8Hwu7VjhzouhfLWhflf4cQVNDCQNTjVNNtDKqmuQQ0VrlxiBdafrQlOCRt_URQY7nY4PKwuFr2cYbArqeNGGRCC6LlFEbB5Yye0SCE3_6dcnD0n32tSJ1XzcNfskpT6hgp0AojdTiZSZEK9-HPdwVKK9dh8t9cjQybDT2r0', description: 'Wood-fired Pizzas & Pasta', address: 'Jubilee Hills, Hyderabad', rating: 4.3, deliveryTime: '25-35 min', cuisine: 'Italian' },
  { name: 'Dragon Wok', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClcuM7693a739TwjOWMNFYRkgapaVkAF29OIr2F_j32zATSZBCDWjaqZV0durHQPEfczhs4phqb_cQ770FPoJE9o1MDRWBD0tMsqwAf1O19DA1rSevONrVA2sR1_VahQgvB7NshSnaC4kEH0nVbhangJVDEuy3lfPNZ7ob6gLX9eWHvIVVe_kOc0nlnY1VIHqrSqFB0Utm9EaeDkb0gkF_u1AXzPQ73udDr8vgjsmes1oAV8SxUW01S5lh0N7lPp4Csvhrs_EkpiY', description: 'Chinese & Thai Cuisine', address: 'Madhapur, Hyderabad', rating: 4.1, deliveryTime: '35-45 min', cuisine: 'Chinese' },
  { name: 'Burger Junction', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD99tWUR59oXDKz7oIJoMnQ0nkphjNvnRkG2aT29Fqnby3OG6vGgXEYb_IU0ypOCxeam2edPRjZW0WuAS9PR4yReTCKSdIp8kB0W5qmJIhnzNs7rB_SEzD-JCfw10zJO0c3S6eSihyGoYQimy-7HG8fGImzrHxUjjB-BHLMaE9HeNAMWyFM9H6vGSPOe--esk1jiwpUsM6rc99ayP1ReMSVu-aWRnl3GLrob5M7od305lFsD9yDdqPpvf4jBqsOx9BNgsC1mjhtC9M', description: 'Gourmet Burgers & Shakes', address: 'Hitech City, Hyderabad', rating: 4.2, deliveryTime: '20-30 min', cuisine: 'American' },
  { name: 'Dosa Express', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzvDeLJRQgwiz5FzjpHTqBKJ3cd06HNLf46PMprm4HbOKjmfHQO2bumVvJ3ghb5231NOfB-fcMvHzEXmxaGKBIaXRgIMuhdg0b-Y28YL9YyiK8jskPqjOgLowzB9nxK_IOnMtM8PMxhX2yXNrLyrZs9PNiSaeQPnVszUG23qCeVooT7qBJpVv4VSqVRjRN9ZggwTTRs1QDHSLXT73e0HzeGBFK4cr6cpgR9QUg3qcQoCJZRJbN1CBvIr_N7OPEktLG_plNaTdXEbk', description: 'South Indian Delicacies', address: 'Ameerpet, Hyderabad', rating: 4.4, deliveryTime: '20-30 min', cuisine: 'South Indian' },
  { name: 'The Kebab Factory', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClcuM7693a739TwjOWMNFYRkgapaVkAF29OIr2F_j32zATSZBCDWjaqZV0durHQPEfczhs4phqb_cQ770FPoJE9o1MDRWBD0tMsqwAf1O19DA1rSevONrVA2sR1_VahQgvB7NshSnaC4kEH0nVbhangJVDEuy3lfPNZ7ob6gLX9eWHvIVVe_kOc0nlnY1VIHqrSqFB0Utm9EaeDkb0gkF_u1AXzPQ73udDr8vgjsmes1oAV8SxUW01S5lh0N7lPp4Csvhrs_EkpiY', description: 'Mughlai Kebabs & Grills', address: 'Secunderabad, Hyderabad', rating: 4.6, deliveryTime: '35-50 min', cuisine: 'Mughlai' },
];

const foodsByRestaurant = [
  // Paradise Biryani
  [
    { name: 'Chicken Dum Biryani', price: 299, category: 'Biryani', description: 'Aromatic basmati rice with tender chicken', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzvDeLJRQgwiz5FzjpHTqBKJ3cd06HNLf46PMprm4HbOKjmfHQO2bumVvJ3ghb5231NOfB-fcMvHzEXmxaGKBIaXRgIMuhdg0b-Y28YL9YyiK8jskPqjOgLowzB9nxK_IOnMtM8PMxhX2yXNrLyrZs9PNiSaeQPnVszUG23qCeVooT7qBJpVv4VSqVRjRN9ZggwTTRs1QDHSLXT73e0HzeGBFK4cr6cpgR9QUg3qcQoCJZRJbN1CBvIr_N7OPEktLG_plNaTdXEbk' },
    { name: 'Mutton Biryani', price: 399, category: 'Biryani', description: 'Slow-cooked mutton with saffron rice' },
    { name: 'Paneer Biryani', price: 249, category: 'Biryani', description: 'Vegetarian biryani with paneer cubes' },
    { name: 'Chicken 65', price: 199, category: 'Starters', description: 'Spicy deep-fried chicken' },
    { name: 'Double Ka Meetha', price: 149, category: 'Desserts', description: 'Traditional Hyderabadi bread pudding' },
  ],
  // Pizza Planet
  [
    { name: 'Margherita Pizza', price: 249, category: 'Pizza', description: 'Classic tomato, mozzarella, basil', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ0K-mntTTaWIbFo53HoC_yWGh99nNFCTnMCqCShVr2pkDWf1Ow_zT_hTjg02kAUgxxgCnHmdC54hTkt2_PF1VrmxA2JjFwqSP8zq-8Hwu7VjhzouhfLWhflf4cQVNDCQNTjVNNtDKqmuQQ0VrlxiBdafrQlOCRt_URQY7nY4PKwuFr2cYbArqeNGGRCC6LlFEbB5Yye0SCE3_6dcnD0n32tSJ1XzcNfskpT6hgp0AojdTiZSZEK9-HPdwVKK9dh8t9cjQybDT2r0' },
    { name: 'Pepperoni Pizza', price: 349, category: 'Pizza', description: 'Loaded with pepperoni and cheese' },
    { name: 'Pasta Alfredo', price: 279, category: 'Pasta', description: 'Creamy white sauce pasta' },
    { name: 'Garlic Bread', price: 129, category: 'Sides', description: 'Crispy garlic bread with herbs' },
  ],
  // Dragon Wok
  [
    { name: 'Chicken Manchurian', price: 229, category: 'Main Course', description: 'Indo-Chinese classic', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClcuM7693a739TwjOWMNFYRkgapaVkAF29OIr2F_j32zATSZBCDWjaqZV0durHQPEfczhs4phqb_cQ770FPoJE9o1MDRWBD0tMsqwAf1O19DA1rSevONrVA2sR1_VahQgvB7NshSnaC4kEH0nVbhangJVDEuy3lfPNZ7ob6gLX9eWHvIVVe_kOc0nlnY1VIHqrSqFB0Utm9EaeDkb0gkF_u1AXzPQ73udDr8vgjsmes1oAV8SxUW01S5lh0N7lPp4Csvhrs_EkpiY' },
    { name: 'Veg Fried Rice', price: 179, category: 'Rice', description: 'Wok-tossed vegetable rice' },
    { name: 'Hakka Noodles', price: 199, category: 'Noodles', description: 'Stir-fried with vegetables' },
    { name: 'Spring Rolls', price: 159, category: 'Starters', description: 'Crispy veg spring rolls' },
  ],
  // Burger Junction
  [
    { name: 'Classic Smash Burger', price: 199, category: 'Burgers', description: 'Double patty with cheese', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD99tWUR59oXDKz7oIJoMnQ0nkphjNvnRkG2aT29Fqnby3OG6vGgXEYb_IU0ypOCxeam2edPRjZW0WuAS9PR4yReTCKSdIp8kB0W5qmJIhnzNs7rB_SEzD-JCfw10zJO0c3S6eSihyGoYQimy-7HG8fGImzrHxUjjB-BHLMaE9HeNAMWyFM9H6vGSPOe--esk1jiwpUsM6rc99ayP1ReMSVu-aWRnl3GLrob5M7od305lFsD9yDdqPpvf4jBqsOx9BNgsC1mjhtC9M' },
    { name: 'Chicken Zinger', price: 229, category: 'Burgers', description: 'Crispy chicken fillet burger' },
    { name: 'Loaded Fries', price: 149, category: 'Sides', description: 'Cheese and jalapeno fries' },
    { name: 'Oreo Milkshake', price: 179, category: 'Beverages', description: 'Thick Oreo cookie shake' },
  ],
  // Dosa Express
  [
    { name: 'Masala Dosa', price: 129, category: 'Dosa', description: 'Crispy dosa with potato filling' },
    { name: 'Mysore Masala Dosa', price: 149, category: 'Dosa', description: 'Spicy chutney spread dosa' },
    { name: 'Idli Sambar', price: 99, category: 'Breakfast', description: 'Steamed rice cakes with sambar' },
    { name: 'Filter Coffee', price: 49, category: 'Beverages', description: 'Traditional South Indian coffee' },
  ],
  // The Kebab Factory
  [
    { name: 'Seekh Kebab', price: 299, category: 'Kebabs', description: 'Minced lamb on skewers', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClcuM7693a739TwjOWMNFYRkgapaVkAF29OIr2F_j32zATSZBCDWjaqZV0durHQPEfczhs4phqb_cQ770FPoJE9o1MDRWBD0tMsqwAf1O19DA1rSevONrVA2sR1_VahQgvB7NshSnaC4kEH0nVbhangJVDEuy3lfPNZ7ob6gLX9eWHvIVVe_kOc0nlnY1VIHqrSqFB0Utm9EaeDkb0gkF_u1AXzPQ73udDr8vgjsmes1oAV8SxUW01S5lh0N7lPp4Csvhrs_EkpiY' },
    { name: 'Tandoori Chicken', price: 349, category: 'Kebabs', description: 'Clay oven roasted chicken' },
    { name: 'Paneer Tikka', price: 249, category: 'Kebabs', description: 'Grilled cottage cheese' },
    { name: 'Butter Naan', price: 49, category: 'Breads', description: 'Soft buttery flatbread' },
  ],
];

import connectDB from './config/db.js';

async function seed() {
  try {
    await connectDB();

    // Clear existing data
    await User.deleteMany({});
    await Restaurant.deleteMany({});
    await FoodItem.deleteMany({});
    console.log('Cleared existing data');

    // Create admin user
    const admin = await User.create({
      name: 'Admin',
      email: 'admin@foodexpress.com',
      password: 'admin123',
      role: 'admin',
    });
    console.log('Created admin user: admin@foodexpress.com / admin123');

    // Create test user
    await User.create({
      name: 'Test User',
      email: 'user@test.com',
      password: 'user123',
      role: 'user',
    });
    console.log('Created test user: user@test.com / user123');

    // Create restaurants and their food items
    for (let i = 0; i < restaurants.length; i++) {
      const restaurant = await Restaurant.create(restaurants[i]);
      console.log(`Created restaurant: ${restaurant.name}`);

      for (const food of foodsByRestaurant[i]) {
        await FoodItem.create({ ...food, restaurantId: restaurant._id });
      }
      console.log(`  Added ${foodsByRestaurant[i].length} food items`);
    }

    console.log('\n✅ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error);
    process.exit(1);
  }
}

seed();
