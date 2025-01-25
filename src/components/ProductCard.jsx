const ProductCard = ({ product }) => {
  return (
    <div className="border border-[#B0B0B0] p-[30px]">
      <img src={product.image} className="h-[217pxpx] w-full" />
      <div className="flex flex-col justify-between gap-2 pt-[15px] lg:flex-row">
        <h2 className="text-xl font-medium uppercase underline lg:text-[24px]">{product.name}</h2>
        <a className="flex justify-center gap-2 bg-black px-[10px] py-[8px]">
          <img src="assets/cart.svg" alt="" />
          <p className="text-sm uppercase text-white">Beli Produk</p>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
