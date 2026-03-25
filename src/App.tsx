import React, { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  ShoppingBag,
  Menu,
  X,
  Instagram,
  Facebook,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- Types ---
interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

// --- Data ---
const PRODUCTS: Product[] = [
  // {
  //   id: 1,
  //   name: "Premium Kaju Katli",
  //   description: "Rich and creamy cashew fudge made with pure desi ghee.",
  //   price: "₹800/kg",
  //   image: "https://images.unsplash.com/photo-1605192554106-d549b1b975cd?auto=format&fit=crop&q=80&w=800",
  //   category: "Sweets"
  // },
  {
    id: 2,
    name: "Designer Birthday Cake",
    description: "Customized fresh cream cakes for your special moments.",
    price: "Starts ₹450",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
    category: "Cakes",
  },
  // {
  //   id: 3,
  //   name: "Motichoor Laddu",
  //   description: "Traditional melt-in-mouth laddus made with fine gram flour.",
  //   price: "₹400/kg",
  //   image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=800",
  //   category: "Sweets"
  // },
  {
    id: 4,
    name: "Assorted Dry Fruits",
    description: "Premium quality handpicked dry fruits gift boxes.",
    price: "Starts ₹500",
    image:
      "https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&q=80&w=800",
    category: "Snacks",
  },
  // {
  //   id: 5,
  //   name: "Fresh Paneer Jalebi",
  //   description: "Crispy and juicy jalebis made with fresh cottage cheese.",
  //   price: "₹350/kg",
  //   image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&q=80&w=800",
  //   category: "Sweets"
  // },
  {
    id: 6,
    name: "Spicy Namkeen Mix",
    description: "Crunchy and savory snacks perfect for tea time.",
    price: "₹200/kg",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800",
    category: "Snacks",
  },
  {
    id: 7,
    name: "Milk Cake",
    description: "Traditional Alwar style milk cake with a grainy texture.",
    price: "₹550/kg",
    image:
      "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&q=80&w=800", // Fallback
    category: "Sweets",
  },
  {
    id: 8,
    name: "Chocolate Pastries",
    description: "Rich dark chocolate layered pastries with ganache.",
    price: "₹60/piece",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800",
    category: "Cakes",
  },
];

// --- Components ---

const Navbar = ({
  darkMode,
  toggleDarkMode,
}: {
  darkMode: boolean;
  toggleDarkMode: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
            <span className="text-xl font-display font-bold text-gray-900 dark:text-white hidden sm:block">
              Shiv Shakti <span className="text-red-500">Confectionery</span>
            </span>
            <span className="text-xl font-display font-bold text-gray-900 dark:text-white sm:hidden">
              Shiv Shakti
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Products", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors"
              >
                {item}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {["Home", "Products", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const whatsappUrl =
    "https://wa.me/919729588468?text=I%20want%20to%20order%20from%20Shiv%20Shakti%20Confectionery";

  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-center overflow-hidden bg-white dark:bg-gray-950"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent dark:from-gray-950 dark:via-gray-950/90 z-10" />
        <img
          src="https://images.unsplash.com/photo-1582231373663-266aca2f15b6?auto=format&fit=crop&q=80&w=1920"
          alt="Sweets Background"
          className="w-full h-full object-cover opacity-40 dark:opacity-20"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-red-600 uppercase bg-red-50 dark:bg-red-900/20 rounded-full">
            Safidon's Finest Confectionery
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 dark:text-white leading-tight mb-6">
            Fresh & Delicious <span className="text-red-500">Sweets</span> Made
            with Love
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            Experience the authentic taste of tradition. From premium Kaju Katli
            to fresh designer cakes, we bring sweetness to your every
            celebration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-red-500/25 gap-2"
            >
              <MessageCircle size={20} />
              Order on WhatsApp
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
            >
              Explore Menu
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const encodedMsg = encodeURIComponent(
    `Hello, I want to order ${product.name} from Shiv Shakti Confectionery`,
  );
  const whatsappUrl = `https://wa.me/919729588468?text=${encodedMsg}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full uppercase tracking-wider">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-red-500 transition-colors">
            {product.name}
          </h3>
          <span className="text-red-500 font-bold">{product.price}</span>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 line-clamp-2">
          {product.description}
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl hover:bg-red-500 dark:hover:bg-red-500 hover:text-white dark:hover:text-white transition-all gap-2"
        >
          <ShoppingBag size={18} />
          Order Now
        </a>
      </div>
    </motion.div>
  );
};

const Products = () => {
  return (
    <section
      id="products"
      className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Our Signature <span className="text-red-500">Delicacies</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Handcrafted with the finest ingredients and traditional recipes to
            ensure every bite is a celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-2xl z-0" />
            <img
              src="https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&q=80&w=800"
              alt="Our Shop"
              className="relative z-10 rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 bg-red-500 p-8 rounded-3xl text-white z-20 hidden md:block">
              <p className="text-4xl font-bold mb-1">20+</p>
              <p className="text-sm font-medium opacity-90 uppercase tracking-wider">
                Years of Excellence
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-6">
              A Legacy of <span className="text-red-500">Sweetness</span> in
              Safidon
            </h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Shiv Shakti Confectionery has been a cornerstone of Safidon's
                sweet traditions for over two decades. We believe that sweets
                are more than just food; they are a medium of sharing joy and
                love.
              </p>
              <p>
                Our master confectioners use only the purest ingredients—fresh
                milk, premium nuts, and pure desi ghee—to create delicacies that
                remind you of home. From traditional Indian sweets to modern
                designer cakes, our quality remains unmatched.
              </p>
              <ul className="space-y-3">
                {[
                  "100% Fresh Ingredients",
                  "Traditional Recipes",
                  "Hygienic Preparation",
                  "Customized Orders",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-500">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                    </div>
                    <span className="font-medium text-gray-900 dark:text-gray-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-900 rounded-[3rem] shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-16 bg-red-500 text-white">
              <h2 className="text-4xl font-display font-bold mb-8">
                Get in Touch
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Our Location</p>
                    <p className="opacity-90">
                      Old Anaj Mandi, Safidon (Jind), Haryana - 126112
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Call Us</p>
                    <p className="opacity-90">+91 9729588468</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">WhatsApp</p>
                    <p className="opacity-90">Available for orders 24/7</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/20">
                <p className="text-sm opacity-80 mb-4 uppercase tracking-widest">
                  Follow Us
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Send us a Message
              </h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-red-500 outline-none transition-all text-gray-900 dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-red-500 outline-none transition-all text-gray-900 dark:text-white"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-red-500 outline-none transition-all text-gray-900 dark:text-white"
                    placeholder="Tell us what you're looking for..."
                  ></textarea>
                </div>
                <button className="w-full py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-red-500/25">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 py-12 border-t border-gray-100 dark:border-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="text-xl font-display font-bold text-gray-900 dark:text-white">
                Shiv Shakti <span className="text-red-500">Confectionery</span>
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-6">
              Bringing sweetness to Safidon since 2000. Premium quality sweets,
              cakes, and snacks for every occasion.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
              <li>
                <a
                  href="#home"
                  className="hover:text-red-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-red-500 transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-red-500 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-red-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">
              Business Hours
            </h4>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
              <li className="flex justify-between">
                <span>Mon - Sat:</span> <span>8 AM - 9 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span> <span>8 AM - 8 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2026 Shiv Shakti Confectionery. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-400">
            <a href="#" className="hover:text-red-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// export default function App() {
//   const [darkMode, setDarkMode] = useState(() => {
//     const saved = localStorage.getItem('theme');
//     return saved === 'dark';
//   });

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   }, [darkMode]);

//   const toggleDarkMode = () => setDarkMode(!darkMode);

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // 🔥 Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // 🔥 Apply theme on change
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // 🔥 FIXED toggle
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 font-sans">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
