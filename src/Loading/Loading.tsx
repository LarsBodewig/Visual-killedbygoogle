import "./Loading.css";

/* Credit: https://dribbble.com/shots/5092176-Newton-Loader */

export default function Loading() {
  return (
    <div className="gooey">
      <span className="dot"></span>
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
