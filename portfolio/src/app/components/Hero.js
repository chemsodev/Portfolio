export default function Hero() {
    return (
      <section className="flex flex-col items-center text-center py-20 bg-gradient-to-b from-gray-900 to-black text-white">
        <h1 className="text-5xl font-bold">I'm a Software Engineer.</h1>
        <p className="text-xl mt-4">
          A self-taught UI/UX designer with 3+ years in the industry.
        </p>
        <div className="flex space-x-4 mt-6">
          <button className="px-6 py-2 bg-blue-500 rounded hover:bg-blue-600">
            Contact Me
          </button>
          <div className="flex items-center space-x-3 text-2xl">
            <a href="#" className="hover:text-blue-400">LinkedIn</a>
            <a href="#" className="hover:text-blue-400">GitHub</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
          </div>
        </div>
      </section>
    );
  }
  