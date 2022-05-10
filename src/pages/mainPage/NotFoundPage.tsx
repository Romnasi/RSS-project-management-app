import { AppRoute } from '../../const/routes';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <>
      <h1 className="glitch" data-text="404">
        404
      </h1>
      <p className="glitch glitch--sub" data-text="Извините страница не найдена">
        Извините страница не найдена
      </p>
      <Link className="btn btn--to-main" to={AppRoute.MAIN}>
        Перейти на главную
      </Link>
    </>
  );
}
