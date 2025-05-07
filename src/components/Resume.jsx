import React from 'react'

function Resume()
{
    return(
        <div className="bg-gradient-to-br from-black to-slate-700 min-h-screen w-full p-10 text-white flex flex-col items-center">

        <h2 className="text-4xl font-bold mb-10 text-center text-orange-400">My Resume</h2>
      
        <div className="flex flex-col md:flex-row gap-10 w-full max-w-5xl border border-white/20 rounded-2xl p-8 bg-white/5 shadow-lg">
          
  
      
          
          <div className="flex-1 border border-white/10 rounded-2xl p-6 bg-white/10">
            <h3 className="text-2xl font-semibold mb-4 text-orange-300">Download My Resume</h3>
            <p className="mb-6 text-gray-300 leading-relaxed">
              You can view or download my resume using the button below. It outlines my education, skills, and work experience relevant to frontend development and web design.
            </p>
            <a
              href="/My_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
              download
            >
              Download Resume
            </a>
          </div>
      
        </div>
      </div>
      
    )
}

export default Resume;