import "./ItemDetail.css";

function ItemDetail({item}) {
    console.log(item.id);
    return (
        <div className="detailCard">
            <img src={item.img} alt={item.name}></img>
            <h3 className="detailCardText">{item.name}</h3>  
            <p className="detailCardText">{item.detail}</p> 
        </div>
    )
}
export default ItemDetail