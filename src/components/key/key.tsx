
export function Key ({value} : {value : string} ){
  return (
  <button value={value} className={value === 'delete' ? 'key big': 'key' } >{value}</button>
  )
}

export default Key
