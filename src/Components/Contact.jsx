import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const { register, formState: { errors } } = useForm();
  const { ref, inView } = useInView();
  const controls = useAnimation();
  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
   
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }
  
    
    const serviceID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const apiKey = import.meta.env.VITE_APP_EMAILJS_API_KEY;
  
    emailjs.sendForm(serviceID, templateID, e.target, apiKey)
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
        
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Email failed to send:', error.text);
        
        alert('Failed to send message. Please try again later.');
      });  

  };

  const containerVariants = {
    hidden: { x: '100vw' },
    visible: { x: 0, transition: { duration: 1, ease: 'easeOut' } }
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div className="max-w-screen-lg my-6 bg-gray-100" id="contact" ref={ref}>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-12 text-left"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className="bg-gradient-to-b from-green to-orange md:col-span-4 p-10 text-grey">
          <p className="mt-4 text-sm leading-7 text-yellow font-regular uppercase">Contact</p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            Get In <span className="text-yellow">Touch</span>
          </h3>
          <p className="mt-4 leading-7 text-grey">
            Do you have questions about how Waridi Home Grooming Services can help your company? Send us an email and we’ll get in touch shortly, or phone between 6:00 and 18:00 Monday to Saturday — we would be delighted to speak.
          </p>
          <div className="flex items-center mt-5">
            <FontAwesomeIcon icon={faHome} className="h-6 mr-2 text-yellow" />
            <span className="text-sm">Desoto Square, Ruiru Matangi Road, Nairobi - Kenya</span>
          </div>
          <div className="flex items-center mt-5">
            <FontAwesomeIcon icon={faEnvelope} className="h-6 mr-2 text-yellow" />
            <span className="text-sm">info@waridihomegrooming.com</span>
          </div>
          <div className="flex items-center mt-5">
            <FontAwesomeIcon icon={faPhoneAlt} className="h-6 mr-2 text-yellow" />
            <span className="text-sm">+254 707 863 773</span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="md:col-span-8 p-10">
          <div className="flex flex-wrap -mx-3 mb-6">
            <motion.div
              className="w-full md:w-1/2 px-3 mb-6 md:mb-0"
              variants={inputVariants}
            >
              <label className="block uppercase tracking-wide text-green text-xs font-bold mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                className={`appearance-none block w-full bg-grey text-yellow border ${errors.firstName ? 'border-orange' : 'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-500`}
                id="firstName"
                type="text"
                placeholder="Jane"
                {...register('firstName', { required: true })}
                value={formData.firstName} onChange={handleChange}
              />
              {errors.firstName && <p className="text-orange text-xs italic">Please fill out this field.</p>}
            </motion.div>
            <motion.div
              className="w-full md:w-1/2 px-3"
              variants={inputVariants}
            >
              <label className="block uppercase tracking-wide text-green text-xs font-bold mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                className={`appearance-none block w-full bg-grey text-yellow border ${errors.lastName ? 'border-orange' : 'border-grey'} rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-500`}
                id="lastName"
                type="text"
                placeholder="Doe"
                {...register('lastName', { required: true })}
                value={formData.lastName} onChange={handleChange}
              />
              {errors.lastName && <p className="text-orange text-xs italic">Please fill out this field.</p>}
            </motion.div>
          </div>
          <motion.div
            className="w-full md:w"
            variants={inputVariants}
          >
            <label className="block uppercase tracking-wide text-green text-xs font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className={`appearance-none block w-full bg-grey text-yellow border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-500`}
              id="email"
              type="email"
              placeholder="youremail@example.com"
              {...register('email', { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ })}
              value={formData.email} onChange={handleChange}
            />
            {errors.email && (
              <p className="text-orange text-xs italic">Please enter a valid email address.</p>
            )}
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 px-3 mb-6 md:mb-0"
            variants={inputVariants}
          >
            <label className="block uppercase tracking-wide text-green text-xs font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className={`appearance-none block w-full bg-grey text-yellow border ${errors.message ? 'border-orange' : 'border-grey'} rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-500 h-32 resize-none`}
              id="message"
              {...register('message', { required: true })}
              value={formData.message} onChange={handleChange}
              placeholder="Write your message here"
            ></textarea>
            {errors.message && <p className="text-orange text-xs italic">Please enter a message.</p>}
          </motion.div>
          <motion.div
            className="flex justify-between w-full px-3"
            variants={inputVariants}
          >
            <div className="md:flex md:items-center">
              <label className="block text-yellow font-bold">
                <input className="mr-2 leading-tight" type="checkbox" {...register('newsletter')} />
                <span className="text-sm">Send me your newsletter!</span>
              </label>
            </div>
            <button
              type="submit"
              className="shadow bg-orange bg-opacity-80 hover:bg-transparent hover:text-orange focus:shadow-outline focus:outline-none text-grey font-bold py-2 px-6 rounded"
            >
              Send Message
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;


