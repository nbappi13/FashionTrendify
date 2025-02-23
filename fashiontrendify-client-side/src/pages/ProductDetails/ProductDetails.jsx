"use client"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchProductDetails } from "../../services/productService"
import "../../styles/ProductDetails.css"

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const data = await fetchProductDetails(id)
        setProduct(data.data) 
      } catch (error) {
        console.error("Error fetching product details:", error)
        setError(error.message || "Failed to fetch product details")
      } finally {
        setLoading(false)
      }
    }

    getProductDetails()
  }, [id])

  if (loading) {
    return <div className="loading">Loading...</div>
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="error-container">
        <h2>Product Not Found</h2>
        <p>The requested product ID: {id} doesn't exist</p>
      </div>
    )
  }

  return (
    <div className="product-details">
      <img
        src={product.images[0].secure_url || "/placeholder.svg"}
        alt={product.name}
        className="product-details-image"
      />
      <div className="product-details-info">
        <h2 className="product-details-name">{product.name}</h2>
        <p className="product-details-price">${product.price}</p>
        <p className="product-details-description">{product.description}</p>
        <p className="product-details-category">Category: {product.category.name}</p>
      </div>
    </div>
  )
}

export default ProductDetails

