import useCartStore from "../../Store/UseCartStore"
import "./Counter.css"

function Counter({text, price, id, className = "", onPlus, OnMinus}) {
    const { counts, plus, minus } = useCartStore()
    const count = counts[id] || 0;
    const totprice = count * price

    return (
        <div className={`${className}`}>
            <div className="counter__top">
                {
                    text ? <section>{text}</section>
                    :
                    <h5>{totprice} SEK</h5>
                }
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