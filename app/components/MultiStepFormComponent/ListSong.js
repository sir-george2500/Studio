import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import ShowUploadSong from './ShowUploadSong';
import ListItemSeperator from '../ListItemSeperator';

const PAGE_SIZE = 4;

export default function ListSong({ songs = [], style }) {
  const [page, setPage] = React.useState(0);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setData(songs.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE));
  }, [page, songs]);

  console.log(data);
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <>
          <ShowUploadSong
            key={item.name}
            songName={item.name}
            progress={item.progress}
          />
          <ListItemSeperator />
        </>
      )}
      onEndReached={() => {
        if (data.length < songs.length) {
          setPage(page + 1);
        }
      }}
      onEndReachedThreshold={0.1}
    />
  );
}

const styles = StyleSheet.create({});
