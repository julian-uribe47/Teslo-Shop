export const revalidate = 604800;//7dias

import { getProductBySlug } from "@/actions";
import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector, SizeSelector, StockLabel } from "@/components";
import { titleFont } from "@/config/fonts";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { AddToCart } from "./ui/AddToCart";

interface Props {
  params: {
    slug: string;
  }
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug

  // fetch data
  const product = await getProductBySlug(slug);

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: product?.title ?? 'Producto no encontrado',
    description: product?.description ?? '',
    openGraph: {
      title: product?.title ?? 'Producto no encontrado',
      description: product?.description ?? '',
      images: [`/products/${product?.images[1]}`],
    },
  }
}


export default async function ProductBySlugPage({ params }: Props) {

  const { slug } = params;
  const product = await getProductBySlug(slug);
  console.log(product)

  if (!product) {
    notFound();
  }


  return (
    <div className=" mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">

      {/* SlideShow */}
      <div className=" col-span-1 md:col-span-2">

        {/* Mobile Slideshow */}

        <ProductMobileSlideshow
          images={product.images}
          title={product.title}
          className=" block md:hidden" />

        {/* Desktop Slideshow */}
        <ProductSlideshow
          images={product.images}
          title={product.title}
          className=" hidden md:block" />

      </div>
      {/* Detail */}
      <div className=" col-span-1 p-3">
        <StockLabel slug={product.slug} />
        <p className=" text-lg mb-5">${product.price}</p>

        <AddToCart product={product} />

        {/* Description */}
        <h3 className=" font-bold text-sm">Descripción</h3>
        <p className=" font-light">
          {product.description}
        </p>
      </div>


    </div>
  );
}