import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <>
        <Navbar />
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
    }}>
        <h3>Hello! Your points will be displayed here:</h3>
    </div>
    </>
    );
}
export default Home

//Home.js