import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { useDeleteClient } from '../mutations/useDeleteProject';

export default function DeleteProjectButton({ projectId }) {
  console.log('first:', projectId);
  const navigate = useNavigate();

  const [deleteProject] = useDeleteClient();

  const handleOnDel = () => {
    deleteProject({
      variables: {
        id: projectId,
      },
      onCompleted: navigate('/'),
    });
  };

  return (
    <div className="d-flex mt-5 ms-auto">
      <button className="btn btn-danger m-2" onClick={handleOnDel}>
        <FaTrash className="icon" /> Delete Project
      </button>
    </div>
  );
}
