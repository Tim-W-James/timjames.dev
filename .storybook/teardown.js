// HACK See ../test-runner-jest.config.js for details
module.exports = async function () {
  setTimeout(() => {
    process.exit();
  }, 0);
};
