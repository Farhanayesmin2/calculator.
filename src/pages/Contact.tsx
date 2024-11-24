import React, { useState } from 'react';
import { Mail, MessageSquare } from 'lucide-react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <MessageSquare className="h-8 w-8 text-green-500" />
          <h1 className="text-3xl font-bold">Contact Us</h1>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p className="text-gray-300">
              We've received your message and will get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                rows={5}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        )}

        <div className="mt-12 prose prose-invert max-w-none">
          <h2>Get in Touch</h2>
          <p>
            Have questions about our calculators? Need help with calculations?
            We're here to help! Fill out the form above or reach out through our
            social media channels.
          </p>

          <h3>Other Ways to Connect</h3>
          <ul>
            <li>Follow us on Twitter for updates</li>
            <li>Join our Discord community</li>
            <li>Subscribe to our newsletter</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;