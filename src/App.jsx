import React from "react";
import Background from "./component/Background";
import Form from "./component/Form";
import Complete from "./component/Complete";
import { motion} from "framer-motion";

function App() {
  const [formData, setFormData] = React.useState({
    name: "JANE APPLESEED",
    number: "0000 0000 0000 0000",
    mm: "00",
    yy: "00",
    cvc: "000",
  });
  const [isComplete, setIsComplete] = React.useState(false);

  return (
    <motion.main
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ duration: 0.7 }}
    
    className="flex max-xl:flex-col max-xl:items-center h-screen max-xl:h-full gap-80 max-xl:gap-20">
      <Background formData={formData}></Background>
      {isComplete ? (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="my-auto"
        >
          <Complete></Complete>
        </motion.div>
      ) : (
        <Form setFormData={setFormData} setIsComplete={setIsComplete}></Form>
      )}
    </motion.main>
  );
}

export default App;
