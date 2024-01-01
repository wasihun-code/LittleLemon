// Mocked API functions

const getRandomBoolean = () => Math.random() < 0.5;

export function fetchAPI(date) {
  if (!(date instanceof Date)) {
    throw new Error('Invalid date object');
  }

  let result = [];
  for (let i = 17; i <= 23; i++) {
    if (getRandomBoolean()) {
      result.push(i + ':00');
    }
    if (getRandomBoolean()) {
      result.push(i + ':30');
    }
  }
  return result;
}

export function submitAPI(formData) {
  return true;
}
