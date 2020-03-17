import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2>
                홈
            </h2>
            
            <Link to='/data'>data</Link>
            <br/>
            <Link to='about'>about</Link>
        </div>
    );
};

export default Home;