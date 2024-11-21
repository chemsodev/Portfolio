export default function Skills() {
    return (
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">My Skills</h2>
          <div className="flex justify-center space-x-6">
            <img src="/icons/js.svg" alt="JavaScript" className="w-16 h-16" />
            <img src="/icons/react.svg" alt="React" className="w-16 h-16" />
            <img src="/icons/tailwind.svg" alt="Tailwind" className="w-16 h-16" />
          </div>
        </div>
      </section>
    );
  }
  