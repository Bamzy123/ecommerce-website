import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ShoppingCart, Heart, Share2 } from "lucide-react"

// Sample products data
const products = [
  {
    id: 1,
    name: "Leather Backpack",
    price: 79.99,
    image: "/placeholder.svg",
    category: "Accessories",
    description:
      "A stylish and durable leather backpack perfect for everyday use. Features multiple compartments and adjustable straps for comfort.",
    features: [
      "Genuine leather material",
      "Multiple compartments",
      "Adjustable straps",
      "Water-resistant lining",
      "Fits up to 15-inch laptop",
    ],
    inStock: true,
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 129.99,
    image: "/placeholder.svg",
    category: "Electronics",
    description:
      "High-quality wireless headphones with noise cancellation technology. Enjoy crystal clear sound and long battery life.",
    features: [
      "Active noise cancellation",
      "40-hour battery life",
      "Bluetooth 5.0 connectivity",
      "Built-in microphone",
      "Comfortable over-ear design",
    ],
    inStock: true,
  },
  {
    id: 3,
    name: "Cotton T-Shirt",
    price: 24.99,
    image: "/placeholder.svg",
    category: "Clothing",
    description: "Soft and comfortable cotton t-shirt available in various colors. Perfect for casual everyday wear.",
    features: ["100% organic cotton", "Breathable fabric", "Machine washable", "Regular fit", "Pre-shrunk material"],
    inStock: true,
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = Number.parseInt(params.id)
  const product = products.find((p) => p.id === productId) || {
    id: productId,
    name: "Product Not Found",
    price: 0,
    image: "/placeholder.svg",
    category: "",
    description: "This product could not be found or is no longer available.",
    features: [],
    inStock: false,
  }

  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="flex flex-col space-y-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/products">
              <ChevronLeft className="h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-square overflow-hidden rounded-lg bg-muted">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="h-full w-full object-cover"
              width={600}
              height={600}
            />
          </div>

          <div className="flex flex-col space-y-4">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">{product.category}</div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <div className="text-2xl font-semibold">${product.price.toFixed(2)}</div>
            </div>

            <div className="space-y-2">
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            {product.features.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-medium">Features</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col space-y-3 pt-4">
              <Button disabled={!product.inStock} className="w-full">
                <ShoppingCart className="mr-2 h-4 w-4" />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1">
                  <Heart className="mr-2 h-4 w-4" />
                  Add to Wishlist
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}