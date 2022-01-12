import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import TeamForm from '../../components/teams/TeamForm';
import { createTeam } from '../../services/teams';

function AddTeam() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [alert, setAlert] = useState('');
  const history = useHistory();

  const onChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        return setName(target.value);
      case 'city':
        return setCity(target.value);
      case 'state':
        return setState(target.value);
      default:
        return false;
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const resp = await createTeam({ name, city, state });
      history.push(`/teams/${resp[0].id}`);
    } catch (error) {
      setAlert(error.message);
    }
  };

  return (
    <>
      <Link to="/teams">Teams</Link> &raquo; <span>Add New</span>
      <br />
      <br />
      <p>{alert}</p>
      <TeamForm
        label="Add Team"
        name={name}
        city={city}
        state={state}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </>
  );
}

export default AddTeam;
