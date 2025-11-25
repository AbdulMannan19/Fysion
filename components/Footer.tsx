import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-purple-500/20">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-400 mb-2">&copy; {new Date().getFullYear()} Fysion Intelligence. All rights reserved.</p>
          <div className="flex gap-4 text-sm flex-wrap justify-center">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-purple-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/terms-conditions" className="text-gray-400 hover:text-purple-400 transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/data-deletion" className="text-gray-400 hover:text-purple-400 transition-colors">
              Data Deletion
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;