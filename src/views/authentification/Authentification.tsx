import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import Form from '../../components/form/Form';
import Modal from '../../components/modal/Modal';
import { authentificationProps } from '../../models/authentification';

export default function Authentification({
  formOptions,
  buttonText,
  link,
  linkText,
  questionText,
  errorMessage,
  loadingStatus,
}: authentificationProps) {
  return (
    <Modal isShowFooter={false}>
      {errorMessage && <p className="authentification__error">{errorMessage}</p>}
      <Form {...formOptions}></Form>
      <p className="authentification__text">
        {questionText} <Link to={link}>{linkText}</Link>
      </p>
      <div className="authentification__footer">
        <Button
          isDisabled={loadingStatus}
          type="submit"
          text={buttonText}
          formId={formOptions.formId}
          btnClass="authentification__button"
        />
      </div>
    </Modal>
  );
}
