const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});




// ẩn hiện note
var noteIconName = document.getElementById('note-icon-name');
var noteName = document.getElementById('note-name');
var noteInputName = document.getElementById('note-input-name');

var noteIconPass = document.getElementById('note-icon-pass');
var notePass = document.getElementById('note-pass');
var noteInputPass = document.getElementById('note-input-pass');


// note tên tài khoản
noteIconName.onclick = ()=> {
    noteName.classList.toggle('openbtn');
}
noteInputName.addEventListener('click', ()=> {
    noteIconName.classList.add('openIcon');
})



// note tên mật khẩu
noteIconPass.onclick = ()=> {
    notePass.classList.toggle('openbtn');
}
noteInputPass.addEventListener('click', ()=> {
    noteIconPass.classList.add('openIcon');
})



// Sự kiện khi click ra ngoài nút button
document.addEventListener("click", function (event) {
    // name 
    if (event.target !== noteIconName && event.target !== noteName) {
        noteName.classList.remove('openbtn');
    }
    if (event.target !== noteInputName && event.target !== noteIconName) {
        noteIconName.classList.remove('openIcon');
    }

    // password
    if (event.target !== noteIconPass && event.target !== notePass) {
        notePass.classList.remove('openbtn');
    }
    if (event.target !== noteInputPass && event.target !== noteIconPass) {
        noteIconPass.classList.remove('openIcon');
    }
});




// ẩn hiện mật khẩu phần => mật khẩu
const indicator = document.querySelector(".indicator");
const input = document.querySelector(".inputkey");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
const showBtn = document.querySelector(".showBtn");

let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

function trigger() {
    if (input.value != "") {
        indicator.style.display = "block";
        indicator.style.display = "flex";
        
        if (input.value.length <= 3 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong))) no = 1;
        if (input.value.length >= 6 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong)))) no = 2;
        if (input.value.length >= 6 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong)) no = 3;

        if (no == 1) {
            weak.classList.add("active");
            text.style.display = "block";
            text.textContent = "Mật khẩu quá yếu😩";
            text.classList.add("weak");
        };

        if (no == 2) {
            medium.classList.add("active");
            text.textContent = "Mật khẩu ở mức trung bình😑";
            text.classList.add("medium");
        } else {
            medium.classList.remove("active");
            text.classList.remove("medium");
        };

        if (no == 3) {
            weak.classList.add("active");
            medium.classList.add("active");
            strong.classList.add("active");
            text.textContent = "Mật khẩu mạnh😊";
            text.classList.add("strong");
        } else {
            strong.classList.remove("active");
            text.classList.remove("strong");
        };

        showBtn.style.display = "block";
        
        showBtn.onclick = function () {
            if (input.type == "password") {
                input.type = "text";
                showBtn.classList.toggle('bi-eye-slash-fill');
            } else {
                input.type = "password";
                showBtn.classList.toggle('bi-eye-slash-fill');
            }
        };
    } else {
        indicator.style.display = "none";
        text.style.display = "none";
        showBtn.style.display = "none";
    };
};


// ẩn hiện mật khẩu phần => nhập lại mật khẩu
const showBtnLass = document.querySelector(".showBtnLass");
const inputLass = document.querySelector(".inputkeyLass");
function triggerLass() {
    showBtnLass.style.display = "block";

    if (inputLass.value != "") {
        showBtnLass.onclick = function () {
            if (inputLass.type == "password") {
                inputLass.type = "text";
                showBtnLass.classList.toggle('bi-eye-slash-fill');
            } else {
                inputLass.type = "password";
                showBtnLass.classList.toggle('bi-eye-slash-fill');
            }
        };
    } else {
        showBtnLass.style.display = "none";
    };
};


// ẩn hiện mật khẩu phần => nhập lại mật khẩu
const showBtnFirst = document.querySelector(".showBtnFirst");
const inputFirst = document.querySelector(".inputkeyFirst");
function triggerFirst() {
    showBtnFirst.style.display = "block";

    if (inputFirst.value != "") {
        showBtnFirst.onclick = function () {
            if (inputFirst.type == "password") {
                inputFirst.type = "text";
                showBtnFirst.classList.toggle('bi-eye-slash-fill');
            } else {
                inputFirst.type = "password";
                showBtnFirst.classList.toggle('bi-eye-slash-fill');
            }
        };
    } else {
        showBtnFirst.style.display = "none";
    };
};