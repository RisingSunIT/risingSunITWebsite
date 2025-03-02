export default function Logo({ scrollProgress }: { scrollProgress: { about: number; projects: number } }) {
  // For the rocks, we want them to rise with the about progress and stay up when in projects
  // The key is to make their position directly proportional to the about progress
  // When in projects, we want them to stay at their maximum position
  
  // Calculate rock position based on scrollProgress.about
  const baseRockPosition = 40;
  const maxRockPosition = 63.7;
  
  // Use the about progress to determine rock position
  // When about progress is 0, rocks are at base position
  // When about progress is 1, rocks are at max position
  // In between, position is proportional to progress
  const rockPosition = baseRockPosition + (maxRockPosition - baseRockPosition) * scrollProgress.about;
  const rockBottom = `${rockPosition}px`;
  
  // Sun animation remains the same
  const sunBottom = -25 + (
    scrollProgress.projects > 0
      ? scrollProgress.projects * 12.5 + 12.5
      : scrollProgress.about * 12.5
  );

  const Rock = ({ left }: { left: string }) => (
    <div
      className={`absolute ${left} w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[16px] border-b-black transition-all duration-700`}
      style={{ bottom: rockBottom }}
    />
  );

  // Rest of the component remains unchanged
  return (
    <div className="relative w-[220px] h-[110px]">
      {/* Component JSX remains the same */}
      <div id="sunWrapper" className="relative w-[220px] h-[110px] overflow-hidden">
        <div id="sun"
          className="absolute left-1/2 -translate-x-[57%] w-[84px] h-[64px] bg-red-600 rounded-t-full transition-all duration-700"
          style={{ bottom: `${sunBottom}px` }}
        />
      </div>
      <div id="leftMountain" className="absolute bottom-0 left-1/2 -translate-x-[104%] w-0 h-0 border-l-[56px] border-l-transparent border-r-[56px] border-r-transparent border-b-[112px] border-b-black" />
      <div id="leftSnowCap" className="absolute bottom-[64px] left-1/2 -translate-x-[176%] w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-b-[48px] border-b-white" />
      <Rock left="left-[24.4%] sm:left-[24.2%] -translate-x-[176%]" />
      <Rock left="left-[31.8%] sm:left-[31.6%] -translate-x-[176%]" />
      <Rock left="left-[39.2%] sm:left-[39%] -translate-x-[176%]" />
      <div id="rightMountain" className="absolute bottom-0 left-1/2 -translate-x-[5%] w-0 h-0 border-l-[56px] border-l-transparent border-r-[56px] border-r-transparent border-b-[112px] border-b-black" />
      <div id="rightSnowCap" className="absolute bottom-[64px] left-1/2 -translate-x-[-55%] w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-b-[48px] border-b-white" />
      <Rock left="left-[24.4%] sm:left-[24.2%] -translate-x-[-517%]" />
      <Rock left="left-[31.8%] sm:left-[31.6%] -translate-x-[-517%]" />
      <Rock left="left-[39.2%] sm:left-[39%] -translate-x-[-517%]" />
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
