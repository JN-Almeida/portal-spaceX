export interface Launch {
  id: string
  flight_number?: number | null
  mission_name: string | null
  launch_date_local: string
  launch_date_utc?: string | null
  launch_success: boolean | null
  upcoming: boolean | null
  details: string | null
  links?: {
    mission_patch?: string | null
    mission_patch_small?: string | null
    video_link?: string | null
    wikipedia?: string | null
    flickr_images?: string[]
    article_link?: string | null
    presskit?: string | null
  }
  rocket?: {
    rocket_name?: string | null
    rocket_type?: string | null
    rocket?: {
      id?: string | null
      name?: string | null
      type?: string | null
      description?: string | null
      company?: string | null
      country?: string | null
      first_flight?: string | null
      height?: {
        meters?: number | null
        feet?: number | null
      }
      diameter?: {
        meters?: number | null
        feet?: number | null
      }
      mass?: {
        kg?: number | null
        lb?: number | null
      }
      stages?: number | null
      boosters?: number | null
      cost_per_launch?: number | null
      success_rate_pct?: number | null
    }
  }
  launch_site?: {
    site_id?: string | null
    site_name?: string | null
    site_name_long?: string | null
  }
  payloads?: Array<{
    payload_id?: string | null
    payload_type?: string | null
    payload_mass_kg?: number | null
    payload_mass_lbs?: number | null
    orbit?: string | null
  }>
}

export interface LaunchListItem {
  id: string
  mission_name: string | null
  launch_date_utc?: string | null
  links?: {
    flickr_images?: string[]
  }
  rocket?: {
    rocket_name?: string | null
    rocket_type?: string | null
  }
}
