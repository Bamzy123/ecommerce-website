import ProductCard from "@/components/product-card"

// Sample products data
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
  {
    id: 7,
    name: "Denim Jeans",
    price: 49.99,
    image: "/placeholder.svg",
    category: "Clothing",
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    price: 79.99,
    image: "/placeholder.svg",
    category: "Electronics",
  },
  {
    id: 9,
    name: "Leather Wallet",
    price: 34.99,
    image: "/placeholder.svg",
    category: "Accessories",
  },
  {
    id: 10,
    name: "Fitness Tracker",
    price: 89.99,
    image: "/placeholder.svg",
    category: "Electronics",
  },
  {
    id: 11,
    name: "Casual Shirt",
    price: 39.99,
    image: "/placeholder.svg",
    category: "Clothing",
  },
  {
    id: 12,
    name: "Dress Shoes",
    price: 99.99,
    image: "/placeholder.svg",
    category: "Footwear",
  },
]

export default function ProductsPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="flex flex-col space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">All Products</h1>
          <p className="text-muted-foreground">Browse our collection of products</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
//             <Card key={category.id} className="hover:shadow-lg transition-shadow duration-200">
//                 <CardHeader className="relative h-48 overflow-hidden rounded-md">