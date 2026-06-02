import React from "react";
import Destiny from "../assets/library.jpg";
import fees from "../assets/fees.png";
import dashboard from "../assets/dashboard.png";
import seat from "../assets/seat.png";
import student from "../assets/student.png";

export default function DestinyProject() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">

      {/* Hero Section */}
      <div className="px-6 md:px-16 py-12">

        <div className="max-w-6xl mx-auto">

          <img
            src={Destiny}
            alt="Destiny Library"
            className="w-full h-72 object-cover justify-center  rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700"
          />

          <div className="mt-10">

            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold">
              React • Tailwind CSS • Firebase
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-5 text-gray-900 dark:text-white">
              Destiny Library Management System
            </h1>

            <p className="mt-5 text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl">
              Destiny is a complete Library Management System built using
              React, Tailwind CSS and Firebase Firestore. It helps manage
              students, seat allocation, fee records and dashboard analytics
              with real-time database synchronization.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="https://github.com/SonamNagar/Destiny"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-slate-900 text-white rounded-xl shadow-lg hover:scale-105 transition duration-300"
              >
                GitHub Repository
              </a>

              <a
                href="https://destiny-4f5p.onrender.com"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300"
              >
                Live Demo
              </a>

            </div>

          </div>
        </div>
      </div>

      {/* Features */}
      <div className="px-6 md:px-16 py-10">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-lg mb-2 text-blue-600">
                Student Management
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Add, edit and manage student records efficiently.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-lg mb-2 text-blue-600">
                Seat Management
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Allocate and monitor available and occupied seats.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-lg mb-2 text-blue-600">
                Fee Records
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Track paid and pending fee records in real-time.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-lg mb-2 text-blue-600">
                Firebase Firestore
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Real-time database synchronization using Firestore.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-lg mb-2 text-blue-600">
                Dashboard Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Visual insights for seats, students and fees.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-lg mb-2 text-blue-600">
                CRUD Operations
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Complete Create, Read, Update and Delete functionality.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Screenshots Section */}
      <div className="bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 px-6 md:px-16">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold text-slate-800 dark:text-white">
              Project Screenshots
            </h2>

            <p className="mt-3 text-slate-500 dark:text-slate-400">
              Explore the major modules of Destiny Library Management System
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Dashboard */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">

              <img
                src={dashboard}
                alt="Dashboard"
                className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                  Dashboard
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Real-time analytics and system overview.
                </p>
              </div>

            </div>

            {/* Students */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">

              <img
                src={student}
                alt="Students"
                className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                  Student Management
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Manage students and their library records.
                </p>
              </div>

            </div>

            {/* Seats */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">

              <img
                src={seat}
                alt="Seat Management"
                className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                  Seat Management
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Track available and occupied seats.
                </p>
              </div>

            </div>

            {/* Fees */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">

              <img
                src={fees}
                alt="Fees Records"
                className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                  Fees Records
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Monitor fee payments and outstanding balances.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}