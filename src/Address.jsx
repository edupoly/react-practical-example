import React from "react"
function Address(props,refs) {

  return (
    <div className="m-3 border border-2 p-3 bg-light rounded">
        <fieldset>
            <legend>Address:</legend>
            <label for="fname">Place:</label>
            <input type="text" id="fname" name="fname" ref={refs}/>
                <br /><br />
            <label for="lname">City:</label>
            <input type="text" id="lname" name="lname" />
                <br />
        </fieldset>
    </div>
  )
}

export default React.forwardRef(Address)