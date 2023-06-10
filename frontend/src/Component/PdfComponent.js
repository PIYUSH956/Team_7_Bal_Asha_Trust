import JsPDF from "jspdf";
import axios from 'axios'
import { useEffect } from "react";
const PdfComponent = () => {


  console.log("INSIDE PDF");


  const generatePdf = () => {
    try {
      const report = new JsPDF("landscape", "pt", [795.28, 1241.89]);

      report.html(document.querySelector("#report"), {}).then(() => {
        report.save();
      });
    } catch (err) {
      alert(err.response.data.message);
    }
  };


  useEffect(() => {
    const renderPdf = async () => {
     

      try {
        const result = await axios.post(
          "http://localhost:4000/api/get-all-child-data",
        );

        console.log(result);
        // SHOW THIS IN PDF AS DOWNLOADABLE
      } catch (err) {
        alert(err.message);
      }
    }
    renderPdf();

  }, []);

  return <><div/> <h1>AAAAAAA</h1> </>;
};

export default PdfComponent;
