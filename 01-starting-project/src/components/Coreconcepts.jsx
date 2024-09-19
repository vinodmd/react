
export default function CoreConcepts({image, title, description }){
    return (<li>
      <img src={image} alt ={title}></img>
      <p>{title}</p>
      <p>{description}</p>
    </li>)
    }