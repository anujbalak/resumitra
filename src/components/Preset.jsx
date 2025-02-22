export default function Preset({ img, id, clickHandler }) {
  return (
    <div className="preset">
      <img src={img} alt="" onClick={clickHandler} id={id} />
    </div>
  );
}
