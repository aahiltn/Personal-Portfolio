/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent, e as renderHead } from '../chunks/astro/server_DC5h8_Cx.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
import 'clsx';
export { renderers } from '../renderers.mjs';

const direction = atom("home");

const pfp = new Proxy({"src":"/_astro/pfp.35OGZ8qZ.jpg","width":2018,"height":2695,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/aahil/Documents/Projects/portfolio/src/images/pfp.jpg";
							}
							
							return target[name];
						}
					});

const left = new Proxy({"src":"/_astro/left.CP7RbODA.png","width":1600,"height":1600,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/aahil/Documents/Projects/portfolio/src/images/left.png";
							}
							
							return target[name];
						}
					});

const right = new Proxy({"src":"/_astro/right.Br3tr3cd.jpg","width":474,"height":474,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/aahil/Documents/Projects/portfolio/src/images/right.jpg";
							}
							
							return target[name];
						}
					});

const images = {
  home: pfp,
  bio: pfp,
  experience: left,
  projects: right,
  contact: pfp
};
const Instax = () => {
  const dir = useStore(direction);
  const pic = images[dir] || images.home;
  return /* @__PURE__ */ jsxs("div", { className: "bg-white flex-none flex-col w-[19.5rem] h-auto py-3 px-5 text-black rounded-lg shadow-md hover:outline-md ", children: [
    /* @__PURE__ */ jsx("img", { src: pic.src, alt: "aahil", className: "py-4" }),
    /* @__PURE__ */ jsxs("div", { className: "sticky top-0 bg-white my-4 font-['Schoolbell'] flex flex-col justify-center text-center", children: [
      /* @__PURE__ */ jsx("span", { className: "text-4xl font-extrabold", children: "Aahil Nishad" }),
      /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold", children: "Northeastern '27, BSCS, Software Dev" })
    ] })
  ] });
};

const Navbar = () => {
  function setDirection(dir2) {
    direction.set(dir2);
    console.log(direction.get());
  }
  const dir = useStore(direction);
  return /* @__PURE__ */ jsxs("nav", { className: "text-[#412819] dark:text-gray-200 flex flex-wrap w-full justify-around place-items-center", children: [
    /* @__PURE__ */ jsxs(
      "a",
      {
        className: "mt-8 gap-2 text-2xl font-semibold group transition duration-400",
        onMouseEnter: () => setDirection("bio"),
        onMouseLeave: () => setDirection("home"),
        href: `#${dir}`,
        children: [
          "Bio",
          /* @__PURE__ */ jsx("div", { className: "block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 dark:bg-yellow-500 bg-amber-900" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "a",
      {
        className: "mt-8 gap-3 text-2xl font-semibold group transition duration-400",
        onMouseEnter: () => setDirection("experience"),
        onMouseLeave: () => setDirection("home"),
        href: `#${direction.get()}`,
        children: [
          "Experiences",
          /* @__PURE__ */ jsx("div", { className: "block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 dark:bg-yellow-500 bg-amber-900" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "a",
      {
        className: "mt-8 gap-3 text-2xl font-semibold group transition duration-400",
        onMouseEnter: () => setDirection("projects"),
        onMouseLeave: () => setDirection("home"),
        href: `#${direction.get()}`,
        children: [
          "Projects",
          /* @__PURE__ */ jsx("div", { className: "block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 dark:bg-yellow-500 bg-amber-900" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "a",
      {
        className: "mt-8 gap-3 text-2xl font-semibold group transition duration-400",
        onMouseEnter: () => setDirection("contact"),
        onMouseLeave: () => setDirection("home"),
        href: `#${direction.get()}`,
        children: [
          "Contact",
          /* @__PURE__ */ jsx("div", { className: "block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 dark:bg-yellow-500 bg-amber-900" })
        ]
      }
    )
  ] });
};

const $$Bio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`text-center bg-[#e6be70] text-black dark:text-gray-200 w-7/12 space-y-4 h-auto p-7 rounded-lg bg-[#412819] dark:bg-gray-800 shadow-md
        delay-[0ms] duration-[600ms] taos:[transform:translate3d(0,200px,0)_scale(0.6)] taos:opacity-0`, "class")} data-taos-offset="0" id="bio"> <span class="font-[Schoolbell] font-bold text-3xl dark:text-gray-200 text-[#402d25]">Hey there! I'm Aahil.</span> <div class="flex text-xl">
I'm a student developer based out of Boston, MA. I'm currently studying Computer Science at Northeastern University, 
        and looking for a career in artificial intelligence and software development.
</div> <div class="flex text-xl">
When developing, my inspiration is the world around me. 
        I love to build things that make a difference and I'm always looking for new opportunities to learn and grow. 
        When I'm not behind the keyboard, I'm a huge traveler, and you can find me out playing tennis or tucked away watching a show.
</div> </div>  `;
}, "C:/Users/aahil/Documents/Projects/portfolio/src/components/bio.astro", void 0);

const $$Astro$2 = createAstro();
const $$Bubble = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Bubble;
  const item = Astro2.props.item;
  return renderTemplate`${maybeRenderHead()}<div class="bg-muted h-min rounded-full px-3 py-1 text-xs text-muted-foreground border dark:border-gray-800 border-[#652A30]"> ${item} </div>`;
}, "C:/Users/aahil/Documents/Projects/portfolio/src/components/bubble.astro", void 0);

const $$Astro$1 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const title = Astro2.props.title;
  const description = Astro2.props.description;
  const dates = Astro2.props.dates;
  const location = Astro2.props.location;
  const image = Astro2.props.image;
  const stack = Astro2.props.stack;
  const link = Astro2.props.link;
  return renderTemplate`${maybeRenderHead()}<a class="w-auto max-w-md shadow-md bg-amber-50 dark:text-gray-900 dark:bg-gray-400 m-5 hover:shadow-black hover:ring-4 hover:ring-[#8d5c47] dark:hover:ring-yellow-500 rounded-md p-6 grid gap-6
delay-[20ms] duration-[400ms] taos:scale-[0.6] taos:opacity-0" data-taos-offset="50"${addAttribute(link, "href")} target="_blank"> <div class="flex items-center gap-4"> <div class="bg-muted rounded-md flex items-center justify-center aspect-square w-14"> <img${addAttribute(image, "src")} width="50" height="50" alt="Project Logo" class="object-contain"> </div> <div class="grid gap-1"> <h3 class="text-xl font-semibold">${title}</h3> <div class="flex items-center gap-1 text-sm text-muted-foreground"> <span>${location}</span> <span>·</span> <span>${dates}</span> </div> </div> </div> <p class="text-muted-foreground"> ${description} </p> <div class="flex flex-wrap gap-2"> ${stack.map((item, index) => renderTemplate`${renderComponent($$result, "Bubble", $$Bubble, { "key": index, "item": item })}`)} </div> </a>`;
}, "C:/Users/aahil/Documents/Projects/portfolio/src/components/card.astro", void 0);

const LetsLink = new Proxy({"src":"/_astro/LetsLink_logo.D2I5h7cV.svg","width":87,"height":93,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/aahil/Documents/Projects/portfolio/src/images/projects/LetsLink_logo.svg";
							}
							
							return target[name];
						}
					});

const CarbonConnect = new Proxy({"src":"/_astro/CarbonConnect.BmCv93CJ.svg","width":195,"height":178,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/aahil/Documents/Projects/portfolio/src/images/projects/CarbonConnect.svg";
							}
							
							return target[name];
						}
					});

const aahil = new Proxy({"src":"/_astro/pfp.CNFnZdYW.png","width":689,"height":670,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/aahil/Documents/Projects/portfolio/src/images/projects/pfp.png";
							}
							
							return target[name];
						}
					});

const tunul = new Proxy({"src":"/_astro/tunulLogo.B_xH7_Ck.png","width":1117,"height":1117,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/aahil/Documents/Projects/portfolio/src/images/projects/tunulLogo.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`grid w-3/4 justify-center bg-[#e6be70] text-[#47342c] dark:text-gray-200 dark:bg-gray-800 rounded-md shadow-lg p-4
    delay-[0ms] duration-[600ms] taos:[transform:translate3d(0,200px,0)_scale(0.6)] taos:opacity-0`, "class")} data-taos-offset="100" id="projects"> <div class="font-[Schoolbell] font-extrabold p-4 text-4xl text-center">Projects</div> <div class="flex flex-wrap justify-center gap-2"> ${renderComponent($$result, "Card", $$Card, { "title": "Portfolio Website", "description": "Built with love, an insight into my life. You're already here. Welcome aboard!", "location": "Danbury, CT", "dates": "Aug. 2024", "image": aahil.src, "stack": ["Astro", "React", "Styled Components", "TypeScript", "JavaScript", "Tailwind"], "link": "/" })} ${renderComponent($$result, "Card", $$Card, { "title": "Carbon Connect", "description": "A carbon-emissions calculator and tracker for EU-based residents, companies, and organizations.", "location": "Leuven, Belgium", "dates": "June 2024", "image": CarbonConnect.src, "stack": ["Python", "SQL", "Docker", "Streamlit", "Flask"], "link": "https://github.com/mehallhm/wafflers" })} ${renderComponent($$result, "Card", $$Card, { "title": "Let's Link", "description": "An easy, informal way to meet up with friends. Awarded Best Use of MongoDB Atlas by Major League Hacking.", "dates": "Feb. 2024", "location": "Boston, MA", "image": LetsLink.src, "stack": ["Next.js", "React", "MongoDB", "Google OAuth"], "link": "https://letslink.club/" })} ${renderComponent($$result, "Card", $$Card, { "title": "tunul", "description": "A step-by-step tunnel navigation of the Northeastern University Boston Campus. Made simple.", "dates": "Apr. 2024", "location": "Boston, MA", "image": tunul.src, "stack": ["Next.js", "React", "Typescript", "Javascript", "JSON"], "link": "https://tunul.netlify.app/" })} </div> </div>`;
}, "C:/Users/aahil/Documents/Projects/portfolio/src/components/projects.astro", void 0);

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form class="flex flex-wrap space-2 p-2" id="form" action="https://api.web3forms.com/submit" method="POST"> <input type="hidden" name="access_key" value="e2c82ab0-f06a-4ad2-9dc7-c5dc439c10a8"> <div class="text-lg w-1/2 w-min-24 gap-y-2 p-2 flex-col flex delay-[50ms] duration-[300ms] taos:[transform:perspective(2500px)_rotateX(-100deg)] taos:invisible taos:[backface-visibility:hidden]" data-taos-offset="100"> <label class="text-zinc-800 dark:text-zinc-200">First Name <span class="text-rose-800 dark:text-rose-400">*</span> </label> <input class="dark:focus:ring-yellow-500 text-zinc-800 dark:bg-gray-400 bg-amber-50 p-3 rounded-lg" type="text" name="first" placeholder="First Name" required> </div> <div class="text-lg w-1/2 w-min-24 gap-y-2 p-2 flex-col flex delay-[100ms] duration-[300ms] taos:[transform:perspective(2500px)_rotateX(-100deg)] taos:invisible taos:[backface-visibility:hidden]" data-taos-offset="100"> <label class="text-zinc-800 dark:text-zinc-200">Last Name <span class="text-rose-800 dark:text-rose-400">*</span> </label> <input class="focus:dark:ring-yellow-500  text-zinc-800 dark:bg-gray-400 bg-amber-50 p-3 rounded-lg" type="text" name="last" placeholder="Last Name"> </div> <div class="text-lg p-2 gap-y-2 flex-col flex w-min-30 w-3/5 delay-[150ms] duration-[300ms] taos:[transform:perspective(2500px)_rotateX(-100deg)] taos:invisible taos:[backface-visibility:hidden]" data-taos-offset="100"> <label class="text-zinc-800 dark:text-zinc-200">Email Address <span class="text-rose-800 dark:text-rose-400">*</span> </label> <input class="focus:dark:ring-yellow-500  text-zinc-800 dark:bg-gray-400 bg-amber-50 p-3 rounded-lg" type="email" name="email" inputmode="email" placeholder="example@example.com" required> </div> <div class="text-lg p-2 gap-y-2 flex-col flex w-min-24 w-2/5 delay-[200ms] duration-[300ms] taos:[transform:perspective(2500px)_rotateX(-100deg)] taos:invisible taos:[backface-visibility:hidden]" data-taos-offset="100"> <label class="text-zinc-800 dark:text-zinc-200">Organization</label> <input class="focus:dark:ring-yellow-500  text-zinc-800 dark:bg-gray-400 bg-amber-50 p-3 rounded-lg" type="text" name="organization" placeholder="Org Name"> </div> <div class="text-lg p-2 gap-y-2 h-36 flex-col flex w-full delay-[250ms] duration-[300ms] taos:[transform:perspective(2500px)_rotateX(-100deg)] taos:invisible taos:[backface-visibility:hidden]" data-taos-offset="100"> <label class="text-zinc-800 dark:text-zinc-200">Message <span class="text-rose-800 dark:text-rose-400">*</span> </label> <textarea class="focus:dark:ring-yellow-500 text-zinc-800 dark:bg-gray-400 bg-amber-50 w-full p-3 rounded-lg" name="message" rows="4" placeholder="Message" required></textarea> </div> <div class="w-full flex mt-2 justify-center items-center"> <button class="w-auto rounded-lg dark:bg-gray-600 dark:text-gray-200 text-yellow-950 font-bold hover:shadow-xl hover:outline-1 dark:hover:bg-gray-700 hover:bg-yellow-600 bg-[#D4A13D] justify-center py-2 align-middle px-4" type="submit">
Send Message
</button> </div> </form> `;
}, "C:/Users/aahil/Documents/Projects/portfolio/src/components/contact.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<button id="themeToggle" class="fixed bottom-3 right-3 border-0 p-4 h-10 dark:bg-[#D4A13D] bg-gray-900 rounded-full flex items-center justify-center shadow-lg transition-all delay-[300ms] duration-[600ms] taos:translate-x-[200px] taos:opacity-0" data-taos-offset="0"> <svg width="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <!-- Light mode icon (moon) visible in light mode --> <path class="moon fill-[#D4A13D] dark:fill-transparent transition-all duration-600" fill-rule="evenodd" d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z"></path> <!-- Dark mode icon (sun) visible in dark mode --> <path class="sun fill-transparent dark:fill-gray-800 transition-all duration-600" fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z"></path> </svg> </button> <script>
    const theme = (() => {
      if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
        return localStorage.getItem('theme');
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
        return 'light';
    })();
  
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  
    window.localStorage.setItem('theme', theme);
  
    const handleToggleClick = () => {
      const element = document.documentElement;
      element.classList.toggle("dark");
  
      const isDark = element.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }
  
    document.getElementById("themeToggle").addEventListener("click", handleToggleClick);
<\/script>`])), maybeRenderHead());
}, "C:/Users/aahil/Documents/Projects/portfolio/src/components/ThemeToggle.astro", void 0);

const havoc = new Proxy({"src":"/_astro/havoc.cp873X4W.png","width":464,"height":507,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/aahil/Documents/Projects/portfolio/src/images/projects/havoc.png";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html class="scroll-smooth" lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>Aahil Nishad</title>${renderHead()}</head> <body class="bg-[#D4A13D] dark:bg-gray-900 space-y-14 scroll-smooth pb-24 w-full"> <div class="relative w-full"> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})} </div> ${renderComponent($$result, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/aahil/Documents/Projects/portfolio/src/components/navbar.tsx", "client:component-export": "default" })} <!-- <div class="flex w-auto h-auto sticky top-0 justify-center">
      <div class="rounded-lg p-4 shadow-md hover:outline-md w-[22rem] bg-white dark:bg-gray-800 my-4 font-['Schoolbell'] flex flex-col justify-center text-center">
        <span class="text-4xl font-extrabold">Aahil Nishad</span>
        <span class="text-lg font-semibold dark:text-gray-200">
          Northeastern '27, BSCS, Software Engineer
        </span>
      </div>
    </div> --> <div class="flex w-auto justify-center parent-container h-auto overflow-auto"> ${renderComponent($$result, "Instax", Instax, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/aahil/Documents/Projects/portfolio/src/components/instax.tsx", "client:component-export": "default" })} </div> <div class="flex flex-col w-full place-items-center" id="bio"> ${renderComponent($$result, "Bio", $$Bio, {})} </div> <div id="experience" class="flex flex-col w-full place-items-center space-y-20"> <div class="grid w-3/4 justify-center bg-[#e6be70] text-[#47342c] dark:text-gray-200 dark:bg-gray-800 rounded-md shadow-lg p-3 delay-[100ms] duration-[600ms] taos:[transform:translate3d(0,200px,0)_scale(0.6)] taos:opacity-0" data-taos-offset="0"> <div class="font-[Schoolbell] font-extrabold p-4 text-4xl dark:text-gray-200 text-center">
Experiences
</div> <div class="flex flex-wrap justify-center gap-2"> ${renderComponent($$result, "Card", $$Card, { "title": "Software Developer", "description": "Contributor to FinishLine, a project management dashboard used by by 100+ engineers for the construction of a competitive Formula SAE and FH+E racing car.", "location": "Northeastern Electric Racing", "dates": "Jan. 2024 - Present", "image": "https://electricracing.northeastern.edu/wp-content/uploads/2021/02/cropped-Logo-Transparent-180x180.png", "stack": ["React", "Typescript", "Git", "CSS"], "link": "https://finishlinebyner.com/" })} ${renderComponent($$result, "Card", $$Card, { "title": "Software Developer", "description": "Implemented control systems in C++ and developed autonomous routing in cooperation with other members for team 5150H in use for 20+ competitions and 18+ awards.", "location": "Vex Team: 5150H", "dates": "Sep. 2021 - June 2023", "image": havoc.src, "stack": ["C++", "PROS", "Control Systems", "Git"], "link": "https://github.com/5150VEX/5150H-3" })} </div> </div> ${renderComponent($$result, "Projects", $$Projects, {})} <div class="flex justify-center items-center flex-col w-3/4 bg-[#e6be70] text-[#47342c] dark:bg-gray-800 dark:text-gray-200 p-7 m-3 mb-24 rounded-lg shadow-md delay-[0ms] duration-[300ms] taos:[transform:translate3d(0,200px,0)_scale(0.6)] taos:opacity-0" data-taos-offset="0"> <div class="font-['Schoolbell'] font-bold text-4xl text-center ">Contact Me</div> <div id="contact" class="mt-3 w-40 justify-around flex flex-row gap-x-2 duration-[300ms] taos:[transform:perspective(2500px)_rotateX(100deg)] taos:invisible taos:[backface-visibility:hidden]" data-taos-offset="100"> <a href="https://www.linkedin.com/in/aahil-nishad/" target="_blank" rel="noopener noreferrer" title="LinkedIn"> <span class="icon-[mdi--linkedin] size-8 fill-[#8d5c47] dark:fill-zinc-200"></span> </a> <a href="https://www.github.com/aahiltn" target="_blank" rel="noopener noreferrer" title="Github"> <span class="icon-[mdi--github] size-8 fill-[#8d5c47] dark:fill-zinc-200"></span> </a> <a href="../files/AN-resume.pdf" target="_blank" rel="noopener noreferrer" title="Resume"> <span class="icon-[mdi--file-download] size-8 fill-[#8d5c47] dark:fill-zinc-200"></span> </a> </div> ${renderComponent($$result, "FormContact", $$Contact, {})} </div> </div> </body></html>`;
}, "C:/Users/aahil/Documents/Projects/portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/aahil/Documents/Projects/portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
