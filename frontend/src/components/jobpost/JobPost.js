import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobPost = () => {
  const [jobData, setJobData] = useState({
    companyLogo: null,
    companyName: 'Tech Innovators Inc.',
    jobDescription:
      'We are looking for a skilled developer to join our team of professionals. Responsibilities include coding, debugging, and improving software functionality.',
    experience: '2 years of experience',
    skills: 'Vue.js, Laravel, PostgreSQL',
    location: 'Haryana',
    employmentType: 'Part Time',
    postedOn: '2025-06-01',
  });

  const [isSavingJob, setIsSavingJob] = useState(false);

  const handleJobInputChange = (e) => {
    const { name, value } = e.target;
    setJobData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleJobFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const logoUrl = URL.createObjectURL(file);
      setJobData((prev) => ({
        ...prev,
        companyLogo: logoUrl,
      }));
    }
  };

  const handleJobSubmit = (e) => {
    e.preventDefault();
    setIsSavingJob(true);

    setTimeout(() => {
      console.log('Job details saved:', jobData);
      toast.success('Job posting saved successfully!');
      setIsSavingJob(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-indigo-500 text-white p-6">
          <h1 className="text-3xl font-bold">Create/Edit Job Posting</h1>
        </div>

        {/* Job Details Form */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Job Details</h3>
          <form onSubmit={handleJobSubmit} className="space-y-4 mb-6">
            {/* Company Logo */}
            <div>
              <label htmlFor="companyLogo" className="block text-gray-700 font-medium mb-1">
                Company Logo
              </label>
              <input
                type="file"
                id="companyLogo"
                name="companyLogo"
                accept="image/*"
                onChange={handleJobFileChange}
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {jobData.companyLogo && (
                <img
                  src={jobData.companyLogo}
                  alt="Company Logo Preview"
                  className="mt-2 w-12 h-12 rounded-full object-cover"
                />
              )}
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="block text-gray-700 font-medium mb-1">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={jobData.companyName}
                onChange={handleJobInputChange}
                required
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter company name"
              />
            </div>

            {/* Job Description */}
            <div>
              <label htmlFor="jobDescription" className="block text-gray-700 font-medium mb-1">
                Job Description
              </label>
              <textarea
                id="jobDescription"
                name="jobDescription"
                value={jobData.jobDescription}
                onChange={handleJobInputChange}
                required
                rows="4"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter job description"
              />
            </div>

            {/* Experience */}
            <div>
              <label htmlFor="experience" className="block text-gray-700 font-medium mb-1">
                Experience
              </label>
              <input
                type="text"
                id="experience"
                name="experience"
                value={jobData.experience}
                onChange={handleJobInputChange}
                required
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter required experience"
              />
            </div>

            {/* Skills */}
            <div>
              <label htmlFor="skills" className="block text-gray-700 font-medium mb-1">
                Skills
              </label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={jobData.skills}
                onChange={handleJobInputChange}
                required
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter required skills"
              />
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-gray-700 font-medium mb-1">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={jobData.location}
                onChange={handleJobInputChange}
                required
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter job location"
              />
            </div>

            {/* Employment Type */}
            <div>
              <label htmlFor="employmentType" className="block text-gray-700 font-medium mb-1">
                Employment Type
              </label>
              <select
                id="employmentType"
                name="employmentType"
                value={jobData.employmentType}
                onChange={handleJobInputChange}
                required
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select employment type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            {/* Posted On */}
            <div>
              <label htmlFor="postedOn" className="block text-gray-700 font-medium mb-1">
                Posted On
              </label>
              <input
                type="date"
                id="postedOn"
                name="postedOn"
                value={jobData.postedOn}
                onChange={handleJobInputChange}
                required
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Save Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSavingJob}
                className="px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 disabled:opacity-50 transition-colors"
              >
                {isSavingJob ? 'Saving...' : 'Save Job Posting'}
              </button>
            </div>
          </form>

          {/* Job Preview */}
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Job Posting Preview</h3>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-6">
            <div className="flex items-center space-x-4 mb-4">
              {jobData.companyLogo && (
                <img
                  src={jobData.companyLogo}
                  alt={`${jobData.companyName} Logo`}
                  className="w-12 h-12 rounded-full object-cover"
                />
              )}
              <div className="flex items-center">
                <span className="text-xl font-semibold text-gray-800 mr-2">{jobData.companyName}</span>
                <span>✒️</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{jobData.jobDescription}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-700"><span className="font-semibold">Experience:</span> {jobData.experience}</p>
                <p className="text-gray-700"><span className="font-semibold">Skills:</span> {jobData.skills}</p>
              </div>
              <div>
                <p className="text-gray-700"><span className="font-semibold">Location:</span> {jobData.location}</p>
                <p className="text-gray-700"><span className="font-semibold">Employment Type:</span> {jobData.employmentType}</p>
                <p className="text-gray-700"><span className="font-semibold">Posted on:</span> {jobData.postedOn}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default JobPost;
