export default function Logo({ scrollProgress }: { scrollProgress: { about: number; projects: number } }) {
  // scroll sun up
  const sunBottom = -25 + (scrollProgress.projects > 0 
    ? scrollProgress.projects * 12.5 + 12.5 
    : scrollProgress.about * 12.5);
    
  // scroll away snow
  const rockBottom = `${40 + (63.7 - 40) * (scrollProgress.about + scrollProgress.projects)}px`;
  const Rock = ({ left }: { left: string }) => (
    <div
      className={`absolute ${left} w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[16px] border-b-black transition-all duration-700`}
      style={{ bottom: rockBottom }}
    />
  );

  return (
    <div className="relative w-[226px] h-[113px]">
      <div id="sunWrapper" className="relative w-[226px] h-[113px] overflow-hidden">
        <div id="sun"
          className="absolute left-1/2 -translate-x-[57%] w-[84px] h-[64px] bg-red-600 rounded-t-full transition-all duration-700"
          style={{ bottom: `${sunBottom}px` }}
        />
      </div>
      <div id="leftMountain" className="absolute bottom-0 left-1/2 -translate-x-[104%] w-0 h-0 border-l-[56px] border-l-transparent border-r-[56px] border-r-transparent border-b-[112px] border-b-black" />
      <div id="leftSnowCap" className="absolute bottom-[64px] left-1/2 -translate-x-[176%] w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-b-[48px] border-b-white" />
      <Rock left="left-[25%] -translate-x-[176%]" />
      <Rock left="left-[32.2%] -translate-x-[176%]" />
      <Rock left="left-[39.4%] -translate-x-[176%]" />
      <div id="rightMountain" className="absolute bottom-0 left-1/2 -translate-x-[5%] w-0 h-0 border-l-[56px] border-l-transparent border-r-[56px] border-r-transparent border-b-[112px] border-b-black" />
      <div id="rightSnowCap" className="absolute bottom-[64px] left-1/2 -translate-x-[-55%] w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-b-[48px] border-b-white" />
      <Rock left="left-[25%] -translate-x-[-517%]" />
      <Rock left="left-[32.2%] -translate-x-[-517%]" />
      <Rock left="left-[39.4%] -translate-x-[-517%]" />
      <div id="leftRay"
        className="absolute left-[34%] w-[2px] h-8 bg-red-600 rotate-[-25deg] top-[5px] transition-opacity duration-500"
        style={{ opacity: scrollProgress.projects }}
      />
      <div id="middleRay"
        className="absolute left-[48%] w-[2px] h-7 bg-red-600 top-[5px] transition-opacity duration-500"
        style={{ opacity: scrollProgress.projects }}
      />
      <div id="rightRay"
        className="absolute left-[61%] w-[2px] h-8 bg-red-600 rotate-[25deg] top-[5px] transition-opacity duration-500"
        style={{ opacity: scrollProgress.projects }}
      />
    </div>
  );
}
