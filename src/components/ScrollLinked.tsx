"use client"

import { motion, useScroll } from "framer-motion"
import { ReactNode } from "react"

export default function ScrollLinked({ children }: { children?: ReactNode }) {
    const { scrollYProgress } = useScroll()

    return (
        <>
        <motion.div
            id="scroll-indicator"
            style={{
                scaleX: scrollYProgress,
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: 55,
                originX: 0,
                backgroundImage: "linear-gradient(90deg, #f0913c, #fc4017)",
                zIndex: 20,
            }}
        />
        <div>{children}</div> 
        </>
    )
}