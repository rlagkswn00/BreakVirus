const comicPages = [
  { image: "img/tutorialImg/title.jpg", sound: null },
  {
    image: "img/tutorialImg/tutorial1.jpg",
    sound: "sound/tutorialSound/effect1.mp3",
  },
  {
    image: "img/tutorialImg/tutorial2.jpg",
    sound: "sound/tutorialSound/effect2.mp3",
  },
  {
    image: "img/tutorialImg/tutorial3.jpg",
    sound: null
  },
  {
    image: "img/tutorialImg/tutorial4.jpg",
    sound: "sound/tutorialSound/effect4.mp3",
  },
  { image: "img/tutorialImg/tutorial5.jpg", sound: null },
  { image: "img/tutorialImg/tutorial6.jpg", sound: null },
  { 
    image: "img/tutorialImg/tutorial7.jpg", 
    sound: "sound/tutorialSound/effect7.wav" 
  },
  { 
    image: "img/tutorialImg/tutorial8.jpg", 
    sound: "sound/tutorialSound/effect8.wav" 
  },
  { image: "img/tutorialImg/tutorial9.jpg", sound: null },
  { 
    image: "img/tutorialImg/tutorial10.jpg", 
    sound: "sound/tutorialSound/effect10.mp3" 
  },
];

var currentPage = 0;

$(document).ready(function () {
  function playSoundEffect(soundPath) {
    var soundEffect = new Audio(soundPath);
    soundEffect.currentTime = 0;
    soundEffect.play();
  }

  function loadPage(pageIndex) {
    document.getElementById("comic-image").src = comicPages[pageIndex].image;
    playSoundEffect(comicPages[pageIndex].sound);

    if (pageIndex === 0) {
      $("#prev_img").hide();
    } else {
      $("#prev_img").show();
    }

    if (pageIndex === 10) {
      $("#next_img").hide();
      $("#skip").html('<img src="img/tutorialImg/next.png" width="180" alt="Skip">');
    } else {
      $("#next_img").show();
      $("#skip").html('<img src="img/tutorialImg/skip.png" width="180" alt="Skip">');
    }
  }

  function nextPage() {
    if (currentPage < comicPages.length - 1) {
      currentPage++;
      loadPage(currentPage);
    }
  }

  function prevPage() {
    if (currentPage > 0) {
      currentPage--;
      loadPage(currentPage);
    }
  }

  loadPage(currentPage);

  $("#prev_img").on("click", prevPage);
  $("#next_img").on("click", nextPage);
  $("#skip-button").on("click", function () {
    window.location.href = "main.html";
  });
});
