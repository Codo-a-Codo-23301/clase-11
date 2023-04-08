export default function Video(props) {

    return (

        <video controls width={props.width} height={props.height}>
            <source src={props.src} type={props.type} />
        </video>

    )
}

