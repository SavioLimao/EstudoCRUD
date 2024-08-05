import { BTN } from "../Button";
import { useState } from "react";
import { api } from "../../API/api";

export const PlusButton = () => {
    const AddRemedy = async () => {
        
    console.log("plus")
}
    return (
        <div className="Plus">
            <BTN onClick={AddRemedy}>
                +
            </BTN>
        </div>
    )

}