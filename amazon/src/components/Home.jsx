import { Carousel, HomeCard, CarouselCategory, CarouselProducts } from './'
const Home = () => {
    return (
        <div className="bg-amazonclone-background bg-gradient-to-b from-stone-50 min-w-[1000px] max-w-[1500px] mx-auto ">
            <div className="min-w-[1000px] max-w-[1500px] m-auto">
                <Carousel />
                <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
                    <HomeCard
                        title={"We have a surprise for you"}
                        img={"../images/home_grid_1.jpg"}
                        link={"See terms and conditions"}
                    />
                    <HomeCard
                        title={"Watch The Rings of Power"}
                        img={"../images/home_grid_2.jpg"}
                        link={"Start streaming now"}
                    />
                    <HomeCard
                        title={"Unlimited Streaming"}
                        img={"../images/home_grid_3.jpg"}
                        link={"Find out more"}
                    />
                    <HomeCard
                        title={"More titles to explore"}
                        img={"../images/home_grid_4.jpg"}
                        link={"Browse Kindle Unlimited"}
                    />
                    <HomeCard
                        title={"Shop Pet Supplies"}
                        img={"../images/home_grid_5.jpg"}
                        link={"See more"}
                    />
                    <HomeCard
                        title={"Spring Sale"}
                        img={"../images/home_grid_6.jpg"}
                        link={"See the deals"}
                    />
                    <HomeCard
                        title={"Echo Buds"}
                        img={"../images/home_grid_7.jpg"}
                        link={"See more"}
                    />
                    <HomeCard
                        title={"Family Plan: 3 months free"}
                        img={"../images/home_grid_8.jpg"}
                        link={"Learn more"}
                    />
                    <div className="xl:hidden  m-3 pt-8">
                        <img src={"../images/banner_image_2.jpg"} className="w-[100%] h-[100%] object-contain flex-shrink-0 flex-grow-0" />
                    </div>

                </div>
                <CarouselProducts />
                <CarouselCategory />
                <div className='h-[200px]'>
                    <img src={"../images/banner_image.jpg"} className='h-[100%] m-auto' />
                </div>
            </div>
        </div>
    )
}
export default Home