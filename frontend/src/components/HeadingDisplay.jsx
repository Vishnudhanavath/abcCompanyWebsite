
import {  useEffect, useState } from 'react';
import axios from 'axios';  
import CircularIndeterminate from './CircularProgress';

const HeadingDisplay = () => {
    const [heading, setHeading] = useState('');
    const[error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const fetchHeading = async () => {
            try {
                const response = await axios.get('https://abccompanywebsite-3.onrender.com/api/heading');
                setHeading(response.data.text);
            } catch (err) {
                console.error(err);
                setError('Failed to load heading');
            } finally {
                setLoading(false);
            }
        };
        fetchHeading();
    },[])

    return(
        <div>
            {loading ? (
                <CircularIndeterminate/>
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                <h1 className="main-heading">{heading}</h1>
            )}
        </div>
    )
}

export default HeadingDisplay;