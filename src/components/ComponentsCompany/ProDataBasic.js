import * as React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import CardSideContentClient from "../../controls/CardSideContentClient"

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  container:{

  }
});

export default function ProDataBasic(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* <div className={classes.container}> */}
        <Typography gutterBottom variant="body2">
          {"Ficha profesional"}
        </Typography>
        <CardSideContentClient
          text={props.currentAccount.firstName}
          referenceRequest={"firstName"}
          title={"Nombre de contacto"}
          palaceHolder={"Nombre de contacto"}
          request={props.requestUpdateAttribute}
        ></CardSideContentClient>
        <CardSideContentClient
          text={props.currentAccount.lastName}
          referenceRequest={"lastName"}
          title={"Apellidos de contacto"}
          palaceHolder={"Apellidos de contacto"}
          request={props.requestUpdateAttribute}
        ></CardSideContentClient>
        <CardSideContentClient
          text={props.currentAccount.puesto}
          referenceRequest={"puesto"}
          title={"Puesto de trabajo"}
          palaceHolder={"Puesto de trabajo"}
          request={props.requestUpdateAttribute}
        ></CardSideContentClient>
        <CardSideContentClient
          text={props.currentAccount.phone}
          referenceRequest={"phone"}
          title={"Telefono"}
          palaceHolder={"Telefono"}
          request={props.requestUpdateAttribute}
        ></CardSideContentClient>
        <CardSideContentClient
          text={props.currentAccount.email}
          referenceRequest={"email"}
          title={"Correo electronico"}
          palaceHolder={"Correo electronico"}
          request={props.requestUpdateAttribute}
          noEdit={true}
        ></CardSideContentClient>
        
      {/* </div> */}

    </React.Fragment>
  );
}
