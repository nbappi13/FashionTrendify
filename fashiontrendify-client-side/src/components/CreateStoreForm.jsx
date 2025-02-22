import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";


const CreateStoreForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    domain: "",
    country: "Bangladesh",
    category: "Fashion",
    currency: "BDT",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const checkDomainAvailability = async (domain) => {
    try {
      const response = await axios.get(
        `https://interview-task-green.vercel.app/task/domains/check/${domain}.expressitbd.com`
      );
      return response.data.available;
    } catch (error) {
      console.error("Domain check error:", error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (formData.name.trim().length < 3) {
      validationErrors.name = "Store name must be at least 3 characters";
    }

    if (!validateEmail(formData.email.trim())) {
      validationErrors.email = "Invalid email format";
    }

    const isAvailable = await checkDomainAvailability(formData.domain);
    if (isAvailable) {
      validationErrors.domain =
        "Domain is already taken. Please choose another.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const postData = {
        name: formData.name.trim(),
        domain: formData.domain,
        country: formData.country,
        category: formData.category,
        currency: formData.currency,
        email: formData.email.trim(),
      };

      const response = await axios.post(
        "https://interview-task-green.vercel.app/task/stores/create",
        postData,
        { headers: { "Content-Type": "application/json" } }
      );
      Swal.fire({
        title: "Success!",
        text: "Store created successfully!",
        icon: "success",
        confirmButtonText: "OK"
      });
    } catch (error) {
      console.error("API Validation Errors:", error.response?.data?.error);
      alert(`Error: ${error.response?.data?.message || "Check console"}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md sm:p-8 md:p-10 lg:p-12 xl:p-14">
      <h2 className="text-2xl font-bold mb-6">Create a store</h2>
      <p className="text-gray-600 mb-6">
        Add your basic store information and complete the setup
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Give your online store a name
          </label>
          <p className="text-gray-500 text-sm mb-3">
            A great store name is a big part of your success. Make sure it
            aligns with your brand and products.
          </p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md sm:p-3 md:p-4 lg:p-5 xl:p-6"
            placeholder="How'd you like to call your store?"
            required
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Your online store subdomain
          </label>
          <p className="text-gray-500 text-sm mb-3">
            A SEO-friendly store name is a crucial part of your success. Make
            sure it aligns with your brand and products.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="text"
              name="domain"
              value={formData.domain}
              onChange={handleChange}
              className="flex-1 p-2 border rounded-md sm:p-3 md:p-4 lg:p-5 xl:p-6"
              placeholder="enter your domain name"
              required
            />
            <span className="text-gray-500 whitespace-nowrap">
              .expressitbd.com
            </span>
          </div>
          {errors.domain && (
            <p className="text-red-500 text-sm mt-1">{errors.domain}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Where's your store located?
          </label>
          <p className="text-gray-500 text-sm mb-3">
            Set your store's default location so we can optimize store access
            and speed for your customers.
          </p>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-2 border rounded-md sm:p-3 md:p-4 lg:p-5 xl:p-6"
          >
            <option>Bangladesh</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            What's your Category?
          </label>
          <p className="text-gray-500 text-sm mb-3">
            Set your store's default category so that we can optimize store
            access and speed for your customers.
          </p>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded-md sm:p-3 md:p-4 lg:p-5 xl:p-6"
          >
            <option>Fashion</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Choose store currency
          </label>
          <p className="text-gray-500 text-sm mb-3">
            This is the main currency you wish to sell in.
          </p>
          <select
            name="currency"
            value={formData.currency}
            onChange={handleChange}
            className="w-full p-2 border rounded-md sm:p-3 md:p-4 lg:p-5 xl:p-6"
          >
            <option>BDT (Taka)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Store contact email
          </label>
          <p className="text-gray-500 text-sm mb-3">
            This is the email you'll use to send notifications to and receive
            orders from customers.
          </p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md sm:p-3 md:p-4 lg:p-5 xl:p-6"
            placeholder="you@example.com"
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 text-sm font-medium sm:py-4 md:py-5 lg:py-6 xl:py-7"
        >
          Create Store
        </button>
      </form>
    </div>
  );
};

export default CreateStoreForm;