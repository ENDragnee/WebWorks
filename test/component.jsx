/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dLI1d1gM4K5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="bg-primary py-6 px-4 md:px-6">
        <div className="container mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <MountainIcon className="h-6 w-6 text-primary-foreground" />
              <span className="text-lg font-semibold text-primary-foreground">PIMCO</span>
            </Link>
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-primary-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 rounded-md bg-primary/20 text-primary-foreground focus:bg-primary/30 focus:outline-none"
              />
            </div>
          </div>
          <nav className="hidden space-x-4 md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium text-primary-foreground hover:underline">
                Strategies
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link
                    href="#"
                    className="text-sm font-medium text-primary-foreground hover:underline"
                    prefetch={false}
                  >
                    Fixed Income
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="#"
                    className="text-sm font-medium text-primary-foreground hover:underline"
                    prefetch={false}
                  >
                    Equities
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="#"
                    className="text-sm font-medium text-primary-foreground hover:underline"
                    prefetch={false}
                  >
                    Alternatives
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="#" className="text-sm font-medium text-primary-foreground hover:underline" prefetch={false}>
              Insights
            </Link>
            <Link href="#" className="text-sm font-medium text-primary-foreground hover:underline" prefetch={false}>
              Solutions
            </Link>
            <Link href="#" className="text-sm font-medium text-primary-foreground hover:underline" prefetch={false}>
              About
            </Link>
          </nav>
          <Button>Get Started</Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-primary py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                  Invest with Confidence
                </h1>
                <p className="mt-4 text-lg text-primary-foreground">
                  PIMCO is a global investment management firm that has been delivering innovative solutions to clients
                  for over 50 years.
                </p>
                <Button className="mt-8">Explore Our Solutions</Button>
              </div>
              <div className="hidden md:block">
                <img
                  src="/placeholder.svg"
                  width="600"
                  height="400"
                  alt="PIMCO"
                  className="rounded-xl"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Our Investment Strategies</h2>
                <p className="mt-4 text-muted-foreground">
                  Explore our wide range of investment strategies designed to meet your financial goals.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Fixed Income</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Comprehensive fixed income solutions to help you navigate changing markets.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Equities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Actively managed equity strategies that aim to deliver long-term growth.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Alternatives</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Innovative alternative investment strategies to diversify your portfolio.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Insights and Perspectives</h2>
                <p className="mt-4 text-muted-foreground">
                  Stay informed with our latest market insights and analysis.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Economic Outlook</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Get our latest views on the global economy and financial markets.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Investment Strategies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Discover our latest investment insights and portfolio positioning.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Market Updates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Stay up-to-date with our latest market commentary and analysis.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Tailored Solutions</h2>
                <p className="mt-4 text-muted-foreground">
                  Discover how PIMCO can help you achieve your financial goals.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Retirement Planning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Comprehensive solutions to help you plan for a secure retirement.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Wealth Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Tailored strategies to grow and preserve your wealth.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Institutional Investors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Customized solutions for institutional investors and pension funds.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary py-6 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MountainIcon className="h-6 w-6 text-primary-foreground" />
            <span className="text-lg font-semibold text-primary-foreground">PIMCO</span>
          </div>
          <nav className="hidden space-x-4 md:flex">
            <Link href="#" className="text-sm font-medium text-primary-foreground hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium text-primary-foreground hover:underline" prefetch={false}>
              Terms of Use
            </Link>
            <Link href="#" className="text-sm font-medium text-primary-foreground hover:underline" prefetch={false}>
              Contact Us
            </Link>
          </nav>
          <p className="text-sm text-primary-foreground">&copy; 2024 PIMCO. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}