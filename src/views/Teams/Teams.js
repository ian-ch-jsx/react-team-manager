import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import { deleteTeamById, getTeams } from '../../services/teams';
import { getUser } from '../../services/users';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const session = getUser();

    if (session?.user) setCurrentUser(session.user);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getTeams();
      setTeams(resp);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleDelete = async ({ id, name }) => {
    const shouldDelete = confirm(`Are you sure you want to delete ${name}?`);

    if (shouldDelete) {
      await deleteTeamById(id);
      const resp = await getTeams();
      setTeams(resp);
    }
  };

  return (
    <>
      <Link to="/teams/new">Add New Team</Link>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1>Teams</h1>
          <table className="resource-table">
            <thead>
              <tr>
                <th>Team Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team) => (
                <tr key={team.id}>
                  <td>
                    <Link to={`/teams/${team.id}`}>{team.name}</Link>
                  </td>
                  <td>
                    <Link to={`/teams/${team.id}`}>
                      <button type="button" className="btn-view">
                        View
                      </button>
                    </Link>
                    {currentUser && (
                      <Link to={`/teams/${team.id}/edit`}>
                        <button type="button" className="btn-edit">
                          Edit
                        </button>
                      </Link>
                    )}
                    {currentUser && (
                      <button
                        type="button"
                        className="btn-delete"
                        onClick={() => handleDelete(team)}
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}

export default Teams;
