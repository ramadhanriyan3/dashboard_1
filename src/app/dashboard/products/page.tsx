"use client";

import { MdSearch } from "react-icons/md";
import Link from "next/link";
import Pagination from "@/components/ui/Pagination";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { productData } from "@/lib/dummyData";
import { formatDate } from "@/lib/globalFunction";

const Products = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-5 p-5 bg-soft1 rounded-lg mr-5">
      <div className="flex justify-between">
        <div className="flex items-center gap-2 bg-[#2e374a] rounded-lg p-2">
          <MdSearch size={20} />
          <input
            type="text"
            placeholder="Search for a product"
            className="bg-transparent outline-none"
          />
        </div>

        <button
          type="button"
          className="p-2 rounded-lg text-white bg-blue-500 font-bold hover:scale-105 active:scale-100"
          onClick={() => router.push("/dashboard/products/addProduct")}
        >
          Add item
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <td className="py-3">Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created at</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {productData.map((product) => (
            <>
              <tr key={product.id}>
                <td className="py-3">
                  <div className="flex gap-3 items-center">
                    <Image
                      src={"/noproduct.jpg"}
                      alt="ava"
                      width={30}
                      height={30}
                      className="rounded-[50%] object-cover"
                    />
                    <p>{product.title}</p>
                  </div>
                </td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{formatDate(product.createdAt)}</td>
                <td>{product.stock}</td>
                <td>
                  <Link
                    href={`/dashboard/products/${product.id}`}
                    className=" mr-3"
                  >
                    <button className="text-white bg-teal-700 px-3 rounded-md">
                      view
                    </button>
                  </Link>
                  <button className="text-white bg-red-700 px-3 rounded-md">
                    delete
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Products;
