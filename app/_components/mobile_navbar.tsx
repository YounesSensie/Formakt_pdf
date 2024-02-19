import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import Link from "next/link";


export const MobileNavbar = () => {
  return (
    <div className="md:hidden flex justify-between bg-slate-900">
    <div className="grid justify-items-start text-slate-50">Formakt_PDF</div>
    <div className="grid justify-items-end text-white">
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
        <SheetContent side="right" className="p-0 bg-white">
            <div className="items-center justify-center py-10">
                <div className="mb-4">
                    <Link href="/" className="block py-2 px-5 text-center bg-orange-500 hover:bg-orange-600 text-white hover:text-white border border-orange-500 hover:border-transparent rounded-full w-full max-w-xs">
                    Home
                    </Link>
                </div>
                <div className="mb-4">
                    <Link href="https://www.facebook.com/formaktBac" className="block py-2 px-4 text-center bg-orange-500 hover:bg-orange-600 text-white hover:text-white border border-orange-500 hover:border-transparent rounded-full w-full max-w-xs">
                    About
                    </Link>
                </div>
                <div>
                    <Link href="https://www.facebook.com/formaktBac" className="block py-2 px-4 text-center bg-orange-500 hover:bg-orange-600 text-white hover:text-white border border-orange-500 hover:border-transparent rounded-full w-full max-w-xs">
                    Contact
                    </Link>
                </div>
                </div>
      </SheetContent>
    </Sheet>
    </div>
    </div>
    
  )
}