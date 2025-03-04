function validateForm() {
  
  console.log(404)
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
    document.getElementById('first-name').style.border = "1px solid hsl(0, 66%, 54%)";
  } else {
    passedTestsCounter++;
    document.getElementById('err-first-name').style.display = "none";
    document.getElementById('first-name').style.border = "1px solid #aaa";
  }

  if (lastName.trim().length === 0) {
    document.getElementById('err-last-name').style.display = "block";
    document.getElementById('last-name').style.border = "1px solid hsl(0, 66%, 54%)";
    } else {
      passedTestsCounter++;
      document.getElementById('err-last-name').style.display = "none";
      document.getElementById('last-name').style.border = "1px solid #aaa";
    }

  if (email.trim().length === 0 || !validateEmail(email)) {
    document.getElementById('err-email').style.display = "block";
    document.getElementById('email').style.border = "1px solid hsl(0, 66%, 54%)";
    } else {
      passedTestsCounter++;
      document.getElementById('err-email').style.display = "none";
      document.getElementById('email').style.border = "1px solid #aaa";
    }

  if (!isQueryTypeSelected) {
    document.getElementById('err-query-type').style.display = "block";
  } else {
    passedTestsCounter++;
    document.getElementById('err-query-type').style.display = "none";
  }

  if (message.trim().length === 0 ) {
    document.getElementById('err-message').style.display = "block";
    document.getElementById('message').style.border = "1px solid hsl(0, 66%, 54%)";
  } else {
    passedTestsCounter++;
    document.getElementById('err-message').style.display = "none";
    document.getElementById('message').style.border = "1px solid #aaa";
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
  }
}

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
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
  document.getElementById('popup').style.visibility = 'visible';
  document.getElementById('popup').style.top = "0";
}

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll("input");

  inputs.forEach((input, index) => {
    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        const nextInput = inputs[index + 1];
        if (nextInput) {
          nextInput.focus();
        }
      }
    });
  });
});

document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
});
