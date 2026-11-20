function switchScreen(screenId) {
  // Ẩn tất cả các màn hình có class là 'screen'
  document.querySelectorAll(".screen").forEach((el) => {
    el.style.display = "none";
  });

  // Hiện màn hình được chọn dựa vào ID truyền vào
  document.getElementById(screenId).style.display = "block";
}
