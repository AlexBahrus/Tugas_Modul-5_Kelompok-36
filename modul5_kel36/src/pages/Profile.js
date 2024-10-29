import React, { useState, useEffect } from "react";
import "./Profile.css";
import axios from "axios";

const Profile = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const usernames = ["Wadimore", "AlexBahrus", "Salmanars"];

    const fetchUserData = async () => {
      try {
        const requests = usernames.map((username) =>
          axios.get(`https://api.github.com/users/${username}`)
        );
        
        const responses = await Promise.all(requests);
        const usersData = responses.map(response => response.data);
        setUserData(usersData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="profile-container">
      <h2>User Profiles</h2>
      {userData.map((user, index) => (
        <div key={index} className="profile-info">
          <img
            src={user.avatar_url || "https://via.placeholder.com/150"}
            alt="User Profile"
            className="profile-image"
          />
          <p>Name: {user.name || "N/A"}</p>
          <p>Followers: {user.followers || "N/A"}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
        </div>
      ))}
    </div>
  );
};

export default Profile;
