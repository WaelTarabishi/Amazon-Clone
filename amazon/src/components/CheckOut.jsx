import { useSelector } from 'react-redux';
import ProductDetails from '../components/ProductDetails';
import { GB_CURRENCY } from '../utils'
import { useDispatch } from 'react-redux'
import { incrementInCart, removeFromCart, decrementInCart } from '../redux/cartSlice'
const CheckOut = () => {
    const products = useSelector((state) => state.cart.products)
    const itemsNumber = useSelector(state => state.cart.productsNumber)
    const subTotal = useSelector(state => (state.cart.products.reduce((subtotal, prodct) => subtotal + prodct.quantity * prodct.price, 0)))
    const dispatch = useDispatch()
    return (
        <div className='h-screen bg-amazonclone-background'>
            <div className="min-w-[1000px] max-w-[1500px] m-auto pt-8">
                <div className='w-full flex flex-row  gap-8'>
                    <div className='flex flex-col bg-white flex-[0.8]'>
                        <div className="text-2xl xl:text-3xl m-4">Shopping Cart</div>
                        <div className='m-4 justify-start'>
                            {products.map((product) => (
                                <div key={product.id} className='flex flex-row gap-5 mb-8 '>
                                    <div className=''>< img src={product.image_small} alt="Checkout product" className='object-cover' /></div>
                                    <div className=' w-full'>
                                        <div className='w-full border-b-2 divide-gray-400'></div>
                                        <ProductDetails product={product} ratings={false} />
                                        <div className='text-sm xl:text-base font-semibold rounded text-blue-500 mt-2 mb-1 cursor-pointer' onClick={() => { dispatch(removeFromCart(product.id)) }}>Delete</div>
                                        <div className='flex flex-row items-center '>
                                            <div className='bg-gray-200 flex flex-row'>
                                                <button className='bg-gray-400 p-2 text-xl w-8' onClick={() => { dispatch(incrementInCart(product.id)) }}>+</button>
                                                <div className='ml-2 mr-2 text-center  p-2 pt-[10px]'>{product.quantity}</div>
                                                <button className='bg-gray-400 p-2 text-xl w-8' onClick={() => { dispatch(decrementInCart(product.id)) }}>-</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-lg xl:text-xl mt-2 mr-4 font-semibold">{GB_CURRENCY.format(product.price)}</div>
                                </div>
                            ))}
                            <div className="text-lg xl:text-xl text-right mb-4 mr-4">Subtotal({itemsNumber} items)
                                <span className="font-semibold">:{GB_CURRENCY.format(subTotal)}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-[0.2] flex-col bg-white h-[250px] p-7 text-start' >
                        <div className="text-xs xl:text-sm text-green-800 mb-2">
                            Your order qualifies for
                            <span className="font-bold">&nbsp;FREE DELIVERY</span>. Delivery Details
                        </div>
                        <div className="text-lg xl:text-xl  mb-4 ">Subtotal({itemsNumber} items)
                            <span className="font-semibold">:{GB_CURRENCY.format(subTotal)}
                            </span>
                        </div>
                        <button className='btn'>Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CheckOut;
