import { useState } from 'react';

const states = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
];

const employmentTypes = ['Full Time', 'Part Time', 'Internship'];

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [employmentType, setEmploymentType] = useState('');

  const handleSearch = () => {
    onSearch({ searchQuery, location, employmentType });
  };

  return (
    <div className="w-full p-4 sm:p-6 bg-gray-900  shadow-lg">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-start text-white">Jobs</h1>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search by Title, Skills or Company"
            className="w-full p-3 rounded-full text-black pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {/* <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span> */}
        </div>
        <select
          className="p-3 rounded-full text-black flex-1 md:flex-none md:w-80"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Job Location</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        <select
          className="p-3 rounded-full text-black flex-1 md:flex-none md:w-80"
          value={employmentType}
          onChange={(e) => setEmploymentType(e.target.value)}
        >
          <option value="">Employment Type</option>
          {employmentTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <button
          className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition w-full md:w-auto"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;