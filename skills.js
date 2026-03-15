console.log("Skills section script loaded");

const languages = [
  {
    icon: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" class="w-6 h-6 sm:w-8 sm:h-8" />`,
    label: "C"
  },
  {
    icon: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" class="w-6 h-6 sm:w-8 sm:h-8" />`,
    label: "C++"
  },
  {
    icon: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" class="w-6 h-6 sm:w-8 sm:h-8" />`,
    label: "Python"
  },
  {
    icon: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" class="w-6 h-6 sm:w-8 sm:h-8" />`,
    label: "Java"
  },
  {
    icon: "fa-brands fa-js",
    color: "#FACC15",
    label: "JavaScript"
  },
  {
    icon: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" class="w-6 h-6 sm:w-8 sm:h-8" />`,
    label: "TypeScript"
  },
  {
    icon: "fa-brands fa-html5",
    color: "#F97316",
    label: "HTML5"
  },
  {
    icon: "fa-brands fa-css3-alt",
    color: "#3B82F6",
    label: "CSS3"
  }
];

const frameworks = [
  { icon: "fa-brands fa-react", color: "#22D3EE", label: "React" },
  { icon: "fa-solid fa-wind", color: "#38BDF8", label: "Tailwind CSS" },
  { icon: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" class="w-6 h-6 sm:w-8 sm:h-8" />`, label: "Node.js" },
  { icon: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" class="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded" />`, label: "Express" }
];

const tools = [
  { icon: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" class="w-6 h-6 sm:w-8 sm:h-8" />`, label: "MongoDB" },
  { icon: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" class="w-6 h-6 sm:w-8 sm:h-8" />`, label: "MySQL" },
  { icon: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" alt="Firebase" class="w-6 h-6 sm:w-8 sm:h-8"/>`, label: "Supabase" },
  { icon: "fa-brands fa-git-alt", color: "#F97316", label: "Git & GitHub" },
];

function createSkillCard({ icon, color, label }) {
  // If icon is an <img> tag, use it directly; else use Font Awesome
  const iconHtml = icon.startsWith('<img')
    ? icon
    : `<i class="${icon} text-xl sm:text-2xl" style="color: ${color || 'inherit'};"></i>`;
  return `
    <div class="flex flex-col items-center justify-center p-2 sm:p-4 bg-slate-900/30 rounded-lg hover:bg-slate-800/50 transition min-w-0 h-full">
      ${iconHtml}
      <span class="text-xs sm:text-base text-white text-center whitespace-normal break-words leading-tight mt-1">${label}</span>
    </div>
  `;
}

function renderSkills() {
  const skillsContainer = document.getElementById('skills-section');
  skillsContainer.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 ">
      <div class="p-6 rounded-xl backdrop-blur-lg shadow-lg"
        style="background: linear-gradient(135deg, rgba(255, 0, 119, 0.51) 0%, rgba(120,0,255,0.25) 100%); border: 1px solid rgba(255,255,255,0.15);"
        data-aos="fade-right">
        <h4 class="text-xl font-bold mb-6 text-emerald-300 text-center">Languages</h4>
        <div class="grid grid-cols-2 gap-4">
          ${languages.map(createSkillCard).join('')}
        </div>
      </div>
      <div class="p-6 rounded-xl backdrop-blur-lg shadow-lg"
        style="background: linear-gradient(135deg, rgba(0, 255, 119, 0.46) 0%, rgba(0, 119, 255, 0.51) 100%); border: 1px solid rgba(255,255,255,0.15);"
        data-aos="fade-up">
        <h4 class="text-xl font-bold mb-6 text-emerald-300 text-center">Frameworks</h4>
        <div class="grid grid-cols-1 gap-4">
          ${frameworks.map(createSkillCard).join('')}
        </div>
      </div>
      <div class="p-6 rounded-xl backdrop-blur-lg shadow-lg"
        style="background: linear-gradient(135deg,rgb(145, 25, 4),rgb(114, 27, 15));  border: 1px solid rgba(28, 133, 7, 0.18);"
        data-aos="fade-left">
        <h4 class="text-xl font-bold mb-6 text-emerald-300 text-center">Tools</h4>
        <div class="grid grid-cols-1 gap-4">
          ${tools.map(createSkillCard).join('')}
        </div>
      </div>
    </div>
  `;
}

renderSkills();
