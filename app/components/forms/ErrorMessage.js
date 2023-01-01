import React from 'react';
import {StyleSheet} from 'react-native';
import AppText from '../AppText';

function ErrorMessage({ error , touch }) {
    if (!touch||!error) return null
    return (
        <AppText style={styles.error}>{error}</AppText>
  );
}

const styles = StyleSheet.create({
    container: {},
    error: {
        color:"red",
    }
    
});

export default ErrorMessage;