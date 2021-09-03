export default function calculator(people, linedItems) {
  const newSum = calculateSum(linedItems);
  const average = calculateAverage(newSum);
  const overPay = calculateOver(average, newSum);
  return calculateResult(people, overPay);
}

function calculateSum(linedItems) {
  let newSum = ['SUM', 0, 0, 0];
  linedItems.forEach((element) => {
    for (let i = 1; i < element.length; i++) {
      newSum[i] += element[i];
    }
  });
  return newSum;
}

function calculateAverage(newSum) {
  let total = 0;
  let average = 0;

  for (let i = 1; i < newSum.length; i++) {
    total += newSum[i];
    average = Math.round(total / i);
  }
  return average;
}

function calculateOver(average, newSum) {
  let newOver = ['OVERPAY', 0, 0, 0];

  for (let i = 1; i < newSum.length; i++) {
    newOver[i] = newSum[i] - average;
  }
  return newOver;
}

function calculateResult(people, overPay) {
  let newResult = [];

  for (let i = 1; i < overPay.length; i++) {
    if (overPay[i] <= 0) {
      let absolutetAmount = -overPay[i];
      newResult.push({ from: people[i], to: '', amount: absolutetAmount });
    }
  }

  for (let i = 1; i < overPay.length; i++) {
    if (overPay[i] > 0) {
      newResult.forEach((element) => (element.to = people[i]));
    }
  }
  return newResult;
}
