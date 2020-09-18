import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
         <header>
           <img src="https://avatars0.githubusercontent.com/u/10437121?s=460&u=be0f4f80922a7d091258ecdcbb08acc1ad1fc9f2&v=4" alt="Pedro Paulo"/>
           <div>
             <strong>Pedro Paulo</strong>
             <span>Química</span>
           </div>
         </header>
         <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br/><br/>
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="WhatsApp"/>
              Entrar em contato
            </button>
          </footer>
       </article>
  )
}

export default TeacherItem;