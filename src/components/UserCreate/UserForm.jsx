import axios from "axios";
import { useState } from "react";

const UserForm = () => {
  const [userFormData, setUserFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (
      !userFormData.name ||
      !userFormData.email ||
      !userFormData.phone ||
      !userFormData.password
    ) {
      setError("All fields are required");
      setSuccess(null);
      return;
    }

    const id = Date.now();
    const data = new FormData();
    data.append("id", id);
    data.append("name", userFormData.name);
    data.append("email", userFormData.email);
    data.append("phone", userFormData.phone);
    data.append("password", userFormData.password);

    try {
      const response = await axios.post("http://localhost:3000/user", data);
      console.log("🚀 ~ handleFormSubmit ~ response:", response.data);
      setSuccess("User added successfully");
      setError(null);
      setUserFormData({ name: "", email: "", phone: "", password: "" });
    } catch (err) {
      setError("Unable to add user");
      setSuccess(null);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="px-10">
      <div className="mt-6">
        <label
          htmlFor="name"
          className="text-base font-normal text-neutral-600 "
        >
          Name
        </label>
        <div className="flex items-center justify-between my-3 rounded-lg bg-zinc-100">
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            id="name"
            value={userFormData.name}
            onChange={handleChange}
            className="w-full px-4 bg-transparent outline-none text-neutral-600 placeholder:text-neutral-600 h-[45px]"
          />
        </div>
      </div>
      <div className="mt-2">
        <label
          htmlFor="email"
          className="text-base font-normal text-neutral-600"
        >
          Email
        </label>
        <div className="flex items-center justify-between my-3 rounded-lg bg-zinc-100">
          <input
            type="text"
            name="email"
            placeholder="info@provistechnologies.com"
            id="email"
            value={userFormData.email}
            onChange={handleChange}
            className="w-full px-4 bg-transparent outline-none text-neutral-600 placeholder:text-neutral-600 h-[45px]"
          />
        </div>
      </div>
      <div className="mt-2">
        <label
          htmlFor="phone"
          className="text-base font-normal text-neutral-600"
        >
          Phone
        </label>
        <div className="flex items-center justify-between my-3 rounded-lg bg-zinc-100">
          <input
            type="text"
            name="phone"
            placeholder="123-456-7890"
            id="phone"
            value={userFormData.phone}
            onChange={handleChange}
            className="w-full px-4 bg-transparent outline-none text-neutral-600 placeholder:text-neutral-600 h-[45px]"
          />
        </div>
      </div>
      <div className="mt-2">
        <label
          htmlFor="password"
          className="text-base font-normal text-neutral-600"
        >
          Password
        </label>
        <div className="flex items-center justify-between my-3 rounded-lg bg-zinc-100">
          <input
            type="password"
            name="password"
            placeholder="******"
            id="password"
            value={userFormData.password}
            onChange={handleChange}
            className="w-full px-4 bg-transparent outline-none text-neutral-600 placeholder:text-neutral-600 h-[45px]"
          />
        </div>
      </div>
      <button className="w-[150px] py-3 text-base font-semibold text-center text-white bg-indigo-900 rounded-lg shadow mt-9">
        Add user
      </button>
      {error && <div className="mt-4 text-red-500">{error}</div>}
      {success && <div className="mt-4 text-green-500">{success}</div>}
    </form>
  );
};

export default UserForm;
