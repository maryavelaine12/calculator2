import './App.css'
import { useState } from 'react'


function CalcDisplay({ dispValue }) {
  return (
    <div className='CalcDisplay' style={{ fontSize: dispValue === 'Mary Avelaine Buenaventura' ? '1.5em' : '1.8em' }}>
      {dispValue}
    </div>
  )
}


function CalcButtons({ label, buttonClassName = "CalcButton", onClick }) {
  return (
    <button className={buttonClassName} onClick={onClick}>
      {label}
    </button>
  )
}


function App() {

  const [disp, setDisp] = useState(0);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);


  const onClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML
    setDisp(value);
  }


  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (op === null) {
      if (num1 === null) {
        setNum1(value);
        setDisp(value);
      } else {
        setNum1(num1 + value);
        setDisp(num1 + value);
      }
    } else {
      if (num2 === null) {
        setNum2(value);
        setDisp(value);
      } else {
        setNum2(num2 + value);
        setDisp(num2 + value);
      }
    }
    console.log(num1 + "|" + op + "|" + num2 + "|" + disp);
  }


  const opClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setOp(value);
    setDisp(value);
  }


  const eqClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if(op === "+") {
      setDisp(parseInt(num1) + parseInt(num2));
    } else if (op === "-") {
      setDisp(parseInt(num1) - parseInt(num2));
    } else if (op === "*") {
      setDisp(parseInt(num1) * parseInt(num2));
    } else if (op === "÷") {
      setDisp(parseInt(num1) / parseInt(num2));
    }
  }


  const clrClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setDisp('0');
    setNum1(null);
    setNum2(null);
    setOp(null);
  }


  const surnameClickHandler = (e) => {
    e.preventDefault();
    setDisp('Mary Avelaine Buenaventura');
  }


  return (
    <div className='App'>
      <div className='Header'>
        Calculator of Mary Avelaine Buenaventura - IT3A
      </div>
      <div className='Calculator'>
        <CalcDisplay dispValue={disp} />
        <div className='CalcButtons'>
          <CalcButtons label={'7'} onClick={numClickHandler} />
          <CalcButtons label={'8'} onClick={numClickHandler} />
          <CalcButtons label={'9'} onClick={numClickHandler} />
          <CalcButtons label={'÷'} onClick={opClickHandler} />
          <CalcButtons label={'4'} onClick={numClickHandler} />
          <CalcButtons label={'5'} onClick={numClickHandler} />
          <CalcButtons label={'6'} onClick={numClickHandler} />
          <CalcButtons label={'*'} onClick={opClickHandler} />
          <CalcButtons label={'1'} onClick={numClickHandler} />
          <CalcButtons label={'2'} onClick={numClickHandler} />
          <CalcButtons label={'3'} onClick={numClickHandler} />
          <CalcButtons label={'-'} onClick={opClickHandler} />
          <CalcButtons label={'C'} buttonClassName="ClearButton" onClick={clrClickHandler}/>
          <CalcButtons label={'0'} onClick={numClickHandler} />
          <CalcButtons label={'='} onClick={eqClickHandler} />
          <CalcButtons label={'+'} onClick={opClickHandler} />
        </div>

        <CalcButtons
          label={'surname'}
          buttonClassName="SurnameButton"
          onClick={surnameClickHandler}
        />

      </div>
    </div>
  )
}


export default App