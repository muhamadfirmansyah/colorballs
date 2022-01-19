import { Get } from "../shared/utils/service";

// The path should be start by '/'

/**
 * Get all products
 * @returns promise
 * 
 */
export const getProducts = () => Get("/products")