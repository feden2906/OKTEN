import './styleBox.css';

function CharBox(props) {
    console.log(props);
    let {title, image} = props;
    let cls = ['a', 'b', 'c'].join(' ');
    if (title === 'first block') {
        cls = 'a';
    }
    else if (title === 'second block') {
        cls = 'b';
    } else {
        cls = 'c';
    }

   return <div  className={cls}>
       <h3>{title}</h3>
       <img src={image} alt=""/>
    </div>;
}

export default CharBox;