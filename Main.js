
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("li > button");

    buttons.forEach(button => {
      button.addEventListener("click", function (e) {
        e.stopPropagation(); // Ngăn click lan ra ngoài

        // Tìm dropdown gần nhất trong cùng <li>
        const li = button.closest("li");
        const dropdown = li.querySelector(".dropdown-content");

        // Ẩn tất cả các dropdown khác
        document.querySelectorAll(".dropdown-content").forEach(dc => {
          if (dc !== dropdown) {
            dc.style.display = "none";
          }
        });

        // Toggle dropdown hiện tại
        dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
      });
    });

    // Click ngoài dropdown sẽ đóng tất cả
    document.addEventListener("click", function () {
      document.querySelectorAll(".dropdown-content").forEach(dc => {
        dc.style.display = "none";
      });
    });
  });
