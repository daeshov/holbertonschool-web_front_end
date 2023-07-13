
function welcomeMessage(fullName) {
  return function() {
    alert('Welcome ' + fullName)
  }
}

const guillaume = welcomeMessage('guillaume');
const fred = welcomeMessage('fred');
const alex = welcomeMessage('alex');

guillaume();
alex();
fred();