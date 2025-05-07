import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Sample categories data
const categories = [
  {
    id: "clothing",
    name: "Clothing",
    description: "T-shirts, jeans, dresses, and more",
    itemCount: 120,
    image: "/placeholder.svg",
  },
  {
    id: "electronics",
    name: "Electronics",
    description: "Smartphones, laptops, and accessories",
    itemCount: 85,
    image: "/placeholder.svg",
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Watches, bags, jewelry, and more",
    itemCount: 64,
    image: "/placeholder.svg",
  },
  {
    id: "footwear",
    name: "Footwear",
    description: "Shoes, sneakers, boots, and sandals",
    itemCount: 52,
    image: "/placeholder.svg",
  },
  {
    id: "home-decor",
    name: "Home Decor",
    description: "Furniture, lighting, and decorative items",
    itemCount: 78,
    image: "/placeholder.svg",
  },
  {
    id: "beauty",
    name: "Beauty",
    description: "Skincare, makeup, and fragrances",
    itemCount: 43,
    image: "/placeholder.svg",
  },
]

export default function CategoriesPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="flex flex-col space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Categories</h1>
          <p className="text-muted-foreground">Browse our product categories</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} href={`/category/${category.id}`}>
              <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="h-full w-full object-cover"
                    width={600}
                    height={400}
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                    <div className="text-sm text-muted-foreground">{category.itemCount} items</div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button asChild>
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}