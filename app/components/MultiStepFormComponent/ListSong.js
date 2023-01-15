import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import ShowUploadSong from './ShowUploadSong'
import ListItemSeperator from '../ListItemSeperator'
import colors from '../../config/colors';

const numberOfItemsPerPageList = [3];

const ListSong = ({songs=[],style}) => {

// state variable to keep track of current page
const [page, setPage] = React.useState(0);

// state variable to keep track of active page
const [activePage, setActivePage] = React.useState(1);

// state variable to keep track of number of items per page
const [numberOfItemsPerPage, onItemsPerPageChange] = React.useState(numberOfItemsPerPageList[0]);

// calculate starting and ending index of current page
const from = page * numberOfItemsPerPage;
const to = Math.min((page + 1) * numberOfItemsPerPage, songs.length);

// create an array of page numbers
const pageNumbers = [];
for (let i = 1; i <= Math.ceil(songs.length / numberOfItemsPerPage); i++) {
    pageNumbers.push(i);
}

// function to handle when a page number is pressed
const onPageNumberPress = number => {
    setPage(number - 1);
    setActivePage(number);
};

// reset the page when number of items per page changes
React.useEffect(() => {
    setPage(0);
}, [numberOfItemsPerPage]);

// create an array of songs for the current page
const songsForCurrentPage = songs.slice(from, to);


return (
<View style={styles.song}>
  
{songsForCurrentPage.map(song => (
  <View key={song.id}>
    <ShowUploadSong
      songName={song.name}
      progress={song.progress}
    />
    <ListItemSeperator  />
  </View>
))}
<View style={styles.pagination}>
<Text
  style={styles.prevButton}
  onPress={() => {
    if (page > 0) {
      setPage(page - 1);
      setActivePage(activePage - 1);
    }
  }}
>
  {'<'}
</Text>
{pageNumbers.map(number => (
<Text
  style={[
    styles.pageNumber,
    activePage === number && styles.pageNumberActive,
  ]}
  key={number}
  onPress={() => onPageNumberPress(number)}
  onPressIn={() => {}}
  onPressOut={() => {}}
>
  {number}
</Text>
))}
<Text
  style={styles.nextButton}
  onPress={() => {
    if (page < pageNumbers.length - 1) {
      setPage(page + 1);
      setActivePage(activePage + 1);
    }
  }}
>
  {'>'}
</Text>
</View>
</View>
)
}

const styles = StyleSheet.create({

song:{

},
pagination: {
display: 'flex',
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
backgroundColor:colors.light,

borderRadius:10,
marginTop:5,
marginLeft:5,
marginRight:18,
borderWidth: 1,
borderColor: colors.dark
},
pageNumber: {
margin: 10,
fontSize: 16,
color:colors.black,
borderRadius:10,

backgroundColor:colors.light,
},
pageNumberActive: {
fontWeight: 'bold',
backgroundColor: colors.primary
},
prevButton: {
fontWeight: 'bold',
color: colors.black,
},
nextButton: {
fontWeight: 'bold',
color: colors.black,
}
});

export default ListSong;