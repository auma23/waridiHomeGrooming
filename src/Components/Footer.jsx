import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.png"

const Footer = () => {
  return (

<footer className="bg-[#244343] text-white lg:text-left">
<div className="flex flex-col md:flex-row items-center justify-center border-b-2 border-neutral-200 p-6 lg:justify-between">
<div className="mb-4 md:mb-0 md:me-12 flex flex-col items-center md:items-start">
  <img src={logo} alt="Logo" className="h-30 w-40 mb-2" />
  <span className="block text-center md:text-left">Get connected with us on social networks:</span>
  <div className="flex justify-center md:justify-start">
    <a href="https://www.facebook.com/profile.php?id=61550708957551" className="me-6 hover:text-primary">
      <FontAwesomeIcon icon={faFacebook} className="h-4 w-4" />
    </a>
    <a href="#!" className="me-6 hover:text-primary">
      <FontAwesomeIcon icon={faTwitter} className="h-4 w-4" />
    </a>
    <a href="https://www.instagram.com/waridihomegroomingservices?utm_source=qr&igsh=dDFseDhhdDYwcXg0" className="me-6 hover:text-primary">
      <FontAwesomeIcon icon={faInstagram} className="h-4 w-4" />
    </a>
    <a href="#!" className="me-6 hover:text-primary">
      <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4" />
    </a>
    <a href="#!" className="hover:text-primary">
      <FontAwesomeIcon icon={faYoutube} className="h-4 w-4" />
    </a>
  </div>
</div>

  <div className="flex flex-col md:flex-row justify-center text-center md:text-left">
    <div className="mb-8 md:mb-0 md:me-12">
      <h6 className="mb-4 font-semibold uppercase">Waridi Home Grooming Services</h6>
      <p className="mb-4">
        <a href="#!" className="text-white hover:text-primary">About Us</a>
      </p>
      <p className="mb-4">
        <a href="#!" className="text-white hover:text-primary">Contact Us</a>
      </p>
      <p>
        <a href="#!" className="text-white hover:text-primary">Terms of Service</a>
      </p>
    </div>
    <div className="mb-8 md:mb-0 md:me-12">
      <h6 className="mb-4 font-semibold uppercase">Products</h6>
      <p className="mb-4">
        <a href="#!" className="text-white hover:text-primary">Laundry & Cleaning</a>
      </p>
      <p className="mb-4">
        <a href="#!" className="text-white hover:text-primary">B&B Maintainance</a>
      </p>
      <p className="mb-4">
        <a href="#!" className="text-white hover:text-primary">Interior Decor and finishing</a>
      </p>
      <p>
        <a href="#!" className="text-white hover:text-primary">Landscaping</a>
      </p>
    </div>
    <div className="mb-8 md:mb-0 md:me-12">
      <h6 className="mb-4 font-semibold uppercase">Quick Links</h6>
      <p className="mb-4">
        <a href="#!" className="text-white hover:text-primary">Company Overview</a>
      </p>
      <p className="mb-4">
        <a href="#!" className="text-white hover:text-primary">Company History</a>
      </p>
      <p className="mb-4">
        <a href="#!" className="text-white hover:text-primary">Partners</a>
      </p>
      <p>
        <a href="#!" className="text-white hover:text-primary">Careers</a>
      </p>
    </div>
    <div>
      <h6 className="mb-4 font-semibold uppercase">Contact</h6>
      <p className="mb-4 flex items-center justify-center md:justify-start">
        <span className="me-3 hover:text-primary">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5" />
        </span>
        Posta Apartments, Ring Road Westlands, Nairobi - Kenya
      </p>
      <p className="mb-4 flex items-center justify-center md:justify-start">
        <span className="me-3 hover:text-primary">
          <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
        </span>
        info@waridihomegrooming.com
      </p>
      <p className="flex items-center justify-center md:justify-start">
        <span className="me-3 hover:text-primary">
          <FontAwesomeIcon icon={faPhoneAlt} className="h-5 w-5" />
        </span>
        +254 707 863 773
      </p>
    </div>
  </div>
</div>

{/* Copyright section */}
<div className="bg-black/5 p-6 text-center">
  <span>© 2024 Copyright:</span>
  <a className="font-semibold text-white" href="#">
    WaridiHomeGrooming Services Ltd Powered by Auma - Waridi Kenya
  </a>
</div>
</footer>

   );
    };

export default Footer;

