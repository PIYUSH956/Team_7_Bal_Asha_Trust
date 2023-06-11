import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import JsPDF from "jspdf";
function getDateFromTimestamp(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-based, so add 1
    const day = date.getDate();
  
    // Format the date as desired
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  
    return formattedDate;
  }
  

const Detail = () => {

    const param = useParams();
    const [manager,setManager] = useState();
    const [root,setRoot] = useState();
    const [data,setData] = useState([]);
    const name = localStorage.getItem("child-name");
    const caseNumber = localStorage.getItem("case-number");
    const URL = process.env.REACT_APP_URL;
    const childID = param.id;
    console.log(childID);
    useEffect(() => {
        const handleCellClick = async () => {

            try {
                const result = await axios.post(URL + 
                    "/get-case-detail",
                    { childID }
                );
                const workerDetail = result.data.worker;
                const processDetail = result.data.process;
                const managerDetail = result.data.caseManager;
                setManager(managerDetail);
                setRoot(workerDetail);
                setData(processDetail);

                console.log(workerDetail, processDetail, managerDetail);
                // SHOW THIS IN PDF AS DOWNLOADABLE
            } catch (err) {
                alert(err.message);
            }
        };
        handleCellClick();

    }, [])


  const generatePdf = () => {
    try {
      const report = new JsPDF("portrait", "pt", [795.28, 1241.89]);

      report.html(document.querySelector("#report"), {}).then(() => {
        report.save();
      });
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const download = (e,value) => {
   
    var base64String = value;
    
    console.log(base64String);
    const byteCharacters = atob(base64String);
    const byteArrays = [];

    for (let i = 0; i < byteCharacters.length; i++) {
        byteArrays.push(byteCharacters.charCodeAt(i));
    }

    const byteArray = new Uint8Array(byteArrays);
    const blob = new Blob([byteArray], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
}



    return (<>
        <h1 onClick={generatePdf}>D</h1>
        <div  id="report" style={{ width: '210mm', height: '297mm', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: '20px' }}>
                <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Case Number: {caseNumber}</p>
                <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Child Name: {name}</p>
                <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Social Worker: {root != null ? root.username:""}</p>
                <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Case Manager:{manager != null ? manager.username:""}</p>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ccc' }}>Steps</th>
                        <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ccc' }}>Type</th>
                        <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ccc' }}>Completed On</th>
                        <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ccc' }}>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>{item.name}</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>{item.type}</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>{getDateFromTimestamp(item.date)}</td>
                            {item.type == "pdf"  ? <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }} onClick={(e)=>download(e,item.value)}>Download PDF</td> : <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>{item.value}</td>   } 
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>


    )

                    }

export default Detail;