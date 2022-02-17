export const CardTutors = (props) => {
    const {name, image, country, favorite, rating } =props
    return (
        <div className="col-12 col-sm-6 col-md-4 mb-3 ">
            <div className="item">
                <div className="meta">
                    <div className="image">
                        <img src={image} alt={name} />
                    </div>
                    <div className="info">
                        <h3 className="name">{name}</h3>
                        <div className="ratings">
                           ⭐⭐⭐⭐⭐ - {rating}
                        </div>
                        <div className="place">
                            {country.address}
                        </div>
                    </div>
                    <div className="favorite">
                        {favorite ? '❤': '💔'}
                    </div>
                </div>
                <div className="speaks">
                    Speaks: {props.speaks.map(speak => speak.title).join(',')}

                </div>
            </div>
        </div>
    )

}