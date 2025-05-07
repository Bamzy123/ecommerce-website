import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import ProductCard from "@/components/product-card"

// Sample products data
const allProducts = [
  {
    id: 1,
    name: "Leather Backpack",
    price: 79.99,
    image: "/placeholder.svg",
    category: "accessories",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 129.99,
    image: "/placeholder.svg",
    category: "electronics",
  },
  {
    id: 3,
    name: "Cotton T-Shirt",
    price: 24.99,
    image: "/placeholder.svg",
    category: "clothing",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 199.99,
    image: "/placeholder.svg",
    category: "electronics",
  },
  {
    id: 5,
    name: "Running Shoes",
    price: 89.99,
    image: "/placeholder.svg",
    category: "footwear",
  },
  {
    id: 6,
    name: "Sunglasses",
    price: 59.99,
    image: "/placeholder.svg",
    category: "accessories",
  },
  {
    id: 7,
    name: "Denim Jeans",
    price: 49.99,
    image: "/placeholder.svg",
    category: "clothing",
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    price: 79.99,
    image: "/placeholder.svg",
    category: "electronics",
  },
]

// Category metadata
const categoryInfo = {
  clothing: {
    name: "Clothing",
    description: "Explore our collection of stylish and comfortable clothing for all occasions.",
  },
  electronics: {
    name: "Electronics",
    description: "Discover the latest tech gadgets and electronic devices.",
  },
  accessories: {
    name: "Accessories",
    description: "Complete your look with our range of fashionable accessories.",
  },
  footwear: {
    name: "Footwear",
    description: "Step out in style with our selection of quality footwear.",
  },
  "home-decor": {
    name: "Home Decor",
    description: "Transform your living space with our beautiful home decor items.",
  },
  beauty: {
    name: "Beauty",
    description: "Enhance your natural beauty with our premium beauty products.",
  },
}

export default function CategoryPage({ params }: { params: { id: string } }) {
  const categoryId = params.id
  const category = categoryInfo[categoryId as keyof typeof categoryInfo] || {
    name: categoryId.charAt(0).toUpperCase() + categoryId.slice(1),
    description: "Browse our selection of products in this category.",
  }

  // Filter products by category
  const products = allProducts.filter((product) => product.category === categoryId)

  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="flex flex-col space-y-6">
        <div className="flex items-center gap-2">
          <Button asChild>
            <Link href="/categories">
              <ChevronLeft className="h-4 w-4" />
              Back to Categories
            </Link>
          </Button>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">{category.name}</h1>
          <p className="text-muted-foreground">{category.description}</p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <h3 className="text-lg font-medium">No products found</h3>
            <p className="text-muted-foreground mt-1">We couldn't find any products in this category.</p>
            <Button asChild className="mt-4">
              <Link href="/products">Browse All Products</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
