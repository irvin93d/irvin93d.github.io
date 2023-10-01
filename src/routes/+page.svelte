<script lang="ts">
  import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
  import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons"
  import Fa from "svelte-fa"

  import Image from "$lib/components/Image.svelte"
  // TODO Need to optimize these
  import me from "$lib/images/beutiface.jpg"
  import dify from "$lib/images/opera/dify.png"
  import gxcornermobile from "$lib/images/opera/gxcorner-mobile.mp4"
  import gxgames from "$lib/images/opera/gxgames.webm"
  import gxstore from "$lib/images/opera/gxstore.webm"
  import opay from "$lib/images/opera/opay.jpg"
  import pocopay from "$lib/images/opera/pocopay.jpg"
</script>

<svelte:head>
  <title>Duane Irvin - Fullstack developer & Computer Engineer</title>
  <meta name="description" content="Duane Irvin - Fullstack developer & Computer Engineer" />
  <meta content="Duane Irvin" property="og:title" />
  <meta content="Fullstack developer & Computer Engineer" property="og:description" />
</svelte:head>

<div
  class="grid grid-cols-1 justify-items-center gap-x-6 gap-y-3 md:grid-cols-[160px_minmax(0px,1fr)]"
>
  <Image
    class="row-span-2 aspect-square w-40 self-center overflow-hidden rounded-full border-2 border-current"
    alt="Duane Irvin"
    src={me}
  />
  <h1 class="flex flex-col gap-2 pb-2 text-center">
    <span class="text-4xl uppercase">Duane Irvin</span>
    <span class="text-2xl text-primary">
      Full-stack&nbsp;Developer &&nbsp;Computer&nbsp;Engineer
    </span>
  </h1>

  <div
    class="col-start-1 flex w-full max-w-lg flex-wrap justify-between gap-6 self-center md:col-span-2 md:col-start-2"
  >
    {#each [{ href: "https://github.com/irvin93d/", icon: faGithub, text: "GitHub" }, { href: "https://www.linkedin.com/in/duane-irvin/", icon: faLinkedinIn, text: "LinkedIn" }, { href: "mailto:irvin93d@gmail.com", icon: faEnvelope, text: "irvin93d@gmail.com" }, { href: "/files/CV.pdf", icon: faFile, text: "Resumé" }] as { href, icon, text }}
      <a
        class="group flex flex-1 flex-col items-center gap-1 text-primary hover:text-emphasize"
        {href}
        target="_blank"
      >
        <Fa
          class="text-5xl transition-all ease-out group-hover:-translate-y-1.5 group-hover:scale-105"
          {icon}
        />
        <span class="whitespace-nowrap text-[10px] font-semibold">{text}</span>
      </a>
    {/each}
  </div>

  <p
    class="col-start-1 flex w-full flex-wrap justify-between gap-6 self-center md:col-span-2 md:col-start-2"
  >
    Hey! A lot has happened since I made this page, so it needs some updating. However, I (almost)
    have a master's in algorithms, programming languages and logic. Professionally I worked as a
    backend developer in Go, iOS in Swift, Android and iOS in React Native (including porting native
    components) and done a ton of web development in react and svelte. I currently work at Opera
    Software and I don't intend to do anything else for a while! But hey, feel free to shoot me a
    message anyways!
  </p>
</div>

<div class="flex flex-col gap-8 pt-12 md:ml-40 md:pl-6">
  <div>
    <h2 class="text-2xl uppercase text-white">Work Experience</h2>
    <hr />
  </div>
  <!-- 

    TODO Update GX
    TODO GX V
    TODO GX Dev Portal
    TODO GX Mobile
    TODO GX Corner
    TODO GX Store
    TODO Game Wrapper
   -->

  <div class="flex flex-col gap-4">
    <h3 class="flex flex-col">
      <span>React/Next.js Web Developer</span>
      <span class="text-base text-gray-200">At GX.V by Opera Software</span>
    </h3>
    <p><i>Yet to be released.</i></p>
  </div>

  <hr class="border-gray-600 opacity-50" />

  <div class="flex flex-col gap-4">
    <h3 class="flex flex-col">
      <span>React/Next.js Web Developer</span>
      <span class="text-base text-gray-200">At GX.Dev by Opera Software</span>
    </h3>
    <p><i>Yet to be released.</i></p>
  </div>

  <hr class="border-gray-600 opacity-50" />

  <div class="flex grid-cols-5 flex-col-reverse gap-2 lg:grid lg:gap-4">
    <!-- svelte-ignore a11y-media-has-caption -->
    <video class="col-span-1 w-full max-w-md self-center" autoplay controls src={gxcornermobile} />
    <div class="col-span-4">
      <h3 class="flex flex-col">
        <span>SvelteKit Web Developer</span>
        <span class="text-base text-gray-200">At GX Corner by Opera Software</span>
      </h3>
      <p>Opera GX exclusive news feed for gamers.</p>
      <ul>
        <li>Made a complete revamp of GX Corner for Mobile,</li>
        <li>Migrated codebase to SvelteKit with full typescript support,</li>
        <li>
          Optimized transitions and scroll animations to super sleek even on slow mobile devices.
        </li>
      </ul>
    </div>
  </div>

  <hr class="border-gray-600 opacity-50" />

  <div class="flex flex-col gap-4">
    <h3 class="flex flex-col">
      <span>React/Next.js Web Developer</span>
      <span class="text-base text-gray-200">At GX.Store by Opera Software</span>
    </h3>
    <p>Opera GX exclusive mods downloader platform.</p>
    <!-- svelte-ignore a11y-media-has-caption -->
    <video class="w-full self-center" autoplay controls src={gxstore} />
  </div>

  <hr class="border-gray-600 opacity-50" />

  <div class="flex flex-col gap-4">
    <h3 class="flex flex-col">
      <span>SvelteApp Web Developer</span>
      <span class="text-base text-gray-200">At GX.Corner Desktop by Opera Software</span>
    </h3>
    <p><i>Unwritten section. Check back later!</i></p>
  </div>

  <hr class="border-gray-600 opacity-50" />

  <div class="flex flex-col gap-4">
    <h3 class="flex flex-col">
      <span>SvelteApp Web Developer</span>
      <span class="text-base text-gray-200">At GX.Games by Opera Software</span>
    </h3>
    <p>Rewrite of legacy game-wrapper for GX.Games</p>
  </div>

  <hr class="border-gray-600 opacity-50" />

  <div class="flex flex-col gap-4">
    <h3 class="flex flex-col">
      <span>React/Next.js Web Developer</span>
      <span class="text-base text-gray-200">At GX.Games by Opera Software</span>
    </h3>
    <p>A platform for fast and free publishing of games made in GameMaker Studio.</p>
    <!-- svelte-ignore a11y-media-has-caption -->
    <video class="w-full self-center" autoplay controls src={gxgames} />
  </div>

  <hr class="border-gray-600 opacity-50" />

  <div class="flex grid-cols-5 flex-col gap-2 lg:grid lg:gap-4">
    <div class="col-span-3">
      <h3 class="flex flex-col">
        <span>React Native App Developer</span>
        <span class="text-base text-gray-200">Dify by Opera Software</span>
      </h3>
      <p>
        A fintech product with support for virtual payment cards, biometrics authentication, in-app
        cashback and push notifications.
      </p>
      <ul>
        <li>Bridging of native components from iOS (Swift/ObjC),</li>
        <li>State management with Redux,</li>
        <li>Push notifications with Firebase,</li>
        <li>e2e testing with Detox,</li>
        <li>Main contributor with 30.2% of the codebase's commits among six developers.</li>
      </ul>
    </div>
    <Image class="col-span-2 max-w-md self-center rounded border-2" alt="Dify" src={dify} />
  </div>

  <hr class="border-gray-600 opacity-50" />

  <div class="flex grid-cols-5 flex-col gap-2 lg:grid lg:gap-4">
    <div class="col-span-3">
      <h3 class="flex flex-col">
        <span>iOS Developer</span>
        <span class="text-base text-gray-200">At Opera Software</span>
      </h3>
      <p>
        Prototypes in fresh codebases. After Opera acquired Pocosys, I hade the opportunity to and
        maintain and update the existing PocoPay app.
      </p>
      <ul>
        <li>
          Patching of existing apps, maintaining backwards compatibility with very old iOS versions,
        </li>
        <li>Dependency management with CocoaPods,</li>
        <li>UI both with Storyboard and fully programmatic.</li>
      </ul>
    </div>
    <Image class="col-span-2 max-w-md self-center rounded border-2" alt="Poco" src={pocopay} />
  </div>

  <hr class="border-gray-600 opacity-50" />

  <div class="flex grid-cols-5 flex-col gap-2 lg:grid lg:gap-4">
    <div class="col-span-3">
      <h3 class="flex flex-col">
        <span>Go Backend Developer</span>
        <span class="text-base text-gray-200">At OPay by Opera Software</span>
      </h3>
      <p>
        Common financial service for banking, utility payments, transactions and savings. maintain
        and update the existing PocoPay app.
      </p>
      <ul>
        <li>Go, MongoDB, GraphQL,</li>
        <li>Testing and automation utilities.</li>
      </ul>
    </div>
    <Image class="col-span-2 max-w-md self-center rounded border-2" alt="OPay" src={opay} />
  </div>

  <div>
    <h2 class="text-2xl uppercase text-white">Projects</h2>
    <hr />
  </div>
  <div class="grid grid-cols-1 justify-center gap-4 md:grid-cols-2">
    <a href="https://github.com/irvin93d/minesweeper-go-react" target="_blank">
      <div>
        <h3 class="text-center text-xl font-bold text-primary">Minesweeper</h3>
        <p>
          An online implementation of the old game Minesweeper. Support for multiplayer mode is
          under development.
        </p>

        <ul class="list-disc pl-8">
          <li>RESTful backend server in Golang,</li>
          <li>Frontend in React.js and Bootstrap 4.</li>
        </ul>
        <Image
          class="rounded border-2"
          alt="Screenshot from Minesweeper-Go-React"
          src="https://raw.githubusercontent.com/irvin93d/minesweeper-api-go/master/preview.png"
        />
      </div>
    </a>
    <a href="https://github.com/irvin93d/BirdHaressment" target="_blank">
      <div class="flex flex-col gap-2 leading-snug">
        <h3 class="text-center text-xl font-bold text-primary">Bird Harassment</h3>
        <p>
          Graphics simulation of birds movement behavior. A from-scratch implementation of boids,
          making use of CPU and GPU.
        </p>

        <ul>
          <li>OpenGL and C++,</li>
          <li>
            Extensive use of matrix algebra for computations of light, shadows and reflections,
            along with positions, speeds and accelerations in 3 dimensions.
          </li>
        </ul>
        <Image
          class="rounded border-2"
          alt="Screenshot from BirdHaressment"
          src="https://raw.githubusercontent.com/irvin93d/BirdHaressment/master/web/res/screen2.png"
        />
      </div>
    </a>
  </div>
</div>

<style lang="postcss">
  h1 {
    @apply font-bold;
    @apply tracking-widest;
  }
  h2 {
    @apply font-bold;
    @apply tracking-widest;
  }
  h3 {
    @apply text-xl;
    @apply tracking-wider;
    @apply font-bold;
    @apply text-primary;
  }
  ul {
    @apply list-disc;
    @apply pl-6;
  }
</style>
