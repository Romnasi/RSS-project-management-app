import React, { useState } from 'react';
import * as yup from 'yup';
import ButtonWithModalForm from '../../components/buttonWithModalForm/ButtonWithModalForm';
import Loader from '../../components/loader/loader';
import { useAxios } from '../../hooks/useAxios';
import { TBoard } from '../../models/board';
import BoardPreview from './BoardPreview/BoardPreview';

const schema = yup
  .object()
  .shape({
    title: yup.string().trim().required(),
  })
  .required();

const initialValues = {
  title: '',
};

const fields = [
  //TODO разобраться с полями
  { name: 'title', errorMessage: 'Title is required', placeholder: 'Board Title' },
];

const formOptions = {
  schema,
  initialValues,
  fields,
};

function Boards() {
  const { data, isLoading, isError, request } = useAxios({
    url: `/boards`,
    method: 'get',
  });

  const boards = data as TBoard[];
  const [isModalActive, setIsModalActive] = useState(false);
  function createBoardHandler(value: typeof schema) {
    request({
      data: value,
      method: 'post',
      url: `/boards`,
    });
    setIsModalActive(false);
    request();
  }
  function deleteBoardHandler(value: typeof schema) {}

  if (isError) return <p>Error</p>;
  if (isLoading) return <Loader />;
  return (
    <div className="boards">
      <div className="boards_menu">
        <ButtonWithModalForm
          submitBtnName="Create Board"
          modalState={{ isModalActive, setIsModalActive }}
          buttonOptions={{
            btnClass: 'boards_create__btn',
            text: 'Add Board',
          }}
          formOptions={{
            ...formOptions,
            onSubmit: (values) => createBoardHandler(values),
            buttonOptions: {},
          }}
        />
      </div>
      <div className="boards_wrapper">
        {boards &&
          boards.map((board) => {
            return <BoardPreview {...board} key={board.id} />;
          })}
      </div>
    </div>
  );
}

export default Boards;
