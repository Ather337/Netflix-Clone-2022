const center = (props) => {
  return (
    <div className={"text-center " + props.className}>{props.children}</div>
  );
};

export default center;
