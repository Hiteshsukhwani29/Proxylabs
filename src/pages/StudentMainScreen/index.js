import React, { useEffect, useState } from 'react';
import LabDetails from '../../components/LabDetails';
import db from "../../firebase";
import { useSelector } from 'react-redux';

function Index() {

  const [Items, setItems] = useState([]);
  const [ActiveIndex, setActiveIndex] = useState(0);
  const [SubjectCode, setSubjectCode] = useState(null)

  const state = useSelector(state => state.t1);

  var TempList = [];
  var index = 0;

  const BatchRef = db
    .collection("curriculum")
    .doc(" nfQv08nR0Eh0FeCZBLY3S0AXCID2")
    .collection(state.user.course);

  console.log("from subject info",state.user.course);
  useEffect(() => {
    BatchRef.onSnapshot((ss) => {
      console.log(ss.docs.map((doc) => doc.data()));
      ss.docs.map((doc) => {
        // TempList.push(doc.data().name);
        // BatchRef.doc(doc.id)
        //   .collection("Lab")
        //   .onSnapshot((s) => {
        //     console.log(s.docs.map((doc) => doc.data()));
        //   });
        var name = doc.data().name;
        var subjectCode = doc.id;
        TempList.push({ name, index, subjectCode });
        index++;
      });
      setItems(TempList);

    });
    console.log(Items)
  }, []);

  return (
    <div className='flex flex-col mx-48 my-10'>
      <div className='font-semibold font-montserrat'>My Curriculum</div>
      
      <div className='flex mt-4'>
      {Items.map(({name,index,subjectCode}) => {
        return(
        <div className={`pr-7 ${ActiveIndex===index?'font-medium':'font-light'} hover:font-medium`} onClick={() => {setActiveIndex(index);setSubjectCode(subjectCode)}}>{name}</div>);
      })}
      </div>
      <LabDetails Course={state.user.course} SubjectCode={SubjectCode}/>
    </div>
  )
}

export default Index