// pages/about.js
import Head from 'next/head';

const About = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg top-spacing">
      <Head>
        <title>About Us - Sunridge Foods Marketplace</title>
        <meta
          name="description"
          content="Learn more about Sunridge Foods Marketplace - your trusted source for quality groceries."
        />
      </Head>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">About Us</h1>
        <p className="text-gray-700 mb-4">
          Welcome to Sunridge Foods Marketplace, where quality and convenience
          meet to enhance your culinary journey. Our mission is to provide you
          with a seamless online shopping experience for all your grocery needs,
          and our commitment to excellence is reflected in every product we
          offer.
        </p>
        <h2 className="text-xl font-semibold mb-2">Our Story</h2>
        <p className="text-gray-700 mb-4">
          At Sunridge Foods Marketplace, we believe that food is more than just
          sustenance – it's an integral part of our culture and identity. Our
          journey began with a simple idea: to connect people with the finest
          ingredients from around the world, making it easier for you to create
          memorable meals and nourish your loved ones.
        </p>
        <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
        <p className="text-gray-700 mb-4">
          We envision a world where food enthusiasts and home cooks alike have
          access to an extensive range of premium ingredients. Our goal is to be
          your trusted partner in the kitchen, offering a diverse selection of
          products that inspire creativity and elevate your cooking experience.
        </p>
        <h2 className="text-xl font-semibold mb-2">Quality Assurance</h2>
        <p className="text-gray-700 mb-4">
          We take pride in sourcing products of the highest quality. Every item
          on our virtual shelves undergoes rigorous quality checks to ensure
          freshness, authenticity, and flavor. We partner with trusted suppliers
          who share our commitment to excellence, and we work tirelessly to
          maintain the highest standards throughout our marketplace.
        </p>
        <h2 className="text-xl font-semibold mb-2">Our Commitment to You</h2>
        <p className="text-gray-700 mb-4">
          - <strong>Quality:</strong> We are dedicated to providing you with the
          finest quality products, carefully curated to meet your culinary
          needs.
          <br />
          - <strong>Convenience:</strong> Our user-friendly platform ensures a
          hassle-free shopping experience, with secure payment options and
          reliable delivery services.
          <br />
          - <strong>Inspiration:</strong> Explore our diverse range of
          ingredients and discover new flavors and cooking techniques to expand
          your culinary horizons.
          <br />
          - <strong>Community:</strong> Join our growing community of food
          enthusiasts, where you can share recipes, tips, and stories that
          celebrate the joy of cooking.
        </p>
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          We value your feedback and are here to assist you in any way we can.
          If you have any questions, suggestions, or concerns, please don't
          hesitate to reach out to us.
        </p>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Email: support@sunridgefoods.com</li>
          <li>Phone: 123-456-7890</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">Connect with Us</h2>
        <p className="text-gray-700 mb-4">
          Stay updated with the latest news, recipes, and promotions by
          following us on social media:
        </p>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>
            Facebook:{' '}
            <a
              href="https://www.facebook.com/sunridgefoods"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sunridge Foods Marketplace
            </a>
          </li>
          <li>
            Instagram:{' '}
            <a
              href="https://www.instagram.com/sunridgefoodsmarket/"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              SunridgeFoodsMarket
            </a>
          </li>
          <li>
            Twitter:{' '}
            <a
              href="https://twitter.com/sunridgemarket"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sunridge Market
            </a>
          </li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">Visit Us</h2>
        <p className="text-gray-700 mb-4">
          While you can enjoy the convenience of shopping online, we also
          welcome you to visit our physical store located at:
        </p>
        <address className="text-gray-700 mb-4">
          Sunridge Foods Marketplace
          <br />
          1234 Culinary Lane
          <br />
          Your City, Your Zip Code
        </address>
        <p className="text-gray-700">
          We look forward to serving you and being a part of your culinary
          adventures. Thank you for choosing Sunridge Foods Marketplace, where
          quality and flavor meet at your doorstep.
        </p>
      </div>
    </div>
  );
};

export default About;
