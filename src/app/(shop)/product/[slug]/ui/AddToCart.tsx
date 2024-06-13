'use client';

import { QuantitySelector, SizeSelector } from "@/components"
import type { CartProduct, Product, Size } from "@/interfaces"
import { useCartStore } from "@/store";
import { useState } from "react";


interface Props {
    product: Product
}


export const AddToCart = ({ product }: Props) => {
    const addProductToCart = useCartStore( state => state.addProductToCart );
    const [size, setSize] = useState<Size | undefined>();
    const [quantity, setQuantity] = useState<number>(1);
    const [posted, setPosted] = useState(false)

    const addTocart = () => {
        setPosted(true);
        if (!size) return;
        // console.log({ size, quantity });
        const cartProduct: CartProduct = {
            id: product.id,
            slug: product.slug,
            title: product.title,
            price: product.price,
            quantity: quantity,
            size: size,
            image: product.images[0]
        }
        addProductToCart(cartProduct);
        setPosted(false);
        setQuantity(1);
        setSize(undefined);
    }

    return (
        <>
            {
                posted && !size && (
                    <span className=" mt-2 text-red-500 fade-in">
                        Debe seleccionar una talla *
                    </span>

                )
            }
            {/* Size selector */}
            <SizeSelector
                selectedSize={size}
                avalaibleSizes={product.sizes}
                onSizeChanged={setSize}
            />

            {/* Quantity selector */}

            <QuantitySelector
                quantity={quantity}
                onQuantityChanged={setQuantity} />

            {/* Button */}
            <button className=" btn-primary my-5"
                onClick={addTocart}>
                Agregar al carrito
            </button>
        </>
    )
}
