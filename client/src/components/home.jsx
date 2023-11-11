 export default function Home(){


return(
    <nav className="navbar navbar-light bg-light justify-content-between">
      <a className="navbar-brand">Home</a>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      <div className="container">
      <div className="row selection">
        <div className="col-md">Explore</div>
        <div className="col-md">Open to Work</div>
        <div className="col-md">Favorites</div>
        
      </div>
    </div>
    </nav>
)
 }