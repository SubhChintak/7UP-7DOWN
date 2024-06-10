const min = 1;
const max = 6;
const count = 2;

const getRandomNumber = () => {
    const floatRandom = Math.random()
  
    const difference = max - min
    
    const random = Math.round(difference * floatRandom)
  
    const randomWithinRange = random + min
  
    return randomWithinRange
};


const getRandomNumberList = () => {
    const numbers = [];
    for (let i = 0; i < count; i++) {
        const randomNum = getRandomNumber();
        numbers.push(randomNum);
    }
    return numbers;
};

const sumList = (list) => {
    let sum = 0;
    list.forEach((num) => {
        sum += num;
    })
    return sum;
}

module.exports = {
    getRandomNumberList,
    sumList
};
