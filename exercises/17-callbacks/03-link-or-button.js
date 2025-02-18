// E.g. do not change me
const createLink = (text) => {
  return `<a href="#" class="button">${text}</a>`;
};

// E.g. do not change me
const createButton = (text) => {
  return `<button type="button">${text}</button>`;
};

/**
 * Right now, "createCallToAction" only invokes "createLink",
 * However, we want make "createCallToAction" more flexible
 * so that it can invoke both "createLink" and "createButton".
 *
 * What you need to do is update "createCallToAction" so that
 * it is uses a callback instead of invoking "createLink" directly.
 */

// CHANGE SOMETHING WITH THE FUNCTION DECLARATION
const createCallToAction = (clickableText,callback) => {
  // CHANGE SOMETHING INSIDE THIS FUNCTION
  callback(clickableText);
    //"<div>Limited Time: Members Save 30%<br>" +
    //createLink(clickableText) +
    //"</div>"

};

// CHANGE SOMETHING HERE TOO so that creates a link
console.log(createCallToAction,"movie");// e.g.
const format = (string1, string2) => {
  return `- ${string1}
- ${string2}`;

};

/**
 * In "formatString" function below, use a callback function to format a string.
 *
 * Here are the steps you need to take to complete this problem:
 * - Return and invoke "callback". It should accept the two strings as arguments.
 *
 * @example
 * console.log( formatString("Wash dishes", "Do laundry", format) );
 * // - Wash Dishes
 * // - Do laundry
 *
 * @param {string} string1
 * @param {string} string2
 * @param {function} callback
 * @returns {string}
 */

const formatString = (string1, string2, callback) => {
  // WRITE YOUR ANSWER IN HERE
  callback(formatString);
};


// Uncomment me to test in Quokka
 console.log( formatString("Wash dishes", "Do laundry", format) );

// IGNORE THIS BELOW. It is for the tests.

export { formatString };

// IGNORE THIS BELOW. It is for the tests.

export { createCallToAction };
