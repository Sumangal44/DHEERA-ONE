import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 w-full mt-auto shadow-md">
      <div className="max-w-6xl mx-auto px-6">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center sm:text-left">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-semibold mb-3 text-white">
              Stock Calculator
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Simplifying stock calculations for smart investments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-3 text-white">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition text-base"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-white transition text-base"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-gray-400 hover:text-white transition text-base"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition text-base"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h2 className="text-xl font-semibold mb-3 text-white">
              Connect With Us
            </h2>
            <p className="text-sm text-gray-400 mb-3">
              Email:{" "}
              <a
                href="mailto:support@stockcalculator.com"
                className="text-gray-300 hover:text-white underline"
              >
                support@stockcalculator.com
              </a>
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a
                href="#"
                className="text-white bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="text-white bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                className="text-white bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="text-white bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-3 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Stock Calculator. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
