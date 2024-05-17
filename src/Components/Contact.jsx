import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Replace this with your form submission logic (e.g., sending data to an API)
  };

  return (
    
    <div className="max-w-screen-lg  my-6 bg-gray-100" id='contact' >
      <div className="grid grid-cols-1 md:grid-cols-12 text-left">
        <div className="bg-gradient-to-b from-green to-orange md:col-span-4 p-10 text-grey">
          <p className="mt-4 text-sm leading-7 text-yellow font-regular uppercase">Contact</p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            Get In <span className="text-yellow">Touch</span>
          </h3>
          <p className="mt-4 leading-7 text-grey">
          Do you have questions about how BranHerick International can help your company? Send us an email and we’ll get in touch shortly, or phone between 8:00 and 18:00 Monday to Saturday — we would be delighted to speak.
          </p>
          <div className="flex items-center mt-5">
            <FontAwesomeIcon icon={faHome} className="h-6 mr-2 text-yellow" />
            <span className="text-sm">Posta Apartments, Ring Road Westlands, Nairobi - Kenya</span>
          </div>
          <div className="flex items-center mt-5">
            <FontAwesomeIcon icon={faEnvelope} className="h-6 mr-2 text-yellow" />
            <span className="text-sm">info@waridihomegrooming.com</span>
          </div>
          <div className="flex items-center mt-5">
            <FontAwesomeIcon icon={faPhoneAlt} className="h-6 mr-2 text-yellow" />
            <span className="text-sm">+254 733 139 202</span>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="md:col-span-8 p-10">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-green text-xs font-bold mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                className={`appearance-none block w-full bg-grey text-yellow border ${errors.firstName ? 'border-orange' : 'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-500`}
                id="firstName"
                type="text"
                placeholder="Jane"
                {...register('firstName', { required: true })}
              />
              {errors.firstName && <p className="text-orange text-xs italic">Please fill out this field.</p>}
            </div>
            <div className="w-full md:w-1/2 px-3">
  <label className="block uppercase tracking-wide text-green text-xs font-bold mb-2" htmlFor="lastName">
    Last Name
  </label>
  <input
    className={`appearance-none block w-full bg-grey text-yellow border ${errors.lastName ? 'border-orange' : 'border-grey'} rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-500`}
    id="lastName"
    type="text"
    placeholder="Doe"
    {...register('lastName', { required: true })}
  />
  {errors.lastName && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
</div>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-green text-xs font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className={`appearance-none block w-full bg-grey text-yellow border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-500`}
                    id="email"
                    type="email"
                    placeholder="youremail@example.com"
                    {...register('email', { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ })}
                  />
                  {errors.email && (
                    <p className="text-orange text-xs italic">Please enter a valid email address.</p>
                  )}
                </div>
                <div className="w-full px-3 mb-6">
                  <label className="block uppercase tracking-wide text-green text-xs font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className={`appearance-none block w-full bg-grey text-gray-700 border ${errors.message ? 'border-orange' : 'border-grey'} rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-500 h-32 resize-none`}
                    id="message"
                    {...register('message', { required: true })}
                    placeholder="Write your message here"
                  ></textarea>
                  {errors.message && <p className="text-orange text-xs italic">Please enter a message.</p>}
                </div>
                <div className="flex justify-between w-full px-3">
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
                </div>
              </form>
            </div>
          </div>
          
          );
          }
          
          export default Contact;