
const sequenceSum = (begin, end) => {
        
    if (begin == 0 && end == 0){
        return 0;
    } if(begin == end){
        return begin;
    } if(begin > end){
        return NaN;
    }    
    return begin + sequenceSum(begin + 1, end);            
};

console.log('Сумма чисел: ', sequenceSum(10,12));
