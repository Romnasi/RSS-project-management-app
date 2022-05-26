import ProcessingWrapper from '../../components/processingWrapper/ProcessingWrapper';
import { Methods } from '../../const/APIMethoods';
import { AppRoute } from '../../const/routes';
import { useAxios } from '../../hooks/useAxios';
import { TBoard } from '../../models/board';
import BoardPreview from './BoardPreview/BoardPreview';

function Boards() {
  const { data, isLoading, isError, request } = useAxios({
    url: AppRoute.BOARDS,
    method: Methods.GET,
  });

  const boards = data as TBoard[];
  return (
    <div className="boards">
      <div className="boards__list">
        <ProcessingWrapper isLoading={isLoading} isError={isError} errortext="error">
          {boards?.map((board) => {
            return <BoardPreview {...board} key={board.id} updateBoards={request} />;
          })}
        </ProcessingWrapper>
      </div>
    </div>
  );
}

export default Boards;
