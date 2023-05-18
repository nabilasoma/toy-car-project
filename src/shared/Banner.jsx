

const Banner = () => {
    return (
        <div className="carousel w-full mt-4">
            <div id="slide1" className="carousel-item relative w-full">
                <img style={{ height: '400px' }} src='https://i.ibb.co/Pj4r4rF/banner1.jpg' className="w-full" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img style={{ height: '400px' }} src="https://i.ibb.co/ySvv5C4/banner2.png" className="w-full" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img style={{ height: '400px' }} src="https://i.ibb.co/KGY4BRr/banner3.jpg" className="w-full" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img style={{ height: '400px' }} src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;