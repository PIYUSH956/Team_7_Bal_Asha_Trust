import React, { useState } from 'react';
import {PDFDownloadLink, Document, Page, Image, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import {Grid, Typography, Paper, Container } from '@material-ui/core';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4',
      padding: 20
    },
    section: {
      flexGrow: 1
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bolder',
      marginBottom: 20
    },
    columnsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    column: {
      width: '45%',
      marginBottom: 10
    },
    imageContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 20
    },
    image: {
      width: 150,
      height: 150,
      objectFit: 'cover'
      
    }
  });


const PdfGenerator = (props) => {

  const MyDocument = () => (
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>{`Urgent Appeal: Help Reunite Missing Child - ${props.name}, Age ${props.age}`}</Text>
        <View style={styles.columnsContainer}>
          <View style={styles.column}>
            <Text>{props.name}, a {props.age}-year-old, has been separated from their parents and is currently residing at {props.shelter}.</Text>
            <Text> We urgently need your assistance to reunite this brave child with their family.</Text>
            <Text>{props.name}, as seen in the attached photograph, arrived at {props.shelter}, {props.district}, {props.district} on [Date of Admission].</Text>
            <Text> We are determined to find their parents and provide the loving reunion they long for.</Text>
            <Text>Please share any information that may help locate {props.name}'s parents. Contact {props.shelter} to share details. You may choose to remain anonymous.</Text>
          </View>
          <View style={styles.column}>
            <View style={styles.imageContainer}>
              {/* <Image src={props.image} style={styles.image} /> */}
            </View>
            <View>
              <Text>Share this article and the photograph on social media platforms to broaden the search. Let's come together as a community and bring joy to this deserving child by reuniting them with their family.</Text>
              <Text>Note: This article aims to reunite {props.name} with their parents. If you have any relevant information, please contact the provided contacts immediately. Let's unite and bring happiness to a child's life.</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
  );


  return (
    <Container maxWidth="sm">
      <Paper style={{ padding: 20, marginTop: 40 }}>
        <Grid container spacing={2}>
          
          <PDFDownloadLink document={<MyDocument />} fileName="news_article.pdf">
              {({ loading}) =>
                loading ? 'Generating PDF...' : 'Download PDF'
              }
          </PDFDownloadLink>
          
        </Grid>
      </Paper>
    </Container>
  );
};

export default PdfGenerator;
