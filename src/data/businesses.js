export const businesses = [
    {
      id: 1,
      name: "Tasty Bites",
      category: "Restaurants",
      description: "A cozy restaurant serving delicious Italian cuisine.",
      logo: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=300&h=300&fit=crop&auto=format",
      rating: 4.5,
      services: ["Dine-in", "Takeout", "Delivery"],
      hours: "Mon-Sun: 11AM-10PM",
      contact: { phone: "123-456-7890", email: "info@tastybites.com", website: "tastybites.com" },
      location: { lat: 37.7749, lng: -122.4194 },
      reviews: [{ user: "John", rating: 5, comment: "Amazing food!" }],
      gallery: [
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=300&h=300&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=300&h=300&fit=crop&auto=format",
      ],
    },
    {
      id: 2,
      name: "Tech Store",
      category: "Retail",
      description: "Your one-stop shop for electronics.",
      logo: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?w=100&h=100&fit=crop&auto=format",
      rating: 4.0,
      services: ["Sales", "Repairs"],
      hours: "Mon-Fri: 9AM-6PM",
      contact: { phone: "987-654-3210", email: "support@techstore.com", website: "techstore.com" },
      location: { lat: 37.7849, lng: -122.4294 },
      reviews: [{ user: "Alice", rating: 4, comment: "Great service!" }],
      gallery: [
        "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?w=300&h=300&fit=crop&auto=format",
        "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?w=300&h=300&fit=crop&auto=format",
      ],
    },
    {
      id: 3,
      name: "Green Haven Spa",
      category: "Wellness",
      description: "A relaxing spa offering massages, facials, and wellness treatments.",
      logo: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?w=300&h=300&fit=crop&auto=format",
      rating: 4.8,
      services: ["Massages", "Facials", "Sauna"],
      hours: "Tue-Sun: 10AM-8PM",
      contact: { phone: "555-123-4567", email: "relax@greenhavenspa.com", website: "greenhavenspa.com" },
      location: { lat: 37.7949, lng: -122.4094 },
      reviews: [
        { user: "Sarah", rating: 5, comment: "Best massage ever!" },
        { user: "Mike", rating: 4.5, comment: "Very relaxing atmosphere." },
      ],
      gallery: [
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=300&h=300&fit=crop&auto=format",
        "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?w=300&h=300&fit=crop&auto=format",
      ],
    },
    {
      id: 4,
      name: "City Fitness Gym",
      category: "Fitness",
      description: "A modern gym with state-of-the-art equipment and personal training.",
      logo: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?w=100&h=100&fit=crop&auto=format",
      rating: 4.2,
      services: ["Personal Training", "Group Classes", "Cardio Equipment"],
      hours: "Mon-Sat: 6AM-11PM",
      contact: { phone: "444-987-6543", email: "info@cityfitnessgym.com", website: "cityfitnessgym.com" },
      location: { lat: 37.7649, lng: -122.4394 },
      reviews: [
        { user: "Emma", rating: 4, comment: "Great trainers!" },
        { user: "Tom", rating: 4.5, comment: "Love the group classes." },
      ],
      gallery: [
        "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?w=300&h=300&fit=crop&auto=format",
        "https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?w=300&h=300&fit=crop&auto=format",
      ],
    },
    {
      id: 5,
      name: "Blooming Florals",
      category: "Retail",
      description: "A charming flower shop offering fresh bouquets and custom arrangements.",
      logo: "https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?w=300&h=300&fit=crop&auto=format",
      rating: 4.7,
      services: ["Flower Arrangements", "Delivery", "Event Decor"],
      hours: "Mon-Sat: 9AM-7PM",
      contact: { phone: "333-555-1212", email: "orders@bloomingflorals.com", website: "bloomingflorals.com" },
      location: { lat: 37.7549, lng: -122.4494 },
      reviews: [
        { user: "Lily", rating: 5, comment: "Beautiful flowers for my wedding!" },
      ],
      gallery: [
        "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?w=300&h=300&fit=crop&auto=format",
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?w=100&h=100&fit=crop&auto=format",
      ],
    },
    {
      id: 6,
      name: "Paws & Claws Pet Care",
      category: "Services",
      description: "Professional pet grooming and boarding services.",
      logo: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?w=100&h=100&fit=crop&auto=format",
      rating: 4.3,
      services: ["Grooming", "Boarding", "Daycare"],
      hours: "Mon-Sun: 8AM-6PM",
      contact: { phone: "222-333-4444", email: "care@pawsandclaws.com", website: "pawsandclaws.com" },
      location: { lat: 37.7449, lng: -122.4594 },
      reviews: [
        { user: "Rachel", rating: 4, comment: "My dog loves it here!" },
        { user: "Mark", rating: 4.5, comment: "Great grooming service." },
      ],
      gallery: [
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?w=300&h=300&fit=crop&auto=format",
        "https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?w=300&h=300&fit=crop&auto=format",
      ],
    },
    {
      id: 7,
      name: "Sunny Smiles Dental",
      category: "Healthcare",
      description: "A family-friendly dental clinic offering comprehensive care.",
      logo: "https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?w=300&h=300&fit=crop&auto=format",
      rating: 4.6,
      services: ["Checkups", "Cleanings", "Orthodontics"],
      hours: "Mon-Fri: 8AM-5PM",
      contact: { phone: "777-888-9999", email: "appointments@sunnysmiles.com", website: "sunnysmiles.com" },
      location: { lat: 37.7349, lng: -122.4694 },
      reviews: [
        { user: "David", rating: 5, comment: "Painless experience!" },
        { user: "Sophie", rating: 4, comment: "Friendly staff." },
      ],
      gallery: [
        "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?w=300&h=300&fit=crop&auto=format",
        "https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?w=300&h=300&fit=crop&auto=format",
      ],
    },
    {
      id: 8,
      name: "Coffee Corner",
      category: "Cafes",
      description: "A cozy cafe serving artisan coffee and pastries.",
      logo: "https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?w=100&h=100&fit=crop&auto=format",
      rating: 4.4,
      services: ["Dine-in", "Takeout", "Outdoor Seating"],
      hours: "Mon-Sun: 7AM-5PM",
      contact: { phone: "666-555-4444", email: "hello@coffeecorner.com", website: "coffeecorner.com" },
      location: { lat: 37.7249, lng: -122.4794 },
      reviews: [
        { user: "Anna", rating: 4.5, comment: "Best latte in town!" },
      ],
      gallery: [
        "https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?w=300&h=300&fit=crop&auto=format",
        "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?w=300&h=300&fit=crop&auto=format",
      ],
    },
    {
      id: 10,
      name: "Urban Cleaners",
      category: "Services",
      description: "Eco-friendly dry cleaning and laundry services.",
      logo: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?w=100&h=100&fit=crop&auto=format",
      rating: 4.1,
      services: ["Dry Cleaning", "Laundry", "Alterations"],
      hours: "Mon-Sat: 8AM-7PM",
      contact: { phone: "999-888-7777", email: "service@urbancleaners.com", website: "urbancleaners.com" },
      location: { lat: 37.7049, lng: -122.4994 },
      reviews: [
        { user: "Chris", rating: 4, comment: "Fast and reliable." },
      ],
      gallery: [
        "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?w=300&h=300&fit=crop&auto=format",
        "https://images.pexels.com/photos/372746/pexels-photo-372746.jpeg?w=300&h=300&fit=crop&auto=format",
      ],
    },
  ];
  
  export const categories = [
    "All",
    "Restaurants",
    "Retail",
    "Services",
    "Wellness",
    "Fitness",
    "Healthcare",
    "Cafes",
  ];