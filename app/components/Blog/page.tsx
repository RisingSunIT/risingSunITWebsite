export default function Blog() {
  return (
    <section id="blog" className="pt-[120px] bg-white dark:bg-black">
      <div className="w-[1340px] h-[791px] relative">
        <div className="w-[420px] h-[791px] left-[920px] top-0 absolute">
          <div className="w-[420px] h-[341px] left-0 top-[450px] absolute">
            <div className="w-[420px] h-[60px] left-0 top-[30px] absolute text-center text-[#36c1cf] text-[32px] font-normal font-['Lustria']">Title</div>
            <div className="w-[420px] h-[60px] left-0 top-[281px] absolute text-center text-[#808080] text-2xl font-normal font-['Lustria']">Read more...</div>
            <div className="w-[420px] h-[191px] left-0 top-[90px] absolute text-center text-black dark:text-white text-2xl font-normal font-['Lustria']">Summary Summary Summary<br/>Summary Summary Summary<br/>Summary Summary Summary<br/>Summary Summary Summary</div>
            <div className="w-[420px] h-[30px] left-0 top-0 absolute text-center text-black dark:text-white text-base font-normal font-['Lustria']">Date</div>
          </div>
          <div className="w-[420px] h-[450px] left-0 top-0 absolute bg-[#d9d9d9]"></div>
        </div>
      </div>
    </section>
  );
}
