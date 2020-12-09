let database = firebase.database().ref(`/`);
let _family = document.getElementById("_family");
let _activity = document.getElementById("_activity");
let _finance = document.getElementById("_finance");
let _housing = document.getElementById("_housing");
let _information = document.getElementById("_information");

let _percentage = 5;
var _num = 0;

document.getElementById("_family").style.width = _percentage + "%";
document.getElementById("_previous_btn").style.display = "none";

var _step_first = document.getElementById("_step_first");
var _step_second = document.getElementById("_step_second");
var _step_third = document.getElementById("_step_third");
var _step_fourth = document.getElementById("_step_fourth");
var _step_fifth = document.getElementById("_step_fifth");
var _step_sixth = document.getElementById("_step_sixth");
var _step_seventh = document.getElementById("_step_seventh");
var _step_eighth = document.getElementById("_step_eighth");
var _step_ninth = document.getElementById("_step_ninth");
var _step_tenth = document.getElementById("_step_tenth");
var _step_eleven = document.getElementById("_step_eleven");
var _step_twelve = document.getElementById("_step_twelve");

var firs_step = {};
var second_step = {};
var third_step = {};
var fourth_step = {};
var fifth_step = {};
var sixth_step = {};
var seventh_step = {};
var eighth_step = {};
var ninth_step = {};
var tenth_step = {};
var eleven_step = {};
var twelve_step = {};




function FirstStep(value) {
  firs_step = value;
}
function SecondStep(e, q) {
  second_step = { ans: e.value, q: "How old are you ?" };
}
function ThirdtStep(value) {
  third_step = { q: "How many dependent children do you have?  ", ans: value };
}
function FourthtStep(value) {
  fourth_step = { q: "What is your activity ?", ans: value };
}

function FifthtStep(value) {
  fifth_step = {
    q: "What is your net income PER MONTH before taxes?",
    ans: value.value,
  };
}
function SixthtStep(value) {
  sixth_step = { q: "Do you have money to invest?", ans: value };
}
function SeventhtStep(value) {
  seventh_step = { q: "What is your amount to invest?", ans: value };
}

function EighthtStep(value) {
  eighth_step = { q: "Regarding your accommodation, you are:", ans: value };
}
function NinthtStep(value) {
  ninth_step = { q: "What is your postal code ?", ans: value.value };
}
function TenthtStep(value, type) {
  tenth_step = { q: "Let's get to know each other better", ans: value.value };
}
function EleventhtStep(value) {
  eleven_step = { q: "What is your email ?", ans: value.value };
}

function TwelvethtStep(value, type) {
  twelve_step = { q: "What is your phone number ?", ans: value.value };
}

function next() {
console.log("=========>",_num)

  localStorage.setItem(
    "saveData",
    JSON.stringify([
      firs_step,
      seventh_step,
      third_step,
      fourth_step,
      fifth_step,
      sixth_step,
      seventh_step,
      eighth_step,
      ninth_step,
      tenth_step,
      eleven_step,
      twelve_step,
    ])
  );
  if (_num >= 0) {
    document.getElementById("_previous_btn").style.display = "block";
    _num = _num + 1;
    if (_num == 1) {
      _percentage = _percentage + 5;
      document.getElementById("_family").style.width = _percentage + "%";
      _step_first.style.display = "none";
      _step_second.style.display = "block";
    } else if (_num == 2) {
      _percentage = _percentage + 5;
      document.getElementById("_family").style.width = _percentage + "%";
      _step_second.style.display = "none";
      _step_third.style.display = "block";
    } else if (_num == 3) {
      _percentage = _percentage + 5;
      document.getElementById("_family").style.width = _percentage + "%";
      _step_third.style.display = "none";
      _step_fourth.style.display = "block";
      document.getElementById("_step_1").innerHTML = "✓";
      document.getElementById("_step_1").style.backgroundColor =
        "rgb(255, 144, 0)";
      document.getElementById("_step_1").style.color = "white";
      document.getElementById("_step_1").style.borderColor = "rgb(255, 144, 0)";
    } else if (_num == 4) {
      _percentage = _percentage + 20;
      document.getElementById("_family").style.width = _percentage + "%";
      _step_fourth.style.display = "none";
      _step_fifth.style.display = "block";
      document.getElementById("_step_2").innerHTML = "✓";
      document.getElementById("_step_2").style.backgroundColor =
        "rgb(255, 144, 0)";
      document.getElementById("_step_2").style.color = "white";
      document.getElementById("_step_2").style.borderColor = "rgb(255, 144, 0)";
    } else if (_num == 5) {
      _percentage = _percentage + 6;
      document.getElementById("_family").style.width = _percentage + "%";
      _step_fifth.style.display = "none";
      _step_sixth.style.display = "block";
    } else if (_num == 6) {
      _percentage = _percentage + 8;
      document.getElementById("_family").style.width = _percentage + "%";
      _step_sixth.style.display = "none";
      _step_seventh.style.display = "block";
    } else if (_num == 7) {
      _percentage = _percentage + 6;
      document.getElementById("_family").style.width = _percentage + "%";
      _step_seventh.style.display = "none";
      _step_eighth.style.display = "block";

      document.getElementById("_step_3").innerHTML = "✓";
      document.getElementById("_step_3").style.backgroundColor =
        "rgb(255, 144, 0)";
      document.getElementById("_step_3").style.color = "white";
      document.getElementById("_step_3").style.borderColor = "rgb(255, 144, 0)";
    } else if (_num == 8) {
      _percentage = _percentage + 15;
      document.getElementById("_family").style.width = _percentage + "%";
      _step_eighth.style.display = "none";
      _step_ninth.style.display = "block";
    } else if (_num == 9) {
      _percentage = _percentage + 5;
      document.getElementById("_family").style.width = _percentage + "%";
      _step_ninth.style.display = "none";
      _step_tenth.style.display = "block";
      document.getElementById("_step_4").innerHTML = "✓";
      document.getElementById("_step_4").style.backgroundColor =
        "rgb(255, 144, 0)";
      document.getElementById("_step_4").style.color = "white";
      document.getElementById("_step_4").style.borderColor = "rgb(255, 144, 0)";
    } else if (_num == 10) {
      _percentage = _percentage + 7;
      document.getElementById("_family").style.width = _percentage + "%";
      _step_tenth.style.display = "none";
      _step_eleven.style.display = "block";
    } else if (_num == 11) {
      _percentage = _percentage + 13;
      document.getElementById("_family").style.width = _percentage + "%";
      _step_eleven.style.display = "none";
      _step_twelve.style.display = "block";
      document.getElementById("_step_5").innerHTML = "✓";
      document.getElementById("_step_5").style.backgroundColor =
        "rgb(255, 144, 0)";
      document.getElementById("_step_5").style.color = "white";
      document.getElementById("_step_5").style.borderColor = "rgb(255, 144, 0)";
    }
  }
}

function previous() {
  if (_num > 0) {
    _num = _num - 1;
    if (_num == 0) {
      _percentage = _percentage - 5;
      document.getElementById("_family").style.width = _percentage + "%";
      _step_first.style.display = "block";
      _step_second.style.display = "none";
    } else if (_num == 1) {
      _percentage = _percentage - 5;
      document.getElementById("_family").style.width = _percentage + "%";
      _step_second.style.display = "block";
      _step_third.style.display = "none";
    } else if (_num == 2) {
      _percentage = _percentage - 5;
      document.getElementById("_family").style.width = _percentage + "%";
      _step_third.style.display = "block";
      _step_fourth.style.display = "none";
      document.getElementById("_step_1").innerHTML = "";
      document.getElementById("_step_1").style.backgroundColor = "white";
      document.getElementById("_step_1").style.color = "white";
      document.getElementById("_step_1").style.borderColor =
        "rgb(222, 222, 222)";

      //
    } else if (_num == 3) {
      _percentage = _percentage - 20;
      document.getElementById("_family").style.width = _percentage + "%";
      _step_fourth.style.display = "block";
      _step_fifth.style.display = "none";
      document.getElementById("_step_2").innerHTML = "";
      document.getElementById("_step_2").style.backgroundColor = "white";
      document.getElementById("_step_2").style.color = "white";
      document.getElementById("_step_2").style.borderColor =
        "rgb(222, 222, 222)";
    } else if (_num == 4) {
      _percentage = _percentage - 6;
      document.getElementById("_family").style.width = _percentage + "%";
      _step_fifth.style.display = "block";
      _step_sixth.style.display = "none";
    } else if (_num == 5) {
      _percentage = _percentage - 8;
      document.getElementById("_family").style.width = _percentage + "%";
      _step_sixth.style.display = "block";
      _step_seventh.style.display = "none";
    } else if (_num == 6) {
      _percentage = _percentage - 6;
      document.getElementById("_family").style.width = _percentage + "%";
      _step_seventh.style.display = "block";
      _step_eighth.style.display = "none";

      document.getElementById("_step_3").innerHTML = "";
      document.getElementById("_step_3").style.backgroundColor = "white";
      document.getElementById("_step_3").style.color = "white";
      document.getElementById("_step_3").style.borderColor =
        "rgb(222, 222, 222)";
    } else if (_num == 7) {
      _percentage = _percentage - 15;
      document.getElementById("_family").style.width = _percentage + "%";
      _step_eighth.style.display = "block";
      _step_ninth.style.display = "none";
    } else if (_num == 8) {
      _percentage = _percentage - 5;
      document.getElementById("_family").style.width = _percentage + "%";
      _step_ninth.style.display = "block";
      _step_tenth.style.display = "none";
      document.getElementById("_step_4").innerHTML = "";
      document.getElementById("_step_4").style.backgroundColor = "white";
      document.getElementById("_step_4").style.color = "white";
      document.getElementById("_step_4").style.borderColor =
        "rgb(222, 222, 222)";
    } else if (_num == 9) {
      _percentage = _percentage - 7;
      document.getElementById("_family").style.width = _percentage + "%";
      _step_tenth.style.display = "block";
      _step_eleven.style.display = "none";
    } else if (_num == 10) {
      _percentage = _percentage - 13;
      document.getElementById("_family").style.width = _percentage + "%";
      //   _step_tenth.style.display = "block";
      _step_eleven.style.display = "block";
      _step_twelve.style.display = "none";
      //   _step_twelve.style.display = "none";
      document.getElementById("_step_5").innerHTML = "";
      document.getElementById("_step_5").style.backgroundColor = "white";
      document.getElementById("_step_5").style.color = "white";
      document.getElementById("_step_5").style.borderColor =
      "rgb(222, 222, 222)";
    }
  } else if (_num == 0) {
    document.getElementById("_previous_btn").style.display = "none";
  }
}

function submitQuiz() {
  alert( tenth_step.ans)
  database
    .child("Users/" + tenth_step.ans + "/")
    .set({
      firs_step,
      seventh_step,
      third_step,
      fourth_step,
      fifth_step,
      sixth_step,
      seventh_step,
      eighth_step,
      ninth_step,
      tenth_step,
      eleven_step,
      twelve_step,
    });
    window.location.href="https://tictax.fr/"
}







