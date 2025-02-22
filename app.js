
function submit() {

  // type: string
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;

  // type boolean || true if any option selected, false otherwise
  const isQueryTypeSelected = 
  document.querySelector('input[name="query-type"]:checked') ? true : false;

  // type: string
  const message = document.getElementById('message').value;

  // type: boolean || true if checked, false if not checked
  const isCnsent = document.getElementById('consent').checked;

  let text = '';
  text += 'firstName: ' + firstName + '<br>';
  text += 'lastName: ' + lastName + '<br>';
  text += 'email: ' + email + '<br>';
  text += 'isQueryTypeSelected: ' + isQueryTypeSelected + '<br>';
  text += 'message: ' + message + '<br>';
  text += 'isConsent: ' + isCnsent + '<br>';
  document.getElementById('test').innerHTML = text;
}