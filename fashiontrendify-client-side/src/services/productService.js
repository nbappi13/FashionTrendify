import axios from "axios"

const API_URL = "https://glore-bd-backend-node-mongo.vercel.app/api"

const api = axios.create({
  baseURL: API_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const fetchWithRetry = async (url, retries = 3, backoff = 300) => {
  try {
    const response = await api.get(url)
    return response.data
  } catch (error) {
    if (retries > 0 && (error.response?.status === 0 || error.code === "ERR_NETWORK")) {
      await delay(backoff)
      return fetchWithRetry(url, retries - 1, backoff * 2)
    }
    throw error
  }
}

export const fetchProducts = async () => {
  try {
    return await fetchWithRetry("/product")
  } catch (error) {
    console.error("Error fetching products:", error)
    throw error
  }
}

export const fetchProductDetails = async (id) => {
  try {
    return await fetchWithRetry(`/product/${id}`)
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

