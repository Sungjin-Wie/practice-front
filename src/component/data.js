import React from "react";
// import useRequest from "./request";
import useAxios from "axios-hooks";
import { Link } from "react-router-dom";
import Base64 from "../utility";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent
} from "@material-ui/core";

// const url = "http://localhost:4000/api";
const url = "http://sungjin.herokuapp.com/api";



const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const Data = () => {
  const classes = useStyles();
  const [{ data, loading, err }, reFetch] = useAxios(url);

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error!!!</p>;
  if (data)
    return (
      <div>
        {/* <button onClick={reFetch}>refetch</button> */}
        <Link to="/">
          <button>Home</button>
        </Link>
        <br />
        <Grid container>
          {data.data.DATA.map(e => {
            return (
              <Card className={classes.root}>
                <CardContent>
                  <Typography>{Base64.decode(e.MF200_COMMENT)}</Typography>
                  <Typography>{Base64.decode(e.MF200_JADDR)}</Typography>
                  <Typography>{e.MF200_PHONE}</Typography>
                </CardContent>
              </Card>
            );
          })}
        </Grid>
      </div>
    );
};

export default Data;


const dummy = {
  MF200_MF201_IDX: 1,
  MF200_CENTER_IMAGE: "",
  MF200_ADDR: "M+y4tQ==",
  MF200_MF120_IDX: 1,
  MF200_AREA1: "7ISc7Jq4",
  MF200_FLAT: 50.0,
  MF200_AREA2: "6rCV64Ko6rWs",
  MF200_BIZ_NUM: "0",
  MF200_PHONE: "01033590701",
  MF200_IDX: 100,
  MF200_BIZ_IMAGE: "",
  MF200_JADDR: "7ISc7Jq4IOqwleuCqOq1rCDsi6Dsgqzrj5kgNjIwLTE=",
  MF200_FREE_YN: "N",
  MF200_OWNER_MOBILE: "01033590701",
  DISTANCE: "0",
  MF200_RADDR:
    "7ISc7Jq4IOqwleuCqOq1rCDslZXqtazsoJXroZwzNuq4uCAxMiA1MDEsIDUwMu2YuA==",
  MF200_DEL_YN: "N",
  MF200_REG_DT: "2020-01-07 19:34:35.0",
  MF200_TICKET_YN: "N",
  MF200_LATITUDE: "0.0",
  MF200_TICKET_PRICE: 10000,
  MF200_MF500_IDX: 1,
  MF200_M3: 165.0,
  MYDATE: "2020-01-07",
  MF200_MF202_IDX: 1,
  MF200_ZIPCODE: "12345",
  MF200_AREA3: "7Iug7IKs64+Z",
  MF200_MOD_DT: "2020-01-07 19:34:35.0",
  MF200_NM: "7ZWE65287YWM7Iqk7JeQ7Iqk",
  MF200_COMMENT: "7Jq064+Z7ZWY6riwIOyii+ydgCDtlYTrnbzthYzsiqQg7IS87YSw",
  MF200_MAIN_IMAGE: "",
  MF200_LONGITUDE: "0.0",
  MF200_OWNER_NM: "MA=="
};