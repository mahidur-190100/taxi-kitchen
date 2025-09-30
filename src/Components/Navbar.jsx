import { Copy } from 'lucide-react'
import React from 'react'
import Logo from './Logo'


function Navbar() {
  return (
   <div className="flex flex-col items-center lg:flex-row lg:items-center justify-between gap-5">
  <Logo />
  <div className="text-lg font-medium flex items-center gap-10">
    <a href="Orders">Orders</a>
    <a href="Foods">Foods</a>
    <a href="Tables">Tables</a>
    <a href="Logout">Logout</a>
  </div>
</div>
  )
}

export default Navbar