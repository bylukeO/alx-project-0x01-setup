import React from "react";
import { UserProps } from "../../interfaces";

const cardStyle: React.CSSProperties = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "1rem",
  margin: "1rem 0",
  background: "#f9f9f9",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
};

const titleStyle: React.CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: "bold",
  marginBottom: "0.5rem",
};

const infoStyle: React.CSSProperties = {
  margin: "0.2rem 0",
};

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => (
  <div style={cardStyle}>
    <div style={titleStyle}>{user.name} <span style={{color: "#888"}}>({user.username})</span></div>
    <div style={infoStyle}><strong>Email:</strong> {user.email}</div>
    <div style={infoStyle}><strong>Phone:</strong> {user.phone}</div>
    <div style={infoStyle}><strong>Website:</strong> {user.website}</div>
    <div style={infoStyle}>
      <strong>Address:</strong> {user.address.suite}, {user.address.street}, {user.address.city}
    </div>
    <div style={infoStyle}>
      <strong>Company:</strong> {user.company.name} <br />
      <em>{user.company.catchPhrase}</em>
    </div>
  </div>
);

export default UserCard;