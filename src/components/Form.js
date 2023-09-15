import React from 'react'

export default function Form({value, handleSubmit, setValue,}) {
  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <form style={{ display: "flex", alignItems: 'center', paddingBottom: "10px" }} onSubmit={handleSubmit}>
      <input type="text" name="value" style={{ flex: '10', padding: '10px', margin: "5px 7px 5px 0", outline: 'none', border: '1px solid #ddd', borderRadius: "8px" }}
        placeholder="할 일을 입력하세요."
        value={value} onChange={handleChange} />
      <input
        type="submit"
        value="입력"
        className="btn"
        style={{
          display: "flex", width: '60px', alignItems: 'center',
          justifyContent: 'center', height: '39px', borderRadius: '5px',
          color: "grey", border: '1px solid #ddd', backgroundColor: '#ddd',
          cursor: 'pointer'
        }} />
    </form>
  )
}
