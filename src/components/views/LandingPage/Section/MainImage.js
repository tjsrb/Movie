import React,{useRef, useEffect} from "react"

function MainImage(props) {
    return (
        <div style={{
            backgroundImage: `url('${props.image}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height:'1000px',
        }}>
            <div>
                <div style={{ position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem' }}>
                    <h2 style={{color: 'white'}}>{props.title}</h2>
                    <p style={{color:'white', fontSize:'1rem'}}>{props.text}</p>
                </div>
            </div>
        </div>

    )
}

export default MainImage