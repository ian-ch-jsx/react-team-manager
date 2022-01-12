import './TeamForm.css';

function TeamForm({ label, name, city, state, onChange, onSubmit }) {
  return (
    <fieldset className="team-form">
      <legend>{label || 'Team Form'}</legend>

      <form onSubmit={onSubmit}>
        <label htmlFor="name">Team Name: </label>
        <input id="name" name="name" type="text" value={name} onChange={onChange} />

        <label htmlFor="city">City: </label>
        <input id="city" name="city" type="text" value={city} onChange={onChange} />

        <label htmlFor="state">State: </label>
        <input id="state" name="state" type="text" value={state} onChange={onChange} />

        <input type="submit" value={label || 'Submit'} />
      </form>
    </fieldset>
  );
}

export default TeamForm;
