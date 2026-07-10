import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Projects from "@/components/home/projects/Projects";
import Profile from "@/components/home/profile";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main className="flex w-full min-w-0 flex-1 flex-col items-stretch overflow-x-clip">
      <Hero />
      <Profile />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}
