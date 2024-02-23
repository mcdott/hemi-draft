import "./App.css";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReadSim from "./components/ReadSim";
import FullScreenIframe from "./components/FullScreenIframe";
// import Preview from "./components/Preview";
import HemiPreview from "./components/HemiPreview";

function App() {
  return (
    <>
      {/* <h1>Hemi Draft</h1>
      <Tabs defaultValue='right' className='w-[400px]'>
        <TabsList>
          <TabsTrigger value='left'>Left</TabsTrigger>
          <TabsTrigger value='right'>Right</TabsTrigger>
        </TabsList>
      </Tabs> */}
      <ReadSim />
      <h1>-----------------component break----------------------------</h1>
      <HemiPreview />
      {/* <Preview pdfPath='src/assets/Braille Quick Reference.pdf' /> */}
      <h1>-----------------component break----------------------------</h1>

      <FullScreenIframe url='https://openprocessing.org/sketch/1619381/embed/?plusEmbedHash=Nzk4N2JjMDUyNTdiODZhYzlhZTgyNzEyMjAzM2M1NzFjNmY3ZGJhNGM3MWQ0ZTUyYjZkN2U3NjRjNjZiZmMzYTAzMDRlZjhlMzVkODIwNmY1NGM0YzMxYTk0OTg2MjVkZTEwMzBmNmMwYzE5MTdmYWE1OGM2MWRlZDEzNTA3MDRQdUJCSXZVdFlyTDlGM2o2ejk2WUY5QjFldHVhbDVndU9pbUhuUlFIbTVlR2ZEZ0RPdGVLM3RoQWF2RHJGZGpEOU95NEpoYWZnU1NyMUU1by9yTXQ0UT09&plusEmbedFullscreen=true' />
    </>
  );
}

export default App;
