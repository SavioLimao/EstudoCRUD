import { BTN } from "../Button"
import { EditIcon } from "../Edit Icon"
export const Buttons = () => {
    return (
        <aside>
                <div className="Plus">
                  <BTN>
                    +
                  </BTN>
                </div>
                <div className="Edit">
                  <BTN>
                    <EditIcon />
                  </BTN>
                </div>
                <div className="Delete">
                  <BTN>
                    -
                  </BTN>
                </div>
        </aside>
    )
}