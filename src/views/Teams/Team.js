import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import { getTeamById } from '../../services/teams';
import { getUser } from '../../services/users';

function Team({
  match: {
    params: { id },
  },
}) {
  const [team, setTeam] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const session = getUser();

    if (session?.user) setCurrentUser(session.user);
  }, []);

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
      <p>{currentUser && <Link to={`/teams/${id}/edit`}>Edit Team</Link>}</p>
    </>
  );
}

export default Team;
