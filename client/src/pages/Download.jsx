// DownloadComponent.js
import React, { useEffect } from 'react';
import axios from 'axios';
import '../styles/Download.css';

const Download = () => {
  const ENV_REST_API = ''; // สมมติว่าเก็บ URL ไว้ใน .env file

  useEffect(() => {
    document.title = 'SFIAV8 | Download';
    
    axios.get(`${ENV_REST_API}/user`, { withCredentials: true })
      .then((res) => {
        // Handle successful authentication
        // You might want to use a state management solution like Redux here
      })
      .catch(() => {
        // Handle authentication error
      });
  }, []);

  const downloadFile = (fileUrl, fileName) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container">
      <div>
        <h5 id="download">Download</h5>
        <div className="gradient-line"></div>
        <p>SFIA 8 Documents</p>
      </div>

      <div className="grid">
        <div className="card">
          <h5>SFIA 8 Summary Chart</h5>
          <p>SFIA Summary chart - skills and generic attributes A summary chart of the SFIA professional skills on one side and the generic attributes on the other. PDF format, sized at A3, optimised for on-screen viewing, live links, page 1 can be printed A4.</p>
          <button onClick={() => downloadFile("/assets/file/SFIA 8 Summary Chart  v8.0.sfiasummary.en.210928.pdf", "SFIA 8 Summary Chart v8.0.sfiasummary.en.210928.pdf")}>
            Download <span className="arrow">→</span>
          </button>
        </div>

        <div className="card">
          <h5>About SFIA - Guidance for the use of the SFIA standard.</h5>
          <p>An overview of the SFIA skills and competency framework and essential understanding for how it can be used in the management and development of people and skills.</p>
          <button onClick={() => downloadFile("/assets/file/About SFIA v8.0.aboutsfia.en.210928.pdf", "About SFIA v8.0.aboutsfia.en.210928.pdf")}>
            Download <span className="arrow">→</span>
          </button>
        </div>

        <div className="card">
          <h5>SFIA 8 skills and responsibilities spreadsheet</h5>
          <p>To help users incorporate SFIA into their own internal SFIA support tooling. It provides the content of the SFIA levels of responsibility, the generic attributes (containing the behavioural factors and knowledge statements) and the professional skills.</p>
          <button onClick={() => downloadFile("/assets/file/sfia-8_en_220221.xlsx", "sfia-8_en_220221.xlsx")}>
            Download <span className="arrow">→</span>
          </button>
        </div>

        <div className="card">
          <h5>SFIA framework reference - The SFIA standard</h5>
          <p>The full description of the SFIA levels of responsibility, the generic attributes that define the SFIA levels, the behavioural factors, knowledge statements and all the SFIA professional skills. This document has been optimised for on-screen viewing - not for printing.</p>
          <button onClick={() => downloadFile("/assets/file/SFIA 8 The framework reference v8.0.sfiaref.en.211101.pdf", "SFIA 8 The framework reference v8.0.sfiaref.en.211101.pdf")}>
            Download <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Download;