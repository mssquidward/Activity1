function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const profileSection = document.getElementById("profile");
  const elishaText = document.getElementById("elisha");
  const marayagText = document.getElementById("marayag");

  let isScrollingUp = false;

  function handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > lastScrollY) {
      isScrollingUp = false;
    } else {
      isScrollingUp = true;
    }

    lastScrollY = scrollY;

    if (!isScrollingUp) {
      elishaText.classList.add("fade-out");
      marayagText.classList.add("fade-out");
    } else {
      const profileSectionTop = profileSection.offsetTop;
      const profileSectionBottom = profileSectionTop + profileSection.offsetHeight;

      if (scrollY >= profileSectionTop && scrollY <= profileSectionBottom) {
        elishaText.classList.remove("fade-out");
        marayagText.classList.remove("fade-out");
      }
    }
  }

  let lastScrollY = window.scrollY || window.pageYOffset;
  window.addEventListener("scroll", handleScroll);


document.addEventListener("DOMContentLoaded", function() {
  const loaderContainer = document.getElementById("loader-container");
  loaderContainer.style.display = "flex";

  setTimeout(function() {
    loaderContainer.style.display = "none";

    let currentIndexProfile = 0;
    const profileImages = document.querySelectorAll('.profile-image');

    function showNextProfileImage() {
      profileImages[currentIndexProfile].style.display = 'none';
      currentIndexProfile = (currentIndexProfile + 1) % profileImages.length;
      profileImages[currentIndexProfile].style.display = 'block';
    }

    showNextProfileImage();
    setInterval(showNextProfileImage, 500);

    let currentIndexAbout = 0;
    const aboutImages = document.querySelectorAll('.gallery-image');

    function showNextAboutImage() {
      aboutImages[currentIndexAbout].style.display = 'none';
      currentIndexAbout = (currentIndexAbout + 1) % aboutImages.length;
      aboutImages[currentIndexAbout].style.display = 'block';
    }

    showNextAboutImage();
    setInterval(showNextAboutImage, 900);
  }, 2000); 
});