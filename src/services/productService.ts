import { Get, Post } from "../shared/utils/service";

// The path should be start by '/'

/**
 * Get all products
 * @returns promise
 * 
 */
export const getProducts = () => Get("/products")

/**
 * Create a product
 * @param(any) data
 * @returns promise
 */
export const postProduct = (data: any) => Post("/products", data)

/**
 * Get a product
 * @param(string) id
 * @retursn product
 */
export const getProduct = (id: string) => Get(`/products/${id}`)