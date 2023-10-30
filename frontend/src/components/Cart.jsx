import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BsChevronLeft } from "react-icons/bs";
import { HiXMark } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartState,
  selectTotalAmount,
  selectTotalQTY,
  setClearCartItems,
  setCloseCart,
  setDecreaseItemQTY,
  setGetTotals,
  setIncreaseItemQTY,
  setRemoveItemFromCart,
} from "../app/CartSlice.js";
import CartEmpty from "./cart/CartEmpty.jsx";
import { FiMinus, FiPlus } from "react-icons/fi";


const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);
  
  useEffect(() => {
    dispatch(setGetTotals( ))
  },[cartItems, dispatch])

  
  const clearCarts = () => {
    dispatch(setClearCartItems());
  }

  const onIncreaseItemQTY = (product) => {
    dispatch(setIncreaseItemQTY(product))
  }

  const onDecreaseItemQTY = (product) => {
    dispatch(setDecreaseItemQTY(product))
  }

  const onRemoveItem = (product) => {
    dispatch(setRemoveItemFromCart(product))
  }

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };
  return (
    <Transition.Root show={ifCartState} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onCartToggle}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <div className="flex gap-3 items-center">
                          <BsChevronLeft
                            className="hover:text-amber-400 cursor-pointer"
                            onClick={onCartToggle}
                          />
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Shopping cart{" "}
                            <span className="text-xs font-normal text-slate-100 rounded px-1 py-0.5 bg-gradient-to-b from-slate-900 to-gray-900 shadow-sm shadow-gray-900">
                              ({totalQTY} Items)
                            </span>
                          </Dialog.Title>
                        </div>

                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={clearCarts}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <HiXMark className="h-6 w-6 cursor-pointer hover:scale-110 hover:text-amber-500" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      {cartItems?.length === 0 ? (
                        <CartEmpty />
                      ) : (
                        <>
                          <div className="mt-8">
                            <div className="flow-root">
                              <ul
                                role="list"
                                className="-my-6 divide-y divide-gray-200"
                              >
                                {cartItems?.map((product, index) => (
                                  <li key={index} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                      <img
                                        src={product.img}
                                        alt="product image"
                                        className="h-full w-full object-cover object-center"
                                      />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                          <h3>
                                            <a>{product.name}</a>
                                          </h3>
                                          <p className="ml-4">
                                            ${(product.price * product.cartQuantity).toFixed(2)}
                                          </p>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">
                                          {product.color}
                                        </p>
                                      </div>
                                      <div className="flex flex-1 items-end justify-between text-sm">

                                        <div className="flex gap-5 items-center  w-full">
                                          <button type="button" onClick={()=> onDecreaseItemQTY(product)} className="bg-gradient-to-b from-slate-900 to-gray-900 rounded flex items-center justify-center active:scale-90">
                                            <FiMinus className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
                                          </button>
                                          <div className="bg-gradient-to-b from-slate-900 to-gray-900 rounded flex items-center justify-center text-white font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-5 ">{product.cartQuantity}</div>
                                          <button type="button" onClick={()=> onIncreaseItemQTY(product)} className="bg-gradient-to-b from-slate-900 to-gray-900 rounded flex items-center justify-center active:scale-90">
                                            <FiPlus className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
                                          </button>
                                        </div>

                                        <div className="flex">
                                          <button
                                            type="button"
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                            onClick={() =>onRemoveItem(product)}
                                          >
                                            Remove
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${(totalAmount).toFixed(2)}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Cart;
