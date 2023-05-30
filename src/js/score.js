$(document).ready(function() { 
    document.body.style.backgroundImage = "url('img/scoreImg/background.jpg')";
	document.body.style.backgroundSize = "cover";
	document.body.style.backgroundRepeat = "no-repeat";

	var position = 0;
	var speed = 1; // 이동 속도 조정
	var windowWidth = window.innerWidth; // 창의 가로 크기

	function moveBackground() {
		position -= speed;
		if (position <= -windowWidth) {
			position = 0;
		}
		document.body.style.backgroundPosition = position + "px 0";
	}
	$.ajax({
		url: "data/playing.json",
		dataType: "json",
		success: function (data) {
			//$("#score_num").text("Score: " + data.score);
			$("#score_num").html('<img class="background-image" src="img/scoreImg/score_back.png" alt="back"><p class="centered-text">' + data.score +'</p>');
		},
	});
    setInterval(moveBackground, 20);

	$("#score_button img").hover(playHoverSound());

	function resetData(){
		$.ajax({
			url: "",
			dataType: "json",
			type: "GET",
			success: function (data) {	
				console.log("reset complete");
			}
		});
	}
	$("#score_restart").click(function() {
		playClickSound();
		resetData();
		window.location.href = "phase1.html";
		
	});

	$("#score_main").click(function() {
		playClickSound();
		window.location.href = "main.html";
		
	});

	// hover시 효과음
	function playHoverSound() {
		if(!$("#bgm_checkbox").prop("checked"))
			return;
        var audio = document.getElementById("hover_sound");
        audio.currentTime = 0;
        audio.play();
      }

	// click시 효과음
	function playClickSound() {
		if(!$("#bgm_checkbox").prop("checked"))
			return;
        var audio = document.getElementById("click_sound");
        audio.currentTime = 0;
        audio.play();
      }

	$('#left_character').css({ left: '-100%' }).animate({ left: '50' }, 1000);

	$('#right_character').css({ right: '-100%' }).animate({ right: '50' }, 1000);
});