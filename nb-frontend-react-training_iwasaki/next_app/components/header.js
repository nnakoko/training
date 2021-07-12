export default function Header(props) {
  return (
    <div>
      <h1 className="bg-promary px-3 text-white display-4 text-right">
        {props.header}
      </h1>
    </div>
  )
}