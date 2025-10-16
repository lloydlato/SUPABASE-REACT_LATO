import { useState } from 'react';
import { Plus, Edit, Trash2, Search, GraduationCap, BookOpen } from 'lucide-react';

export default function StudentPage() {
  const [students, setStudents] = useState([
    { id: 1, firstName: "Lloyd", lastName: "Lato", yearLevel: 3, course: "BS-IT" },
    { id: 2, firstName: "Maria", lastName: "Santos", yearLevel: 2, course: "BS-CS" },
    { id: 3, firstName: "Jose", lastName: "Reyes", yearLevel: 4, course: "BS-IT" },
  ]);

  

  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const handleAddStudent = () => {
    window.location.href = '/addStudent';
  };

  const filteredStudents = students.filter(student =>
    student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-600 to-sky-400 p-6 text-gray-800">
      <div className="max-w-6xl mx-auto bg-white bg-opacity-90 rounded-2xl shadow-xl p-8 backdrop-blur-sm">
        
        {/* Centered Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            Student Directory
          </h1>
          <p className="text-gray-600 text-lg">Manage and view all student records</p>
        </div>

        {/* Top Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          {/* Search Bar */}
          <div className="relative w-full sm:w-2/3">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or course..."
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            />
          </div>

          {/* Add Button */}
          <button
            onClick={handleAddStudent}
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md flex items-center gap-2 transition-all duration-200"
          >
            <Plus size={20} />
            Add Student
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="bg-cyan-100 p-3 rounded-lg">
                <GraduationCap className="text-cyan-600" size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Total Students</p>
                <p className="text-2xl font-bold">{students.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-3 rounded-lg">
                <BookOpen className="text-green-600" size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Courses</p>
                <p className="text-2xl font-bold">{new Set(students.map(s => s.course)).size}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Search className="text-yellow-600" size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Search Results</p>
                <p className="text-2xl font-bold">{filteredStudents.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Student Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-cyan-600 text-white">
                <th className="px-6 py-3 text-sm font-semibold">ID</th>
                <th className="px-6 py-3 text-sm font-semibold">First Name</th>
                <th className="px-6 py-3 text-sm font-semibold">Last Name</th>
                <th className="px-6 py-3 text-sm font-semibold">Year Level</th>
                <th className="px-6 py-3 text-sm font-semibold">Course</th>
                <th className="px-6 py-3 text-center text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student, index) => (
                  <tr
                    key={student.id}
                    className={`border-b border-gray-200 hover:bg-gray-50 transition ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    <td className="px-6 py-3 text-sm text-gray-700">{student.id}</td>
                    <td className="px-6 py-3 text-sm text-gray-900 font-medium">{student.firstName}</td>
                    <td className="px-6 py-3 text-sm text-gray-900 font-medium">{student.lastName}</td>
                    <td className="px-6 py-3 text-sm">
                      <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold border border-cyan-200">
                        Year {student.yearLevel}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-sm">
                      <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold border border-gray-300">
                        {student.course}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-center">
                      <div className="flex items-center justify-center gap-3">
                        <button className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2 rounded-lg border border-blue-200 transition" title="Edit">
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(student.id)}
                          className="bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-lg border border-red-200 transition"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                    No students found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-gray-600 text-sm">
          Showing {filteredStudents.length} of {students.length} students
        </div>
      </div>
    </div>
  );
}
