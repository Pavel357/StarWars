import HomePage from 'containers/HomePage';
import PeoplePage from 'containers/PeoplePage';
import NotFoundPage from 'containers/NotFoundPage';
import PersonPage from 'containers/PersonPage';
import FavoritePage from 'containers/FavoritePage';
import SearchPage from 'containers/SearchPage';
import ErrorMessage from 'components/ErrorMessage';


const routesConfig = [
  {
    path: '/',
    component: <HomePage />
  },
  {
    path: '/people',
    component: <PeoplePage />
  },
  {
    path: '/people/:id',
    component: <PersonPage />
  },
  {
    path: '/favorites',
    component: <FavoritePage />
  },
  {
    path: '/search',
    component: <SearchPage />
  },
  {
    path: '/fail',
    component: <ErrorMessage />
  },
  {
    path: '/not-found',
    component: <NotFoundPage />
  },
  {
    path: '*',
    component: <NotFoundPage />
  }
]

export default routesConfig;