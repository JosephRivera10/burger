$(function(){
	$(".eatBurger").on("click", function(event) {
		var id = $(this).data("id");
		var newEat = $(this).data("neweat");

		var newEatState = {
			devoured: newEat
		};

		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: newEatState
		}).then(
		function() {
			console.log("changed eat to" + newEat);
			location.reload();
		});
	});

	$(".create-form").on("submit", function(event) {
		event.preventDefault();

		var newBurger = {
			burger_name: $("#bu").val().trim()
			// devoured: $("[name=devoured]:checked").val().trim()
		};

		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(
		function() {
			console.log("created new burger");

			location.reload();
		});
	});

	$(".delete").on("click", function(event) {
		var id = $(this).data("id");
		$.ajax("/api/burgers/" + id, {
			type: "DELETE",
			url: "/api/burgers/" + id
		}).then(function(){
			location.reload();
		});
	});
});