export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto py-24 px-6 bg-black">
      <div className="bg-gray-900 p-16 shadow-lg border border-gray-700">
        <h2 className="text-4xl font-light text-white text-center mb-4">
          Get In <span className="text-yellow-500">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mb-16"></div>
        <div className="grid md:grid-cols-2 gap-16">
          <form className="flex flex-col gap-6">
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              className="border-0 border-b border-gray-600 pb-3 focus:border-yellow-500 focus:outline-none text-lg font-light bg-transparent text-white placeholder-gray-400" 
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              className="border-0 border-b border-gray-600 pb-3 focus:border-yellow-500 focus:outline-none text-lg font-light bg-transparent text-white placeholder-gray-400" 
              required 
            />
            <input 
              type="tel" 
              name="phone" 
              placeholder="Phone" 
              className="border-0 border-b border-gray-600 pb-3 focus:border-yellow-500 focus:outline-none text-lg font-light bg-transparent text-white placeholder-gray-400" 
              required 
            />
            <textarea 
              name="message" 
              placeholder="Message" 
              className="border-0 border-b border-gray-600 pb-3 focus:border-yellow-500 focus:outline-none text-lg font-light bg-transparent resize-none text-white placeholder-gray-400" 
              rows={3} 
              required 
            />
            <button 
              type="submit" 
              className="bg-white text-black py-4 px-8 text-lg font-medium hover:bg-yellow-500 hover:text-black transition-all duration-300 mt-4"
            >
              Send Message
            </button>
          </form>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-white mb-2 border-b border-yellow-500 pb-1 inline-block">Address</h3>
              <p className="text-lg text-gray-300 font-light leading-relaxed">
                Kottapuram Rd, Aroor gram panchayat<br />
                Kochi, Kerala 688534
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2 border-b border-yellow-500 pb-1 inline-block">Phone</h3>
              <p className="text-lg text-gray-300 font-light">+91 9971281622</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2 border-b border-yellow-500 pb-1 inline-block">Email</h3>
              <p className="text-lg text-gray-300 font-light">info@lmdinternational.com</p>
            </div>
            <iframe
              title="Google Maps"
              src="https://maps.google.com/maps?q=Kottapuram+Rd,+Aroor+gram+panchayat,+Kochi,+Kerala+688534&output=embed"
              width="100%"
              height="250"
              className="border-2 border-yellow-500"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
