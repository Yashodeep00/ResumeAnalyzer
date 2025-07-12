import React from 'react';
import { motion } from 'framer-motion';
import { FileText, TrendingUp, Zap } from 'lucide-react';

const Header = () => {
  return (
    <header className="gradient-bg text-white">
      <div className="container mx-auto px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center space-x-3">
            <div className="bg-white bg-opacity-20 p-2 rounded-lg">
              <FileText className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Resume Analyzer</h1>
              <p className="text-blue-100 text-sm">Smart compatibility analysis</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-blue-100">
              <TrendingUp className="h-5 w-5" />
              <span className="text-sm">AI-Powered</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-100">
              <Zap className="h-5 w-5" />
              <span className="text-sm">Instant Results</span>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header; 