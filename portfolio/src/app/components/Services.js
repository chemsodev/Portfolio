export default function Services() {
    return (
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">My Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-900 rounded shadow">
              <h3 className="text-2xl font-bold mb-2">Frontend Development</h3>
              <p>Creating visually appealing, responsive websites.</p>
            </div>
            {/* Repeat for more cards */}
          </div>
        </div>
      </section>
    );
  }
  