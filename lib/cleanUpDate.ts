export const cleanUpDate = (date: string) => {
  if (!date) return ""

  const newDate = new Date(date)
  return `${newDate.toLocaleDateString(
    "pt-PT"
  )} às ${newDate.toLocaleTimeString("pt-PT")}`
}
