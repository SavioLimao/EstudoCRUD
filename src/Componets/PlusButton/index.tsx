import { BTN } from "../Button";
import { useState } from "react";
import { api } from "../../API/api";

export const PlusButton = () => {
    const plus = () => {

    console.log("plus")
}
    return (
        <div className="Plus">
            <BTN onClick={plus}>
                +
            </BTN>
        </div>
    )

}