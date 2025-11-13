import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { PiXLogoBold } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-3xl font-extrabold text-blue-400 mb-3">🏡 HomeNest</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Your trusted platform for buying, selling, and renting properties across Bangladesh.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-white">📞 Contact Us</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>Email: <a href="mailto:support@homenest.com" className="hover:underline">support@homenest.com</a></li>
            <li>Phone: +880 1234-567890</li>
            <li>Address: Gulshan, Dhaka, Bangladesh</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-white">🔗 Quick Links</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><a href="/terms" className="hover:text-blue-400 transition">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-blue-400 transition">Privacy Policy</a></li>
            <li><a href="/faq" className="hover:text-blue-400 transition">FAQs</a></li>
          </ul>

          <div className="flex gap-4 mt-5">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="text-xl hover:text-blue-500 transition" />
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer">
              <PiXLogoBold className="text-xl hover:text-gray-400 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="text-xl hover:text-pink-500 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn className="text-xl hover:text-blue-300 transition" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-12 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} <span className="text-blue-400 font-semibold">HomeNest</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
