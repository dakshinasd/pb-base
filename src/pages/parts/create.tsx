import { MouseEvent, useContext, useState } from "react";

import { AuthContext } from "../../AuthContext";

const CreatePart = () => {
  const [partName, setPartName] = useState<string>("");
  const API = process.env.NEXT_PUBLIC_API_PATH;
  const { user } = useContext(AuthContext);

  const handleFormSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const createResponse = await fetch(`${API}/collections/parts/records`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: user?.token || null,
        },
        body: JSON.stringify({
          name: partName,
        }),
      });

      if (!createResponse.ok) {
        throw Error("Something went wrong while creating the part");
      }

      const response = await createResponse.json();
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      Create part
      <form action="">
        <input
          type="text"
          onChange={(e) => setPartName(e.target.value)}
          placeholder="Part Name"
        />
        <button onClick={handleFormSubmit}>Save</button>
      </form>
    </div>
  );
};

export default CreatePart;
