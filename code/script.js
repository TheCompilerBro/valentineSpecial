function toggleMusic() {
    const music = document.getElementById("globalMusic");
    const btn = document.querySelector(".audio-btn");

    if (music.paused) {
        music.play();
        btn.innerHTML = "⏸ Pause Song";
    } else {
        music.pause();
        btn.innerHTML = "▶ Play Song";
    }
}
function autoScrollBook() {
    const book = document.querySelector(".book");
    if (book) {
        book.scrollTop = book.scrollHeight;
    }
}


function moveButton() {

    const button = document.querySelector(".no-btn");
    const container = document.querySelector(".container");

    if (!button || !container) return;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const x = Math.random() * (containerWidth - buttonWidth - 20);
    const y = Math.random() * (containerHeight - buttonHeight - 20);

    button.style.position = "absolute";
    button.style.left = x + "px";
    button.style.top = y + "px";
}


function celebrateYes() {
    document.getElementById("mainBox").style.display = "none";
    document.getElementById("loveMessage").classList.add("show");

    let end = Date.now() + 3000;

    (function frame() {
        confetti({ particleCount: 8, angle: 60, spread: 55, origin: { x: 0 } });
        confetti({ particleCount: 8, angle: 120, spread: 55, origin: { x: 1 } });
        if (Date.now() < end) requestAnimationFrame(frame);
    })();

    setTimeout(openProposalSection, 3000);
}

function openProposalSection() {

    // Hide landing
    document.getElementById("landingSection").style.display = "none";

    // Hide floating images completely
    document.getElementById("floatingImages").style.display = "none";

    // Show proposal section
    document.getElementById("proposalSection").style.display = "block";
    const share = document.getElementById("shareSection");
  share.style.opacity = "0";

  setTimeout(() => {
    share.style.animation = "shareFadeIn 1.2s ease forwards";
  }, 200);
    startTypewriter();
     startHeartRain();
}



function goHome() {

    // Hide proposal section
    document.getElementById("proposalSection").style.display = "none";

    // Show landing section again
    document.getElementById("landingSection").style.display = "block";

    // Re-show floating images
    document.getElementById("floatingImages").style.display = "block";

    // Reset main container visibility
    document.getElementById("mainBox").style.display = "block";

    // Hide love message
    document.getElementById("loveMessage").classList.remove("show");

    // OPTIONAL: scroll book back to top for next time
    const book = document.querySelector(".book");
    if (book) book.scrollTop = 0;
}


const images = [
  "assets/images/img1.jpg",
  "assets/images/img2.jpg",
  "assets/images/img3.jpg",
  "assets/images/img4.jpg",
  "assets/images/img5.jpg",
  "assets/images/img6.jpg",
  "assets/images/img7.jpg",
  "assets/images/img8.jpg",
  "assets/images/img9.jpg",
  "assets/images/img10.jpg"
];


function createFloatingImages() {
    const container = document.getElementById("floatingImages");
    if (!container) return;

    images.forEach(src => {
        let img = document.createElement("img");
        img.src = src;
        img.className = "floating-img";

        img.style.left = Math.random() * 80 + "vw";
        img.style.top = Math.random() * 80 + "vh";

        container.appendChild(img);

        setInterval(() => {
            img.style.left = Math.random() * 80 + "vw";
            img.style.top = Math.random() * 80 + "vh";
        }, 8000);   
    });
}


window.onload = function () {
    createFloatingImages();
};
const texts = [
    "From the moment I met you, my life changed completely. You are the most beautiful part of my world and the best thing that ever happened to me.",

    "Your smile makes my day brighter. Your voice makes my heart calmer. Just seeing you happy makes my whole life meaningful.",

    "I promise to stand by you in every situation, to support you in every dream, and to love you with all my heart forever and ever.",

    "Will you hold my hand forever? Will you be my partner in every journey of life? Will you be my Valentine today and always?",

    "No matter where life takes us, my heart will always choose YOU. Forever and always ❤️"
];
let charIndex = 0;

function typeWriterEffect(textId, text, callback) {
  const element = document.getElementById(textId);
  let index = 0;

  function type() {
    if (index < text.length) {

      element.innerHTML =
        text.substring(0, index + 1) +
        "<span class='cursor'></span>";

      index++;
      setTimeout(type, 40);

    } else {

      element.innerHTML = text;

      
      scrollToNextPage();

      if (callback) callback();
    }
  }

  type();
}


function scrollToNextPage() {
  const book = document.querySelector(".book");
  const pages = document.querySelectorAll(".page");

  if (!book || pages.length === 0) return;

  for (let i = 0; i < pages.length; i++) {
    const pageTop = pages[i].offsetTop;

    if (pageTop > book.scrollTop + 10) {
      book.scrollTo({
        top: pageTop,
        behavior: "smooth"
      });
      break;
    }
  }
}


function startTypewriter() {

  typeWriterEffect("text1", texts[0], function () {

    typeWriterEffect("text2", texts[1], function () {

      document.getElementById("memoriesSection").style.display = "block";

      scrollToNextPage();

      setTimeout(function () {

        typeWriterEffect("text3", texts[2], function () {

          typeWriterEffect("text4", texts[3], function () {

            typeWriterEffect("text5", texts[4], function () {

  setTimeout(function () {
    document.getElementById("shareSection").style.display = "block";
  }, 500);

});


          });

        });

      }, 800);

    });

  });

}




function shareWhatsApp() {
  const url = window.location.href;
  const text = "Look at this beautiful Valentine proposal 💖";
  window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`);
}

function shareFacebook() {
  const url = window.location.href;
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
}

function shareInstagram() {

  const url = window.location.href;
  const text = "Look at this special Valentine proposal 💖 " + url;

  // Copy link first (Instagram doesn't allow prefilled text directly)
  navigator.clipboard.writeText(text);

  const msg = document.getElementById("copyMsg");
  msg.innerHTML = "Message copied! Opening Instagram DM... 💌";

  // Try to open Instagram Direct Messages
  setTimeout(() => {
    window.open("https://www.instagram.com/direct/inbox/", "_blank");
  }, 800);

  setTimeout(() => {
    msg.innerHTML = "Paste the message in Instagram chat 💕";
  }, 2000);
}

function copyLink() {
  const url = window.location.href;
  navigator.clipboard.writeText(url);

  const msg = document.getElementById("copyMsg");
  msg.innerHTML = "Link copied! Share it with love 💕";

  setTimeout(() => {
    msg.innerHTML = "";
  }, 2000);
}

function startHeartRain() {

  const container = document.getElementById("heartRain");

  container.innerHTML = "";   // clear old hearts

  const symbols = ["❤️", "💕", "💖", "💗"];

  for (let i = 0; i < 40; i++) {

    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.animationDuration = 6 + Math.random() * 6 + "s";

    heart.style.fontSize = 16 + Math.random() * 18 + "px";

    heart.style.animationDelay = Math.random() * 5 + "s";

    container.appendChild(heart);
  }
}
