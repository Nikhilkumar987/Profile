import React from "react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my projects and skills, built using React and Tailwind CSS.",
    image: "src/assets/Portfolio.png",
    live:"https://portfolio-yr82.vercel.app/"
  },
  {
    id: 2,
    title: "Note App",
    description: "A Simple Note taking app to take note in simple and easy way and acess them anytime .",
    image: "/src/assets/NoteApp.png",
    live:"https://github.com/Nikhilkumar987/Note-App"
  },
  {
    id: 3,
    title: "Tailwind landing page",
    description: "A impressive landing page with infinte scroll of icon and working FAQ's.",
    image: "src/assets/Tailwind.png",
    live:"https://github.com/Nikhilkumar987/TailwindProject/tree/master"
  },
  {
    id: 4,
    title: "Chat Application",
    description: "A real-time chat app using React, Firebase Realtime DB, and authentication features.",
    image: "src/assets/ChatApp.png",
    live:"https://chatapp-96b5f.firebaseapp.com/"
  },

];

function Project() {
  return (
    <div className="bg-gradient-to-br from-black to-slate-700 p-10 w-full min-h-screen">
      <h2 className="text-4xl font-bold mb-10 text-center text-orange-400">My Projects</h2>

      <div className="flex flex-col gap-10 w-full max-w-5xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row items-center gap-6 border border-white/20 rounded-2xl p-6 bg-white/5 text-white shadow-lg"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/3 rounded-xl object-cover"
            />

            {/* Text */}
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-white/80">{project.description}</p>
            </div>
            <a
  href={project.live}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 md:mt-0 md:ml-auto inline-block px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow transition duration-300"
>
  View
</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
