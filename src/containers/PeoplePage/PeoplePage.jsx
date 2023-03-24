import React, { useEffect, useState } from 'react';

import { getApiResource, changeHTTP } from 'utils/network';
import { API_PEOPLE } from 'constants/api';
import { getPeopleId, getPeopleImage, getPeoplePageId } from 'services/getPeopleData';
import PeopleList from 'components/PeoplePage/PeopleList';
import { withErrorApi } from 'hoc-helpers/withErrorApi';
import { useQueryParams } from 'hooks/useQueryParams';
import PeopleNavigation from 'components/PeoplePage/PeopleNavigation';

import styles from './PeoplePage.module.css';;


const PeoplePage = ({setErrorApi}) => {
  const [people, setPeople] = useState([]);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [couterPage, setCouterPage] = useState(1);
  

  const query = useQueryParams();
  const queryPage = query.get('page');
  
  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map(({name, url}) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
  
        return {
          id,
          name,
          img
        }
      });

      setPeople(peopleList);
      setPrevPage(changeHTTP(res.previous));
      setNextPage(changeHTTP(res.next));
      setCouterPage(getPeoplePageId(url));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  }

  useEffect(() => {
    getResource(API_PEOPLE+queryPage);
  }, [])

  return (
    <>
      <PeopleNavigation
        getResource={getResource}
        prevPage={prevPage}
        nextPage={nextPage}
        couterPage={couterPage}
      />
      { people.length && <PeopleList people={people} /> }
    </> 
  );
};

export default withErrorApi(PeoplePage);