import { useLoaderData } from "react-router-dom";
import DisplayDonar from "../../components/displayDonarList/DisplayDonar";

const DonarList = () => {
  const donars = useLoaderData();

  return (
    <div className="grid md:grid-cols-4 container mx-auto gap-5 mt-[50px]">
      {donars.map((donar) => (
        <DisplayDonar key={donar.donar_id} allDonar={donar} />
      ))}
    </div>
  );
};

export default DonarList;
<h1>Donar List</h1>;
