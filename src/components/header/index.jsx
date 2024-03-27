import React from "react";
import "./styles.css";
import SelectDropdown from "../dropdown";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a href="/home">
          <img
            src="https://th.bing.com/th/id/R.8afefe7027abe2e1a16e48a24eb3a407?rik=%2fFzbIZSdWtYD8g&riu=http%3a%2f%2finct.info%2fen%2fimages%2finstituicao%2funifesp.png&ehk=6%2bHIJsrMVLdVVapmbJJVD8zn4CtxXrAIX%2fA%2fay7%2bp5Q%3d&risl=&pid=ImgRaw&r=0"
            alt="Logo da Universidade"
          />
        </a>
        <div className="header-options">
          <div>
            <SelectDropdown />
          </div>
          <div>
            <button className="button-site">Area Professor</button>
          </div>
          <div>
            <button className="button-site">Area Aluno</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
