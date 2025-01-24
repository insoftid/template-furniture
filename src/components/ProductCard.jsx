const ProductCard = ({ product }) => {
  return (
    <div className="p-[30px] border border-[#B0B0B0]">
        <img src={product.image} className="w-full h-[217pxpx]" />
        <div className="flex pt-[15px] justify-between">
            <h2 className="text-[24px] font-medium uppercase underline">{product.name}</h2>
            <a className="flex gap-2 items-center bg-black px-[10px] py-[8px]">
                <img src="assets/cart.svg" alt="" />
                <p className="uppercase text-sm text-white">Beli Produk</p>
            </a>
        </div>
    </div>
  );
};

export default ProductCard;