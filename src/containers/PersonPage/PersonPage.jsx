import React, { useEffect, useState, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getApiResource } from 'utils/network';
import { API_PERSON } from 'constants/api';
import { withErrorApi } from 'hoc-helpers/withErrorApi';
import { getPeopleImage } from 'services/getPeopleData';
import PersonInfo from 'components/PesonPage/PersonInfo';
import PersonPhoto from 'components/PesonPage/PersonPhoto';
import PersonLinkBack from 'components/PesonPage/PersonLinkBack';
import UiLoading from 'components/UI/UiLoading';


import styles from './PersonPage.module.css';

const PersonFilms = React.lazy(() => import('components/PesonPage/PersonFilms'));


const PersonPage = ({ setErrorApi }) => {

  const { id } = useParams();
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState([]);
  const [personFavorite, setPersonFavorite] = useState(false);

  const storeData = useSelector(state => state.favoriteReducer);

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);

      storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);
      
      if (res) {
        setPersonInfo([
          { title: 'Height',data: res.height },
          { title: 'Mass',data: res.mass },
          { title: 'Hair Color',data: res.hair_color },
          { title: 'Skin Color',data: res.skin_color },
          { title: 'Eye Color',data: res.eye_color },
          { title: 'Birth Year',data: res.birth_year },
          { title: 'Gender',data: res.gender }
        ]);

        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id));

        res.films.length && setPersonFilms(res.films);

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }

    })();
  }, [])

  return (
    <> 
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>

        <div className={styles.container}>
          <PersonPhoto
            personPhoto={personPhoto}
            personName={personName}
            personId = {id}
            personFavorite={personFavorite}
            setPersonFavorite={setPersonFavorite}
          />

          {personInfo && (
            <PersonInfo 
              personInfo={personInfo}
            />
          )}

          {personFilms.length && (
            <Suspense fallback={<UiLoading />}>
              <PersonFilms 
                personFilms={personFilms} 
              />
            </Suspense>
          )}
        </div>
        
      </div>
    </>
  );
};

export default withErrorApi(PersonPage);