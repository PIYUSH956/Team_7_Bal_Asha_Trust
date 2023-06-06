import React, { useState } from 'react';
import { Document, Page, Image, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import { TextField, Button, Grid, Typography, Paper, Container } from '@material-ui/core';
// import "../Css/PdfGenerator.css";

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
      width: 170,
      height: 170,
      objectFit: 'cover'
      
    }
  });


const PdfGenerator = () => {
  const [childName, setChildName] = useState('');
  const [age, setAge] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [pdfReady, setPdfReady] = useState(false);

  const handleChildNameChange = e => {
    setChildName(e.target.value);
  };

  const handleAgeChange = e => {
    setAge(e.target.value);
  };

  const handlePhotoChange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setPhotoUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const generatePdf = () => {
    setPdfReady(true);
  };

  const MyDocument = () => (
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>{`Urgent Appeal: Help Reunite Missing Child - ${childName}, Age ${age}`}</Text>
        <View style={styles.columnsContainer}>
          <View style={styles.column}>
            <Text>{childName}, a {age}-year-old, has been separated from their parents and is currently residing at [Orphanage Name]. We urgently need your assistance to reunite this brave child with their family.</Text>
            <Text>{childName}, as seen in the attached photograph, arrived at [Orphanage Name] on [Date of Admission]. We are determined to find their parents and provide the loving reunion they long for.</Text>
            <Text>Please share any information that may help locate {childName}'s parents. Contact [Orphanage Name] at [Orphanage Contact Information] or [Police Station Contact Information] to share details. You may choose to remain anonymous.</Text>
          </View>
          <View style={styles.column}>
            <View style={styles.imageContainer}>
              <Image src={photoUrl} style={styles.image} />
            </View>
            <View>
              <Text>Share this article and the photograph on social media platforms to broaden the search. Let's come together as a community and bring joy to this deserving child by reuniting them with their family.</Text>
              <Text>Note: This article aims to reunite {childName} with their parents. If you have any relevant information, please contact the provided contacts immediately. Let's unite and bring happiness to a child's life.</Text>
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
        <Typography variant="h4" align="center" gutterBottom>
          News Article Generator
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Child Name"
              value={childName}
              onChange={handleChildNameChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Age"
              value={age}
              onChange={handleAgeChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <label htmlFor="upload-photo" style={{ display: 'block' }}>
                Child photo:
            </label>
            <input
                id="upload-photo"
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
            />
           </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={generatePdf}
              fullWidth
            >
              Generate PDF
            </Button>
          </Grid>
          {pdfReady && (
            <Grid item xs={12}>
              <PDFViewer width="100%" height={500}>
                <MyDocument />
              </PDFViewer>
            </Grid>
          )}
        </Grid>
      </Paper>
    </Container>
  );
};

export default PdfGenerator;
