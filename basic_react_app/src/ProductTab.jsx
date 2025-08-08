import Product from "./Product.jsx";

function ProductTab(){
    let styles={
        display: "flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",
    }
    return(
        <div style={styles}>
        <Product title="LogiTech MX Master" idx={0}/>
        <Product title="Apple Pencil (2 Gen)" idx={1}/>
        <Product title="Zebronics Zeb Transformer" idx={2}/>
        <Product title="Zebronics Toad 23" idx={3}/>
        </div>
    );
}

export default ProductTab;