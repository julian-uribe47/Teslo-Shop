/* eslint-disable react/no-unescaped-entities */

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";


const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2]
]

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function () {
  return (
    <div className=" flex justify-center items-center mb-72 px-10 sm:px-0">

      <div className=" flex flex-col w-[1000px]">

        <Title title="Verificar orden" />

        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Carrito */}
          <div className=" flex flex-col mt-5">
            <span className=" text-xl">Ajustar elemntos</span>
            <Link href="/cart" className=" underline mb-5">
              Editar carrito
            </Link>


            {/* Items */}

            {
              productsInCart.map(product => (

                <div key={product.slug} className=" flex mb-5">

                  <Image
                    src={`/products/${product.images[0]}`}
                    width={100}
                    height={100}
                    style={{
                      height: '100px',
                      widows: '100px'
                    }}
                    alt={product.title}
                    className=" mr-5 rounded"
                  />

                  <div>
                    <p>{product.title}</p>
                    <p>${product.price} x 3</p>
                    <p className=" font-bold">Subtotal: ${ product.price * 3 }</p>
                  </div>

                </div>

              ))
            }
          </div>


          {/* Checkout */}
          <div className=" bg-white rounded-xl shadow-xl p-7">

            <h2 className=" text-2xl mb-2">Dirección de entrega</h2>
            <div className=" mb-10">
              <p className=" text-xl">Solomeo Paredes</p>
              <p>Calle 20 Carrera 21</p>
              <p>Villaverde</p>
              <p>Pereira</p>
              <p>Tel: 323232323</p>
              <p>CP: 66666</p>
            </div>

            {/* Divider */}

            <div
              className=" w-full h-0.5 rounded bg-gray-200 mb-10"
            />

            <h2 className=" text-2xl mb-2">resumen de orden</h2>
            <div className=" grid grid-cols-2">

              <span>No. productos</span>
              <span className=" text-right">Artículos</span>

              <span>Subtotal</span>
              <span className=" text-right">$ 100</span>

              <span>Impuestos (15%)</span>
              <span className=" text-right">$ 100</span>

              <span className=" mt-5 text-2xl">Total:</span>
              <span className=" mt-5 text-2xl text-right">$ 100</span>

            </div>

            <div className=" mt-5 mb-2 w-full">

              <p className=" mb-5">
                  {/* Disclaimer */}
                  <span className=" text-xs">
                    Al hacer click en "Colocar orden", aceptas los <a href="#" className=" underline">Términos y condiciones</a> y la <a href="#" className=" underline">política de privacidad</a>
                  </span>

              </p>
              <Link
                className=" flex btn-primary justify-center"
                href="/orders/123">
                Colocar Orden
              </Link>
            </div>

          </div>

        </div>



      </div>


    </div>
  );
}