// // const slider = document.querySelector('.alumni-slider');
// // let isDown = false;
// // let startX;
// // let scrollLeft;

// // function autoScroll() {
// //     slider.scrollBy({ left: 310, behavior: 'smooth' });
// //     setTimeout(autoScroll, 5000);
// // }

// // autoScroll();

// // slider.addEventListener('mousedown', (e) => {
// //     isDown = true;
// //     startX = e.pageX - slider.offsetLeft;
// //     scrollLeft = slider.scrollLeft;
// // });

// // slider.addEventListener('mouseleave', () => {
// //     isDown = false;
// // });

// // slider.addEventListener('mouseup', () => {
// //     isDown = false;
// // });

// // slider.addEventListener('mousemove', (e) => {
// //     if (!isDown) return;
// //     e.preventDefault();
// //     const x = e.pageX - slider.offsetLeft;
// //     const walk = (x - startX) * 2; //scroll-fast
// //     slider.scrollLeft = scrollLeft - walk;
// // });


// document.addEventListener('DOMContentLoaded', function () {
//     const slider = document.querySelector('.alumni-slider');
//     let isPaused = false;
    
//     // Function to scroll the slider horizontally
//     function scrollSlider() {
//         // Calculate the width of one alumni card (including margin)
//         const cardWidth = slider.querySelector('.alumni-card').offsetWidth + 20; // Adjust 20 for margin
        
//         // Scroll the slider by the width of one card
//         slider.scrollLeft += cardWidth;
//     }
    
//     // Auto-scroll function
//     function autoScroll() {
//         // Check if not paused
//         if (!isPaused) {
//             scrollSlider(); // Scroll the slider
//         }
//         setTimeout(autoScroll, 3000); // Adjust scroll speed (3000ms = 3 seconds)
//     }
    
//     // Start auto-scrolling when the page loads
//     autoScroll();
    
//     // Pause auto-scrolling when mouse enters the slider
//     slider.addEventListener('mouseenter', function () {
//         isPaused = true;
//     });
    
//     // Resume auto-scrolling when mouse leaves the slider
//     slider.addEventListener('mouseleave', function () {
//         isPaused = false;
//     });
// });


const cube = document.querySelector(".cube");
const playIcon = document.querySelector(".play-icon");
const pauseIcon = document.querySelector(".pause-icon");
const toggleButton = document.querySelector(".toggle-button");

function toggleRotation() {
  const animationState = getComputedStyle(cube).animationPlayState;

  if (animationState === "running") {
    cube.style.animationPlayState = "paused";
    playIcon.style.display = "inline-block";
    pauseIcon.style.display = "none";
  } else {
    cube.style.animationPlayState = "running";
    playIcon.style.display = "none";
    pauseIcon.style.display = "inline-block";
  }
}

// Event listener for spacebar and button click
document.addEventListener("keydown", (event) => {
  if (
    event.code === "Space" ||
    (event.target === toggleButton && event.type === "click")
  ) {
    event.preventDefault();
    toggleRotation();
  }
});

// Prevent spacebar from scrolling the page
window.addEventListener("keydown", (event) => {
  if (event.code === "Space" && event.target === document.body) {
    event.preventDefault();
  }
});



document.addEventListener('DOMContentLoaded', () => {
    const sections = [
      {
        id: 'hs1',
        content: [
          'Nursing',
          'Clinical Pharmacology',
          'Public Health',
          'Food Science & Nutrition',
          'Complementary & Alternative Medicine',
          'Psychology & Psychiatry',
          'Politics & Sociology',
        ],
      },
      {
        id: 'hs2',
        content: [
          'Agricultural Sciences',
          'Biochemistry & Bioinformatics',
          'Cancer/Oncology',
          'Genetics',
          'Medical Clinical Science',
          'Obstetrics, Gynecology & Reproduction',
          'Molecular Biology',
          'Neuroscience / Neurology',
          'Physiology & Sports science',
          'Public Health & Epidemiology',
          'Immunology',
          'Biotechnology',
          
          // Add more items as needed
        ],
      },
      {
        id: 'hs3',
        content: [
          'Biomedical Engineering',
          'Environmental Engineering',
          'Civil & Structual Engineering',
          'Chemical Engineering',
          'Manufacturing & Materials Science',
          'Nanotechnology',
          'Mechanical Engineering',
          'Software Engineering',
          'Telecommunications',
          'Electrical & Electronic',
          'Data Mining / Image Mining / Cloud Computing',
          'Computer Science Engineering',
  
          
          // Add more items as needed
        ],
      },
      {
        id: 'hs4',
        content: [
          'Development Studies',
          'Education',
          'Human Resource Management',
          'IT / Strategic Marketing',
          'Social Work, Social Policy & Administration',
          'Modern Languages & Linguistics',
          'Philosophy',
          'Health Sciences',
          'The Middle East & African Studies (MENA)',
          'Architecture & The Built Environment',
        
          // Add more items as needed
        ],
      },
      {
        id: 'hs5',
        content: [
          'Accounting & Finance',
          'Marketing',
          'Tourism & Hospitality',
          'English',
          'History',
          'Classics & Ancient History',
          'Law',
          'Operational Research',
          // Add more items as needed
        ],
      },
    ];
  
    sections.forEach(section => {
      const ul = document.getElementById(section.id);
      section.content.forEach(text => {
        const li = document.createElement('li');
        li.classList.add('hs__item');
        
        const description = document.createElement('div');
        description.classList.add('hs_item_description');
        
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
  
        description.appendChild(paragraph);
        li.appendChild(description);
        
        ul.appendChild(li);
      });
    });
    
    const arrows = document.querySelectorAll('.arrow');
    arrows.forEach(arrow => {
      arrow.addEventListener('click', (e) => {
        const direction = e.currentTarget.dataset.direction;
        const wrapper = e.currentTarget.closest('.hs__wrapper');
        const hs = wrapper.querySelector('.hs');
        const scrollAmount = hs.clientWidth / 2;
  
        if (direction === 'prev') {
          hs.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else if (direction === 'next') {
          hs.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      });
    });
  });