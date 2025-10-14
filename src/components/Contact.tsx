export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-yellow-600 text-center">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <form className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col gap-4">
          <input type="text" name="name" placeholder="Name" className="border rounded p-3" required />
          <input type="email" name="email" placeholder="Email" className="border rounded p-3" required />
          <input type="tel" name="phone" placeholder="Phone" className="border rounded p-3" required />
          <textarea name="message" placeholder="Message" className="border rounded p-3" rows={4} required />
          <button type="submit" className="bg-yellow-600 text-white font-bold py-3 px-6 rounded hover:bg-yellow-700 transition">Send Message</button>
        </form>
        <div className="flex flex-col gap-4 justify-center">
          <div>
            <span className="font-bold">Address:</span> Kottapuram Rd , Aroor gram panchayat <br></br> Kochi , Kerela 688534
          </div>
          <div>
            <span className="font-bold">Phone:</span> +91 9971281622
          </div>
          <div>
            <span className="font-bold">Email:</span> info@lmdinternational.com
          </div>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363155047!3d-37.81720974202198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f7f7b1%3A0x5045675218ce6e0!2s123%20Builder%20Ave!5e0!3m2!1sen!2sau!4v1620000000000!5m2!1sen!2sau"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
