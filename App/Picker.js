import React,{useState} from 'react'
import {Picker} from "native-base";

const PickerComponent = ({addCategoryHandler}) => {

  const[selected, setSelected]= useState("");

  const onValueChangeHandler=(value)=>{
    setSelected(value);
    addCategoryHandler(value);
  }

    return (
  
          <Picker
            note
            mode="dropdown"
            selectedValue={selected}
            onValueChange={onValueChangeHandler}
          >
            
            <Picker.Item label="Electronic Gadgets" value="Electronic Gadgets" />
            <Picker.Item label="Clothes" value="Clothes" />
            <Picker.Item label="Foods" value="Foods" />
            <Picker.Item label="Drinks" value="Drinks" />
            <Picker.Item label="Groceries" value="Groceries" />
            
          </Picker>
    )
}

export default PickerComponent
