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



  