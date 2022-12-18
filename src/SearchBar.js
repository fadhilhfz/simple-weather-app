import "./SearchBar.css";

export default function SearchBar({ onSubmitCity, onChangeCity }) {
  return (
    <div className="SearchBar">
      <div className="SearchBar-form">
        <div className="SearchBar-title">Weather in your city...</div>
        <div className="SearchBar-input">
          <form action="" onSubmit={onSubmitCity}>
            <input type="text" placeholder="Depok..." onChange={onChangeCity} />
            <button className="SearchBar-button">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}
