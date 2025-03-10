import { useState } from 'react';

const Contact = () => {
  const [notification, setNotification] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setNotification(true);

    // Hide the notification after 3 seconds
    setTimeout(() => setNotification(false), 5000);
  };

  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center px-6">
      <div className="w-full max-w-[500px] bg-[#112240] p-8 rounded-lg shadow-lg text-gray-300">
        <h2 className="text-3xl font-bold text-center border-b-4 border-pink-600 pb-4">Contact Me</h2>
        {/* Floating Notification */}
        {notification && (
          <div className="fixed bottom-5 right-5 bg-gray-500 text-white px-4 py-2 rounded-md shadow-lg animate-slide-in">
            Sending message is currently disabled, please reach out via email.
          </div>
        )}
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 mb-4 bg-[#0a192f] border border-gray-600 rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 mb-4 bg-[#0a192f] border border-gray-600 rounded-md"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="p-3 mb-4 bg-[#0a192f] border border-gray-600 rounded-md"></textarea>
          <button className="bg-pink-600 hover:bg-pink-700 py-3 rounded-md text-white font-bold">Send Message</button>
        </form>
        <p className="mt-6 text-sm text-gray-400 text-cente">
          Or, reach out directly via
          <a href="mailto:rodneytph@gmail.com" className="text-pink-600 font-semibold hover:underline ml-1">
            rodneytph@gmail.com
          </a>
        </p>
      </div>
      {/* Tailwind Animation */}
      <style>
        {`
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-slide-in {
            animation: slideIn 0.5s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
