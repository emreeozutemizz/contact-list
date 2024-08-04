import { useState, useEffect } from 'react'

const initalFormValues = { fullname: "", phone_number: "" }

function Form({addContact, contacts}) {
  
  const [form, setForm] = useState(initalFormValues);
  useEffect(() => {
    setForm(initalFormValues)
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
      addContact([...contacts, form]);
     
    
  }
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input name='fullname'
        placeholder='Full Name'
        onChange={onChangeInput}
        value={form.fullname} />
      </div>
      <div>
        <input name='phone_number'
        placeholder='Phone Number'
        onChange={onChangeInput}
        value={form.phone_number}    />
      </div>
      <div>
        <button className='btn'>Add</button>
      </div>
    </form>

  )
}

export default Form
