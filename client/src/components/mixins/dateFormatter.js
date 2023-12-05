import { format } from 'date-fns'

export const formatToWords = (date) => {
    let result
    const dateString = format(date, 'd MMMM yyyy')
    const dateArr = dateString.split(/(\s+)/)
    switch (dateArr[2]) {
        case 'January': result = dateArr[0] + ' января ' + dateArr[4]; break
        case 'February': result = dateArr[0] + ' февраля ' + dateArr[4]; break
        case 'March': result = dateArr[0] + ' марта ' + dateArr[4]; break
        case 'April': result = dateArr[0] + ' апреля ' + dateArr[4]; break
        case 'May': result = dateArr[0] + ' мая ' + dateArr[4]; break
        case 'June': result = dateArr[0] + ' июня ' + dateArr[4]; break
        case 'July': result = dateArr[0] + ' июля ' + dateArr[4]; break
        case 'August': result = dateArr[0] + ' августа ' + dateArr[4]; break
        case 'September': result = dateArr[0] + ' сентября ' + dateArr[4]; break
        case 'October': result = dateArr[0] + ' октября ' + dateArr[4]; break
        case 'November': result = dateArr[0] + ' ноября ' + dateArr[4]; break
        case 'December': result = dateArr[0] + ' декабря ' + dateArr[4]; break
        default: break
    }
    return result
}