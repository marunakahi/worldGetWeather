import { ResultsState } from "../App";

interface ResultsProps {
  results: ResultsState; 
}
const Results = (props: ResultsProps) => {
  return (
    <>
      {props.results.country && (
        <>
          <div className="results-country">{props.results.country}</div>
          <div className="results-cityName">{props.results.cityName}</div>
          <div className="results-temperature">
            {props.results.temperature}
            <span>°C</span>
          </div>
          <div className="results-condition">
            <img src={props.results.icon} alt="icon" />
            <span>{props.results.conditionText}</span>
          </div>
        </>
      )}
    </>
  );
};
export default Results;
