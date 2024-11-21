export default function ContactForm() {
    return (
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <form className="space-y-4 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 bg-gray-800 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 bg-gray-800 rounded"
            />
            <textarea
              placeholder="Message"
              className="w-full p-2 bg-gray-800 rounded"
              rows="4"
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    );
  }
  