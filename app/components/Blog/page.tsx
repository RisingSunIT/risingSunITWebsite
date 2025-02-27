import Image from "next/image";

export default function Blog() {
  const blogEntries = [
    {
      title: "Mobile Game Development with Flame",
      date: "2025-03-01",
      summary: "Interested in developing your first mobile game? This is a quick and easy guide of how to get started!",
      image: "/images/blog1.png",
      link: "/blog/first-post",
    },
    {
      title: "Another Insightful Article",
      date: "2025-03-01",
      summary: "A quick summary of another article that shares interesting insights on a topic.",
      image: "/images/blog2.jpg",
      link: "/blog/another-article",
    },
    {
      title: "Latest Tech Trends",
      date: "2025-03-01",
      summary: "Exploring the newest trends in technology that are shaping the future.",
      image: "/images/blog3.jpg",
      link: "/blog/tech-trends",
    },
  ];

  return (
    <section id="blog" className="pt-2 pb-2 bg-white dark:bg-black">
      <div className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 max-w-6xl mx-auto">
          {blogEntries.map((entry, index) => (
            <div key={index} className="flex flex-col p-4 border border-gray-300 dark:border-white rounded-lg shadow-lg">
              {/* Responsive Image Wrapper */}
              <div className="relative w-full h-64">
                <Image 
                  src={entry.image} 
                  alt={entry.title} 
                  width={500} 
                  height={300} 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Headline - Always One Line */}
              <div className="text-center text-[#36c1cf] text-base lg:text-lg font-semibold mt-4 truncate whitespace-nowrap">
                {entry.title}
              </div>

              {/* Date */}
              <div className="text-black dark:text-white text-sm">{entry.date}</div>

              {/* Summary - Readable and Short Sentences */}
              <div className="flex-grow text-center text-black dark:text-white text-base sm:text-lg mt-2 max-w-[90%] mx-auto leading-snug">
                {entry.summary.split("\n").map((line, i) => (<p key={i}>{line}</p>))}
              </div>

              {/* Read More */}
              <div className="text-center text-gray-500 dark:text-gray-300 text-lg mt-4">
                <a href={entry.link} className="hover:underline">Read more...</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
