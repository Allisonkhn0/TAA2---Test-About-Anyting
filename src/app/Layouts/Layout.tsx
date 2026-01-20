import Header from "@/widgets/ui/Header"
import type { JSX } from "react"
import { Outlet } from "react-router"

export default function Layout(): JSX.Element {

  return (
    <>
      <Header />

      <main>
         <Outlet />
      </main>

      <footer></footer>
    </>
  )
}