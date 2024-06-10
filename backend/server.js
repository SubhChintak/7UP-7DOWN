const express = require('express');

const cors = require('cors');

const nums = require('./controllers/nums');

const numbersList = () => {
    numbers = nums.getRandomNumberList();
    return numbers;
}

const validBets = [100, 200, 500];

let currentResult = '';
let currentSum = 0

const luckyNumber = 'luckyNumber';
const below7 = 'below7';
const above7 = 'above7';
const win = 'win';
const loss = 'loss';
const luckyWin = 'luckyWin';


const app = express();

app.use(express.json());
app.use(cors());

app.listen(4000, () => {
    console.log('Server is running on port 3000!');
});


app.get('/get-dice-roll', (req, res) => {
    numbers = numbersList();
    /* numbers = [3,4] */
    console.log(numbers);

    res.json(numbers);

    currentSum = nums.sumList(numbers);
    console.log(currentSum);
});

app.get('/check-choice/:playerChoice', (req, res) => {
    const playerChoice = req.params.playerChoice;
    let result;

    switch (playerChoice) {
        case luckyNumber:
            if (currentSum === 7) {
                result = luckyWin;
            } else {
                result = loss;
            }
            break;

        case below7:
            if (currentSum < 7) {
                result = win;
            } else {
                result = loss;
            }
            break;

        case above7:
            if (currentSum > 7) {
                result = win;
            } else {
                result = loss;
            }
            break;
        default:
            /* return error */
            result = 'invalid';
    }

    currentResult = result;

    console.log(result);
    res.send(result);
});

app.post('/update-amount', (req, res) => {
    if (!req.body || !req.body.amount || !req.body.bet) {
        res.status(400).send('Missing amount or bet in request body');
        return;
    }    
    
    const { amount, bet } = req.body;

    if (!validBets.includes(bet)) {
        res.status(400).send('Invalid bet');
        return;
    }

    let updatedAmount;

    console.log(amount, bet);
    console.log(currentResult);

    switch (currentResult) {
        case win:
            updatedAmount = amount + bet * 2;
            break;

        case loss:
            updatedAmount = amount;
            break;

        case luckyWin:
            updatedAmount = amount + bet * 5;
            break;

        default:
            /* return error */
            res.status(400).send('Invalid current result');
            return;
    }

    console.log(updatedAmount);

    res.send({ updatedAmount });
});


