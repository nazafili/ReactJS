import { useState } from 'react';
import Input from '../Input/Input';

const Form = () => {
  // const [formValue, setFormValue] = useState();
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const handleChange = (evento) => {
    console.log(evento.target.value);
    setInputEmail(evento.target.value);
  };

  const handleChangePassword = (evento) => {
    console.log(evento.target.value);
    setInputPassword(evento.target.value);
  }

  return (
    <form>
      <Input placeholder="Email" type="email" value={inputEmail} change={handleChange} />
      <Input placeholder="Password" type="password" value={inputPassword} change={handleChangePassword} />

    </form>

    

    
    )

    

};

export default Form;