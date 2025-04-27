"use client";

export function AboutSection() {
  const stats = [
    { value: "10+", label: "Years of Experience" },
    { value: "25+", label: "Dental Specialists" },
    { value: "5000+", label: "Happy Patients" },
    { value: "15+", label: "Awards Won" },
  ];

  return (
    <section id="about" className="py-20 bg-dental-teal/5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 rounded-full bg-dental-gold/10 -z-10" />
            <div className="bg-white p-6 rounded-lg shadow-lg border border-dental-teal/10">
              <div className="aspect-video rounded-lg overflow-hidden bg-dental-teal/20 flex items-center justify-center">
                {/* Here would be an image of the dental team, for now we use a placeholder */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-24 h-24 text-dental-teal/50"
                >
                  <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
                  <path d="M2 20h20" />
                  <path d="M14 12v.01" />
                </svg>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center p-3 bg-dental-teal/5 rounded-lg">
                    <p className="font-agbalumo text-2xl text-dental-teal">{stat.value}</p>
                    <p className="font-epilogue text-sm text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-agbalumo text-4xl text-dental-teal mb-6">
              We are <span className="text-dental-gold">Golden Smile Creation</span>
            </h2>
            <div className="space-y-4 font-epilogue text-slate-700">
              <p>
                Founded over 10 years ago, Golden Smile Creation has become a benchmark for excellence in oral health. Our commitment is to provide personalized quality care for each patient.
              </p>
              <p>
                We have a team of highly trained specialists and the most advanced technologies in the field of dentistry to ensure the best results.
              </p>
              <p>
                At Golden Smile Creation, we focus not only on aesthetics but also on the comprehensive health of your smile, offering complete treatments tailored to your needs.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="bg-dental-teal/10 p-2 rounded-full mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-dental-teal"
                  >
                    <path d="m8 12 2 2 6-6" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-epilogue font-semibold text-lg text-dental-teal">Cutting-Edge Technology</h3>
                  <p className="font-epilogue text-slate-600">
                    We use the most modern equipment for accurate diagnoses and effective treatments.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-dental-teal/10 p-2 rounded-full mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-dental-teal"
                  >
                    <path d="m8 12 2 2 6-6" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-epilogue font-semibold text-lg text-dental-teal">Certified Specialists</h3>
                  <p className="font-epilogue text-slate-600">
                    Our team of dentists has extensive experience and international certifications.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-dental-teal/10 p-2 rounded-full mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-dental-teal"
                  >
                    <path d="m8 12 2 2 6-6" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-epilogue font-semibold text-lg text-dental-teal">Personalized Care</h3>
                  <p className="font-epilogue text-slate-600">
                    Each treatment is adapted to the specific needs and objectives of each patient.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
