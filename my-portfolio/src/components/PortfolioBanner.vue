<template>
  <div class="min-h-screen w-full bg-[#09090b] text-white font-sans selection:bg-cyan-400 selection:text-black scroll-smooth">
    
    <!-- 1. STICKY TOP NAVIGATION BAR (Stays pinned at top: 0 when scrolling) -->
    <nav class="sticky top-0 z-50 w-full bg-[#0d0f14]/90 backdrop-blur-md border-b border-white/10 shadow-xl">
      <div class="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 h-16 2xl:h-20 flex items-center justify-between gap-4">
        
        <!-- Left: Mini Avatar + Name -->
        <a href="#top" class="flex items-center gap-3 2xl:gap-4 shrink-0 group">
          <div class="w-9 h-9 2xl:w-11 2xl:h-11 rounded-full bg-[#162032] border border-cyan-400 flex items-center justify-center overflow-hidden group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition">
            <img
              v-if="profileImage"
              :src="profileImage"
              alt="Aiily"
              class="w-full h-full object-cover"
            />
            <span v-else class="font-mono text-xs 2xl:text-sm font-black text-cyan-400">MP</span>
          </div>
          <div class="leading-tight">
            <div class="flex items-center gap-1.5">
              <span class="font-bold text-sm sm:text-base 2xl:text-lg text-white">Pany Mon</span>
              <span class="inline-flex items-center justify-center w-4 h-4 rounded-full bg-cyan-400 text-black text-[10px] font-bold">✓</span>
            </div>
            <span class="hidden sm:block font-mono text-[10px] 2xl:text-xs text-cyan-400 tracking-wider">
              WEB DEVELOPER // PORTFOLIO
            </span>
          </div>
        </a>

        <!-- Center: Smooth-Scroll Section Links -->
        <div class="flex items-center gap-1 sm:gap-2 2xl:gap-4">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            @click="activeSection = item.id"
            class="relative px-3 sm:px-4 2xl:px-6 py-2 text-xs sm:text-sm 2xl:text-base font-semibold rounded-lg transition"
            :class="
              activeSection === item.id
                ? 'text-cyan-400 bg-cyan-400/10'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            "
          >
            {{ item.label }}
            <span
              v-if="activeSection === item.id"
              class="absolute bottom-0 left-2.5 right-2.5 h-[2.5px] bg-cyan-400 rounded-full"
            ></span>
          </a>
        </div>

        <!-- Right: CTA Button -->
        <div class="hidden md:flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            class="px-4 py-2 2xl:px-6 2xl:py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs 2xl:text-sm transition shadow-[0_0_15px_rgba(34,211,238,0.25)]"
          >
            Hire / Contact Me
          </a>
        </div>

      </div>
    </nav>

    <!-- 2. PROFILE COVER BANNER & INFO HEADER (1920x1080 Full HD Scaled) -->
    <header id="top" class="w-full bg-[#111217] border-b border-white/10">
      <div class="w-full max-w-[1680px] mx-auto px-0 sm:px-6 lg:px-10 2xl:px-12">

        <!-- Cover Banner -->
        <div
          class="relative h-44 sm:h-60 md:h-72 lg:h-80 xl:h-[340px] 2xl:h-[400px] w-full bg-gradient-to-r from-[#0b1120] via-[#13213c] to-[#091326] sm:rounded-b-2xl overflow-hidden border-x border-b border-white/15"
        >
          <!-- Tech Grid -->
          <div
            class="absolute inset-0 opacity-25"
            style="
              background-image: linear-gradient(to right, rgba(34, 211, 238, 0.22) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(34, 211, 238, 0.22) 1px, transparent 1px);
              background-size: 40px 40px;
            "
          ></div>

          <!-- Ambient Glows -->
          <div class="pointer-events-none absolute -top-24 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]"></div>
          <div class="pointer-events-none absolute -bottom-24 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]"></div>

          <!-- Top-Left Badge -->
          <div class="hidden lg:flex items-center gap-3 absolute top-6 left-8 px-4 py-1.5 bg-black/50 backdrop-blur-md border border-white/10 rounded-lg font-mono text-xs 2xl:text-sm text-gray-400">
            <span class="text-cyan-400 font-bold">SYS.ONLINE</span>
            <span>//</span>
            <span>FULL-STACK DEVELOPER</span>
          </div>

          <!-- Top-Right Badge -->
          <div class="absolute top-3 right-3 sm:top-5 sm:right-6 2xl:top-6 2xl:right-8 px-3.5 py-1.5 bg-black/60 backdrop-blur-md border border-cyan-400/40 rounded-full flex items-center gap-2.5">
            <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span class="font-mono text-[10px] sm:text-xs 2xl:text-sm tracking-widest text-cyan-300 uppercase">
              Portfolio // 2026
            </span>
          </div>

          <!-- Center Watermark -->
          <div class="hidden sm:flex flex-col items-center justify-center h-full opacity-20 select-none">
            <span class="font-mono text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-black tracking-[0.35em] text-cyan-400">
              &lt;PANY MON /&gt;
            </span>
            <span class="hidden xl:block font-mono text-sm tracking-[0.5em] text-white/70 mt-3 uppercase">
              Modern Web Applications
            </span>
          </div>
        </div>

        <!-- Profile Avatar & Details Row -->
        <div class="px-4 sm:px-6 lg:px-8 2xl:px-10 pb-6 2xl:pb-8">
          <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            
            <!-- Left: Overlapping Avatar + Info -->
            <div class="flex flex-col sm:flex-row items-center sm:items-end text-center sm:text-left gap-5 sm:gap-7 2xl:gap-9 -mt-16 sm:-mt-20 xl:-mt-24 2xl:-mt-28 relative z-10">
              
              <!-- Avatar + Status Bubble -->
              <div class="relative shrink-0">
                <div
                  class="absolute -top-7 -left-2 sm:-left-4 2xl:-top-9 2xl:-left-5 z-20 px-3.5 py-1.5 2xl:px-4 2xl:py-2 bg-[#1e2029] border border-white/20 rounded-2xl shadow-xl text-xs 2xl:text-sm text-gray-200 whitespace-nowrap"
                >
                  💻 Building modern web apps...
                  <span class="absolute -bottom-1.5 left-7 w-3 h-3 bg-[#1e2029] border-r border-b border-white/20 rotate-45"></span>
                </div>

                <div class="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 xl:w-48 xl:h-48 2xl:w-52 2xl:h-52 rounded-full p-1.5 bg-[#111217] ring-2 2xl:ring-[3px] ring-cyan-400 shadow-[0_0_35px_rgba(34,211,238,0.25)] overflow-hidden">
                  <img
                    v-if="profileImage"
                    :src="profileImage"
                    alt="Aiily"
                    class="w-full h-full object-cover object-[center_35%] rounded-full"
                  />
                  <div
                    v-else
                    class="w-full h-full rounded-full bg-gradient-to-br from-[#1e293b] to-[#0f172a] flex items-center justify-center"
                  >
                    <span class="font-mono text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-black tracking-widest text-cyan-400">
                      MP
                    </span>
                  </div>
                </div>
              </div>

              <!-- Name & Bio -->
              <div class="pb-1 2xl:pb-2">
                <div class="flex items-center justify-center sm:justify-start gap-3">
                  <h1 class="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-black tracking-wide text-white">
                    Pany Mon
                  </h1>
                  <span
                    class="inline-flex items-center justify-center w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 rounded-full bg-cyan-400 text-black text-xs xl:text-sm font-bold"
                    title="Verified Developer"
                  >
                    ✓
                  </span>
                </div>

                <p class="text-xs sm:text-sm xl:text-base 2xl:text-lg font-medium text-gray-400 mt-1.5">
                  <span class="text-white font-semibold">Web Developer</span> •
                  <span class="text-cyan-400">Frontend &amp; Backend</span>
                </p>

                <p class="text-xs sm:text-sm xl:text-base 2xl:text-lg text-gray-200 mt-2">
                  Information Technology 👨‍💻
                </p>

                <div class="flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-2 mt-3 text-xs sm:text-sm 2xl:text-base text-gray-400">
                  <span class="inline-flex items-center gap-2">
                    <span>💼</span> Digital Creator &amp; Web Developer
                  </span>
                  <span class="inline-flex items-center gap-2">
                    <span>📍</span> Phnom Penh, Cambodia
                  </span>
                  <span class="inline-flex items-center gap-2">
                    <span>🎓</span> Passerelles Numériques Cambodia (PNC)
                  </span>
                </div>
              </div>
            </div>

            <!-- Right: Action Buttons -->
            <div class="flex flex-wrap items-center justify-center lg:justify-end gap-3 2xl:gap-4 pt-2 lg:pb-3 shrink-0">
              <a
                href="#projects"
                class="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-5 py-2.5 2xl:px-7 2xl:py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs sm:text-sm 2xl:text-base transition shadow-[0_0_20px_rgba(34,211,238,0.25)]"
              >
                <span>📊</span>
                <span>View Projects</span>
              </a>

              <a
                href="#contact"
                class="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-5 py-2.5 2xl:px-7 2xl:py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm 2xl:text-base border border-white/15 transition"
              >
                <span>✉️</span>
                <span>Contact Me</span>
              </a>

              <a
                href="#about"
                class="inline-flex items-center justify-center gap-2 px-4 py-2.5 2xl:px-5 2xl:py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm 2xl:text-base border border-white/15 transition"
                title="Resume / CV"
              >
                <span>📄</span>
                <span>CV</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </header>

    <!-- 3. FULL STATIC WEBSITE SECTIONS (All visible on scroll) -->
    <main class="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 py-10 2xl:py-14 space-y-12 2xl:space-y-16">
      <!-- SECTION B: ABOUT & STATS -->
      <section id="about" class="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-6 2xl:gap-8">
        <!-- Left Intro Card -->
        <div class="lg:col-span-4 bg-[#111217] border border-white/10 rounded-2xl p-6 2xl:p-8 space-y-5 h-fit">
          <div class="flex items-center justify-between border-b border-white/10 pb-3">
            <h2 class="text-lg 2xl:text-2xl font-bold text-white">Intro</h2>
            <span class="font-mono text-xs text-cyan-400">01 // INFO</span>
          </div>
          <p class="text-xs sm:text-sm 2xl:text-base text-gray-300 leading-relaxed">
            Focused on clean UI engineering, responsive web architecture, and reliable backend APIs.
          </p>
          <ul class="space-y-4 text-xs sm:text-sm 2xl:text-base text-gray-300 pt-2">
            <li class="flex items-center gap-3">
              <span class="text-lg">🎓</span>
              <span>Passerelles Numériques Cambodia (<strong class="text-white">PNC</strong>)</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-lg">📍</span>
              <span>Based in <strong class="text-white">Phnom Penh, Cambodia</strong></span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-lg">🌐</span>
              <span>Languages: <strong class="text-white">Khmer, English</strong></span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-lg">⚡</span>
              <span>Status: <strong class="text-cyan-400">Open for Work &amp; Projects</strong></span>
            </li>
          </ul>
        </div>

        <!-- Right Experience & Highlight Cards -->
        <div class="lg:col-span-8 bg-[#111217] border border-white/10 rounded-2xl p-6 sm:p-8 2xl:p-10 space-y-6">
          <div class="flex items-center justify-between border-b border-white/10 pb-3">
            <h2 class="text-lg 2xl:text-2xl font-bold text-white">About My Journey</h2>
            <span class="font-mono text-xs text-cyan-400">02 // BACKGROUND</span>
          </div>

          <p class="text-gray-300 text-sm sm:text-base 2xl:text-lg leading-8">
            I specialize in turning ideas into fast, modern, and responsive static and full-stack websites.
            During my studies at <strong class="text-white">PNC</strong>, I built collaborative software projects
            covering frontend interfaces, RESTful APIs, database normalization, and deployment workflows.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 2xl:gap-6 pt-2">
            <div class="p-5 2xl:p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 transition">
              <p class="font-mono text-xs text-cyan-400">FRONTEND</p>
              <h3 class="text-lg 2xl:text-2xl font-black text-white mt-1">Modern UI</h3>
              <p class="text-xs 2xl:text-sm text-gray-400 mt-1">Vue.js, Tailwind CSS, GSAP animations &amp; responsive layouts.</p>
            </div>
            <div class="p-5 2xl:p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 transition">
              <p class="font-mono text-xs text-cyan-400">BACKEND</p>
              <h3 class="text-lg 2xl:text-2xl font-black text-white mt-1">Clean APIs</h3>
              <p class="text-xs 2xl:text-sm text-gray-400 mt-1">Laravel, PHP, Python &amp; structured server-side logic.</p>
            </div>
            <div class="p-5 2xl:p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 transition">
              <p class="font-mono text-xs text-cyan-400">DATABASE</p>
              <h3 class="text-lg 2xl:text-2xl font-black text-white mt-1">Data Design</h3>
              <p class="text-xs 2xl:text-sm text-gray-400 mt-1">MySQL, PostgreSQL schema design &amp; query optimization.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION C: SKILLS & TECH STACK -->
      <section id="skills" class="scroll-mt-24 bg-[#111217] border border-white/10 rounded-2xl p-6 sm:p-8 2xl:p-10">
        <div class="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div>
            <h2 class="text-lg 2xl:text-2xl font-bold text-white">Technical Skills</h2>
            <p class="text-xs sm:text-sm text-gray-400 mt-1">Technologies and tools I use to build web applications</p>
          </div>
          <span class="font-mono text-xs text-cyan-400">03 // STACK</span>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 2xl:gap-5">
          <div
            v-for="skill in skillsList"
            :key="skill.name"
            class="p-4 2xl:p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/60 hover:bg-cyan-400/[0.04] transition group"
          >
            <div class="text-2xl mb-2">{{ skill.icon }}</div>
            <h3 class="font-bold text-sm 2xl:text-base text-white group-hover:text-cyan-400 transition">
              {{ skill.name }}
            </h3>
            <p class="font-mono text-[11px] text-gray-400 mt-0.5">{{ skill.category }}</p>
          </div>
        </div>
      </section>

      <!-- SECTION D: FEATURED PROJECTS -->
      <section id="projects" class="scroll-mt-24 bg-[#111217] border border-white/10 rounded-2xl p-6 sm:p-8 2xl:p-10">
        <div class="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div>
            <h2 class="text-lg 2xl:text-2xl font-bold text-white">Featured Projects</h2>
            <p class="text-xs sm:text-sm text-gray-400 mt-1">Selected web development work and academic projects</p>
          </div>
          <span class="font-mono text-xs text-cyan-400">04 // WORK</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 2xl:gap-8">
          <article
            v-for="project in projectsList"
            :key="project.title"
            class="flex flex-col justify-between p-6 2xl:p-7 rounded-2xl bg-[#161821] border border-white/10 hover:border-cyan-400/50 transition group"
          >
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 font-mono text-[11px]">
                  {{ project.tag }}
                </span>
                <span class="font-mono text-xs text-gray-500">{{ project.year }}</span>
              </div>

              <h3 class="text-lg 2xl:text-xl font-bold text-white group-hover:text-cyan-400 transition">
                {{ project.title }}
              </h3>

              <p class="text-xs sm:text-sm 2xl:text-base text-gray-400 mt-2.5 leading-relaxed">
                {{ project.description }}
              </p>
            </div>

            <div class="pt-5 mt-5 border-t border-white/10 flex flex-wrap gap-2">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="px-2.5 py-1 rounded-md bg-white/5 text-gray-300 font-mono text-[11px]"
              >
                {{ tech }}
              </span>
            </div>
          </article>
        </div>
      </section>

      <!-- SECTION E: CONTACT SECTION -->
      <section id="contact" class="scroll-mt-24 bg-gradient-to-r from-[#111217] via-[#141a26] to-[#111217] border border-white/10 rounded-2xl p-6 sm:p-10 2xl:p-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div class="lg:col-span-7 space-y-4">
            <span class="font-mono text-xs text-cyan-400 tracking-widest uppercase">05 // CONNECT</span>
            <h2 class="text-2xl sm:text-3xl 2xl:text-4xl font-black text-white">
              Let's Build Something Together
            </h2>
            <p class="text-sm 2xl:text-base text-gray-300 max-w-2xl leading-relaxed">
              Looking for a dedicated Web Developer for your team or project? Feel free to message me directly
              via email, Telegram, or GitHub.
            </p>
            <div class="flex flex-wrap gap-3 pt-2 font-mono text-xs sm:text-sm">
              <span class="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-200">
                📍 Phnom Penh, Cambodia
              </span>
              <span class="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-cyan-300">
                📧 monpany.dev@gmail.com
              </span>
            </div>
          </div>

          <div class="lg:col-span-5 flex flex-wrap lg:justify-end gap-3 2xl:gap-4">
            <a
              href="mailto:monpany.dev@gmail.com"
              class="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs sm:text-sm 2xl:text-base transition shadow-[0_0_20px_rgba(34,211,238,0.25)]"
            >
              Send Email ✉️
            </a>
            <a
              href="https://github.com/monpany"
              target="_blank"
              rel="noopener noreferrer"
              class="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm 2xl:text-base border border-white/15 transition"
            >
              GitHub Profile ↗
            </a>
          </div>

        </div>
      </section>

    </main>

    <!-- 4. FOOTER -->
    <footer class="w-full border-t border-white/10 bg-[#0d0f14] py-6 2xl:py-8">
      <div class="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs 2xl:text-sm text-gray-400 font-mono">
        <p>© 2026 Pany Mon. Built with Vue.js &amp; Tailwind CSS.</p>
        <a href="#top" class="text-cyan-400 hover:underline">Back to Top ↑</a>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import aiilyImage from '../assets/image/Aiily.png'

const profileImage = ref(aiilyImage)
const activeSection = ref('about')

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const skillsList = [
  { name: 'HTML5 & CSS3', category: 'Frontend', icon: '🎨' },
  { name: 'JavaScript', category: 'Language', icon: '⚡' },
  { name: 'Vue.js', category: 'Framework', icon: '💚' },
  { name: 'Tailwind CSS', category: 'Styling', icon: '🌊' },
  { name: 'PHP / Laravel', category: 'Backend', icon: '🔥' },
  { name: 'Python / Django', category: 'Backend', icon: '🐍' },
  { name: 'MySQL', category: 'Database', icon: '🗄️' },
  { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
  { name: 'Git & GitHub', category: 'Version Control', icon: '🌿' },
  { name: 'REST APIs', category: 'Integration', icon: '🔗' },
  { name: 'Figma', category: 'UI Design', icon: '📐' },
  { name: 'Linux / CLI', category: 'Environment', icon: '🐧' },
]

const projectsList = [
  {
    tag: 'PORTFOLIO',
    year: '2026',
    title: 'Cyber-HUD Developer Portfolio',
    description: 'A modern responsive static portfolio featuring a sticky profile bar, SVG hexagon HUD, and 1920×1080 Full HD scaling.',
    tech: ['Vue.js', 'Tailwind CSS', 'SVG'],
  },
  {
    tag: 'WEB APP',
    year: '2025',
    title: 'Conference & Event Portal',
    description: 'Responsive event countdown and informational web pages built with modern frontend component architecture.',
    tech: ['HTML5', 'Tailwind CSS', 'Laravel Blade'],
  },
  {
    tag: 'FULL-STACK',
    year: '2025',
    title: 'Management & Reporting System',
    description: 'Database-driven web application developed at PNC featuring user authentication, CRUD operations, and analytics.',
    tech: ['PHP', 'Laravel', 'MySQL'],
  },
]
</script>