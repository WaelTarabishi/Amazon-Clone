import { Link, NavLink } from "react-router-dom"
import { Search } from "./"
import { useSelector } from 'react-redux'

const Navbar = () => {
    const cart = useSelector((state) => state.cart.productsNumber);

    return (
        <header className='min-w-[1000px]'>
            <div className='flex flex-row  bg-amazonclone-default text-white h-[60px]'>
                <div className='flex items-center '>
                    <NavLink to="/">
                        <img src={"../images/amazon.png"} alt="amazon" className="h-[35px] w-[100px] m-2" />
                    </NavLink>
                    <div className="pr-4 pl-4 ">
                        <div className="text-xs xl:text-sm">Deliverd To</div>
                        <div className="text-sm xl:text-base font-bold">United KindDom</div>
                    </div>
                </div>
                <div className='flex grow relative items-center'>
                    <Search />
                </div>

                <div className='flex items-center m-4'>
                    <div className="pr-4 pl-4 ">
                        <div className="text-xs xl:text-sm">Hello, sign in </div>
                        <div className="text-sm xl:text-base font-bold">Account & Lists</div>
                    </div>
                    <div className="pr-4 pl-4 m ">
                        <div className="text-xs xl:text-sm">Returns</div>
                        <div className="text-sm xl:text-base font-bold">& Orders</div>
                    </div>
                    <Link to={"/checkout"}>
                        <div className="flex pr-3 pl-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" h-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            <div className="relative ">
                                <div className="absolute right-[9px] font-bold m-2 ">
                                    {cart}
                                </div>
                            </div>
                            <div className=" pt-7 text-xs xl:text-sm font-bold">
                                Cart
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="flex flex-row text-white bg-amazonclone-lightblue space-x-3  text-xs xl:text-sm p-2 pl-6">
                <div >Today's Deals</div>
                <div >Customer Service</div>
                <div >Registry</div>
                <div >Gift Cards</div>
                <div >Sell</div>
            </div>
        </header>
    )
}

export default Navbar