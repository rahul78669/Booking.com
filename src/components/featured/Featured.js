import "./featured.css"

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://wallpapercave.com/wp/wp8788359.jpg " width="316" height="356" alt="" className="featuredImage" />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://wallpapercave.com/wp/wp4069437.jpg " width="316" height="356" alt="" className="featuredImage" />
                <div className="featuredTitles">
                    <h1>Austin</h1>
                    <h2>523 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://wallpapercave.com/wp/wp8788422.jpg " width="316" height="356" alt="" className="featuredImage" />
                <div className="featuredTitles">
                    <h1>Reno</h1>
                    <h2>323 properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured;