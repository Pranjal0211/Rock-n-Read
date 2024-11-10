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
      title: "Research-Backed Support for Parents",
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
    <section className="bg-neutralGray py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary text-center mb-10">
          Why Rock 'n' Read?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
    </section>
  );
};

export default ProgramInfo;
