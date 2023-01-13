export type TCompetition = {
  name: string
  url: string
  start_time: string
  end_time: string
  duration: number
  site: string
  in24Hours: "Yes" | "No"
  status: "CODING" | "BEFORE"
}
