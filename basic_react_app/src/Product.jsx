import "./Product.css"
import Price from './Price.jsx';
function Product({title,idx}){
    let oldPrices=["19,999","1,00,000","39,000","499"];
    let newPrices=["15,999","90,000","29,000","199"];
    let Description=[["8000 DPI","5 programmable buttons"],
                      ["intituive surface","Designed for ipad Pro"],
                    ["designed for ipad Pro","Intituive surface"],
                ["wireless","optical"]];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{Description[idx][0]}</p>
            <p>{Description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}

export default Product;