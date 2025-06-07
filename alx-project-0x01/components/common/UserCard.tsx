import React from "react";
import { UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => (
  <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="mb-2">
      <h2 className="text-2xl font-semibold text-gray-800">
        {name}{" "}
        <span className="text-gray-500">({username})</span>
      </h2>
    </div>
    <p className="text-gray-600 mb-1">
      <strong>Email:</strong> {email}
    </p>
    <p className="text-gray-600 mb-1">
      <strong>Phone:</strong> {phone}
    </p>
    <p className="text-gray-600 mb-1">
      <strong>Website:</strong> {website}
    </p>
    <p className="text-gray-600 mb-1">
      <strong>Address:</strong> {address.suite}, {address.street}, {address.city}
    </p>
    <p className="text-gray-600">
      <strong>Company:</strong> {company.name} <br />
      <span className="italic">{company.catchPhrase}</span>
    </p>
  </div>
);

export default UserCard;