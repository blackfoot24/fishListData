  /*FISHAPP
        FISHBOX
              FISHDATA-(get all fish) LOADER is being called in here.
                  FISHLIST-stateless function.
                      FISHCARD-stateless function
              TOGGLER-stateless function
        JUMBOTRON-stateless function

FISHFORM-stateless function being called in fish form.
LOADER is on its own. It is stateless function. It is not 
on the tree. It is being used in FISHLIST*/

var React = require('react');

function FishForm(props) {
    return (
     <div>
      <form onSubmit={ props.onSubmitFishToServer }>
        <h3> Enter New Fish </h3>
        <fieldset className="form-group">
          <label>name</label>
          <input onChange={props.onNameChange} value={props.fishName} type="text" className="form-control"/>
        </fieldset>

        <fieldset className="form-group">
          <label>color</label>
          <input onChange={props.onColorChange} value={props.color} type="text" className="form-control"/>
        </fieldset>

        <fieldset className="form-group">
          <label>length</label>
          <input onChange={props.onLengthChange} value={props.length} type="text" className="form-control"/>
        </fieldset>

        <fieldset className="form-group">
          <label>img src</label>
          <input onChange={props.onImageChange} value={props.onImageChange} type="text" className="form-control"/>
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="exampleSelect1">Man Eater?</label>
          <select onChange={ props.onPeopleEaterChange } className="form-control">
          <option>select</option>
          <option value={true}>yes</option>
          <option value={false}>no</option>
          </select>
        </fieldset>
        <button type="submit" className="btn btn-success-outline">Submit</button>
      </form>
      </div>
    )
};

module.exports = FishForm;