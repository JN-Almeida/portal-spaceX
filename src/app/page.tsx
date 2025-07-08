import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex justify-between items-center flex-col py-4 md:py-8">
      <div className="container text-center px-4 flex-1 flex flex-col justify-center">
        <div className="flex gap-4 justify-center items-center mb-8">
          <Rocket size={32} className="glow-icon" />
          <h1 className="text-3xl font-bold text-white text-shadow-glow">
            SpaceX Launches
          </h1>
        </div>
        <h2 className="text-lg text-gray-300 mb-8">SPACE MISSIONS PORTAL</h2>
        <p className="text-md text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Explore all SpaceX launches in real time. Browse the full mission
          history, uncover detailed info about each launch, and stay informed
          with the latest news from space.
        </p>
        <Link href="/launches">
          <Button variant="default" className="mt-4 cursor-pointer">
            EXPLORE MISSIONS
          </Button>
        </Link>
      </div>
      <footer className="text-center text-gray-400 text-sm mt-12 max-w-4xl mx-auto px-4">
        <p>
          “You want to wake up in the morning and think the future is going to
          be great - and that’s what being a spacefaring civilization is all
          about. It’s about believing in the future and thinking that the future
          will be better than the past. And I can’t think of anything more
          exciting than going out there and being among the stars.” -Elon Musk
        </p>
      </footer>
    </div>
  );
}
