import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-screen px-4 md:px-6 py-8 md:py-12 overflow-hidden">
        <nav className="flex flex-col items-center justify-between gap-6 md:gap-8">
          {/* Navigation Links */}
          <div className="flex flex-row items-center justify-center gap-3 md:gap-8">
            <Link
              href="https://kimhab.com/designs"
              className="text-sm md:text-lg text-muted-foreground transition-colors hover:text-primary"
            >
              Designs
            </Link>
            <Link
              href="https://kimhab.com/academics"
              className="text-sm md:text-lg text-muted-foreground transition-colors hover:text-primary"
            >
              Academics
            </Link>
            <Link
              href="https://kimhab.com/about"
              className="text-sm md:text-lg text-muted-foreground transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="https://kimhab.com/news"
              className="text-sm md:text-lg text-muted-foreground transition-colors hover:text-primary"
            >
              News
            </Link>
            <Link
              href="https://kimhab.com/contact"
              className="text-sm md:text-lg text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </div>

          <div className="flex justify-center items-center mx-auto gap-4">
            {/*
            <Link
              href="/art"
              className="text-sm md:text-lg text-muted-foreground transition-colors hover:text-primary"
            >
              Art Gallery
            </Link>
            */}
            <Link
              href="/"
              className="text-sm md:text-lg text-muted-foreground transition-colors hover:text-primary"
            >
              Runway Gallery
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <Link href="https://facebook.com/kimhab.ork.kh">
              <Image
                src="https://ik.imagekit.io/digiv3rse/assets/Facebook.png?updatedAt=1762128700747"
                width={30}
                height={30}
                className="object-cover h-10 w-10 md:w-12 md:h-12"
                alt="Facebook"
              />
            </Link>
            <Link href="https://instagram.com/kimhab_ork">
              <Image
                src="https://ik.imagekit.io/digiv3rse/assets/Instagram.png?updatedAt=1762128700765"
                width={30}
                height={30}
                className="object-cover h-10 w-10 md:w-12 md:h-12"
                alt="Instagram"
              />
            </Link>
            <Link href="https://pinterest.com/kimhab_ork">
              <Image
                src="https://ik.imagekit.io/digiv3rse/assets/Pinterest.png?updatedAt=1762128699906"
                width={30}
                height={30}
                className="object-cover h-10 w-10 md:w-12 md:h-12"
                alt="Pinterest"
              />
            </Link>
            <Link href="https://linkedin.com/in/kimhab-ork">
              <Image
                src="https://ik.imagekit.io/digiv3rse/assets/LinkedIn.png?updatedAt=1762128700216"
                width={30}
                height={30}
                className="object-cover h-10 w-10 md:w-12 md:h-12"
                alt="LinkedIn"
              />
            </Link>
          </div>
          {/* Copyright */}
          <div className="flex flex-col justify-center items-center mx-auto gap-4 md:gap-6">
            <div className="text-center text-xs md:text-md text-muted-foreground">
              <p>&copy; {currentYear} Kimhab Ork. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs md:text-md text-muted-foreground">
              <Link
                href="https://kimhab.com/privacy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <span>•</span>
              <Link
                href="https://kimhab.com/terms"
                className="hover:text-primary transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </footer>
  );
}
