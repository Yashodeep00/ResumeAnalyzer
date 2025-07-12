import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import ResumeUpload from './components/ResumeUpload';
import JobDescriptionInput from './components/JobDescriptionInput';
import AnalysisResults from './components/AnalysisResults';
import { analyzeResume } from './utils/analyzer';

function App() {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [analysisResults, setAnalysisResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    if (!resumeFile || !jobDescription.trim()) {
      alert('Please upload a resume and enter a job description');
      return;
    }

    setIsAnalyzing(true);
    try {
      const results = await analyzeResume(resumeFile, jobDescription);
      setAnalysisResults(results);
    } catch (error) {
      console.error('Analysis failed:', error);
      alert('Analysis failed. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetAnalysis = () => {
    setResumeFile(null);
    setJobDescription('');
    setAnalysisResults(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {!analysisResults ? (
            <div className="grid lg:grid-cols-2 gap-8">
              <ResumeUpload 
                resumeFile={resumeFile} 
                setResumeFile={setResumeFile} 
              />
              <JobDescriptionInput 
                jobDescription={jobDescription}
                setJobDescription={setJobDescription}
              />
            </div>
          ) : (
            <AnalysisResults 
              results={analysisResults}
              onReset={resetAnalysis}
            />
          )}

          {resumeFile && jobDescription.trim() && !analysisResults && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 text-center"
            >
              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="btn-primary text-lg px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAnalyzing ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Analyzing...
                  </div>
                ) : (
                  'Analyze Compatibility'
                )}
              </button>
            </motion.div>
          )}
        </motion.div>
      </main>
    </div>
  );
}

export default App; 