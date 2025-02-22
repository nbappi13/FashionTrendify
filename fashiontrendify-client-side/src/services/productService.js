import axios from "axios"

const API_URL = "https://glore-bd-backend-node-mongo.vercel.app/api"

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/product`)
    return response.data
  } catch (error) {
    console.error("Error fetching products:", error)
    throw error
  }
}

export const fetchProductDetails = async (id) => {
  try {
  
    const response = await axios.get(`${API_URL}/product/${id}`)
    return response.data
  } catch (error) {
    console.error("Error fetching individual product:", error)

 
    try {
      const allProductsResponse = await fetchProducts()
      const product = allProductsResponse.data.find((p) => p._id === id)
      if (product) {
        return { data: product }
      } else {
        throw new Error("Product not found")
      }
    } catch (allProductsError) {
      console.error("Error fetching all products:", allProductsError)
      throw allProductsError
    }
  }
}

