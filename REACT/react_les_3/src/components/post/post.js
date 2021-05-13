export default function Post({item, findIdFunc}) {
  return (
    <div className={'post-box'}>
        <p>{item.body}</p>
        <button onClick={() => findIdFunc(item.id)}>details</button>
    </div>
  );
}