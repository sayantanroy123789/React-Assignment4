import logo from './logo.svg';
// import './App.css';
import Card from './Card';

function App(props) {
  return (
    <div style={{display:"flex", flexWrap:"wrap"}}>
      <Card name="PINK" code="#EA4545" clg="#EA4545 "  textclg="#EA4545"/>
      <Card name="GRAY" code="#868686 " clg="#868686  "/>
      <Card name='BLACK' code="#2C2929" clg="#2C2929 "/>
      <Card name="GREEN" code="#99EF74" clg="#99EF74 "/>
      <Card name="RED" code="#F93A3A " clg="#F93A3A "/>
      <Card name="ORANGE" code="#F9AF62" clg="#F9AF62 "/>
      <Card name="YELLOW" code="#FEFD4F " clg="#FEFD4F "/>
      <Card name="LIGHT GRAY" code="#AFADAC " clg="#AFADAC  "/>
      <Card name="PURPLE" code="#E18CF5 " clg="#E18CF5 "/>
      <Card name="BROWN"  code="#DD8152" clg="#DD8152 "/>
      
      
    </div>
  );
}

export default App;
