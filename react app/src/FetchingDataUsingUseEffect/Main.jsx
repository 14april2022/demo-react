import React, { useEffect, useState } from "react";

function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);
  const [serachValue, setSearchValue] = useState("");
  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${serachValue}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setIsLoading(false);
        setDrinks(data.drinks);
      })
      .catch((err) => console.log(err));
  }, [serachValue]);

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  return (
    <div className="container">
      <h2 className="text-center py-3">Products</h2>
      <div>
        <input
          type="text"
          className="d-block mx-auto w-25 form-control"
          placeholder="Search For Products..."
          onChange={handleChange}
        />
      </div>
      {isLoading ? <h2>Loading...</h2> : null}
      <hr />
      {drinks === null && <h2>No Drink Found</h2>}
      {drinks !== null && <h6> Total Drinks : {drinks.length} </h6>}

      <div className="row">
        {drinks &&
          drinks.map((item) => {
            const { strDrinkThumb, strDrink, idDrink } = item;
            return (
              <div className="col-md-3 mb-3" key={idDrink}>
                <div className="card">
                  <img src={strDrinkThumb} alt="" className="card-img" />
                  <div className="card-body">
                    <h5>Name : {strDrink}</h5>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Main;
