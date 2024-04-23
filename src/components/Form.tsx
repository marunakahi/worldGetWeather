type FormProps = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
  city: string;
};

const Form = (props: FormProps) => {
  return (
    <form onSubmit={props.getWeather}>
      <input
        type="text"
        name="city"
        placeholder="japan"
        onChange={(e) => props.setCity(e.target.value)}
        value={props.city}
      />

      <button type="submit">Get Weather</button>
    </form>
  );
};

export default Form;
