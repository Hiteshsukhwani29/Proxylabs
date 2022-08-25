import Search from "../../components/Searchbar";
import LabDetailWrapper from "../../components/LabDetailsWrapper";
import PageIntro from "../../components/PageIntro";

function index() {
  return (
    <div className="w-screen bg-bg1">
      <Search />
      <LabDetailWrapper />
    </div>
  );
}

export default index;
