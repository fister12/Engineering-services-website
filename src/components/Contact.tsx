export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
            Get In <span className="text-yellow-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
            Let's discuss your next project
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  className="w-full border-0 border-b-2 border-gray-200 dark:border-gray-600 pb-3 focus:border-yellow-500 focus:outline-none text-lg font-light bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors" 
                  required 
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Address" 
                  className="w-full border-0 border-b-2 border-gray-200 dark:border-gray-600 pb-3 focus:border-yellow-500 focus:outline-none text-lg font-light bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors" 
                  required 
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone Number" 
                  className="w-full border-0 border-b-2 border-gray-200 dark:border-gray-600 pb-3 focus:border-yellow-500 focus:outline-none text-lg font-light bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors" 
                  required 
                />
              </div>
              <div>
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  className="w-full border-0 border-b-2 border-gray-200 dark:border-gray-600 pb-3 focus:border-yellow-500 focus:outline-none text-lg font-light bg-transparent resize-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors" 
                  rows={4} 
                  required 
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-gray-900 dark:bg-white text-white dark:text-black py-4 px-8 text-lg font-medium hover:bg-yellow-500 hover:text-black dark:hover:bg-yellow-500 transition-all duration-300 rounded-lg mt-6"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                Address
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                Kottapuram Rd, Aroor gram panchayat<br />
                Kochi, Kerala 688534
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                Contact
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-light mb-2">+91 9971281622</p>
              <p className="text-gray-600 dark:text-gray-400 font-light">info@lmdinternational.com</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                Location
              </h3>
              <iframe
                title="Google Maps"
                src="https://maps.google.com/maps?q=Kottapuram+Rd,+Aroor+gram+panchayat,+Kochi,+Kerala+688534&output=embed"
                width="100%"
                height="200"
                className="rounded-lg border border-gray-200 dark:border-gray-600"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
