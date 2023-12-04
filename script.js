

const componentHeight = (h, sh) => {
	return(
		<div className="form-group"> 
			<label htmlFor="height">Insert your height(m)</label>
			<input id="height" className="form-control" type="text" 
value={h===0 ? '' : h} onChange={(e) => sh(e.target.value)} 
name="height" placeholder="Insert your height(m)"/>
		</div>
	);
}

const componentWeight = (w, sw) => {
	return(
		<div className="form-group"> 
			<label htmlFor="weight">Insert your weight(kg)</label>
			<input id="weight" className="form-control" type="text" 
value={w===0 ? '' : w} onChange={(e) =>sw(e.target.value)} 
name="weight" placeholder="Insert your weight(kg)"/>
		</div>
	);
}

const componentCalc = (h, w, r, sr) => {
	const calc = () =>{
		sr(w/(h*h));
	}
	return(
		<div>
			<h4>Result</h4>
			<h3 id="result">{r.toFixed(2)}</h3>
			<button id="btn-check" className="btn btn-block btn_check" type="button" onClick={calc}>
				Calculate
			</button>
		</div>
	);
}

function App(){
	const [height, setHeight] = React.useState(0);
	const [weight, setWeight] = React.useState(0);
	const [result, setResult] = React.useState(0);

	return(
		<>
			{componentHeight(height, setHeight)}
			{componentWeight(weight, setWeight)}
			{componentCalc(height, weight, result, setResult)}
		</>
	);
}

ReactDOM.render(<App/>, 
document.getElementById('app'));