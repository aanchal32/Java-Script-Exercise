$(document).ready(function () {

  $(".event-card").fadeIn(800);

  $("#registerBtn").click(function () {
    const firstCard = $(".event-card").first();
    const eventName = firstCard.find("h3").text();

    $(this).text("Registered!").prop("disabled", true);
    $("#status").text(`✅ You have registered for "${eventName}"!`).css("color", "green");

    console.log(`Registered for: ${eventName}`);
  });

  $("#hideAllBtn").click(function () {
    $(".event-card").fadeOut(500);
    $("#status").text("All events hidden.").css("color", "gray");
  });

  $("#showAllBtn").click(function () {
    $(".event-card").fadeIn(500);
    $("#status").text("All events visible.").css("color", "gray");
  });

  // Filter events by category using jQuery
  $("#category-filter").change(function () {
    const selected = $(this).val();

    if (selected === "all") {
      $(".event-card").fadeIn(400);
    } else {
      $(".event-card").each(function () {
        const category = $(this).data("category");
        if (category === selected) {
          $(this).fadeIn(400);
        } else {
          $(this).fadeOut(300);
        }
      });
    }
  });

});

