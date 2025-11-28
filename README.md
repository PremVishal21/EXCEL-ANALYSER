# 📊 Excel-Based Data Visualization & Analysis Platform

A full-stack MERN project designed for uploading Excel files, parsing data, generating dynamic 2D/3D charts, and enabling data mapping with a clean, modern UI.

---

## 🚀 Overview

This platform allows users to upload **Excel files (.xls or .xlsx)**, extract data, and generate interactive charts. Users can choose columns dynamically for X and Y axes, visualize data using multiple chart types, and download charts in PNG/PDF formats. The system also supports user/admin authentication and saves upload history.

Optional AI API integration enables insights or smart summaries based on uploaded data.

---

## 🧩 Key Features

### **1. Excel File Upload & Parsing**

* Supports `.xls` and `.xlsx` formats
* Uses **xlsx** or **SheetJS** for parsing
* Extracts column names, row data, and handles formatting

### **2. Data Mapping

* Users can select X and Y axes dynamically
* Supports numerical and categorical data

### **3. Interactive Chart Generation**

* Built with **Chart.js** or **Three.js**
* Supports 2D & 3D charts:

  * Line
  * Bar
  * Pie
  * Scatter
  * 3D Bar / Column

### **4. Downloadable Charts**

* Export charts as **PNG** or **PDF** files

### **5. User & Admin Authentication**

* JWT-based authentication
* User dashboard + Admin dashboard

### **6. Upload History Dashboard**

* Stores file name, upload date, extracted details
* Previous charts and analysis always accessible

### **7. Optional AI Tools Integration**

* Summaries, insights, anomaly detection
* Integrate OpenAI or similar API

### **8. Modern & Responsive UI**

* Optimized for mobile, tablet, and desktop
* Built using Tailwind / CSS3

---

## 🏗️ Tech Stack

### **Frontend**

* React.js
* React Toolkit
* Chart.js / Three.js
* Tailwind CSS
* Axios

### **Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose
* Multer (file upload)
* SheetJS/xlsx

### **Optional Integrations**

* OpenAI API / Gemini API for summaries
* Firebase / Supabase authentication option

---

## 📂 Project Structure

```
root/
│── client/ (React frontend)
│── server/ (Node + Express backend)
│   ├── routes/
│   ├── controllers/
│   ├── utils/
│   ├── models/
│   ├── uploads/
│── README.md
│── package.json
```

---

## 📅 Development Timeline

### **Week 1**

* Project setup
* User/admin authentication
* Dashboard layout

### **Week 2**

* File upload setup
* Excel parsing logic
* MongoDB storage of structured data

### **Week 3**

* Chart rendering with Chart.js / Three.js
* Dynamic axis selectors

### **Week 4**

* Save and view history
* Chart download feature
* AI API integration (optional)

### **Week 5**

* Final improvements
* Bug fixes
* Deployment (Render for backend, Netlify for frontend)

---

## 📘 References

* SheetJS: [https://sheetjs.com](https://sheetjs.com)
* Chart.js: [https://www.chartjs.org](https://www.chartjs.org)
* Three.js: [https://threejs.org](https://threejs.org)
* MongoDB: [https://www.mongodb.com](https://www.mongodb.com)
* Plotly Inspiration: [https://chart-studio.plotly.com](https://chart-studio.plotly.com)

---

## 👨‍💻 Author

Developed by **Prem**, designed as a full-stack MERN project for Excel data analysis and visualization.

---

If you want, I can also generate a ZIP folder for the full project, code structure, API documentation, or UI wireframes.
