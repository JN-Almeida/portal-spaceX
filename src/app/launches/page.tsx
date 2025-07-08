import { LaunchesList } from "@/components/LaunchesList";
import { LinkBackPage } from "@/components/LinkBackPage";

export default function LaunchesPage() {
  return (
    <div className="py-4 md:py-8 max-w-full md:max-w-5xl mx-auto px-4 md:px-8">
      <LinkBackPage href="/" text="Back to Home" />
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-400"></div>
        <div className="w-3 h-3 bg-cyan-400 rounded-full pulse-glow"></div>
        <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-purple-400"></div>
      </div>
      <h1 className="text-4xl font-bold text-white text-center glow-text mb-4">
        SPACEX CONTROL CENTER
      </h1>
      <p className="text-gray-400 text-lg text-center">
        Real-time monitoring of space missions
      </p>
      <LaunchesList />
    </div>
  );
}
