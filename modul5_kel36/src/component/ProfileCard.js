import React from 'react';
import './ProfileCard.css';

export default function ProfileCard({ name, followers, link, img }) {
  return (
    <div className="profileCard">
      <div className="profileImageWrapper">
        <img src={img} alt="profile" className="profileImage" />
      </div>
      <h2 className="profileTitle">User Profile</h2>
      <div className="profileDetails">
        <p className="profileName">Name: {name}</p>
        <p className="profileFollowers">Followers: {followers}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="profileLink">GitHub Profile</a>
      </div>
    </div>
  );
}
