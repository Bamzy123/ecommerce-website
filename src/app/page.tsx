import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"

// Mock product data
const products = [
  {
    id: 1,
    name: "Leather Backpack",
    price: 79.99,
    image: "/placeholder.svg",
    category: "Accessories",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 129.99,
    image: "/placeholder.svg",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Cotton T-Shirt",
    price: 24.99,
    image: "/placeholder.svg",
    category: "Clothing",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 199.99,
    image: "/placeholder.svg",
    category: "Electronics",
  },
  {
    id: 5,
    name: "Running Shoes",
    price: 89.99,
    image: "/placeholder.svg",
    category: "Footwear",
  },
  {
    id: 6,
    name: "Sunglasses",
    price: 59.99,
    image: "/placeholder.svg",
    category: "Accessories",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Shop the Latest Trends</h1>
                <p className="text-muted-foreground md:text-xl">
                  Discover our curated collection of premium products at unbeatable prices.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link href="#featured-products">Shop Now</Link>
                  </Button>
                  <Button variant="outline" size="lg">
                    View Collections
                  </Button>
                </div>
              </div>
              <div className="mx-auto w-full max-w-md">
                <div className="aspect-video overflow-hidden rounded-xl bg-foreground/5">
                  <img
                    alt="Hero Image"
                    className="object-cover w-full h-full"
                    height={300}
                    src="/placeholder.svg"
                    width={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section id="featured-products" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Products</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Explore our most popular items and latest arrivals.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Button asChild size="lg">
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Shop by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {["Clothing", "Electronics", "Accessories", "Footwear"].map((category) => (
                <Link
                  key={category}
                  href={`/category/${category.toLowerCase()}`}
                  className="group relative overflow-hidden rounded-lg shadow-lg"
                >
                  <div className="aspect-square bg-foreground/5 relative">
                    <img
                      alt={category}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                      height={300}
                      src="/placeholder.svg"
                      width={300}
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white">{category}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Newsletter</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
                </p>
              </div>
              <div className="w-full max-w-md">
                <form className="flex space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}