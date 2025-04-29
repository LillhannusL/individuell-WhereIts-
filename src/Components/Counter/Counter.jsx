import useCartStore from "../../Store/UseCartStore"
import "./Counter.css"

function Counter({text, price, id}) {
    const { plus, minus, counts } = useCartStore()
    const count = counts[id] || 0;
    const totprice = count * price

    return (
        <div className="counter">
            <div className="counter__top">
                <h5>{totprice} SEK</h5>
            </div>
            <div className="counter__bottom">
                <button className="counter__btn" onClick={() => minus(id)}>-</button>
                <p className="counter__number">{count}</p>
                <button className="counter__btn" onClick={() => plus(id)}>+</button>
            </div>
        </div>
    )
}

export default Counter