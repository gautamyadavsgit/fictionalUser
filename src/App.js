import './App.css';
import Center from './components/Center';

const data = [
{
  id:"e1",
  name:"gautam",
  Age:"22",
},
{
  id:"e2",
  name:"gautam2",
  Age:"23",
},
{
  id:"e3",
  name:"gautam3",
  Age:"26",
},
{
  id:"e4",
  name:"gautam4",
  Age:"24",
},
{
  id:"e5",
  name:"gautam5",
  Age:"25",
},
];
function App() {

  return (
    <div className="background">
   <Center items={data} />
    </div>
      );
}

export default App;
