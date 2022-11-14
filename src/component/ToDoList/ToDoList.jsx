import React,{useState,useEffect} from 'react';
import CheckAll from '../CheckALL/CheckAll';
import CheckList from '../CheckList/CheckList';
import './TodoList.css'

export default function ToDoList() {
  let [toDoList, setToDoList] = useState([]);
  let [totalAmount,setTotalAmount] = useState(toDoList.length);
  let [checkedAmount,setCheckedAmount] = useState(0);

  useEffect(() => {
    console.log(toDoList);
    setTotalAmount(toDoList.length);
  },[toDoList.length]);

  const changeCheckState = (id,checked) => {
    checked?setCheckedAmount(preState => preState + 1):setCheckedAmount(preState => preState - 1)
    setToDoList(toDoList.map(item => {
      // console.log(item.id,id,checked);
      if(item.id !== id) return item;
      else return {...item,checked:checked};
    }));
  }

  const pressBtnHandler = (btnCode,target) => {
    if(btnCode === 'Enter'){
      let newItem = {
        id:toDoList.length + 1,
        label:target.value,
        checked:false
      }
      setToDoList([newItem,...toDoList]);
      target.value = '';
    }
  }

  const checkAllHandler = (checked) => {
    if(checked){
      setToDoList(toDoList.map(item => ({...item,checked:true})));
      setCheckedAmount(totalAmount);
    }
    else{
      setToDoList(toDoList.map(item => ({...item,checked:false})));
      setCheckedAmount(0);
    }
  }

  const deleteItem = (id) => {
    for(let [index,item] of toDoList.entries()){
      if(item.id === id){;
        let resList = [...toDoList];
        resList.splice(index,1);
        setToDoList(resList);
        break;

        //错误的写法？？？？
        // let resList = [...toDoList].splice(index,1);
        // console.log(index,resList,[...toDoList]);
        // setToDoList(resList);
        // break;
      }
    }
  }

  return (
    <div className='toDoList'>
        <h2 className='title'>任务清单</h2>
        <div className = "listArea">
          <input type="text" placeholder='请输入你的任务名称，按回车键确认' className="addTask"
            onKeyDown={event => {pressBtnHandler(event.code,event.target)}}/>
          <CheckList toDoList = {toDoList} 
            changeCheckState = {changeCheckState} deleteItem = {deleteItem}/>
        </div>
        <CheckAll checkedAmount = {checkedAmount} 
          totalAmount = {totalAmount} checkAllHandler = {checkAllHandler}/>
    </div>
  )
}
