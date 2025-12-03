import { Card, Button, Input } from "antd";
import { useState } from "react";


const Kebeles = ({ onSelect }) => {
  const kebeleList = [
    { id: 1, name: "Kebele 1" },
    { id: 2, name: "Kebele 2" },
    { id: 3, name: "Kebele 3" },
    { id: 4, name: "Kebele 4" },
    { id: 5, name: "Kebele 5" },
  ];

  return (
    <Card
      style={{
        backgroundColor: "#ffffff",
        width: "50%",
        margin: "0 auto",
        padding: 20,
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center",
      }}
    >
      <h2 className="text-xl font-bold mb-4">Select a Kebele</h2>

      <div className="flex flex-row gap-3 flex-wrap justify-center w-full">
        {kebeleList.map((kebele) => (
          <Card
            key={kebele.id}
            style={{ width: "120px" , height : "200px" }}
            hoverable
            className="cursor-pointer text-center"
            onClick={() => onSelect(kebele)}
          >
            {kebele.name}
          </Card>
        ))}
      </div>
    </Card>
  );
};


const KebeleForm = ({ selectedKebele }) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!selectedKebele) return;

    alert(
      `Submitted for: ${selectedKebele.name}\nValue: ${value}`
    );

    setValue("");
  };

  return (
    <Card style={{ width: "50%" }}>
      <h2 className="text-xl font-bold mb-4">
        {selectedKebele
          ? `Form for ${selectedKebele.name}`
          : "Please select a kebele"}
      </h2>

      {selectedKebele && (
        <div className="flex flex-col gap-4">
          <Input
            placeholder="Enter info"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <Button
            type="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      )}
    </Card>
  );
};


const Forms = () => {
  const [selectedKebele, setSelectedKebele] = useState(null);

  return (
    <div className="w-full flex flex-row rounded-xl bg-gray-100 p-6 gap-6">
      <Kebeles onSelect={setSelectedKebele} />
      <KebeleForm selectedKebele={selectedKebele} />
    </div>
  );
};

export default Forms;
