# Setup Guide for Resume Analyzer

## Prerequisites

Before running the Resume Analyzer application, you need to install Node.js and npm.

## Installing Node.js

### Option 1: Download from Official Website (Recommended)

1. **Visit the official Node.js website**: https://nodejs.org/
2. **Download the LTS version** (Long Term Support) for Windows
3. **Run the installer** and follow the installation wizard
4. **Verify installation** by opening a new terminal and running:
   ```bash
   node --version
   npm --version
   ```

### Option 2: Using Chocolatey (if you have it installed)

```bash
choco install nodejs
```

### Option 3: Using Winget (Windows Package Manager)

```bash
winget install OpenJS.NodeJS
```

## Installing the Application

Once Node.js is installed:

1. **Open a terminal** in the project directory
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm start
   ```
4. **Open your browser** and go to `http://localhost:3000`

## Alternative: Quick HTML Version

If you want to test the application immediately without installing Node.js, you can use the standalone HTML version:

1. Open `standalone.html` in your web browser
2. The application will work with basic functionality
3. Note: Some features may be limited compared to the full React version

## Troubleshooting

### Common Issues

1. **"npm is not recognized"**
   - Node.js is not installed or not in PATH
   - Restart your terminal after installation
   - Reinstall Node.js if the issue persists

2. **Port 3000 is already in use**
   - The application will automatically suggest an alternative port
   - Or manually kill the process using the port

3. **Installation fails**
   - Clear npm cache: `npm cache clean --force`
   - Delete `node_modules` folder and `package-lock.json`
   - Run `npm install` again

### System Requirements

- **Operating System**: Windows 10/11, macOS, or Linux
- **Node.js**: Version 16 or higher
- **RAM**: At least 4GB (8GB recommended)
- **Storage**: At least 1GB free space

## Getting Help

If you encounter any issues:

1. Check the troubleshooting section above
2. Ensure Node.js is properly installed
3. Try running the commands in a new terminal window
4. Check the project's README.md for additional information 