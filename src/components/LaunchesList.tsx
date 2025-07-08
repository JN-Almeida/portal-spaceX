"use client";
import { useLaunches } from "@/hooks/use-launches";
import { Loading } from "./loading";
import { CircleAlert } from "lucide-react";
import { LaunchesCards, LaunchesCardsSkeletonGrid } from "./LaunchesCards";
import { useEffect, useRef, useState } from "react";
import { Launch } from "@/types/spacex";

export function LaunchesList() {
  const { launches, loading, error, loadMore, isLoadingMore } = useLaunches(12);
  const [displayedLaunches, setDisplayedLaunches] = useState<Launch[]>([]);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (launches.length > 0) {
      setDisplayedLaunches(launches);
    }
  }, [launches]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && !isLoadingMore) {
          loadMore();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [loadMore, loading, isLoadingMore]);

  if (loading && displayedLaunches.length === 0) {
    return <LaunchesCardsSkeletonGrid count={6} />;
  }

  if (error && displayedLaunches.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="futuristic-card p-8 mx-auto max-w-md">
          <div className="text-red-400 mb-6">
            <CircleAlert className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-xl font-bold text-white glow-text mb-4">
            COMMUNICATION ERROR, TRY AGAIN LATER
          </h3>
          <p className="text-gray-300 mb-4">
            Failed to connect to the mission control center
          </p>
          <div className="text-sm text-gray-400 bg-gray-900/50 p-3 rounded border border-red-500/30">
            {error?.message || "Unknown error in data transmission"}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {displayedLaunches.map((launch: Launch) => (
          <LaunchesCards key={launch.id} launch={launch} />
        ))}
      </div>
      <div ref={observerRef} className=""></div>
      {(loading || isLoadingMore) && (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
}
