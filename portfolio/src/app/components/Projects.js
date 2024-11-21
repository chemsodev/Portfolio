export default function Projects() {
    return (
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Selected Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-800 rounded shadow">
              <h3 className="text-2xl font-bold">Project Name</h3>
              <p>Built with React, Next.js, and Tailwind CSS</p>
              <div className="flex mt-4 space-x-4">
                <a href="#" className="text-blue-500">Live Demo</a>
                <a href="#" className="text-blue-500">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  