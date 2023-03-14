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
          <div className="containerButton">
              <button disabled={counter === 0} className="buttonCounter" onClick={substract}>-</button>
              <div><span className='colorCount'>{counter}</span></div>
              <button disabled={counter === 0} className="buttonCounter" onClick={onAdd}>+</button>
          </div>
        </div>
    )
}