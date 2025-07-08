import { GET_LAUNCH_DETAILS } from "@/graphql/queries";
import { createApolloClient } from "@/lib/apollo-ssr";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Launch } from "@/types/spacex";
import Image from "next/image";
import { BookOpen, CirclePlay, Newspaper } from "lucide-react";
import { getYouTubeVideoId } from "@/utils/getYouTubeVideoId";
import { LinkBackPage } from "@/components/LinkBackPage";

export default async function LaunchIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const client = createApolloClient();
  const { data } = await client.query({
    query: GET_LAUNCH_DETAILS,
    variables: { id },
  });

  const launch: Launch = data.launch;
  const hasImages =
    launch.links?.flickr_images && launch.links.flickr_images.length > 0;
  const videoId = launch.links?.video_link
    ? getYouTubeVideoId(launch.links.video_link)
    : null;

  return (
    <div className="mx-auto max-w-5xl px-4 md:px-8 py-4 md:py-8">
      <LinkBackPage href="/launches" text="Back to Launches" />

      {hasImages ? (
        <div className="mb-8 relative">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {launch.links?.flickr_images?.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4">
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={image}
                      alt={`${launch.mission_name} - Image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 70vw"
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {(launch.links?.flickr_images?.length || 0) > 1 && (
              <>
                <CarouselPrevious className="hidden sm:flex -left-4 md:-left-12 lg:-left-16" />
                <CarouselNext className="hidden sm:flex -right-4 md:-right-12 lg:-right-16" />
              </>
            )}
          </Carousel>

          {(launch.links?.flickr_images?.length || 0) > 1 && (
            <div className="flex sm:hidden justify-center mt-4 space-x-2">
              {launch.links?.flickr_images?.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-gray-400"
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      ) : videoId ? (
        <div className="mb-8 relative">
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                title={`${launch.mission_name} - Launch Video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      ) : null}

      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          {launch.mission_name}
        </h1>
        {launch.launch_date_local && (
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
            {new Date(launch.launch_date_local).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        )}
      </div>

      <div className="space-y-6">
        {launch.details && (
          <div>
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Mission Details
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {launch.details}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {launch.rocket && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                Rocket
              </h3>
              <div className="text-gray-700 dark:text-gray-300">
                <p>
                  <strong>Name:</strong> {launch.rocket.rocket_name}
                </p>
                <p>
                  <strong>Type:</strong> {launch.rocket.rocket_type}
                </p>
              </div>
            </div>
          )}

          {launch.launch_site && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                Launch Site
              </h3>
              <div className="text-gray-700 dark:text-gray-300">
                <p>
                  <strong>Site:</strong> {launch.launch_site.site_name}
                </p>
                {launch.launch_site.site_name_long && (
                  <p>
                    <strong>Full Name:</strong>{" "}
                    {launch.launch_site.site_name_long}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {launch.links && (
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              Related Links
            </h3>
            <div className="flex flex-wrap gap-3">
              {launch.links.video_link && hasImages && (
                <a
                  href={launch.links.video_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  <CirclePlay className="w-4 h-4 mr-2" />
                  <span>Launch Video</span>
                </a>
              )}
              {launch.links.wikipedia && (
                <a
                  href={launch.links.wikipedia}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span>Wikipedia</span>
                </a>
              )}
              {launch.links.article_link && (
                <a
                  href={launch.links.article_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                >
                  <Newspaper className="w-4 h-4 mr-2" />
                  <span>Article</span>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
