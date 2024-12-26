'use client';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<string | null>(null);
  const [snackbar, setSnackbar] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSnackbar('Sending message...');

    const emailData = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    };

    emailjs.send('your_service_id', 'your_template_id', emailData, 'your_user_id')
        .then((response) => {
          console.log('SUCCESS!', response);
          setStatus('Your message has been sent successfully!');
          setSnackbar('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
          console.log('FAILED...', error);
          setStatus('Oops! Something went wrong. Please try again later.');
          setSnackbar('Failed to send message. Please try again.');
        });

    setTimeout(() => {
      setSnackbar(null);
    }, 10000);
  };

  return (
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Contact Us</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-600">
                    <span className="text-primary mr-2">📍</span>
                    <a href="https://maps.app.goo.gl/koyspyCt39cGaRfk6">
                      NSUT, Sector-3, Dwarka, New Delhi
                    </a>
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="text-primary mr-2">📧</span>
                    <a href="mailto:fes@nsut.ac.in">fes@nsut.ac.in</a>
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="text-primary mr-2">📱</span>
                    +91 88103 35592
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                  />
                </div>
                <button
                    type="submit"
                    className="w-full bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Send Message
                </button>
              </form>

              {snackbar && (
                  <div
                      className={`fixed bottom-5 left-5 px-6 py-3 rounded-lg text-white shadow-lg ${snackbar.includes('success') ? 'bg-green-500' : 'bg-red-500'} transition-all duration-500`}
                  >
                    {snackbar}
                  </div>
              )}
            </div>
          </div>
        </div>
      </section>
  );
}
