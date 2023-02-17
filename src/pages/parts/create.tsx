import { MouseEvent, useState } from "react";

const CreatePart = () => {
  const [partName, setPartName] = useState<string>("");

  const handleFormSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const createResponse = await fetch(`/api/parts`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: partName,
        }),
      });

      if (!createResponse.ok) {
        throw Error("Something went wrong while creating the part");
      }

      const response = await createResponse.json();
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
