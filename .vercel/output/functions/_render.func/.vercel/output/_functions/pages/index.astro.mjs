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
  return /* @__PURE__ */ jsxs("div", { className: "bg-white flex-none flex-col min-w-64 w-80 h-auto py-3 px-5 bg-white-500 text-black rounded-lg shadow-md hover:outline-md ", children: [
    /* @__PURE__ */ jsx("img", { src: pic.src, alt: "aahil", className: "py-4" }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white my-4 font-['Schoolbell'] flex flex-col justify-center text-center", children: [
      /* @__PURE__ */ jsx("span", { className: "text-4xl font-extrabold", children: "Aahil Nishad" }),
      /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold", children: "Northeastern '27, BSCS, Software Engineer" })
    ] })
  ] });
};

const Navbar = () => {
  function setDirection(dir2) {
    direction.set(dir2);
    console.log(direction.get());
  }
  const dir = useStore(direction);
  return /* @__PURE__ */ jsxs("nav", { className: "text-amber-950 flex flex-row w-full justify-around place-items-center", children: [
    /* @__PURE__ */ jsxs(
      "a",
      {
        className: "mt-8 gap-2 text-2xl font-semibold group transition duration-400",
        onMouseEnter: () => setDirection("bio"),
        onMouseLeave: () => setDirection("home"),
        href: `#${dir}`,
        children: [
          "Bio",
          /* @__PURE__ */ jsx("div", { className: "block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-amber-900" })
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
          /* @__PURE__ */ jsx("div", { className: "block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-amber-900" })
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
          /* @__PURE__ */ jsx("div", { className: "block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-amber-900" })
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
          /* @__PURE__ */ jsx("div", { className: "block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-amber-900" })
        ]
      }
    )
  ] });
};

const $$Bio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`text-center text-zinc-200 w-3/4 space-y-4 h-auto p-7 rounded-lg bg-yellow-950 shadow-md
        delay-[0ms] duration-[600ms] taos:[transform:translate3d(0,200px,0)_scale(0.6)] taos:opacity-0`, "class")} data-taos-offset="100" id="bio"> <span class="font-[Schoolbell] font-bold text-3xl">Hey there! I'm Aahil.</span> <div class="flex text-2xl">
I'm a student developer based out of Boston, MA. I'm currently studying Computer Science at Northeastern University, 
        and looking for a career in artificial intelligence and software development.
</div> <div class="flex text-2xl">
When developing, my inspiration is the world around me. 
        I love to build things that make a difference and I'm always looking for new opportunities to learn and grow. 
        When I'm not behind the keyboard, I'm a huge traveler, and you can find me out playing tennis or tucked away watching a show.
</div> </div>  `;
}, "C:/Users/aahil/Documents/Projects/portfolio/src/components/bio.astro", void 0);

const $$Astro$3 = createAstro();
const $$Bubble = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Bubble;
  const item = Astro2.props.item;
  return renderTemplate`${maybeRenderHead()}<div class="bg-muted h-min rounded-full px-3 py-1 text-xs text-muted-foreground border border-[#652A30]"> ${item} </div>`;
}, "C:/Users/aahil/Documents/Projects/portfolio/src/components/bubble.astro", void 0);

const $$Astro$2 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const title = Astro2.props.title;
  const description = Astro2.props.description;
  const dates = Astro2.props.dates;
  const location = Astro2.props.location;
  const image = Astro2.props.image;
  const stack = Astro2.props.stack;
  return renderTemplate`${maybeRenderHead()}<div class="w-auto max-w-md shadow-md bg-zinc-300 m-5 hover:shadow-lg rounded-md p-6 grid gap-6
delay-[300ms] duration-[600ms] taos:scale-[0.6] taos:opacity-0" data-taos-offset="400"> <div class="flex items-center gap-4"> <div class="bg-muted rounded-md flex items-center justify-center aspect-square w-14"> <img${addAttribute(image, "src")} width="50" height="50" alt="Project Logo" class="object-contain"> </div> <div class="grid gap-1"> <h3 class="text-xl font-semibold">${title}</h3> <div class="flex items-center gap-1 text-sm text-muted-foreground"> <span>${location}</span> <span>·</span> <span>${dates}</span> </div> </div> </div> <p class="text-muted-foreground"> ${description} </p> <div class="flex flex-wrap gap-2"> ${stack.map((item, index) => renderTemplate`${renderComponent($$result, "Bubble", $$Bubble, { "key": index, "item": item })}`)} </div> </div>`;
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

const $$Astro$1 = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`grid w-3/4 justify-center bg-yellow-950 rounded-md shadow-lg p-4
    delay-[0ms] duration-[600ms] taos:[transform:translate3d(0,200px,0)_scale(0.6)] taos:opacity-0`, "class")} data-taos-offset="100" id="projects"> <div class="font-[Schoolbell] font-extrabold p-4 text-4xl text-zinc-200 text-center">Projects</div> <div class="flex flex-wrap justify-center gap-2"> ${renderComponent($$result, "Card", $$Card, { "title": "Portfolio Website", "description": "Built with love, an insight into my life. You're already here. Welcome aboard!", "location": "Danbury, CT", "dates": "Aug. 2024", "image": aahil.src, "stack": ["Astro", "React", "Styled Components", "TypeScript", "JavaScript", "Tailwind"] })} ${renderComponent($$result, "Card", $$Card, { "title": "Carbon Connect", "description": "A carbon-emissions calculator and tracker for EU-based residents, companies, and organizations.", "location": "Leuven, Belgium", "dates": "June 2024", "image": CarbonConnect.src, "stack": ["Python", "SQL", "Docker", "Streamlit", "Flask"] })} ${renderComponent($$result, "Card", $$Card, { "title": "Let's Link", "description": "An easy, informal way to meet up with friends. Awarded Best Use of MongoDB Atlas by Major League Hacking.", "dates": "Feb. 2024", "location": "Boston, MA", "image": LetsLink.src, "stack": ["Next.js", "React", "MongoDB", "Google OAuth"] })} ${renderComponent($$result, "Card", $$Card, { "title": "tunul", "description": "A step-by-step tunnel navigation of the Northeastern University Boston Campus. Made simple.", "dates": "Apr. 2024", "location": "Boston, MA", "image": tunul.src, "stack": ["Next.js", "React", "Typescript", "Javascript", "JSON"] })} </div> </div>`;
}, "C:/Users/aahil/Documents/Projects/portfolio/src/components/projects.astro", void 0);

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form class="flex flex-wrap space-2 p-2 delay-[300ms] duration-[600ms] taos:scale-[0.6] taos:opacity-0" data-taos-offset="400" id="form" action="https://api.web3forms.com/submit" method="POST"> <input type="hidden" name="access_key" value="e2c82ab0-f06a-4ad2-9dc7-c5dc439c10a8"> <div class="text-xl w-1/2 w-min-24 gap-y-2 p-2 flex-col flex"> <label class="text-zinc-200">First Name <span class="text-rose-400">*</span> </label> <input class="text-zinc-800 bg-zinc-200 p-3 rounded-lg" type="text" name="first" placeholder="First Name" required> </div> <div class="text-xl w-1/2 w-min-24 gap-y-2 p-2 flex-col flex"> <label class="text-zinc-200">Last Name <span class="text-rose-400">*</span> </label> <input class="text-zinc-800 bg-zinc-200 p-3 rounded-lg" type="text" name="last" placeholder="Last Name"> </div> <div class="text-xl p-2 gap-y-2 flex-col flex w-min-30 w-3/5"> <label class="text-zinc-200">Email Address <span class="text-rose-400">*</span> </label> <input class="text-zinc-800 bg-zinc-200 p-3 rounded-lg" type="email" name="email" inputmode="email" placeholder="example@example.com" required> </div> <div class="text-xl p-2 gap-y-2 flex-col flex w-min-24 w-2/5"> <label class="text-zinc-200">Organization</label> <input class="text-zinc-800 bg-zinc-200 p-3 rounded-lg" type="text" name="organization" placeholder="Org Name"> </div> <div class="text-xl p-2 gap-y-2 flex-col flex w-full"> <label class="text-zinc-200">Message <span class="text-rose-400">*</span> </label> <textarea class="text-zinc-800 bg-zinc-200 w-full p-3 rounded-lg" name="message" rows="4" placeholder="Message" required></textarea> </div> <div class="w-full flex mt-2 justify-center items-center"> <button class="w-auto rounded-lg text-yellow-950 font-bold hover:shadow-xl hover:outline-1 hover:bg-yellow-600 bg-yellow-700 justify-center py-2 align-middle px-4" type="submit">
Send Message
</button> </div> </form> `;
}, "C:/Users/aahil/Documents/Projects/portfolio/src/components/contact.astro", void 0);

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

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html class="scroll-smooth" lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>Aahil Nishad</title>${renderHead()}</head> <body class="bg-[#D4A13D] space-y-14 scroll-smooth pb-20"> <div class="flex w-auto h-auto justify-center"> ${renderComponent($$result, "Instax", Instax, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/aahil/Documents/Projects/portfolio/src/components/instax.tsx", "client:component-export": "default" })} </div> ${renderComponent($$result, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/aahil/Documents/Projects/portfolio/src/components/navbar.tsx", "client:component-export": "default" })} <div class="flex flex-col w-full place-items-center" id="bio"> ${renderComponent($$result, "Bio", $$Bio, {})} </div> <div class="flex flex-col w-full place-items-center space-y-20"> <div${addAttribute(`grid w-3/4 justify-center bg-yellow-950 rounded-md shadow-lg p-4
			delay-[0ms] duration-[600ms] taos:[transform:translate3d(0,200px,0)_scale(0.6)] taos:opacity-0`, "class")} data-taos-offset="100" id="experiences"> <div class="font-[Schoolbell] font-extrabold p-4 text-4xl text-zinc-200 text-center">Experiences</div> <div class="flex flex-wrap justify-center gap-2"> ${renderComponent($$result, "Card", $$Card, { "title": "Software Developer", "description": "Contributor to FinishLine, a project management dashboard used by by 100+ engineers for the construction of a competitive Formula SAE and FH+E racing car.", "location": "Northeastern Electric Racing", "dates": "Aug. 2024 - Present", "image": "https://electricracing.northeastern.edu/wp-content/uploads/2021/02/cropped-Logo-Transparent-180x180.png", "stack": ["React", "Typescript", "Git", "CSS"] })} ${renderComponent($$result, "Card", $$Card, { "title": "Software Developer", "description": "Implemented control systems in C++ and developed autonomous routing in cooperation with other members for team 5150H in use for 20+ competitions and 18+ awards.", "location": "Vex Team: 5150H", "dates": "Sep. 2021 - June 2023", "image": havoc.src, "stack": ["C++", "PROS"] })} </div> </div> ${renderComponent($$result, "Projects", $$Projects, {})} <div${addAttribute(`flex justify-center items-center flex-col w-3/4 bg-yellow-950 p-7 m-3 rounded-lg shadow-md
		        delay-[0ms] duration-[300ms] taos:[transform:translate3d(0,200px,0)_scale(0.6)] taos:opacity-0`, "class")} data-taos-offset="100"> <div class="font-['Schoolbell'] font-bold text-4xl text-center text-zinc-200">Contact Me</div> <div id="contact" class="mt-3 w-40 justify-around flex flex-row gap-x-2 duration-[400ms] taos:[transform:perspective(2500px)_rotateX(-100deg)] taos:invisible taos:[backface-visibility:hidden]" data-taos-offset="400"> <a href="https://www.linkedin.com/in/aahil-nishad/" target="_blank" rel="noopener noreferrer" title="LinkedIn"> <span class="icon-[mdi--linkedin] size-8" style="color: #d4a13d;"></span> </a> <a href="https://www.github.com/aahiltn" target="_blank" rel="noopener noreferrer" title="Github"> <span class="icon-[mdi--github] size-8" style="color: #d4a13d;"></span></a> <a href="../files/AN-resume.pdf" target="_blank" rel="noopener noreferrer" title="Resume"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#d4a13d" class="size-8"> <path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm5.845 17.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V12a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clip-rule="evenodd"></path> <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z"></path> </svg> </a> </div> ${renderComponent($$result, "FormContact", $$Contact, {})} </div> </div></body></html>`;
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
