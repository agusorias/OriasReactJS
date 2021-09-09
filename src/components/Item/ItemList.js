import Item from "./Item";

const ItemList = ({ items }) => items.map((item) => <Item key={item.id} item={item} />)

export default ItemList;