import React from 'react';
import './imagedata.css'; // Ensure to create this CSS file

function imagedata() {
  const imagell = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/19976580/pexels-photo-19976580.jpeg",
      description: "Doctor shortage in Ontario",
      link: "https://globalnews.ca/news/10481990/ontario-doctors-supply-ministry-health/"
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/6942171/pexels-photo-6942171.jpeg",
      description: "Doctors breakthrough with diabetes treatment in Shanghai",
      link: "https://www.chinadaily.com.cn/a/202405/09/WS663c2625a31082fc043c615d.html"
    }
  ];

  return (
    <div className="image-container">
      {imageData.map((image) => (
        <a href={image.link} key={image.id} target="_blank" rel="noopener noreferrer" className="image-link">
          <div className="background-image" style={{ backgroundImage: `url(${image.url})` }}>
            <span className="image-description">{image.description}</span>
          </div>
        </a>
      ))}
    </div>
  );
}

export default imagedata;
