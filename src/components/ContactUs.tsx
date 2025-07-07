import React from "react";

function ContactUs() {
  return (
    <div id="contact-us" className="h-screen bg-white text-gray-900 px-6 py-12 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Contact Form */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Have a question or want to work together? Fill out the form below.
          </p>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={5}
                placeholder="Type your message here..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <ul className="text-gray-700 space-y-3">
            <li>
              📍 <strong>Address:</strong> 123 Developer Lane, Code City, India
            </li>
            <li>
              📞 <strong>Phone:</strong> +91 98765 43210
            </li>
            <li>
              📧 <strong>Email:</strong> contact@example.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
