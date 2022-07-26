import ShopItem from "./ShopItem";

const Shop = (props) => {
    const { add_to_cart, products } = props;

    const all_items = [];

    for (let i = 0; i < products.length; i++) {
        all_items.push(
            <div
                data-testid="product"
                className="shop_item"
                key={`${i}${products[i].name}`}
            >
                <ShopItem
                    add_to_cart={add_to_cart}
                    name={products[i].name}
                    img_name={products[i].img_name}
                    price={products[i].price}
                />
            </div>
        );
    }

    return (
        <section
            data-testid="main_shop_container"
            className="items_container main_content"
        >
            {all_items}
        </section>
    );
};

export default Shop;
