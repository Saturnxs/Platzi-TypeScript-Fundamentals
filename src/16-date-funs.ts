import { subDays, format, sub } from 'date-fns';


const date = new Date(2003, 6, 4);
const rta = subDays(date, 30);
console.log(format(rta, 'dd-MM-yyyy'));
