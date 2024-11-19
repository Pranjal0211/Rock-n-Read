import { BookOpenIcon, MusicIcon, UserIcon } from "lucide-react";
import ProgramCard from "./ProgramCard";

const ProgramInfo = () => {
  const programDetails = [
    {
      icon: MusicIcon,
      title: "Fun Learning for Children",
      description:
        "1/3 of 4th and 8th graders can’t read at a basic level. Engaging music-based activities make learning to read enjoyable for every child.",
      iconColor: "text-accentYellow",
    },
    {
      icon: UserIcon,
      title: "Researched Support for Parents",
      description:
        "Parents need help to prepare their child’s brain for reading. Rock 'n' Read uses evidence-based strategies proven to improve literacy.",
      iconColor: "text-accentRed",
    },
    {
        icon: BookOpenIcon,
        title: "Empowering Tools for Teachers",
        description:
          "Teachers need effective strategies to enable children’s brains to read. Our resources support educators in making literacy accessible.",
        iconColor: "text-successGreen",
      },
  ];

  return (
    <section
      className="bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: "url('/baby-singing.webp ')", // Replace with your image path
      }}
    >
      <div className="bg-gray-900/70 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary text-center mb-10">
          Why Rock 'n' Read?
        </h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-100"> */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        shadow-lg flex flex-col justify-between h-[400px] w-[1000px] mx-auto gap-10 mt-16">
          {programDetails.map((program, index) => (
            <ProgramCard
              key={index}
              icon={program.icon}
              title={program.title}
              description={program.description}
              iconColor={program.iconColor}
            />
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default ProgramInfo;
