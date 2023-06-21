import { Item } from "../Item/Item";


export const ItemList = ({ producto }) => {
    return (
        <div className="ItemListContainer">
            {producto.map((element) => (
                <Item
                key={element.id}
                id={element.id}
                title={element.title}
                description={element.description}
                price={element.price}
                picture={element.picture}
                />
            ))}
        </div>
    );
};
