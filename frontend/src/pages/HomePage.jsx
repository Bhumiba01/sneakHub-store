import { useDispatch } from "react-redux"
import shoesData from "../data/data"
import { setAddItemToCart, setOpenCart } from "../app/CartSlice.js";

const HomePage = () => {
const dispatch = useDispatch()

const onAddToCart = (product) => {

  const item = {
    id: product.id,
    name: product.name,
    img: product.image,
    price: product.price
  }

  dispatch(setAddItemToCart(item))
}

const onCartToggle = () => {
  dispatch(setOpenCart({
      cartState: true
  }))
}
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {shoesData.map((product) => (
            <a key={product.id}  className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.image}
                  alt="products images"
                  className="h-80 w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="flex justify-between items-center">
              <div>
              <h3 className="mt-4 text-sm text-start text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-start text-gray-900">{product.price}$</p>
              </div>
              <button className="py-2 px-3 bg-slate-100 text-black rounded-2xl hover:text-black hover:bg-slate-300" onClick={() => { onAddToCart(product); onCartToggle(); }}>Add to bag</button>
              </div>
              <button className="py-2 px-3 bg-blue-600 w-full rounded-xl hover:bg-blue-700 hover:text-white text-white">Buy me</button>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}


export default HomePage;