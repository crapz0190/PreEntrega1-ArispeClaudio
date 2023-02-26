import './ItemCount.css'

export default function Counter({counter, setCounter}) {

  const onAdd = () => {
    setCounter(counter + 1)
  };

  const substract = () => {
    if(counter !== 0){
      setCounter(counter - 1)
    }
  };

    return(
        <div className="counter">
            <h2>{counter}</h2>
            <div className="containerButton">
                <button className="buttonCounter" onClick={substract}>-</button>
                <button className="buttonCounter" onClick={onAdd}>+</button>
            </div>
        </div>
    )
}