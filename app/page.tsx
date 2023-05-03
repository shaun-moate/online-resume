'use client'

import Image from "next/image"
import Link from "next/link"
import Typewriter from "typewriter-effect"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import intro from "/public/intro.png"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <div className="flex max-w-[980px] flex-row items-start gap-2">
          <Image className="pt-36 pl-20"
            src={intro}
            alt="my intro image"
            height={640}
            width={640}
          />
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="pt-60 text-2xl text-red-600 font-bold leading-tight tracking-tighter sm:text-2xl md:text-3xl lg:text-5xl">
            I am
          </h1>
          <h1 className="pb-80 text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            <Typewriter
              options={{
                strings: ['a data engineer', 'an avid technologist', 'an engineering leader'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
      </div>
        <div>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            GitHub
          </Link>
        </div>
      </div>
    </section>
  )
}
