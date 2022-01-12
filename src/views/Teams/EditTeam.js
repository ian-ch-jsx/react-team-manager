import { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import TeamForm from '../../components/teams/TeamForm';
import { getTeamById, updateTeamById } from '../../services/teams';

function EditTeam() {
  const [input, setInput] = useState({ name: '', city: '', state: '' });
  const [team, setTeam] = useState({ name: '', city: '', state: '' });
  const [alert, setAlert] = useState('');
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    setInput(team);
  }, [team]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getTeamById(id);
      setTeam(resp);
    };
    fetchData();
  }, [id]);

  const onChange = ({ target }) => {
    setInput((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const resp = await updateTeamById(team.id, {
        name: input.name,
        city: input.city,
        state: input.state,
      });
      history.push(`/teams/${resp[0].id}`);
    } catch (e) {
      setAlert(e.message ? e.message : 'Something went wrong :(');
    }
  };

  return (
    <>
      <Link to="/teams">Teams</Link> &raquo; <Link to={`/teams/${id}`}>{team.name}</Link> &raquo;{' '}
      <span>Edit</span>
      <br />
      <br />
      <p>{alert}</p>
      <TeamForm
        label="Edit Team"
        name={input.name}
        city={input.city}
        state={input.state}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </>
  );
}

export default EditTeam;
