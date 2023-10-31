// toast
// Hàm hiển thị toast và tự động ẩn đi sau 5 giây
function showToast() {
    var toast = document.querySelector("#myToast"); // Sử dụng "#myToast" để truy cập theo ID
    toast.classList.add('openToast');
    setTimeout(function () {
        toast.classList.remove('openToast');
    }, 5000);
}

// Hàm ẩn toast khi người dùng nhấp vào nút đóng
function closeToast() {
    var toast = document.querySelector("#myToast"); // Sử dụng "#myToast" để truy cập theo ID
    toast.classList.remove('openToast');
}

// Gọi hàm showToast() khi trang web được tải
window.onload = showToast;
