import { DownloadIcon, MusicIcon, BookOpenIcon } from "lucide-react";

const ResourceLibrary = () => {
  const resources = [
    {
      title: "Printable Guides",
      description: "Download comprehensive guides to help children learn through music.",
      link: "/downloads/printable-guides.pdf",
      icon: BookOpenIcon,
    },
    {
      title: "Song Playlists",
      description: "Access curated playlists that make learning fun and engaging.",
      link: "/downloads/song-playlists.mp3",
      icon: MusicIcon,
    },
    {
      title: "Educational Videos",
      description: "Watch videos that demonstrate effective music-based learning strategies.",
      link: "/downloads/educational-videos.mp4",
      icon: DownloadIcon,
    },
    {
      title: "Activity Sheets",
      description: "Printable activities designed to build literacy skills through music.",
      link: "/downloads/activity-sheets.pdf",
      icon: BookOpenIcon,
    },
  ];

  return (
    <section className="bg-neutralGray py-16">
      <div className="container mx-auto px-6">
        {/* Brain Research Section */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-primary text-center mb-6">
            It’s All About the Brain!
          </h2>
          <p className="text-center text-textGray text-lg">
            Brain research has found that sound processing and retention is the
            key to language and literacy. Singing and learning basic music skills
            are primary ways to prepare all young brains for reading.
          </p>
        </div>
          

        {/* Resource Library */}
        <h2 className="text-4xl font-bold text-primary text-center mb-10">
          Resource Library
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
            >
              <resource.icon
                className="w-12 h-12 text-primary mb-4"
              />
              <h3 className="text-2xl font-semibold text-primary mb-2">
                {resource.title}
              </h3>
              <p className="text-textGray mb-4">{resource.description}</p>
              <a
                href={resource.link}
                download
                className="bg-accentYellow text-primary px-6 py-2 rounded-md hover:bg-yellow-600 transition"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceLibrary;
