import MeImage from "../images/beutiface.jpg";
import Image from "next/image";

console.info(MeImage);

export default function Home() {
  return (
    <>
      <section className="flex">
        <Image
          className="w-80 rounded border border-gray-200 bg-white p-1"
          alt="Is me!"
          src={MeImage.src}
          width={MeImage.width}
          height={MeImage.height}
          blurDataURL={MeImage.blurDataURL}
        />
        <div className="flex flex-col items-center">
          <h1 className="contents">
            <span>DUANE IRVIN</span>
            <span>Computer Engineer & Fullstack Developer</span>
          </h1>
          <p>
            Hey! A lot has happened since I made this page, so it needs some
            updating. However, I (almost) have a master&apos;s in algorithms,
            programming languages and logic. Professionally, I worked as a
            backend developer in Go, iOS in Swift, Android and iOS in React
            Native (including porting native components) and web developer
            (React with Next.js, Svelte with SvelteKit). I currently a pretty
            solid position at Opera Software, but hey, feel free to shoot me a
            message anyways!
          </p>
          <ul>
            <li>some links</li>
            <li>some links</li>
            <li>some links</li>
          </ul>
        </div>
      </section>
    </>
  );
}
