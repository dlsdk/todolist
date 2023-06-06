import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Actions from '../redux/actions';
import style from "./modulecss/Todo.module.css"
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Todo(){

    const [selectedItems,setSelectedItems] = useState([]);
    const [check,setCheck] = useState({checked:false,allcheck:false });
    const dispatch = useDispatch();
    const content = useSelector(state => state.todoReducer.content);
    const filtcontent = useSelector(state=> state.todoReducer.filtcontent);
    const list = useSelector(state=> state.todoReducer.list);
    const buttonText = check.checked ? "Opt Out" : "Opt In";
  
  
    const handleCheck = (el) => {
      if (selectedItems.includes(el))
        setSelectedItems(selectedItems.filter((item) => item !== el))
      else
        setSelectedItems([...selectedItems,el])
    }

    const selectAll=() =>{
      if (check.allcheck) 
        setSelectedItems([]);
      else 
        setSelectedItems([...list.filter((item) => item.includes(filtcontent))]); 
      setCheck({...check,allcheck:!check.allcheck});
    }

    const giveup = () => {
      setCheck({...check,checked:!check.checked});
      if (check.allcheck)
      {
        setSelectedItems([]);
        setCheck((current) =>({
          ...current,
          allcheck:false,
          checked:false
        }));
      }
    }

    const sub = (e) =>{ 
      e.preventDefault(); 
      if (!content.trim()) 
          return;
      dispatch(Actions.todoActions.ADD_TO_LIST(content))
    }

    return (
      
        <div className='container'>
          <div className={style.title}>
            <h1>TODO LIST</h1><FontAwesomeIcon style={{color:"rgb(4, 110, 124);"}}  size='2x' icon={faCircleCheck} bounce />
          </div>
          <div className='list'>
            <form onSubmit={sub}>
              <div className='d-flex justify-content-between'>
                <div>
                  <input className={style.input_first}  value={content} onChange={(e) => dispatch(Actions.todoActions.ADD_TO_CONTENT(e.target.value))}></input>  
                  <button className={style.buttons} type='submit'>INCLUDE</button>
                </div>
                <div>
                  <label htmlFor='filter'>Filter </label>
                  <input className={style.input_first} id='filter' value={filtcontent} onChange={(e) => dispatch(Actions.todoActions.ADD_FILTER(e.target.value))}></input>
                </div>
              </div>
            </form>
            <div className='list-elements d-flex justify-content-center'>
              <ul style={{listStyleType: check.checked ? 'none' : 'disc'}}>
                {list.filter((el) => el.includes(filtcontent)).map((el, index) => (
                    <li key={index}>{check.checked &&
                      <input style={{marginRight:"1rem"}} onChange={() => handleCheck(el)} type="checkbox" checked={selectedItems.includes(el)} />}{el}
                    </li>
                ))}
              </ul>
            </div>
            <div className='d-flex justify-content-around'>
              { check.checked && 
                <>
                  <button className={style.buttons} disabled={list.length === 0} onClick={selectAll}>Select All</button>
                  <button className={style.buttons}  disabled={selectedItems.length === 0}  onClick={(e) => {dispatch(Actions.todoActions.DELETE_SELECTED(list.filter((el) => !selectedItems.includes(el)))); setSelectedItems([])}}>Delete Selected</button>
                </>
              }
                  <button className={style.buttons} onClick={giveup}>{buttonText}</button>
            </div>
          </div>
        </div>
      
    );
}