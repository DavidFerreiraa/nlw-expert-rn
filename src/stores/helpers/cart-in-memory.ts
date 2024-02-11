import { ProductProps } from "@/utils/data/products";
import { ProductCardProps } from "../cart-stores";

export function addToCart(products: ProductCardProps[], newProduct: ProductProps){
    const existingProduct = products.find(({id}) => newProduct.id === id)

    if(existingProduct){
        return products.map((product) => product.id === existingProduct.id? {...product, quantity: product.quantity + 1}: product)
    }

    return [...products, {...newProduct, quantity: 1}]
}
