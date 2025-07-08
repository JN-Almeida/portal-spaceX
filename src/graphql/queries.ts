import { gql } from "@apollo/client";

export const GET_LAUNCHES_LIST = gql`
  query GetLaunchesList($limit: Int, $offset: Int) {
    launches(limit: $limit, offset: $offset) {
      id
      mission_name
      launch_date_utc
      rocket {
        rocket_name
        rocket_type
      }
      links {
        flickr_images
      }
    }
  }
`;

export const GET_UPCOMING_LAUNCHES = gql`
  query GetUpcomingLaunches($limit: Int) {
    launchesUpcoming(limit: $limit) {
      id
      mission_name
      launch_date_local
      details
      rocket {
        rocket_name
        rocket_type
      }
      launch_site {
        site_name
        site_name_long
      }
      links {
        mission_patch_small
        video_link
        wikipedia
      }
    }
  }
`;

export const GET_LAUNCH_DETAILS = gql`
  query GetLaunchDetails($id: ID!) {
    launch(id: $id) {
      id
      mission_name
      launch_date_local
      launch_success
      details
      rocket {
        rocket_name
        rocket_type
      }
      launch_site {
        site_name
        site_name_long
      }
      links {
        mission_patch
        mission_patch_small
        video_link
        wikipedia
        flickr_images
        article_link
      }
    }
  }
`;
