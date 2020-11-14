import React from 'react';

import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews(props) {
    React.useEffect(() => {
        props.setSavedNewsPageActive();
    });

    React.useEffect(() => {
        props.getArticles();
    }, [props]);

    return (
      <>
          {
              props.savedNews.length > 0
                ?
                <>
                    <SavedNewsHeader savedNews={props.savedNews} sortedKeywords={props.sortedKeywords} />
                    <NewsCardList savedNews={props.savedNews} onDeleteButtonClick={props.onDeleteButtonClick} />
                </>
                :
                <p>Пока нет сохранённых статей</p>
          }
      </>
    )
}

export default SavedNews;
