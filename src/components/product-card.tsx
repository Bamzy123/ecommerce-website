import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart } from "lucide-react"

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
      <Link href={`/products/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={300}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
            unoptimized={product.image.includes("placeholder")}
          />
        </div>
      </Link>
      <div className="absolute top-2 right-2">
        <Button variant="ghost" size="icon" className="rounded-full bg-background/80 backdrop-blur-sm">
          <Heart className="h-5 w-5" />
          <span className="sr-only">Add to wishlist</span>
        </Button>
      </div>
      <div className="p-4">
        <div className="mb-1 text-sm text-muted-foreground">{product.category}</div>
        <Link href={`/products/${product.id}`} className="block">
          <h3 className="font-medium line-clamp-1 group-hover:text-primary">{product.name}</h3>
        </Link>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-semibold">${product.price.toFixed(2)}</span>
          <Button size="sm" variant="secondary">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
