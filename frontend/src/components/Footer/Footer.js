import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-4 sm:px-6 lg:px-8 py-10">
      {/* Buttons Section */}
      <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mb-10">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors duration-200">
          Book a Demo
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors duration-200">
          Activate Code
        </button>
      </div>
      <hr className="border-gray-600 mb-10" />

      {/* Links Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-sm">
        {/* Services */}
        <div>
          <h4 className="font-semibold text-gray-300 mb-3 ml-8">Services</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="#" className="text-white hover:text-white transition-colors duration-200 no-underline">Government</Link></li>
            <li><Link to="#" className="text-white hover:text-white transition-colors duration-200 no-underline">School Education</Link></li>
            <li><Link to="#" className="text-white hover:text-white transition-colors duration-200 no-underline">Higher Education</Link></li>
            <li><Link to="#" className="text-white hover:text-white transition-colors duration-200 no-underline">Skill Education</Link></li>
            <li><Link to="#" className="text-white hover:text-white transition-colors duration-200 no-underline">Youth</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-gray-300 mb-3 ml-6">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="#" className="text-white hover:text-white transition-colors duration-200 no-underline">Testimonials</Link></li>
            <li><Link to="#" className="text-white hover:text-white transition-colors duration-200 no-underline">Blogs</Link></li>
            <li><Link to="#" className="text-white hover:text-white transition-colors duration-200 no-underline">MyJobPortal International</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-gray-300 mb-3 ml-6">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="#" className="text-white hover:text-white transition-colors duration-200 no-underline">About Us</Link></li>
            <li><Link to="#" className="text-white hover:text-white transition-colors duration-200 no-underline">Contact Us</Link></li>
            <li><Link to="#" className="text-white hover:text-white transition-colors duration-200 no-underline">Jobs</Link></li>
            <li><Link to="#" className="text-white hover:text-white transition-colors duration-200 no-underline">Partner With Us</Link></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="font-semibold text-gray-300 mb-3 ml-6">Policies</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="#" className="text-white hover:text-blue-500 transition-colors duration-200 no-underline">Terms of Use</Link></li>
            <li><Link to="#" className="text-white hover:text-blue-500 transition-colors duration-200 no-underline">Privacy Notice</Link></li>
            <li><Link to="#" className="text-white hover:text-blue-500 transition-colors duration-200 no-underline">Cookie Policy</Link></li>
            <li><Link to="#" className="text-white hover:text-blue-500 transition-colors duration-200 no-underline">Customize Cookies</Link></li>
           
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold text-gray-300 mb-3 ml-2">Find us on</h4>
          <div className="flex gap-4 mt-2 text-gray-400">
            <Link to="#" className="text-white hover:text-white transition-colors duration-200"><FaFacebookF size={20} /></Link>
            <Link to="#" className="text-white hover:text-white transition-colors duration-200"><FaTwitter size={20} /></Link>
            <Link to="#" className="text-white hover:text-white transition-colors duration-200"><FaLinkedinIn size={20} /></Link>
            <Link to="#" className="text-white hover:text-white transition-colors duration-200"><FaInstagram size={20} /></Link>
            <Link to="#" className="text-white hover:text-white transition-colors duration-200"><FaYoutube size={20} /></Link>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-white mb-3 ml-2">Reach Us</h4>
          <div className="flex items-center gap-2 mb-2 text-gray-400">
            <FaPhone size={16} />
            <span>+91 6203794434</span>
          </div>
          <div className="flex items-start gap-2 text-gray-400">
            <FaMapMarkerAlt size={16} className="mt-1" />
            <address className="not-italic text-sm">
             Old High Court, Ahmedabad
              <br />
              Gujarat, India
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
