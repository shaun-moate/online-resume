'use client'

import Typewriter from "typewriter-effect"

import { DeveloperSVG } from "@/components/assets/developer-svg"
import { Terminal } from "@/components/terminal"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="grid grid-cols-2 pt-32">
        <DeveloperSVG />
        <Terminal />
      </div>
      <div>
      <h1 className="pt-60 text-2xl font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('experience<strong style="color:blue;">.</strong>')
              .pauseFor(2500)
              .start();
          }}
        />
      </h1>
      </div>
    </section>
  )
}
