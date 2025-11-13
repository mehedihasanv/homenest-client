// Footer.jsx
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { PiXLogoBold } from "react-icons/pi"; // New X logo

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Name */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-2">🏡 HomeNest</h2>
          <p className="text-sm text-gray-300">
            Your trusted platform for buying, selling, and renting properties across Bangladesh.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm text-gray-300">Email: support@homenest.com</p>
          <p className="text-sm text-gray-300">Phone: +880 1234-567890</p>
          <p className="text-sm text-gray-300">Address: Gulshan, Dhaka, Bangladesh</p>
        </div>

        {/* Links & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/faq" className="hover:underline">FAQs</a></li>
          </ul>

          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="text-xl hover:text-blue-500" />
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer">
              <PiXLogoBold className="text-xl hover:text-gray-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="text-xl hover:text-pink-500" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn className="text-xl hover:text-blue-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} HomeNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
