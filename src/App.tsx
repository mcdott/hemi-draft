import "./App.css";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReadSim from "./components/ReadSim";

function App() {
  return (
    <>
      <h1>Hemi Draft</h1>
      <Tabs defaultValue='right' className='w-[400px]'>
        <TabsList>
          <TabsTrigger value='left'>Left</TabsTrigger>
          <TabsTrigger value='right'>Right</TabsTrigger>
        </TabsList>
      </Tabs>
      <ReadSim />
    </>
  );
}

export default App;
