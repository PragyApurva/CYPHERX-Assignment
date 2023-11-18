// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = getRandomInt(0, i + 1);
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  const numbers = Array.from({ length: 10 }, (_, index) => index + 1);
  shuffleArray(numbers);
  console.log("Shuffled Array:", numbers);
