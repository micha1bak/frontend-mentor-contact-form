
// function test() {

//   // type: string
//   const firstName = document.getElementById('first-name').value;
//   const lastName = document.getElementById('last-name').value;
//   const email = document.getElementById('email').value;

//   // type boolean || true if any option selected, false otherwise
//   const isQueryTypeSelected = 
//   document.querySelector('input[name="query-type"]:checked') ? true : false;

//   // type: string
//   const message = document.getElementById('message').value;

//   // type: boolean || true if checked, false if not checked
//   const isCnsent = document.getElementById('consent').checked;

//   let text = '';
//   text += 'firstName: ' + firstName.replace(/\s/g, "").length + '<br>';
//   text += 'lastName: ' + lastName + '<br>';
//   text += 'email: ' + email + '<br>';
//   text += 'isQueryTypeSelected: ' + isQueryTypeSelected + '<br>';
//   text += 'message: ' + message + '<br>';
//   text += 'isConsent: ' + isCnsent + '<br>';
//   document.getElementById('test').innerHTML = text;
// }

function validateForm() {

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

  let passedTestsCounter = 0;

  if (firstName.trim().length === 0) {
    document.getElementById('err-first-name').style.display = "block";
  } else {
    passedTestsCounter++;
    document.getElementById('err-first-name').style.display = "none";
  }

  if (lastName.trim().length === 0) {
    document.getElementById('err-last-name').style.display = "block";
    } else {
      passedTestsCounter++;
      document.getElementById('err-last-name').style.display = "none";
    }

  if (email.trim().length === 0) {
    document.getElementById('err-email').style.display = "block";
    } else {
      passedTestsCounter++;
      document.getElementById('err-email').style.display = "none";
    }

  if (!isQueryTypeSelected) {
    document.getElementById('err-query-type').style.display = "block";
  } else {
    passedTestsCounter++;
    document.getElementById('err-query-type').style.display = "none";
  }

  if (message.trim().length === 0 ) {
    document.getElementById('err-message').style.display = "block";
  } else {
    passedTestsCounter++;
    document.getElementById('err-message').style.display = "none";
  }

  if (!isCnsent) {
    document.getElementById('err-consent').style.display = "block";
  } else {
    passedTestsCounter++;
    document.getElementById('err-consent').style.display = "none";
  }

  if (passedTestsCounter === 6) {
    showSuccessBox();
    clearForm();
  } else {
    
  }

  document.getElementById('test').innerHTML = 'passedTestsCounter: ' + passedTestsCounter + '/6';

}

function clearForm() {
  document.getElementById('first-name').value = '';
  document.getElementById('last-name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('general-enquiry').checked = false;
  document.getElementById('support-request').checked = false;
  document.getElementById('message').value = '';
  document.getElementById('consent').checked = false;
}

function showSuccessBox() {
  document.getElementById('success-box').style.display = 'block';
}