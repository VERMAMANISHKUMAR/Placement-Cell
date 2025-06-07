import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import AutoSlider from './AutoSlider';
import SearchBar from './SearchBar';
import Banner from "./Banner";

const JobsList = ({ jobs }) => {
  return (
    <div className="job-listings container py-4 mt-3">
      <h1 className="text-center mb-4">All Job Listings</h1>
      <div className="row">
        {jobs.map((job) => (
          <div key={job.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title text-center">{job.companyName}</h5>
                <p className="card-text">{job.description}</p>
                <p><strong>Experience:</strong> {job.experience}</p>
                <p><strong>Skills:</strong> {job.skills.join(', ')}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Employment Type:</strong> {job.employmentType}</p>
                <p><small className="text-muted">Posted on: {job.postedDate}</small></p>
              </div>
              <div className="card-footer text-center">
                <button className="btn btn-primary">
                  <Link to="/students/add" className="text-white text-decoration-none">
                    Apply Now
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const JobSearchAndList = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const generateJobs = () => {
    const companies = [
      'Dummy IT Solutions', 'Fictional Tech Corp', 'Imaginary Software LLC',
      'Tech Innovators Inc.', 'NextGen Systems', 'Cloud Technologies Ltd.',
      'FutureWorks Tech', 'CyberSolutions Co.', 'CodeCrafters LLC', 'App Dev Studios'
    ];
    const skills = [
      ['React', 'Node.js', 'MongoDB'], ['Python', 'Django', 'AWS'], ['Java', 'Spring Boot', 'MySQL'],
      ['Vue.js', 'Laravel', 'PostgreSQL'], ['Angular', 'Express', 'SQLite'], ['C#', 'ASP.NET', 'Azure'],
      ['JavaScript', 'HTML', 'CSS'], ['PHP', 'WordPress', 'MySQL'], ['Go', 'Docker', 'Kubernetes'],
      ['Swift', 'Xcode', 'iOS']
    ];
    const locations = [
      'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
      'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
      'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
      'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
    ];
    const employmentTypes = ['Full Time', 'Part Time', 'Internship'];

    const jobsList = [];
    for (let i = 0; i < 102; i++) {
      const job = {
        id: i + 1,
        logo: 'https://via.placeholder.com/200',
        companyName: companies[i % companies.length],
        description: `We are looking for a skilled developer to join our team of professionals. Responsibilities include coding, debugging, and improving software functionality.`,
        experience: `${Math.floor(Math.random() * 5) + 1} years of experience`,
        skills: skills[i % skills.length],
        location: locations[i % locations.length],
        employmentType: employmentTypes[i % employmentTypes.length],
        postedDate: `2025-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-01`
      };
      jobsList.push(job);
    }

    setJobs(jobsList);
    setFilteredJobs(jobsList);
  };

  const handleSearch = (searchParams) => {
    const { searchQuery, location, employmentType } = searchParams;
    const filtered = jobs.filter((job) => {
      const query = searchQuery.toLowerCase();
      const matchesQuery =
        !query ||
        job.companyName.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query) ||
        job.skills.some((skill) => skill.toLowerCase().includes(query));
      const matchesLocation = !location || job.location === location;
      const matchesEmploymentType = !employmentType || job.employmentType === employmentType;
      return matchesQuery && matchesLocation && matchesEmploymentType;
    });
    setFilteredJobs(filtered);
  };

  useEffect(() => {
    generateJobs();
  }, []);

  return (
    <div>
      <AutoSlider />
      <SearchBar onSearch={handleSearch} />
      <Banner />
      <JobsList jobs={filteredJobs} />
    </div>
  );
};

export default JobSearchAndList;
