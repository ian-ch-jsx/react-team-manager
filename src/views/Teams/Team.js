import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import { getTeamById } from '../../services/teams';

function Team({
  match: {
    params: { id },
  },
}) {
  const [team, setTeam] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getTeamById(id);
      setTeam(resp);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  return loading ? (
    <Loading />
  ) : (
    <>
      <Link to="/teams">Teams</Link> &raquo; <span>{team.name}</span>
      <h1>{team.name}</h1>
      <p>
        {team.city}, {team.state}
      </p>
      <p>
        <Link to={`/teams/${id}/edit`}>Edit Team</Link>
      </p>
    </>
  );
}

export default Team;
