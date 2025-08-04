const certificates = [
  {
    title: "The Joy of Computing using Python - NPTEL,IIT Madras",
    img: "./assets/certificates/The Joy of Computing using Python.jpg",
    link: "https://drive.google.com/file/d/1jc_GIJMGBVo3ss-A9cPitfUJDpEFY472/view?usp=sharing"
  },
  {
    title: "AIML Virtual Internship",
    img: "./assets/certificates/AIML.jpg",
    link: "https://drive.google.com/file/d/1jdv1c5eyLMFdEG8NZ6JM-tgezVhUWRs2/view?usp=sharing"
  },

  {
    title: "MERN Stack Development Course - Udemy",
    img: "./assets/certificates/MERN_Udemy_Certificate.jpg",
    link: "https://drive.google.com/file/d/1YVwLgPOwv61bjmuNcTWTu8475SAwQi6H/view?usp=sharing"
  },
];

const container = document.getElementById("certificates-container");

certificates.forEach(cert => {
  const card = document.createElement("div");
  card.className = "floating flex flex-col items-center";

  card.innerHTML = `
        <div class="relative group rounded-lg overflow-hidden shadow-lg">
          <img src="${cert.img}" alt="${cert.title}" class="w-auto h-auto max-w-full object-contain" />
          <div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <a href="${cert.link}" target="_blank" class="bg-red-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700 transition">View Certificate</a>
          </div>
        </div>
        <div class="mt-3 text-center text-lg font-bold text-yellow-200">
          ${cert.title}
        </div>
        `;
  container.appendChild(card);
});