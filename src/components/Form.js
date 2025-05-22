import React from "react";

const Form = () => {
  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input type="text" placeholder="Entrez le titre d'un film" />
          <input type="submit" value="Rechercher" />
          <div className="btn-sort-container">
            <span id="goodToBad">Top</span>
            <span id="badToGood">Flop</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
