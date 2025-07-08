export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    
    if (isNaN(date.getTime())) {
      return dateString
    }

    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ]

    const day = date.getDate().toString().padStart(2, '0')
    const month = months[date.getMonth()]
    const year = date.getFullYear()
    return `${month} ${day}, ${year}`
  } catch (error) {
    console.error('Error formatting date:', error)
    return dateString
  }
}

export function formatDateShort(dateString: string): string {
  try {
    const date = new Date(dateString)
    
    if (isNaN(date.getTime())) {
      return dateString
    }

    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
  } catch (error) {
    console.error('Error formatting date:', error)
    return dateString
  }
} 