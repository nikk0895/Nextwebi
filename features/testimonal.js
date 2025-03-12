let index = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showNextTestimonial() {
  testimonials[index].classList.remove("active"); // Hide current
  index = (index + 1) % testimonials.length; // Move to next
  testimonials[index].classList.add("active"); // Show next
}

setInterval(showNextTestimonial, 5000); // Change testimonial every 5 sec
