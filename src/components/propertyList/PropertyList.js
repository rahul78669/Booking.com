import "./propertyList.css"

const PropertyList = () => {
    return (
        <div className='pList'>
            <div className='pListItem'>
                <img src='https://wallpapercave.com/wp/wp10535399.jpg' width="260" height="240" alt='' className='pListImage' />
                <div className='pListTitles'>
                    <h1>Hotels</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>
            <div className='pListItem'>
                <img src='https://wallpapercave.com/wp/wp10535395.jpg' width="260" height="240" alt='' className='pListImage' />
                <div className='pListTitles'>
                    <h1>Aparments</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>
            <div className='pListItem'>
                <img src='https://wallpapercave.com/wp/wp10535406.jpg' width="260" height="240" alt='' className='pListImage' />
                <div className='pListTitles'>
                    <h1>Resorts</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>
            <div className='pListItem'>
                <img src='https://wallpapercave.com/wp/wp8725603.jpg' width="260" height="240" alt='' className='pListImage' />
                <div className='pListTitles'>
                    <h1>Villas</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>

        </div>
    )
}

export default PropertyList;