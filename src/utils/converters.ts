export const convertMovieReleaseDateToYear = (released: any): number => {
  const releasedYear = new Date(released).getFullYear()
  return releasedYear
}

export const convertMinutesToHoursAndMinutes = (minutes: any): string => {
  let formattedMinutes = minutes

  if(!minutes) {
    return `0m`
  }

  if(typeof minutes === 'string') {
    formattedMinutes = parseInt(minutes.toString().replaceAll('String', ''))
  }

  const hours = Math.floor(formattedMinutes / 60)
  const mins = formattedMinutes % 60

  return hours ? `${hours}h ${mins}m` : `${mins}m`
}