import React from 'react'
import { Link } from 'react-router-dom';
import '../app.css';

const NewsItem = (props) => {
    let { title, desc, imageUrl, url, source, date } = props;
    return (
        <div className="card">
            <img src={imageUrl} className="card-img-top" alt="Not Available" style={{ height: "248px" }} />
            <div className="card-body newsCard">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <p className="card-text"><small className="text-muted">By <span className="badge bg-danger">{source ? source : 'Unknown'}</span> on {new Date(date).toUTCString()}</small></p>
                <center className="readMoreBtn">
                    <a href={url} target="_blank" className="btn btn-sm btn-outline-dark">Read More</a>
                </center>
            </div>
        </div>
    )
}

export default NewsItem
