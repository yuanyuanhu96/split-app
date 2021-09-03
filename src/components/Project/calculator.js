export default function calculator(people, linedItems) {
  const personSum = sum(linedItems);
  const average = avg(personSum);
  const overPaid = over(average, personSum);
  const result = trans(people, overPaid);
  return result;
}

function sum(linedItems) {
  const personSum = [];
  for (let i = 0; i < 3; i++) {
    personSum.push(0);
    linedItems.forEach((item) => {
      personSum[i] += item.spent[i];
    });
  }
  return personSum;
}

function avg(personSum) {
  const sum = personSum.reduce((previous, current) => (current += previous));
  const avg = Math.round(sum / personSum.length);
  return avg;
}

function over(average, personSum) {
  const overPaid = personSum.map((paid) => paid - average);
  return overPaid;
}

// calculate the transition between people

function trans(people, overPaid) {
  let newResult = [];
  overPaid.forEach((amount, i) => {
    const ifPay = amount < 0;
    newResult.push({ subject: people[i], ifPay: ifPay, amount: amount });
  });
  return newResult;
}
