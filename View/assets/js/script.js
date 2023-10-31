// Chọn nút "backtop" bằng id
var backToTopButton = document.getElementById("backtop");

// Thêm sự kiện scroll để theo dõi vị trí cuộn
window.addEventListener("scroll", function () {
    // Kiểm tra vị trí cuộn
    if (window.scrollY >= 300) {
        // Nếu đã cuộn xuống hơn 300px, hiển thị nút "backtop"
        backToTopButton.classList.add("open");
    } else {
        // Ngược lại, ẩn nút "backtop"
        backToTopButton.classList.remove("open");
    }
});

// Thêm sự kiện click cho nút "backtop"
backToTopButton.addEventListener("click", function () {
    // Cuộn trang lên đầu
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Cuộn mượt
    });
});

// account
var account = document.getElementById("account");
var accountWrap = document.getElementById("account-wrap");

account.addEventListener("click", () => {
    accountWrap.classList.toggle("openAccount");
    account.classList.toggle("active");
});

// Sự kiện khi click ra ngoài nút button
document.addEventListener("click", function (event) {
    if (event.target !== account && event.target !== accountWrap) {
        accountWrap.classList.remove("openAccount");
        account.classList.remove("active");
    }
});



// tabs skill
var tabs = document.querySelectorAll("[data-target]");
var tabContent = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        var target = document.querySelector(tab.dataset.target);

        // open skills_group
        tabContent.forEach((tabContents) => {
            tabContents.classList.remove("skills_active");
        });
        target.classList.add("skills_active");

        // xoay skills_arrow
        tabs.forEach((tab) => {
            tab.classList.remove("skills_active");
        });
        tab.classList.add("skills_active");
    });
});



// chuyển tabs
function openTab(tabId, button) {
    // Lấy tất cả các tab content và ẩn chúng
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // Hiển thị tab content tương ứng với tab được chọn
    document.getElementById(tabId).style.display = "block";

    // Loại bỏ lớp 'active' từ tất cả các nút tab và thêm vào nút được chọn
    var tabButtons = document.getElementsByClassName("tab-button");
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }
    button.classList.add("active");
}




// dropdown
let li = document.querySelectorAll(".faq-item");
for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("click", (e) => {
        let clickedLi;
        if (e.target.classList.contains("question-arrow")) {
            clickedLi = e.target.parentElement;
        } else {
            clickedLi = e.target.parentElement.parentElement;
        }

        // Lặp qua tất cả các faq-item để ẩn question-arrow
        for (var j = 0; j < li.length; j++) {
            if (li[j] !== clickedLi) {
                li[j].classList.remove("showAnswer");
            }
        }

        clickedLi.classList.toggle("showAnswer");
    });
}
