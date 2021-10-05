import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

    const [veri, setVeri] = useState("");
    const [tarih, setTarih] = useState();
    useEffect(() => {
        axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
            .then(res => setVeri(res.data[tarih]))
            .catch(err => console.log(err))

    }, veri, tarih);


    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto mt4">
                        <h2 className="text-center text-light display-3">Türkiye Coivd-19 Arama Motoru</h2>
                        <input type="text" placeholder="GG/AA/YY" className="form-control"
                            onChange={(e) => setTarih(e.target.value)} />

                        <table className="table  text-light mt-2">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Test Sayısı</th>
                                    <th scope="col">Hasta Sayısı</th>
                                    <th scope="col">Vefat Sayısı</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-white" className={veri === undefined ? "bg-danger" : "bg-success"}>
                                    <td scope="row">{veri === undefined ? "veri bekleniyor" : veri.date}</td>
                                    <td>{veri === undefined ? "veri bekleniyor" : veri.totalTests}</td>
                                    <td>{veri === undefined ? "veri bekleniyor" : veri.patients}</td>
                                    <td>{veri === undefined ? "veri bekleniyor" : veri.deaths}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
