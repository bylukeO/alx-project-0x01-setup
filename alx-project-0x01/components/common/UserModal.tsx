import React, { useState } from "react";
import { UserModalProps, UserData } from "../../interfaces";

const initialUser: UserData = {
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: "",
    },
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: "",
  },
};

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>(initialUser);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const key = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        address: { ...prev.address, [key]: value },
      }));
    } else if (name.startsWith("geo.")) {
      const key = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          geo: { ...prev.address.geo, [key]: value },
        },
      }));
    } else if (name.startsWith("company.")) {
      const key = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        company: { ...prev.company, [key]: value },
      }));
    } else {
      setUser((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Username</label>
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Website</label>
              <input
                type="text"
                name="website"
                value={user.website}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-gray-700 mb-2">Address</h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="address.street"
                placeholder="Street"
                value={user.address.street}
                onChange={handleChange}
                className="px-3 py-2 border rounded-lg"
              />
              <input
                type="text"
                name="address.suite"
                placeholder="Suite"
                value={user.address.suite}
                onChange={handleChange}
                className="px-3 py-2 border rounded-lg"
              />
              <input
                type="text"
                name="address.city"
                placeholder="City"
                value={user.address.city}
                onChange={handleChange}
                className="px-3 py-2 border rounded-lg"
              />
              <input
                type="text"
                name="address.zipcode"
                placeholder="Zipcode"
                value={user.address.zipcode}
                onChange={handleChange}
                className="px-3 py-2 border rounded-lg"
              />
              <input
                type="text"
                name="geo.lat"
                placeholder="Latitude"
                value={user.address.geo.lat}
                onChange={handleChange}
                className="px-3 py-2 border rounded-lg"
              />
              <input
                type="text"
                name="geo.lng"
                placeholder="Longitude"
                value={user.address.geo.lng}
                onChange={handleChange}
                className="px-3 py-2 border rounded-lg"
              />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-gray-700 mb-2">Company</h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="company.name"
                placeholder="Company Name"
                value={user.company.name}
                onChange={handleChange}
                className="px-3 py-2 border rounded-lg"
              />
              <input
                type="text"
                name="company.catchPhrase"
                placeholder="Catch Phrase"
                value={user.company.catchPhrase}
                onChange={handleChange}
                className="px-3 py-2 border rounded-lg"
              />
              <input
                type="text"
                name="company.bs"
                placeholder="BS"
                value={user.company.bs}
                onChange={handleChange}
                className="px-3 py-2 border rounded-lg"
              />
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;