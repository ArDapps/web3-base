"use client"
import { useAppKit } from "@reown/appkit/react";
import Image from "next/image";

export default function Home() {
  const { open } = useAppKit()

  return (
    <>
      <button onClick={() => open()}>Open Connect Modal</button>
      <button onClick={() => open({ view: 'Networks' })}>Open Network Modal</button>
    </>
  )
}
