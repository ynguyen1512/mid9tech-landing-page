'use client'
import ScrollLinked from "@/components/ScrollLinked"
import { Button } from "@/components/ui/button"
import { IMAGES } from "@/utils/themes"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {


  return (
      <header className="flex h-20 w-full shrink-0 items-center px-4 py-2 md:px-6">
      {/* <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="/" className="mr-6 hidden lg:flex">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Mid9Tech</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link href="/" className="flex w-full items-center py-2 text-lg font-semibold">
              Home
            </Link>
            <Link href="/about" className="flex w-full items-center py-2 text-lg font-semibold">
              About
            </Link>
            <Link href="/services" className="flex w-full items-center py-2 text-lg font-semibold">
              Services
            </Link>
            <Link href="/contact" className="flex w-full items-center py-2 text-lg font-semibold">
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet> */}
      <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
        <Image src={IMAGES.LOGO.MID_9_TECH} alt=""
          width={100}
          height={50}
        />
        <span className="sr-only">Mid9Tech</span>
      </Link>
    <ScrollLinked>
      <nav className="ml-auto flex gap-6 fixed z-50 justify-between w-full">
        <Link
          href="/"
          className="w-max group inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="w-max group inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="/services"
          className="w-max group inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Services
        </Link>
        <Button>
          <Link
            href="/contact"
            className="w-max group inline-flex h-9 items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
          >
            Contact
          </Link>
        </Button>

      </nav>
    </ScrollLinked>

    </header>
  )
}

