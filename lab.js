class Markup extends React.Component{

    render(){
        const name ="Rottweiler"
        const imageURL = "https://images.dog.ceo/breeds/rottweiler/n02106550_11693.jpg"
        return(
            <div className="row">
                <div className="col">
                    <div className="card medium">
                        <div className="card-image">
                            <img src={imageURL} alt={name} />
                        </div>
                        <div className="card-content">
                            <p>{name}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }



}