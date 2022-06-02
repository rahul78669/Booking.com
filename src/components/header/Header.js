import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headercontainer">
          <div className="headerList">
            <div className="headerListItem active">
              <i class="fa-solid fa-bed"></i>
              <span>stay</span>
            </div>
            <div className="headerListItem">
              <i class="fa-solid fa-plane"></i>
              <span>Flights</span>
            </div>
            <div className="headerListItem">
              <i class="fa-solid fa-car"></i>
              <span>Car rentals</span>
            </div>
            <div className="headerListItem">
              <i class="fa-solid fa-bed"></i>
              <span>Attractions</span>
            </div>
            <div className="headerListItem">
              <i class="fa-solid fa-bed"></i>
              <span>Airport taxis</span>
            </div>
          </div>
          <h1 className="headerTitle">A Life Time of discount? it's Genius.</h1>
          <p className="headerDesc">Get rewarded for your travels - unlock instant saying of 10% or more with a free Boooking.com account</p>
          <button className="headerBtn">sign in / Register</button>
          <div className="headerSearch">
            <div className="headerSearchItem">
              <i className=" headerIcon fa-solid fa-bed" ></i>
              <input
                type="text"
                placeholder="Where are you going"
                className="headersearchinput"
              />
            </div>
            <div className="headerSearchItem">
              <i className=" headerIcon fa-solid fa-calendar"></i>
              <span className="headerSearchText">date to date</span>
            </div>sss
            <div className="headerSearchItem">
              <i className="headerIcon fa-solid fa-person" ></i>
              <span className="headerSearchText">2 adult 2 children 1 room</span>
            </div>
            <div className="headerSearchItem">
              <button className="headerBtn">search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;