import { useState } from "react";
export default function useInput(validation){
    const [enteredValue, setEnteredValue] = useState("");
    const [IsTouch, setIsTouch] = useState(false);
    const IsValid = validation(enteredValue);

    function handleChange(event){
        setEnteredValue(event.target.value);
    }

    function handleBlur(){
        setIsTouch(true);
    }
    return
    {
        handleChange,
        handleBlur,
        IsTouch,
        IsValid,
        enteredValue
    } 
}