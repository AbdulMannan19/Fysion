import React from 'react';
import { Link } from 'react-router-dom';

const DataDeletion: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white py-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <Link to="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                    Back to Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-400 to-purple-300">
                    Data Deletion
                </h1>

                <div className="space-y-8 text-gray-300 leading-relaxed">
                    <p>
                        In accordance with Facebook Platform rules and General Data Protection Regulations, FYSION provides the following instructions for users who wish to delete their data from our systems.
                    </p>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">How to Request Data Deletion</h2>
                        <p className="mb-4">
                            If you have interacted with our AI agents via WhatsApp and wish to remove your phone number, chat history, and order logs from our database (Supabase), please follow these steps:
                        </p>
                        <ol className="list-decimal list-inside space-y-3 ml-4">
                            <li>Send an email at <a href="mailto:fysion3@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">fysion3@gmail.com</a>.</li>
                            <li>Use the Subject Line: <strong className="text-white">"Data Deletion Request - WhatsApp Agent"</strong>.</li>
                            <li>In the body of the email, please include the <strong className="text-white">Phone Number</strong> associated with the data you wish to delete.</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">What Happens Next?</h2>
                        <p className="mb-4">Once we receive your request:</p>
                        <ul className="list-disc list-inside space-y-3 ml-4">
                            <li>We will verify the request to ensure the safety of the account.</li>
                            <li>We will manually delete all chat logs, order history, and personal identifiers associated with your phone number from our Supabase database.</li>
                            <li>We will send you a confirmation email once the deletion is complete (typically within 48-72 hours).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Data Retention Policy</h2>
                        <p>
                            Unless a deletion request is received, we retain chat history for quality assurance and AI training purposes to improve our food ordering service.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default DataDeletion;
