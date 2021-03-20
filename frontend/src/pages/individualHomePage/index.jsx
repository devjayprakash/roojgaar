import NavBar from "../../components/navbar";
import Card from "../../components/maincard";

const IndiHPage = () => {
  return (
    <div className="contaiiner">
      <NavBar withSearch />

      <div className="mx-2 w-full mt-10 flex items-ceter justify-center border-b-2">
        <p className="border-b-4 border-blue-500 mr-5 font">Home</p>
        <p className="border-b-4 border-blue-500 font">Dashbord</p>
      </div>

      <div className="flex flex-wrap justify-center">
        <Card active />
        <Card />
        <Card /> <Card active />
        <Card />
        <Card /> <Card active />
        <Card />
        <Card /> <Card active />
        <Card />
        <Card />
      </div>
    </div>
  );
};
export default IndiHPage;
