// app/api/seed/route.ts
import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function POST() {
  try {
    // Clear existing data
    await prisma.orderItem.deleteMany();
    await prisma.order.deleteMany();
    await prisma.product.deleteMany();
    await prisma.user.deleteMany();

    // Create sample products
    const products = await prisma.product.createMany({
      data: [
        {
          name: "Wireless Headphones",
          description: "High-quality wireless headphones with noise cancellation",
          price: 99.99,
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
          stock: 25,
        },
        {
          name: "Smart Watch",
          description: "Feature-rich smartwatch with health monitoring",
          price: 199.99,
          image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
          stock: 15,
        },
        {
          name: "Laptop Backpack",
          description: "Durable backpack perfect for laptops and gadgets",
          price: 49.99,
          image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
          stock: 30,
        },
        {
          name: "Bluetooth Speaker",
          description: "Portable speaker with amazing sound quality",
          price: 79.99,
          image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
          stock: 20,
        },
        {
          name: "Gaming Mouse",
          description: "High-precision gaming mouse with RGB lighting",
          price: 59.99,
          image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
          stock: 40,
        },
        {
          name: "Mechanical Keyboard",
          description: "Tactile mechanical keyboard for typing enthusiasts",
          price: 89.99,
          image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
          stock: 18,
        },
      ],
    });

    return NextResponse.json({ 
      message: "Sample data added successfully",
      products: `Created ${products.count} products` 
    });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}