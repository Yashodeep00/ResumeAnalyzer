import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Target, Lightbulb } from 'lucide-react';

const JobDescriptionInput = ({ jobDescription, setJobDescription }) => {
  const wordCount = jobDescription.trim().split(/\s+/).filter(word => word.length > 0).length;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="card"
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-secondary-800 mb-2">Job Description</h2>
        <p className="text-secondary-600">Paste the job description to analyze compatibility</p>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="jobDescription" className="block text-sm font-medium text-secondary-700 mb-2">
            Job Description
          </label>
          <textarea
            id="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the job description here... Include requirements, responsibilities, and qualifications for better analysis."
            className="input-field h-48 resize-none"
            rows="8"
          />
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-secondary-500">
              {wordCount} words
            </span>
            <span className="text-sm text-secondary-500">
              {jobDescription.length}/5000 characters
            </span>
          </div>
        </div>

        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-start space-x-3">
            <Target className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-blue-800 mb-1">What to include:</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Job title and company name</li>
                <li>• Required skills and qualifications</li>
                <li>• Preferred experience and education</li>
                <li>• Key responsibilities and duties</li>
                <li>• Technical requirements or certifications</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <div className="flex items-start space-x-3">
            <Lightbulb className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-amber-800 mb-1">Pro Tips:</h3>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• Copy the entire job posting for comprehensive analysis</li>
                <li>• Include both "required" and "preferred" qualifications</li>
                <li>• Don't forget to mention industry-specific keywords</li>
                <li>• Include soft skills and personality traits mentioned</li>
              </ul>
            </div>
          </div>
        </div>

        {jobDescription.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 bg-green-50 border border-green-200 rounded-lg"
          >
            <div className="flex items-center space-x-2">
              <Briefcase className="h-4 w-4 text-green-600" />
              <span className="text-sm text-green-700 font-medium">
                Job description ready for analysis
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default JobDescriptionInput; 