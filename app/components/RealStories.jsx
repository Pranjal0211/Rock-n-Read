import Image from "next/image";

const RealStories = () => {
  const testimonials = [
    {
      name: "Emma Johnson",
      role: "Student",
      image: "/emma.avif", // Replace with the actual image path
      quote:
        "Before joining Rock 'n' Read, reading felt impossible. Now, I read my favorite stories every night with joy!",
    },
    {
        name: "Sophia Lee",
        role: "Parent",
        image: "/parent.jpg", // Replace with the actual image path
        quote:
          "My child struggled with reading for years. Thanks to Rock 'n' Read, she now loves books and feels confident.",
    },
    {
      name: "Mr. Carter",
      role: "Teacher",
      image: "/teacher.jpg", // Replace with the actual image path
      quote:
        "Rock 'n' Read has transformed the way my students engage with reading. Music has truly unlocked their potential.",
    },
    
  ];

  return (
    <section className="bg-neutralGray py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary text-center mb-10">
          Real Stories & Testimonials
        </h2>
        <p className="text-center text-textGray mb-10">
          Discover how Rock 'n' Read has positively impacted children, teachers,
          and parents through inspiring stories and real results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={350}
                height={200}
                className="rounded-full"
              />
              <h3 className="text-xl font-semibold text-primary mb-2">
                {testimonial.name}
              </h3>
              <p className="text-sm text-accentYellow font-medium">
                {testimonial.role}
              </p>
              <p className="text-textGray mt-4 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealStories;
