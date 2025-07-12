import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import { Upload, FileText, X, CheckCircle } from 'lucide-react';

const ResumeUpload = ({ resumeFile, setResumeFile }) => {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setResumeFile(file);
    }
  }, [setResumeFile]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'text/plain': ['.txt']
    },
    multiple: false
  });

  const removeFile = () => {
    setResumeFile(null);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="card"
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-secondary-800 mb-2">Upload Resume</h2>
        <p className="text-secondary-600">Upload your resume in PDF, DOC, DOCX, or TXT format</p>
      </div>

      {!resumeFile ? (
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors duration-200 ${
            isDragActive
              ? 'border-primary-400 bg-primary-50'
              : 'border-secondary-300 hover:border-primary-400 hover:bg-primary-50'
          }`}
        >
          <input {...getInputProps()} />
          <Upload className="h-12 w-12 mx-auto mb-4 text-secondary-400" />
          {isDragActive ? (
            <p className="text-primary-600 font-medium">Drop your resume here...</p>
          ) : (
            <div>
              <p className="text-secondary-600 mb-2">
                Drag & drop your resume here, or <span className="text-primary-600 font-medium">click to browse</span>
              </p>
              <p className="text-sm text-secondary-500">
                Supports PDF, DOC, DOCX, TXT (Max 10MB)
              </p>
            </div>
          )}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 border border-green-200 rounded-lg p-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <div>
                <div className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-green-800">{resumeFile.name}</span>
                </div>
                <p className="text-sm text-green-600">
                  {formatFileSize(resumeFile.size)}
                </p>
              </div>
            </div>
            <button
              onClick={removeFile}
              className="p-1 hover:bg-green-200 rounded-full transition-colors duration-200"
            >
              <X className="h-5 w-5 text-green-600" />
            </button>
          </div>
        </motion.div>
      )}

      <div className="mt-6 p-4 bg-secondary-50 rounded-lg">
        <h3 className="font-medium text-secondary-800 mb-2">Tips for better analysis:</h3>
        <ul className="text-sm text-secondary-600 space-y-1">
          <li>• Ensure your resume is up-to-date and well-formatted</li>
          <li>• Include relevant keywords from the job description</li>
          <li>• Highlight your most relevant experience and skills</li>
          <li>• Use clear, professional language</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default ResumeUpload; 