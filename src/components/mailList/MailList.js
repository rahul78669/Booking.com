import "./mailList.css"

const MailList = () => {
    return (
        <div className="mail">
            <h1 className="mailTitle">Save time, save money!</h1>
            <spam className="mailDesc">Signup and we'ii send the best deal to you</spam>
              <div className="mailInputContainer">
               <input type="text" placeholder="Your Email"/>
               <button>Suscribe</button>
              </div>
        </div>
    )
}

export default MailList;