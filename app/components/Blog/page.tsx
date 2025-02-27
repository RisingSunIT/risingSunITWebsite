import Image from "next/image";

export default function Blog() {
  const blogEntries = [
    {
      title: "Mobile Game Development with flame",
      date: "2025-03-01",
      summary: "Interested in developing your first mobile game?\nThis is a quick and easy guide of how to get started!",
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
    <section id="blog" className="pt-8 pb-4 bg-white dark:bg-black">
      <div className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogEntries.map((entry, index) => (
            <div key={index} className="p-4 border border-gray-300 dark:border-white rounded-lg shadow-lg">
              <Image 
                src={entry.image} 
                alt="Blog image" 
                width={500} 
                height={300} 
                className="rounded-lg"
              />
              <div className="text-center text-[#36c1cf] text-[24px] mt-4">{entry.title}</div>
              <div className="text-center text-black dark:text-white text-sm">{entry.date}</div>
              <div className="text-center text-black dark:text-white text-lg mt-2">
                {entry.summary.split("\n").map((line, i) => ( <p key={i}>{line}</p> ))}
              </div>
              <div className="text-center text-gray-500 dark:text-gray-300 text-lg mt-2">
                <a href={entry.link} className="hover:underline">Read more...</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
