import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="container text-center px-4">
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
    </main>
  );
}
