import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Plot from "react-plotly.js";

const PlotContainer = styled.div`
  background-color: #000000;
  overflow-x: scroll;
  height: 100vh;
  display: flex;
  align-items: center;
  padding-inline: 1rem;
`;

function PZ({ pvt_data }) {
  const plot_data = useRef([]);
  const calc_data = useRef([]);
  const GIIP = useRef();
  

  calc_data.current = [pvt_data.test1, pvt_data.test2, pvt_data.test3];
//   console.log(calc_data.current);
  plot_data.current = [];

  //p/z calculations
  calc_data.current.forEach((value) => {
    if(value.valid){
        let pz_data = [];
    let prod_data = [];
    for (let i = 0; i < 5; i++) {
      pz_data.push(Number(value.pressure[i]) / Number(value.zfactor[i]));
      prod_data.push(Number(value.production[i]))
    }
    pz_data.sort((a,b)=>b-a);
    prod_data.sort((a,b)=>a-b);
    const randL = Math.floor(Math.random()*3);
    const randG = Math.floor(Math.random()*3)+2;
    const m = (pz_data[randG] - pz_data[randL])/(prod_data[randG] - prod_data[randL]);
    let tempX = 0;
    let tempY = pz_data[0];
    const c = pz_data[0];
    pz_data = [];
    prod_data = [];
    while(true){
      prod_data.push(tempX);
      pz_data.push(tempY);
      tempY -= 60;
      tempX = (tempY - c)/ m;
      if(tempY <= 0){
        pz_data.push(0)
        prod_data.push(-c/m);
        GIIP.current = prod_data[prod_data.length-1].toFixed(2);
        break; 
      }
    }
    
    console.log(prod_data)
    console.log(pz_data)
    console.log(m);

    
    plot_data.current.push(
        {
            x: prod_data,
            y: pz_data,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "#000" },
            line: { color: "black" },
          }
    ) 
    }
  });

  useEffect(() => {}, [pvt_data]);
  return (
    <PlotContainer>
      <Plot
        style={{ height: "95%" }}
        data={plot_data.current}
        layout={{
          width: 700,
          title: { text: "P/Z Plot (PET 516 GROUP 4)" },
          autosize: true,
          paper_bgcolor: "#f46060",
          plot_bgcolor: "#de8c8c",
          xaxis: {
            title: {
              text: "Cummulative Gas Production (MMSCF)," + ` GIIP = ${GIIP.current} MMSCF`,
              font: { color: "#000" },
            },
            tickfont: { color: "#000" },
          },
          yaxis: {
            title: { text: "P/Z (psia)", font: { color: "#000" } },
            tickfont: { color: "#000" },
          },
        }}
        config={{ responsive: true }}
      />
    </PlotContainer>
  );
}

export default PZ;
