 import './item.css';

 function Item(props) {

    let {make, model, solidBody} = props;

    return (
       <div>
           <h2>{make}</h2>
           <p>{model}___{solidBody.toString()}</p>
       </div>
    );
}

export default Item;