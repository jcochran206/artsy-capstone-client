
export default function PostImage(props){
    const { pic } = props;
    return(
        pic.length !== 0 && <img src={pic} alt='img'/>
    )
}