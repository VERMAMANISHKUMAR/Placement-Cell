import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { config } from "../../environment/environment";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(`${config.API_URL}/api/students`);
        if (!response.ok) {
          const errorData = await response.json();
          const errorMessage = errorData?.error || response.statusText;
          throw new Error(errorMessage);
        }
        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error("Invalid data format from API.");
        }
        setStudents(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
        toast.error(`Error fetching data: ${error.message}`);
      }
    };
    fetchStudents();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDelete = async (studentId) => {
    try {
      const response = await fetch(`${config.API_URL}/api/students/${studentId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to delete student");
      }
      setStudents((prevStudents) =>
        prevStudents.filter((student) => student._id !== studentId)
      );
      toast.success("Student deleted successfully.");
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStudents = students.slice(startIndex, startIndex + itemsPerPage);

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(students);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
    XLSX.writeFile(workbook, "students_data.xlsx");
  };

  if (loading) {
    return <div className="text-center text-gray-600 text-lg py-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 text-lg py-4">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <ToastContainer />
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Student List</h1>
      {students.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">No students found.</p>
      ) : (
        <>
          {/* Export and Add Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-6">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
              <CSVLink
                data={students}
                filename="students_data.csv"
                className="text-white no-underline"
              >
                Download CSV
              </CSVLink>
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
              onClick={downloadExcel}
            >
              Download Excel
            </button>
            <Link
              to="/students/add"
              className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition text-center no-underline"
            >
              Add Student
            </Link>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-3 px-4 border-b text-left text-gray-700">Batch</th>
                  <th className="py-3 px-4 border-b text-left text-gray-700">Name</th>
                  <th className="py-3 px-4 border-b text-left text-gray-700">Email</th>
                  <th className="py-3 px-4 border-b text-left text-gray-700">Phone</th>
                  <th className="py-3 px-4 border-b text-left text-gray-700">College</th>
                  <th className="py-3 px-4 border-b text-left text-gray-700">Job Role</th>
                  <th className="py-3 px-4 border-b text-left text-gray-700">DSA Score</th>
                  <th className="py-3 px-4 border-b text-left text-gray-700">Web Score</th>
                  <th className="py-3 px-4 border-b text-left text-gray-700">React Score</th>
                  <th className="py-3 px-4 border-b text-left text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentStudents.map((student, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b text-gray-600">{student.batch}</td>
                    <td className="py-3 px-4 border-b text-gray-600">{student.name}</td>
                    <td className="py-3 px-4 border-b text-gray-600">{student.email}</td>
                    <td className="py-3 px-4 border-b text-gray-600">{student.phone}</td>
                    <td className="py-3 px-4 border-b text-gray-600">{student.college}</td>
                    <td className="py-3 px-4 border-b text-gray-600">{student.status}</td>
                    <td className="py-3 px-4 border-b text-gray-600">{student.DSA_FinalScore}</td>
                    <td className="py-3 px-4 border-b text-gray-600">{student.WebD_FinalScore}</td>
                    <td className="py-3 px-4 border-b text-gray-600">{student.React_FinalScore}</td>
                    <td className="py-3 px-4 border-b">
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                        onClick={() => handleDelete(student._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from(
              { length: Math.ceil(students.length / itemsPerPage) },
              (_, i) => (
                <button
                  key={i}
                  className={`px-4 py-2 rounded-lg border ${
                    currentPage === i + 1
                      ? "bg-blue-500 text-white border-blue-500"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  } transition`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default StudentList;
