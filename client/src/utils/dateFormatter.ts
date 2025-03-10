import moment from 'moment'

export const dateFormatter = (date: Date, message :string = 'Дата не указана') => {
    const parsedDate = new Date(date);
    return parsedDate instanceof Date && !isNaN(parsedDate.getTime()) ? moment(date).locale('ru').format('lll') : message;
}
