import "./user.css"

export default function User({person, search}) {

  return (
    <div className={'user-wrapper'}>
        <div>
            <img src="https://unsplash.it/100" alt=""/>

        </div>
        {person.id}::
        {person.name}::
        {person.email}
      <button onClick={() => search(person.id)}>details</button>
    </div>
  );
}