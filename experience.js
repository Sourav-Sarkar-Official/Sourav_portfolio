const experienceHTML = `
<section class="experience-section relative py-20 sm:py-32 overflow-hidden">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">

    <div class="text-center mb-20">
      <h2 class="text-4xl sm:text-5xl font-bold text-white tracking-tight">
        My Journey
      </h2>
      <p class="mt-4 text-lg text-gray-400">
        A timeline of my roles, responsibilities, and accomplishments.....
      </p>
    </div>

    <div class="relative before:absolute before:content-[''] before:w-[3px] before:bg-white/10 before:top-0 before:bottom-0 before:left-[50%] before:translate-x-[-50%]">
  <div class="space-y-20">

      <!-- Left Card -->
        <div class="relative flex justify-start">
          <div class="absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 bg-teal-400 border-4 border-gray-900 rounded-full z-10"></div>
          <div class="experience-item w-full sm:w-1/2 p-8">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-2xl font-bold text-white">Examplan-B </h3>
                <p class="mt-1 text-lg text-teal-300 font-medium">Youtube Channel</p>
              </div>
              <div class="text-sm font-semibold text-gray-400 text-right ml-4">2022 - Present</div>
            </div>
            <p class="mt-6 text-gray-300">  
              I am an educational content creator and the founder of the YouTube channel Examplan-B, which has positively impacted over 10,000+ students through accessible and engaging educational content. As a team, we have collectively taught over 200+ students through our structured courses.            </p>
          </div>
        </div>

      <!-- Right Card -->
        <div class="relative flex justify-end">
          <div class="absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 bg-teal-400 border-4 border-gray-900 rounded-full z-10"></div>
          <div class="experience-item w-full sm:w-1/2 p-8">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-2xl font-bold text-white">The Joy of Computing using Python</h3>
                <p class="mt-1 text-lg text-teal-300 font-medium"> NPTEL, IIT Madras</p>
              </div>
              <div class="text-sm font-semibold text-gray-400 text-right ml-4">Jan–Apr 2023</div>
            </div>
            <p class="mt-6 text-gray-300">  
            Completed the NPTEL-certified course 'The Joy of Computing using Python', offered by IIT Madras. This 12-week program covered foundational programming concepts, emphasizing logic building and problem-solving using Python.
          </div>
        </div>
        <!-- Right Card -->
        <div class="relative flex justify-start">
          <div class="absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 bg-teal-400 border-4 border-gray-900 rounded-full z-10"></div>
          <div class="experience-item w-full sm:w-1/2 p-8">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-2xl font-bold text-white">Frontend Developer Intern</h3>
                <p class="mt-1 text-lg text-teal-300 font-medium">CODEXINTERN</p>
              </div>
              <div class="text-sm font-semibold text-gray-400 text-right ml-4 mt-4">April,2025</div>
            </div>
            <p class="mt-6 text-gray-300">
              Completed 1-month React.js internship involving development of 3 responsive web applications.
Focused on React hooks, API integration, and component-based architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('experience-section').innerHTML = experienceHTML;

  // Animation on scroll
  const items = document.querySelectorAll('.experience-item');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1 });

  items.forEach(item => observer.observe(item));

  // Glow effect
  const section = document.querySelector('.experience-section');
  section.addEventListener('mousemove', e => {
    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    section.style.setProperty('--x', `${x}px`);
    section.style.setProperty('--y', `${y}px`);
  });
});
