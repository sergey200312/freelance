import moment from 'moment'

export const dateFormatter = (date: Date) => {
    return moment(date).locale('ru').format('lll')
}
