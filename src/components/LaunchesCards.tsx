import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import { formatDate } from "@/utils/date-formatter";
import Link from "next/link";

export function LaunchesCardsSkeleton() {
  return (
    <Card className="w-full max-w-sm bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm border border-gray-700/50 relative overflow-hidden">
      <CardHeader className="pb-3 relative z-10">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <Skeleton className="w-28 h-28 rounded-xl bg-gray-700/50 border border-gray-600/30" />
          </div>
        </div>

        <div className="text-center">
          <Skeleton className="h-6 w-3/4 mx-auto mb-2 bg-gray-700/60" />
        </div>
      </CardHeader>

      <CardContent className="pt-0 relative z-10">
        <div className="text-center">
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-3">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Skeleton className="h-3 w-28 bg-gray-700/50" />
            </div>
            <Skeleton className="h-4 w-32 mx-auto bg-gray-600/60" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function LaunchesCardsSkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {Array.from({ length: count }).map((_, index) => (
          <LaunchesCardsSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}

export function LaunchesCards({ launch }: { launch: any }) {
  return (
    <Card
      key={launch.id}
      className="w-full max-w-sm cursor-pointer group bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 hover:shadow-space-hover transition-all duration-300 hover:scale-102 hover:bg-gradient-to-br hover:from-gray-800/80 hover:to-gray-900/80 relative overflow-hidden"
    >
      <Link href={`/launches/${launch.id}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <CardHeader className="pb-3 relative z-10">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-purple-500/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <Image
                src={
                  launch.links?.flickr_images?.[0] || "/assets/img-default.png"
                }
                alt={launch.mission_name}
                width={120}
                height={120}
                className="relative w-28 h-28 object-cover rounded-xl border-2 border-gray-600/50 group-hover:border-cyan-400/50 transition-all duration-300"
              />
            </div>
          </div>

          <div className="text-center">
            <CardTitle className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2 leading-tight">
              {launch.mission_name}
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="pt-0 relative z-10">
          <div className="text-center">
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-3 group-hover:bg-gray-700/50 group-hover:border-cyan-400/30 transition-all duration-300">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-xs text-gray-300 font-medium">
                  LAUNCH DATE
                </span>
              </div>
              <span className="text-sm text-white font-semibold">
                {formatDate(launch.launch_date_utc)}
              </span>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
