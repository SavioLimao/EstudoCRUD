import { BTN } from "../Button"
import { EditIcon } from "../Edit Icon"


export const Buttons = () => {
  const Plus = () => {
    console.log('plus')
  }
  const Edit = () => {
    console.log('Edit')
  }
  const Del = () => {
    console.log('Del')
  }



    return (
        <aside>
                <div className="Plus">
                  <BTN onClick={Plus}>
                    +
                  </BTN>
                </div>
                <div className="Edit">
                  <BTN onClick={Edit}>
                    <EditIcon />
                  </BTN>
                </div>
                <div className="Delete">
                  <BTN onClick={Del}>
                    -
                  </BTN>
                </div>
        </aside>
    )
}