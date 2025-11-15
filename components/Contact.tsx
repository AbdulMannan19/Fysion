import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import emailjs from '@emailjs/browser';

const Contact3D: React.FC = () => (
  <div className="absolute bottom-10 left-10 w-16 h-16 floating-shape opacity-25 pointer-events-none hidden lg:block">
    <div className="w-full h-full relative robot-3d">
      <div className="absolute inset-0 bg-cyan-500/30 rounded-lg transform rotate-45 border border-cyan-400/60" style={{ boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)' }}></div>
      <div className="absolute inset-2 bg-cyan-400/30 rounded-lg border border-cyan-500/60" style={{ boxShadow: '0 0 15px rgba(0, 255, 255, 0.4)' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-300 rounded-full" style={{ boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)' }}></div>
    </div>
  </div>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: formRef, isVisible: formVisible } = useScrollAnimation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSubmitStatus('idle'); // Clear status when user types
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // EmailJS configuration - get from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'fysion3@gmail.com',
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-black/40 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Contact3D />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div ref={headerRef} className={`text-center mb-12 scroll-fade-in ${headerVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Let's Build Together</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">Have a project in mind or just want to learn more? We'd love to hear from you.</p>
        </div>
        <div ref={formRef} className={`max-w-4xl mx-auto bg-black/60 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/30 scroll-scale-up ${formVisible ? 'visible' : ''} shadow-[0_0_30px_rgba(0,255,255,0.2)]`}>
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="bg-black/40 border border-cyan-500/30 text-white text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,255,255,0.3)] block w-full p-2.5 transition-all duration-300" placeholder="John Doe" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="bg-black/40 border border-cyan-500/30 text-white text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,255,255,0.3)] block w-full p-2.5 transition-all duration-300" placeholder="john.doe@email.com" required />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Your Message</label>
              <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="bg-black/40 border border-cyan-500/30 text-white text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,255,255,0.3)] block w-full p-2.5 transition-all duration-300" placeholder="Tell us about your project..." required></textarea>
            </div>
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center">
                Something went wrong. Please try again or contact us directly.
              </div>
            )}
            <div className="text-center">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-black font-bold py-3 px-12 rounded-full text-lg transition-all duration-300 ease-in-out hover:scale-105 disabled:hover:scale-100 shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:shadow-[0_0_40px_rgba(0,255,255,0.8)]"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;