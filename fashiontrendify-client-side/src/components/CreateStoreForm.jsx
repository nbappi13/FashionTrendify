import { useState } from 'react';
import axios from 'axios';

const CreateStoreForm = () => {
  const [formData, setFormData] = useState({
    storeName: '',
    domain: '',
    location: 'Bangladesh',
    category: 'Fashion',
    currency: 'BDT (Taka)',
    email: 'nahidbappi13@gmail.xom',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const checkDomainAvailability = async (domain) => {
    try {
      const response = await axios.get(
        `https://interview-task-green.vercel.app/task/domains/check/${domain}`
      );
      return response.data.available;
    } catch (error) {
      console.error('Domain check error:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const isAvailable = await checkDomainAvailability(formData.domain);
      
      if (!isAvailable) {
        const response = await axios.post(
          'https://interview-task-green.vercel.app/task/stores/create',
          formData
        );
        alert('Store created successfully!');
      } else {
        alert('Domain is available. Choose another.');
      }
    } catch (error) {

      console.error('API Error:', error.response?.data || error.message);
      alert(`Error: ${error.response?.data?.message || 'Check the console for details'}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Create a Store</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
     
        <div>
          <label className="block text-sm font-medium mb-1">
            How'd you like to call your store?
          </label>
          <input
            type="text"
            name="storeName"
            value={formData.storeName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

    
        <div>
          <label className="block text-sm font-medium mb-1">
            Your online store subdomain
          </label>
          <input
            type="text"
            name="domain"
            value={formData.domain}
            onChange={handleChange}
            onBlur={() => checkDomainAvailability(formData.domain)}
            className="w-full p-2 border rounded-md"
            placeholder="uniquedomain.expressitbd.com"
            required
          />
        </div>

    
        <div>
          <label className="block text-sm font-medium mb-1">
            Where's your store located?
          </label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          >
            <option>Bangladesh</option>
          </select>
        </div>

   
        <div>
          <label className="block text-sm font-medium mb-1">
            What's your Category?
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          >
            <option>Fashion</option>
          </select>
        </div>

    
        <div>
          <label className="block text-sm font-medium mb-1">
            Choose store currency
          </label>
          <select
            name="currency"
            value={formData.currency}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          >
            <option>BDT (Taka)</option>
          </select>
        </div>

    
        <div>
          <label className="block text-sm font-medium mb-1">
            Store contact email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Create Store
        </button>
      </form>
    </div>
  );
};

export default CreateStoreForm;