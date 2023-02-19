import _ from 'lodash';

export const randomNumber = (min: number, max: number): number => {
    return _.random(min, max);  
}

export const isInteger = (num: number): boolean => {
    return _.isInteger(num);
}