// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function Promise(callback) {
  const result = {
    res: null,
    error: null,
  };
  const callbacks = [];
  const callCallBack = () => {
    callbacks.forEach((item) => {
      item(result.error, result.res);
    });
  };
  callback(
    (res) => {
      result.res = res;
      callCallBack();
    },
    (error) => {
      result.error = error;
    }
  );

  return {
    then(thenCallback) {
      callbacks.push(thenCallback);
    },
    catch(catchCallback) {},
  };
}

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
}).then((error, res) => {
  alert(res);
});
