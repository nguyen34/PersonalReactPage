import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert color="primary" onClose={() => setAlertVisibility(false)}>
          <span>Hello World</span>
        </Alert>
      )}
      <Button
        color="primary"
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        Click Me
      </Button>
    </div>
  );
}

export default App;
