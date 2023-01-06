import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { StyleSheet, View } from 'react-native'
import ShowUploadSong from './ShowUploadSong'
import ListItemSeperator from '../ListItemSeperator'

const numberOfItemsPerPageList = [3];

const ListSong = ({songs=[],style}) => {
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPage, onItemsPerPageChange] = React.useState(numberOfItemsPerPageList[0]);
  const from = page * numberOfItemsPerPage;
  const to = Math.min((page + 1) * numberOfItemsPerPage, songs.length);

  React.useEffect(() => {
     setPage(0);
  }, [numberOfItemsPerPage]);

  const songsForCurrentPage = songs.slice(from, to);

  return (
    <View style={style}>
      {songsForCurrentPage.map(song => (
        <>    
        <ShowUploadSong
          key={song.name}
          songName={song.name}
          progress={song.progress}
        />
        <ListItemSeperator />
        </>
      ))}
      <DataTable>
        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(songs.length / numberOfItemsPerPage)}
          onPageChange={page => setPage(page)}
          label={`${from + 1}-${to} of ${songs.length}`}
          showFastPaginationControls
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={numberOfItemsPerPage}
          onItemsPerPageChange={onItemsPerPageChange}
          selectPageDropdownLabel={'Rows per page'}
        />
      </DataTable>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ListSong;
