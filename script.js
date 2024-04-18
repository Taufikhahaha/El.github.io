
function playSound(soundSrc) {
  var audio = document.getElementById("audio");
  audio.src = soundSrc;
  audio.play();
}

function showNotification() {
  alert("Hii el, rahma, elfa, camel, cherry, boo, ayy, sayang, happy birthday !! wish u all the best baby💋");
}

function showImage() {
  var img = document.createElement("img");
  img.src = "img/b.jpg";
  img.classList.add("floating-image");
  document.body.appendChild(img);

  // Menutup gambar setelah 5 detik
  setTimeout(function() {
    img.remove();
  }, 5000);
}

function showMission() {
  var modal = document.createElement("div");
  modal.classList.add("modal");
  
  var modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  
  var closeButton = document.createElement("span");
  closeButton.classList.add("close-button");
  closeButton.innerHTML = "&times;";
  closeButton.onclick = function() {
    modal.style.display = "none";
  };
  
  var missionText = document.createElement("p");
  missionText.textContent = "Congratulations! You've won a prize! Click 'I'm Ready' to claim your prize.";
  
  var akuSiapButton = document.createElement("button");
  akuSiapButton.textContent = "I'm Ready";
  akuSiapButton.onclick = function() {
    showMissionKeywords();
  };
  
  modalContent.appendChild(closeButton);
  modalContent.appendChild(missionText);
  modalContent.appendChild(akuSiapButton);
  modal.appendChild(modalContent);
  
  document.body.appendChild(modal);
  
  modal.style.display = "block"; // Menampilkan modal
}

function showMissionKeywords() {
  var modal = document.createElement("div");
  modal.classList.add("modal");
  
  var modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  
  var closeButton = document.createElement("span");
  closeButton.classList.add("close-button");
  closeButton.innerHTML = "&times;";
  closeButton.onclick = function() {
    modal.style.display = "none";
  };
  
  var missionKeywords = [
    {keyword : "Clue:", emoji:"🤷‍♂️"},
    { keyword: "building", emoji: "🔨" },
    { keyword: "tulip", emoji: "🌷" },
    { keyword: "lamp", emoji: "💡" }
  ];
  
  missionKeywords.forEach(function(item) {
    var keywordText = document.createElement("p");
    keywordText.textContent = item.keyword + " " + item.emoji;
    modalContent.appendChild(keywordText);
  });
  
  modalContent.appendChild(closeButton);
  modal.appendChild(modalContent);
  
  document.body.appendChild(modal);
  
  modal.style.display = "block"; // Menampilkan modal

  // Menutup modal dan menampilkan alert setelah 5 detik
  setTimeout(function() {
    modal.remove();
    alert("Have fun!");
  }, 5000);
}
