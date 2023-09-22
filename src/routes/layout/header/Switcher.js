

const Switcher = ({isChecked, setIsChecked}) => {
  const toggleMode=()=>{
    setIsChecked( isChecked === false ? true : false)
  }
  return (
    <div className='block_switcher'>
        <input type="checkbox" id="switcher" 
       value={isChecked} onChange={toggleMode} />
        <label htmlFor="switcher">
           <div className="circle"></div>
        </label>
    </div>
  )
}


export default Switcher
