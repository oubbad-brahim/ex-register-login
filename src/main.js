$("#btn-login").click(function () {
  login();
});

const toSend = {
  email: "qwerty@uiop",
  password: "123456",
};

const jsonString = JSON.stringify(toSend);

function login() {
  var myRequest = new XMLHttpRequest();

  myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let json = JSON.parse(this.responseText);
      console.log(json);
    }
  };

  myRequest.open("POST", "http://127.0.0.1:8000/api/login", true);
  myRequest.setRequestHeader("Content-Type", "application/json");
  myRequest.send(jsonString);
}
