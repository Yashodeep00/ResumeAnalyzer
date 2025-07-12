# Resume Analyzer

A beautiful and comprehensive resume analyzer application that checks resume compatibility with job descriptions. Built with React, featuring a modern UI and intelligent analysis algorithms.

## Features

- **Drag & Drop Resume Upload**: Support for PDF, DOC, DOCX, and TXT files
- **Job Description Input**: Easy text input for job descriptions
- **Comprehensive Analysis**: Analyzes skills, experience, education, keywords, and formatting
- **Beautiful Results**: Visual scorecards and detailed recommendations
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Built with Tailwind CSS and Framer Motion animations

## Analysis Categories

The application analyzes your resume across five key areas:

1. **Skills Match**: Compares your skills with job requirements
2. **Experience Level**: Evaluates experience alignment with job expectations
3. **Education**: Checks educational background compatibility
4. **Keywords**: Analyzes keyword optimization for ATS systems
5. **Formatting**: Assesses resume structure and professionalism

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd resume-analyzer
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## Usage

1. **Upload Resume**: Drag and drop your resume file or click to browse
2. **Enter Job Description**: Paste the complete job description in the text area
3. **Analyze**: Click "Analyze Compatibility" to start the analysis
4. **Review Results**: View detailed scores, findings, and recommendations
5. **Take Action**: Use the recommendations to improve your resume

## Technology Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **File Upload**: React Dropzone
- **Build Tool**: Create React App

## Project Structure

```
resume-analyzer/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── ResumeUpload.js
│   │   ├── JobDescriptionInput.js
│   │   └── AnalysisResults.js
│   ├── utils/
│   │   └── analyzer.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Customization

### Adding New Analysis Categories

To add new analysis categories, modify the `analyzer.js` file:

1. Add a new analysis function
2. Include it in the main `analyzeResume` function
3. Update the `categoryScores` object
4. Modify the `generateFindings` and `generateRecommendations` functions

### Styling

The application uses Tailwind CSS for styling. You can customize:

- Colors in `tailwind.config.js`
- Component styles in `src/index.css`
- Individual component styling

### Analysis Algorithm

The analysis algorithm can be enhanced by:

- Integrating with real PDF parsing libraries
- Adding more sophisticated keyword matching
- Implementing machine learning models
- Connecting to job posting APIs

## Future Enhancements

- [ ] Real PDF parsing with pdf-parse library
- [ ] Integration with job posting APIs
- [ ] Resume template suggestions
- [ ] Export analysis reports
- [ ] User accounts and history
- [ ] AI-powered resume optimization
- [ ] Industry-specific analysis

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue in the repository.

---

**Note**: This is a demonstration application. The resume analysis uses simulated data for educational purposes. In a production environment, you would integrate with real PDF parsing libraries and more sophisticated analysis algorithms. 