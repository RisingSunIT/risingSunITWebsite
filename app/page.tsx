import NavigationBar from "./components/NavigationBar/page";
import Blog from "./components/Blog/page";
import About from "./components/About/page";
import Projects from "./components/Projects/page";

export default function Home() {
  return (
    <main className="font-['Lustria']">
      <NavigationBar/>
      <div id="divNavBarSpacer" className="h-[120px]"/>
      <Blog></Blog>
      <About></About>
      <Projects></Projects>
    </main>
  );
}
