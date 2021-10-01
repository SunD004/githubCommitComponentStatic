import './App.css';

const months = [
  "Dec",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
]

const days = [
  "Mon",
  "Wed",
  "Fri"
]

const squares = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
]

const greyColor = [
  "#096a09", //vert sombre
  "#149414", //Vert claire
  "#b7d5ac", //gris perle
  "#14540d", //très sombre
]

function App() {
  return (
    <div className="App">
      <div>
        {/* Header part */}
        <div className="horizontalDiv">
          {months.map((month, idx) => {
            return <p style={{ marginLeft: idx === 0 ? 30 : 50, fontSize: 12, fontWeight: 'bold' }}>{month}</p>
          })}
        </div>
        {/* Left part */}
        <div className="horizontalSquareDiv">
          <div className="verticalDiv">
            {days.map((day) => {
              return <p style={{ marginTop: 5, fontSize: 12, fontWeight: 'bold' }}>{day}</p>
            })}
          </div>
          <div className="horizontalSquareDiv" style={{ marginLeft: 20 }}>
            {squares.map((_, idx) => {
              return (<div className="verticalSquareDiv" style={{ marginLeft: idx % 4 === 0 && 12 }}>
                <div className="square" style={{ backgroundColor: greyColor[Math.floor(Math.random() * greyColor.length)] }} />
                <div className="square" style={{ backgroundColor: greyColor[Math.floor(Math.random() * greyColor.length)] }} />
                <div className="square" style={{ backgroundColor: greyColor[Math.floor(Math.random() * greyColor.length)] }} />
                <div className="square" style={{ backgroundColor: greyColor[Math.floor(Math.random() * greyColor.length)] }} />
                <div className="square" style={{ backgroundColor: greyColor[Math.floor(Math.random() * greyColor.length)] }} />
                <div className="square" style={{ backgroundColor: greyColor[Math.floor(Math.random() * greyColor.length)] }} />
                <div className="square" style={{ backgroundColor: greyColor[Math.floor(Math.random() * greyColor.length)] }} />
              </div>)
            })}
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
