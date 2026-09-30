// Small interaction: update the terminal prompt
// when the user reaches a new section.

const sections = document.querySelectorAll("section");
const prompt = document.querySelector(".hero .terminal");

const commands = {
  projects: "$ ls projects/",
  about: "$ cat about.txt",
  contact: "$ ./contact.sh"
};

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const box = section.getBoundingClientRect();

    if (box.top < window.innerHeight * 0.5 &&
        box.bottom > window.innerHeight * 0.5) {
      if (commands[section.id]) {
        console.log(commands[section.id]);
      }
    }
  });
});
