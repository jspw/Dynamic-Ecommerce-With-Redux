import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import ReactSearchAutocomplete from "react-search-autocomplete/dist/components/ReactSearchAutocomplete";

export default function SearchBar() {
  const { products } = useSelector((state) => state.products);
  const history = useHistory();

  return (
    <div className="container ml-auto mr-auto mt-4">
      <ReactSearchAutocomplete
        items={products || []}
        fuseOptions={{ keys: ["title", "category"] }}
        onSelect={(e) => {
          history.push(`/product/${e.title}`);
        }}
        autoFocus
        resultStringKeyName="title"
        styling={{
          height: "40px",
          boxShadow: "none",
          placeHolder: "Search",
        }}
      />
    </div>
  );
}
