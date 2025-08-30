$(document).ready(function () {
  $("#addBtn").click(function () {
    let value = $("#itemInput").val().trim();
    if (value === "") {
      $("#errorMsg").fadeIn().delay(2000).fadeOut();
    } else {
      $("#itemList").append(`<li>${value} <button class="deleteBtn">Delete</button></li>`);
      $("#itemInput").val("");
    }
  });

  $("#itemList").on("click", ".deleteBtn", function () {
    $(this)
      .parent()
      .fadeOut(500, function () {
        $(this).remove();
      });
  });
});
