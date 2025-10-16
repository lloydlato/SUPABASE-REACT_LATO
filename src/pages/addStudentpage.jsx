import React, { useState } from "react";

export default function AddStudentPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    yearLevel: "",
    course: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      id: Date.now(),
      created_at: new Date().toISOString(),
      ...formData,
    };

    console.log("✅ Student Added:", newStudent);
    alert("Student Added Successfully!");
    setFormData({ firstName: "", lastName: "", yearLevel: "", course: "" });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: "url('pic1.jpg')", // 🖼️ your sunset or custom background
      }}
    >
      {/* Semi-transparent overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Card container */}
      <div className="relative z-10 bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md text-white border border-white/30">
        <h1 className="text-3xl font-bold text-center mb-6 tracking-wide">
          Add Student
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
              className="w-full p-2 rounded-lg bg-white/20 border border-white/30 placeholder-gray-200 text-white focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
              className="w-full p-2 rounded-lg bg-white/20 border border-white/30 placeholder-gray-200 text-white focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* Year Level */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Year Level
            </label>
            <input
              type="number"
              name="yearLevel"
              value={formData.yearLevel}
              onChange={handleChange}
              placeholder="Enter year level"
              className="w-full p-2 rounded-lg bg-white/20 border border-white/30 placeholder-gray-200 text-white focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* Course */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Course
            </label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              placeholder="Enter course"
              className="w-full p-2 rounded-lg bg-white/20 border border-white/30 placeholder-gray-200 text-white focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg font-semibold shadow-lg hover:opacity-90 transition"
          >
            Add Student
          </button>
        </form>

        {/* Back to Home Link */}   
        <p className="text-center text-sm mt-6 opacity-80">
          <a href="/" className="hover:underline">
            ← Back to Home
          </a>
        </p>
      </div>
    </div>
  );
}
