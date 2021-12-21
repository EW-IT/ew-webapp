import { AutoAwesome } from '@mui/icons-material';
import React from 'react';
import Navbar from '../components/Navbar';


const Submit_csv = () => {
    return (
        <>
        <Navbar />
    <div  style={{
          display: "flex",
          justifyContent: "center"}}>
        <h3>This page is for JCRC Members to submit csv files</h3>
    </div>
    <div  style={{
          display: "flex",
          justifyContent: "center"
          }}>
                <button className="stylised_button" style = {{
                    marginRight: 10
                }}>
                    Browse Files
                </button>
                <button className="stylised_button" style = {{
                    marginLeft: 10
                }}>
                    Submit CSV
                </button>
    </div>
    
    
    
    </>
    );
}
export default Submit_csv;

//Submit_csv.js