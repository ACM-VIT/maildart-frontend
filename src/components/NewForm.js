import React, { Fragment , useState} from 'react';
import PersonalDetails from './PersonalDetails';

const NewForm=()=>{

const [allDetails, setAllDetails]= useState({});

const onAddDetailsHandler=(details)=>{
  setAllDetails({...allDetails,...details});
  
  }

    return(
    <Fragment>
     <PersonalDetails addDetails={onAddDetailsHandler}/>
    </Fragment>
    );
}


export default NewForm;