import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white p-12 rounded-2xl shadow-xl max-w-md w-full mx-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            VoltAnteil
          </h1>
          <p className="text-gray-600 text-lg">
            Welcome to your application
          </p>
          <div className="mt-8">
            <div className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200">
              Ready for development
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App