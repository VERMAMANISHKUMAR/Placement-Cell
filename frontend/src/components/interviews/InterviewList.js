import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { config } from "../../environment/environment";

const ITEMS_PER_PAGE = 6;

const InterviewList = () => {
  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    interviewName: '',
    link: '',
    date: new Date().toISOString().slice(0, 10),
  });
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetch(`${config.API_URL}/api/students`)
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.studentName.trim()) newErrors.studentName = 'Student name is required';
    if (!formData.interviewName.trim()) newErrors.interviewName = 'Interviewer name is required';
    if (!formData.link.trim()) newErrors.link = 'Meeting link is required';
    else if (!/^(https?:\/\/)/i.test(formData.link)) newErrors.link = 'Please enter a valid URL';
    if (!formData.date) newErrors.date = 'Date is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (currentIndex !== null) {
      const updatedData = [...students];
      updatedData[currentIndex] = {
        ...updatedData[currentIndex],
        interviewSchedule: {
          studentName: formData.studentName,
          interviewName: formData.interviewName,
          link: formData.link,
          date: formData.date,
        }
      };
      setStudents(updatedData);
      setShowForm(false);
      setFormData({
        studentName: '',
        interviewName: '',
        link: '',
        date: new Date().toISOString().slice(0, 10),
      });
      setCurrentIndex(null);
      setErrors({});
      toast.success("Interview Scheduled Successfully!");
    }
  };

  const handleScheduleClick = (index) => {
    setShowForm(true);
    setCurrentIndex(index);
    // Pre-fill form with student data if available
    setFormData({
      studentName: students[index].name || '',
      interviewName: '',
      link: students[index].interviewSchedule?.link || '',
      date: students[index].interviewSchedule?.date || new Date().toISOString().slice(0, 10),
    });
  };

  const handleSendClick = async (index) => {
    const item = students[index];

    const interviewData = {
      batch: item.batch,
      name: item.name,
      email: item.email,
      phone: item.phone,
      college: item.college,
      jobrole: item.status,
      interviewSchedule: item.interviewSchedule
    };

    try {
      const response = await fetch(`${config.API_URL}/api/interviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(interviewData),
      });

      if (response.ok) {
        toast.info(`Interview details sent for ${item.name}!`);
      } else {
        throw new Error('Failed to send interview details');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({
      studentName: '',
      interviewName: '',
      link: '',
      date: new Date().toISOString().slice(0, 10),
    });
    setErrors({});
    setCurrentIndex(null);
  };

  const totalPages = Math.ceil(students.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedStudents = students.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="w-full max-w-7xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Interview List</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left text-sm font-semibold">Batch</th>
              <th className="p-3 text-left text-sm font-semibold">Name</th>
              <th className="p-3 text-left text-sm font-semibold">Email</th>
              <th className="p-3 text-left text-sm font-semibold">Phone</th>
              <th className="p-3 text-left text-sm font-semibold">College/Training</th>
              <th className="p-3 text-left text-sm font-semibold">Job Role</th>
              <th className="p-3 text-left text-sm font-semibold">Interview Schedule</th>
              <th className="p-3 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedStudents.map((student, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-3">{student.batch}</td>
                <td className="p-3">{student.name}</td>
                <td className="p-3">{student.email}</td>
                <td className="p-3">{student.phone}</td>
                <td className="p-3">{student.college}</td>
                <td className="p-3">{student.status}</td>
                <td className="p-3">
                  {student.interviewSchedule ? (
                    <div>
                      <div>{student.interviewSchedule.studentName}</div>
                      <div>{student.interviewSchedule.interviewName}</div>
                      <a
                        href={student.interviewSchedule.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Meeting Link
                      </a>
                      <div>{new Date(student.interviewSchedule.date).toLocaleDateString()}</div>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleScheduleClick(index)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                      Schedule Interview
                    </button>
                  )}
                </td>
                <td className="p-3">
                  {student.interviewSchedule && (
                    <button
                      onClick={() => handleSendClick(index)}
                      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                    >
                      Send
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4 text-lg-center">Schedule Interview</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Student Name
                    <input
                      type="text"
                      name="studentName"
                      placeholder="Enter Student Name"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      className={` p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${
                        errors.studentName ? 'border-red-500' : ''
                      }`}
                      required
                    />
                    {errors.studentName && (
                      <p className="text-red-500 text-xs mt-1">{errors.studentName}</p>
                    )}
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Interviewer Name
                    <input
                      type="text"
                      name="interviewName"
                      placeholder="Enter Interviewer Name"
                      value={formData.interviewName}
                      onChange={handleInputChange}
                      className={`p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${
                        errors.interviewName ? 'border-red-500' : ''
                      }`}
                      required
                    />
                    {errors.interviewName && (
                      <p className="text-red-500 text-xs mt-1">{errors.interviewName}</p>
                    )}
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Meeting Link
                    <input
                      type="url"
                      name="link"
                      placeholder="https://example.com"
                      value={formData.link}
                      onChange={handleInputChange}
                      className={` p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${
                        errors.link ? 'border-red-500' : ''
                      }`}
                      required
                    />
                    {errors.link && (
                      <p className="text-red-500 text-xs mt-1">{errors.link}</p>
                    )}
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className={` p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${
                        errors.date ? 'border-red-500' : ''
                      }`}
                      required
                    />
                    {errors.date && (
                      <p className="text-red-500 text-xs mt-1">{errors.date}</p>
                    )}
                  </label>
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    onClick={handleFormSubmit}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 "
                  >
                    Schedule Interview
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <h4 className="text-lg font-semibold">Total Students: {students.length}</h4>
          <p className="text-sm text-gray-600">Page {currentPage} of {totalPages}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 rounded-md ${
                currentPage === index + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default InterviewList;