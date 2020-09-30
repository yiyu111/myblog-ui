import {
  formatDate
} from 'element-ui/src/utils/date-util'


export function format(time) {
    const d = new Date(time)
    const now = Date.now()
    const diff = (now - d) / 1000
    if (diff < 30) {
      return '刚刚'
    } else if (diff < 3600) { // less 1 hour
      return Math.ceil(diff / 60) + 'm前'
    } else if (diff < 3600 * 24) {
      return Math.ceil(diff / 3600) + 'h前'
    } else if (diff < 3600 * 24 * 2) {
      return '1天前'
    }
    return formatDate(time,'yyyy-MM-dd')
}
