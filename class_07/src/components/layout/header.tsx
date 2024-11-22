import Link from "next/link";
import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="w-screen flex justify-between items-center bg-black px-5 md:px-20 max-w-screen-2xl mx-auto">
      {/* logo */}
      <div className="p-3" >
        <h1 className=" text-4xl text-gray-200 font-bold">SHIRAZ</h1>
      </div>
      {/* nav-bar */}
      <nav className="hidden md:block">
        <ul className="flex justify-center items-center">
          <li className="px-3 space-x-7 font-semibold text-[17px]">
            <Link
              href=""
              className="text-gray-200 hover:text-orange-500 delay-100 ease-in-out"
            >
              Home
            </Link>
            <Link
              href=""
              className="text-gray-200 hover:text-orange-500 delay-100 ease-in-out"
            >
              About
            </Link>
            <Link
              href=""
              className="text-gray-200 hover:text-orange-500 delay-100 ease-in-out"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      {/* for mobile screen */}
      <div className="md:hidden flex items-center space-x-3 px-4 py-2 text-sm text-white cursor-pointer">
        
          <Sheet>
            <SheetTrigger>
              <AlignJustify />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <div className="p-3">
                    <h1 className="text-4xl text-left text-black font-bold">SHIRAZ</h1>
                  </div>
                </SheetTitle>
                <SheetDescription>
                  <nav className=" md:hidden block h-screen">
                    <ul className="flex justify-start h-full">
                      <li className="px-3 gap-10 font-semibold flex flex-col text-[17px]">
                        <Link
                          href=""
                          className="text-black hover:text-orange-500 delay-100 ease-in-out"
                        >
                          Home
                        </Link>
                        <Link
                          href=""
                          className="text-black hover:text-orange-500 delay-100 ease-in-out"
                        >
                          About
                        </Link>
                        <Link
                          href=""
                          className="text-black hover:text-orange-500 delay-100 ease-in-out"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
    
      </div>
    </header>
  );
}
