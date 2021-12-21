import { AutoAwesome } from '@mui/icons-material';
import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import { autocompleteClasses } from '@mui/material';


const Submit_csv = () => {

    // handle file upload
    const handleFileUpload = e => {
   
    }
    return (
        <>
        <Navbar />
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
          <h3>This page is for JCRC members to upload their CSV files</h3>
          <input
            type="file"
            accept=".csv,.xlsx,.xls"
            onChange={handleFileUpload}>
                
        </input>
        
        </div>
        </>
      );
    }
    

export default Submit_csv;

//Submit_csv.js