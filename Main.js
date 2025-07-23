document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("li > button");

  buttons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.stopPropagation(); // Ngăn click lan ra ngoài

      const li = button.closest("li");
      const dropdown = li.querySelector(".dropdown-content");

      // Ẩn tất cả các dropdown khác
      document.querySelectorAll(".dropdown-content").forEach(dc => {
        if (dc !== dropdown) {
          dc.style.display = "none";
        }
      });

      // ✅ Kiểm tra dropdown có tồn tại rồi mới xử lý
      if (dropdown) {
        dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
      }
    });
  });

  // Click ngoài dropdown sẽ đóng tất cả
  document.addEventListener("click", function () {
    document.querySelectorAll(".dropdown-content").forEach(dc => {
      dc.style.display = "none";
    });
  });

  // ✅ Thêm xử lý active class
  const qualityButtons = document.querySelectorAll('.example-quality-btn');

  qualityButtons.forEach(button => {
    button.addEventListener('click', () => {
      qualityButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
});


document.getElementById('openUpload').addEventListener('click', function () {
    document.getElementById('fileInput').click();
  });

const fileInput = document.getElementById('fileInput');
const uploadForm = document.getElementById('uploadForm');
fileInput.addEventListener('change', () => {
  if (fileInput.files.length > 0) {
    uploadForm.submit(); // Gửi form tự động nếu đã chọn file
  }
});
