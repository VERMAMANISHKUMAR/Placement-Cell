import React, { useState } from 'react';

const AddStudent = () => {
  const [formData, setFormData] = useState({
    batch: '',
    name: '',
    email: '',
    phone: '',
    college: '',
    status: 'not_placed',
    DSA_FinalScore: 0,
    WebD_FinalScore: 0,
    React_FinalScore: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://placement-cell-mern-backend.onrender.com/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Student added successfully:', result);

      setFormData({
        batch: '',
        name: '',
        email: '',
        phone: '',
        college: '',
        status: 'not_placed',
        DSA_FinalScore: 0,
        WebD_FinalScore: 0,
        React_FinalScore: 0,
      });

      alert("Are you sure to add the data?");
    } catch (error) {
      console.error('Error adding student:', error);
      alert('This student already exists. Please use a different email.');
    }
  };

  return (
    <div className="w-full px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Add Student</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="batch" className="block text-sm font-medium text-gray-700 mb-1">Batch</label>
            <input
              type="text"
              id="batch"
              name="batch"
              value={formData.batch}
              onChange={handleChange}
              placeholder="Enter batch (e.g., 2025)"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-1">College</label>
            <input
              type="text"
              id="college"
              name="college"
              value={formData.college}
              onChange={handleChange}
              placeholder="Enter college name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">Job Role</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="not_placed">Select the Job Role</option>
              <option value="Software Developer">Software Developer</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Web Developer">Web Developer</option>
              <option value="Data Analyst">Data Analyst</option>
              <option value="System Administrator">System Administrator</option>
              <option value="Cybersecurity Analyst">Cybersecurity Analyst</option>
              <option value="Quality Assurance Tester">QA Tester</option>
              <option value="Cloud Engineer">Cloud Engineer</option>
              <option value="DevOps Engineer">DevOps Engineer</option>
              <option value="Mobile App Developer">Mobile App Developer</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="Database Administrator">Database Admin</option>
              <option value="AI Engineer">AI Engineer</option>
              <option value="IT Consultant">IT Consultant</option>
              <option value="AI Prompt Engineer">AI Prompt Engineer</option>
            </select>
          </div>

          <div>
            <label htmlFor="DSA_FinalScore" className="block text-sm font-medium text-gray-700 mb-1">DSA Final Score</label>
            <input
              type="number"
              id="DSA_FinalScore"
              name="DSA_FinalScore"
              value={formData.DSA_FinalScore}
              onChange={handleChange}
              min="0"
              placeholder="Enter DSA score"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="WebD_FinalScore" className="block text-sm font-medium text-gray-700 mb-1">Web Development Final Score</label>
            <input
              type="number"
              id="WebD_FinalScore"
              name="WebD_FinalScore"
              value={formData.WebD_FinalScore}
              onChange={handleChange}
              min="0"
              placeholder="Enter WebD score"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="React_FinalScore" className="block text-sm font-medium text-gray-700 mb-1">React Final Score</label>
            <input
              type="number"
              id="React_FinalScore"
              name="React_FinalScore"
              value={formData.React_FinalScore}
              onChange={handleChange}
              min="0"
              placeholder="Enter React score"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors mt-6"
        >
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudent;