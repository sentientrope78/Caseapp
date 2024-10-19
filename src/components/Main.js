import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios"
import './Main.css';

function Main() {
    return (
        <div className="main">
            <Main1 />
            <Main2 />
            <br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
    );
}

function Main1() {
    return (
        <div className="main1">
            <Login />
            <News />
        </div>
    );
}

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState([])
    console.log(username);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:3001/usercredentials")
                const data = res.data
                console.log(data);
                setUserData(res.data)
                console.log(userData);
            
            } catch (err) {
                console.log(err);
            }
        }
        fetchData()
    },[username,password])

    const handleSubmit = (event) => {
        event.preventDefault();
        {userData.map(data=>{
            console.log(data.username);
            if (username==data.username && password==data.password) {
                window.location.href = "/upload"
        } 
            }
        )}
    };

    const handleClick = (event) => {
        event.preventDefault()
        window.location.href = "/register"
      }

    return (
        <div className="LogIn">
            <h3>Please enter your information</h3>
            <form onSubmit={handleSubmit} autoComplete="on">
                <input type="text" id="username" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
                <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
                <button type="submit">Sign In</button>
                <button type="button" onClick={handleClick}>Register</button>
            </form>
        </div>
    );
}

function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await axios.get('http://localhost:5000/news');
                setNews(res.data);
            } catch (err) {
                console.error('Error fetching the news:', err);
            }
        };
        fetchNews();
    }, []);

    return (
        <div className="News">
            <h3>Medical Updates</h3>
            {news.length === 0 ? (
                <p>No news updates available.</p>
            ) : (
                news.slice(0, 3).map((article, index) => (  // Limit to 3 articles
                    <div key={index} className="news-item">
                        {article.image && (
                            <img src={article.image} alt={article.title} />
                        )}
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            {article.title}
                        </a>
                        <p>{article.description}</p>
                        <span className="news-date">{new Date(article.published_at).toLocaleDateString()}</span> {/* Display date */}
                    </div>
                ))
            )}
        </div>
    );
}


function Main2() {
    return (
        <div className="Main2">
            <hr />
            <WebUpdates />
            <CompanyInfo />
        </div>
    );
}

function WebUpdates() {
    return (
        <div className="WebUpdates alert alert-info">
            <p>Website Issue Updates</p>
        </div>
    );
}

function CompanyInfo() {
    return (
        <div className="CompanyInfo">
            <h3>Company Information</h3>
            <p>Your mom</p>
        </div>
    );
}

export default Main;
