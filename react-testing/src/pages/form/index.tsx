import { useEffect, useState } from "react";

function Form() {
  const [data, setData] = useState<object | null>(null);
  const [flag, setFlag] = useState(false);
  const [value, setValue] = useState('');

  const handleToggleFlag = () => {
    setFlag((prevState) => !prevState);
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      setData({})
    }, 1000)
  }, []);

  return (
    <div className="App">
      {flag && <div data-testid='toggle-elem'>toggle</div>}
      {data && <span style={{ color: 'red' }}>data</span>}

      <h1>Hello World</h1>
      <p data-testid='value-elem'>{value}</p>
  
      <button
        data-testid='toggle-btn'
        onClick={handleToggleFlag}
      >
        click me
      </button>

      <input onChange={handleChangeInput} type="text" placeholder="input value"/>
    </div>
  );
}

export default Form;
