import React from 'react';

export default ({person}) => (
  
    <div style={{"text-align":"center","margin":"0px auto","box-shadow": "0 0 10px rgba(0,0,0,0.5)", width: "500px", "border-radius":"30px"}}>
    <p style={{"padding":"20px 0","background-color":"rgb(40, 3, 253)",color:"white", "text-align":"center","border-top-left-radius":"30px","border-top-right-radius":"30px"}}>Выбран пользователь <b>{person.firstName + ' ' + person.lastName}</b></p>
    

    <p>Адрес проживания: <b>{person.address.streetAddress}</b></p>
    <p>Город: <b>{person.address.city}</b></p>
    <p>Провинция/штат: <b>{person.address.state}</b></p>
    <p>Индекс: <b>{person.address.zip}</b></p>

  </div>
)