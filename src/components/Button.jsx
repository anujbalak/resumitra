export default function Button({ name, url, target, btnEventHandler }) {
  return (
    <div className="button-container">
      <ButtonContent
        name={name}
        url={url}
        target={target}
        btnEventHandler={btnEventHandler}
      />
    </div>
  );
}

function ButtonContent({ name, url, target, btnEventHandler }) {
  if (url) {
    return (
      <button className="button" onClick={btnEventHandler}>
        <a href={url} target={target} tabIndex={-5}>
          {name}
        </a>
      </button>
    );
  } else {
    return (
      <button className="button" onClick={btnEventHandler}>
        {name}
      </button>
    );
  }
}
