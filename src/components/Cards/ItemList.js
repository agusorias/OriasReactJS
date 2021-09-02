import EcommerceCard from "./EcommerceCard";

const ItemList = ({ todos }) => todos.map((item) => <EcommerceCard key={item.id} item={item} />)

export default ItemList;