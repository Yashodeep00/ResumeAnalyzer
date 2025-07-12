import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  Star, 
  Target, 
  Award,
  RefreshCw,
  Download,
  Share2
} from 'lucide-react';

const AnalysisResults = ({ results, onReset }) => {
  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const getScoreBorderColor = (score) => {
    if (score >= 80) return 'border-green-200';
    if (score >= 60) return 'border-yellow-200';
    return 'border-red-200';
  };

  const getRecommendationColor = (score) => {
    if (score >= 80) return 'text-green-700 bg-green-50 border-green-200';
    if (score >= 60) return 'text-yellow-700 bg-yellow-50 border-yellow-200';
    return 'text-red-700 bg-red-50 border-red-200';
  };

  const getRecommendationIcon = (score) => {
    if (score >= 80) return <CheckCircle className="h-5 w-5" />;
    if (score >= 60) return <AlertCircle className="h-5 w-5" />;
    return <XCircle className="h-5 w-5" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-secondary-800 mb-2">Analysis Complete</h1>
        <p className="text-secondary-600">Here's your resume compatibility analysis</p>
      </div>

      {/* Overall Score */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className={`card ${getScoreBorderColor(results.overallScore)}`}
      >
        <div className="text-center">
          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${getScoreBgColor(results.overallScore)} mb-4`}>
            <TrendingUp className={`h-12 w-12 ${getScoreColor(results.overallScore)}`} />
          </div>
          <h2 className="text-2xl font-bold text-secondary-800 mb-2">Overall Compatibility</h2>
          <div className={`text-4xl font-bold ${getScoreColor(results.overallScore)} mb-4`}>
            {results.overallScore}%
          </div>
          <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full border ${getRecommendationColor(results.overallScore)}`}>
            {getRecommendationIcon(results.overallScore)}
            <span className="font-medium">
              {results.overallScore >= 80 ? 'Excellent Match' : 
               results.overallScore >= 60 ? 'Good Match' : 'Needs Improvement'}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Detailed Scores */}
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(results.categoryScores).map(([category, score], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className={`card ${getScoreBorderColor(score)}`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-secondary-800 capitalize">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <div className={`text-2xl font-bold ${getScoreColor(score)}`}>
                {score}%
              </div>
            </div>
            <div className="w-full bg-secondary-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-500 ${
                  score >= 80 ? 'bg-green-500' : score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${score}%` }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Key Findings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="card"
      >
        <h3 className="text-xl font-bold text-secondary-800 mb-4 flex items-center">
          <Target className="h-6 w-6 mr-2 text-primary-600" />
          Key Findings
        </h3>
        <div className="space-y-4">
          {results.keyFindings.map((finding, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className={`p-1 rounded-full ${finding.type === 'positive' ? 'bg-green-100' : finding.type === 'warning' ? 'bg-yellow-100' : 'bg-red-100'}`}>
                {finding.type === 'positive' ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : finding.type === 'warning' ? (
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                ) : (
                  <XCircle className="h-4 w-4 text-red-600" />
                )}
              </div>
              <p className="text-secondary-700">{finding.message}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="card"
      >
        <h3 className="text-xl font-bold text-secondary-800 mb-4 flex items-center">
          <Award className="h-6 w-6 mr-2 text-primary-600" />
          Recommendations
        </h3>
        <div className="space-y-3">
          {results.recommendations.map((recommendation, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-secondary-50 rounded-lg">
              <div className="bg-primary-100 p-1 rounded-full">
                <Star className="h-4 w-4 text-primary-600" />
              </div>
              <p className="text-secondary-700">{recommendation}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <button
          onClick={onReset}
          className="btn-secondary flex items-center space-x-2"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Analyze Another Resume</span>
        </button>
        <button className="btn-primary flex items-center space-x-2">
          <Download className="h-4 w-4" />
          <span>Download Report</span>
        </button>
        <button className="btn-secondary flex items-center space-x-2">
          <Share2 className="h-4 w-4" />
          <span>Share Results</span>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default AnalysisResults; 