const Search = () => {

  const handleCange = (event)=>{
      console.log(event.target.value)
  }

  return (
    <div className="flex justify-center mt-10 mx-10 lg:mx-0">
  <input
    onChange={handleCange}
    type="search"
    name="search"
    id="search"
    placeholder="Search..."
    className="border border-gray-300 p-3 text-black text-base rounded shadow-md w-full max-w-4xl"
  />
</div>
  );
};

export default Search;
