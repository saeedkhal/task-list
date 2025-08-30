$(document).ready(function () {
  function addItem() {
    let value = $("#itemInput").val().trim();
    if (value === "") {
      $("#errorMsg").fadeIn().delay(2000).fadeOut();
    } else {
      $("#itemList").append(`<li>${value} <button class="deleteBtn">Delete</button></li>`);
      $("#itemInput").val("");
    }
  }

  $("#addBtn").click(function () {
    addItem();
  });

  $("#itemInput").keypress(function (e) {
    if (e.which === 13) { // Enter key
      addItem();
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
